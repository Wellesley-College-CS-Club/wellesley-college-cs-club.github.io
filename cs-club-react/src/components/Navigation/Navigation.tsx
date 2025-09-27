import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div<{ $backgroundColor?: string }>`
  transition: background-color 0.2s linear;
  z-index: 99 !important;
  background-color: ${props => props.$backgroundColor || '#1a237e'};
  width: 100% !important;
  top: 0;
  position: fixed;
`;

const HeaderMenu = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

const MainMenu = styled.ul`
  background-color: transparent;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const MenuItem = styled.li`
  margin: 0 20px;
`;

const MenuLink = styled.a<{ $color?: string }>`
  font-size: 13px;
  line-height: 40px;
  color: ${props => props.$color || '#fff'};
  font-weight: 400;
  transition: color 0.2s linear;
  text-transform: uppercase;
  letter-spacing: 0.03cm;
  text-decoration: none;

  &:hover {
    color: #ee87a4;
  }
`;

const MobMenu = styled.div<{ $color?: string }>`
  display: none;
  color: ${props => props.$color || '#fff'};
  padding: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MenuWrapper $backgroundColor="#1a237e">
      <HeaderMenu>
        <MobMenu $color="#fff">MENU</MobMenu>
        <MainMenu>
          <MenuItem>
            <MenuLink
              href="#home"
              $color="#fff"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              href="#news"
              $color="#fff"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('news');
              }}
            >
              News
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              href="#resource"
              $color="#fff"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('resource');
              }}
            >
              Resource
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              href="#about"
              $color="#fff"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              href="#skills"
              $color="#fff"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}
            >
              QOW
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              href="#contact"
              $color="#fff"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </MenuLink>
          </MenuItem>
        </MainMenu>
      </HeaderMenu>
    </MenuWrapper>
  );
};

export default Navigation;