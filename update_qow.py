# script to update question of the week
import re, random, sys
from datetime import date
from leetscrape import GetQuestionsList, GetQuestion

# 1. Get the full list and keep only free questions
ls = GetQuestionsList()
ls.scrape()
df = ls.questions
free = df[df["paidOnly"] == False]

# 2. Skip questions you've already used
try:
    used = set(open("used_qow.txt", encoding="utf-8" ).read().split())
except FileNotFoundError:
    used = set()
candidates = free[~free["titleSlug"].isin(used)]["titleSlug"].tolist()

# 3. Pick one. Seeding by year+week means re-running in the same week gives the same question
year, week, _ = date.today().isocalendar()
rng = random.Random(f"{year}-{week}")
rng.shuffle(candidates)

# 4. Scrape, and if something goes wrong (premium slipped through, fetch failed), try the next one
q = None
for slug in candidates[:10]:
    try:
        attempt = GetQuestion(titleSlug=slug).scrape()
    except Exception as e:
        print(f"Skipping {slug}: {e}")
        continue
    if attempt.isPaidOnly or not attempt.Body:
        print(f"Skipping {slug}: premium or empty body")
        continue
    q = attempt
    break

if q is None:
    sys.exit("No usable question found")

# 5. Fill the template and update the page
hint = q.Hints[0] if q.Hints else "Think about what you could store to avoid re-scanning the input."
url = f"https://leetcode.com/problems/{q.titleSlug}/description/"

html = (open("qow_template.html", encoding="utf-8").read()
        .replace("{{PROBLEM}}", q.Body)
        .replace("{{HINT}}", hint)
        .replace("{{URL}}", url)
        .replace("{{TITLE}}", q.title))

page = open("index.html", encoding="utf-8").read()
page = re.sub(r"<!-- QUESTION_OF_THE_WEEK_START -->.*?<!-- QUESTION_OF_THE_WEEK_END -->",
              lambda _: f"<!-- QUESTION_OF_THE_WEEK_START -->\n{html}\n<!-- QUESTION_OF_THE_WEEK_END -->",
              page, flags=re.S)
open("index.html", "w", encoding="utf-8").write(page)

# 6. Remember it so it never repeats
with open("used_qow.txt", "a", encoding="utf-8") as f:
    f.write(q.titleSlug + "\n")

print(f"Question of the Week: {q.title} ({q.difficulty})")