import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(Link)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  padding: 0 20px;
  cursor: pointer;
  height: 70%;
  :hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Span = styled.div`
  color: #fff;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.6s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ open }) => (open ? "100%" : "0")};
  z-index: ${({ open }) => (open ? "1000" : "-1000")};
`;

const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

const MobileMenuLink = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
            >
              <path
                d="M48 24.5C48 29.9369 46.1149 35.2055 42.6658 39.4083C39.2167 43.611 34.417 46.4878 29.0847 47.5485C23.7523 48.6091 18.2171 47.7881 13.4222 45.2252C8.62734 42.6623 4.86945 38.5161 2.78886 33.4931C0.70827 28.4701 0.433699 22.8811 2.01193 17.6783C3.59017 12.4756 6.92355 7.98103 11.4441 4.96048C15.9647 1.93993 21.3928 0.58027 26.8034 1.11317C32.2141 1.64608 37.2726 4.03857 41.117 7.883L38.5485 10.4515C35.2983 7.2013 31.0217 5.17862 26.4474 4.72808C21.8731 4.27755 17.284 5.42705 13.4622 7.98071C9.64035 10.5344 6.82221 14.3342 5.48792 18.7328C4.15364 23.1313 4.38577 27.8564 6.14476 32.103C7.90376 36.3496 11.0808 39.8549 15.1345 42.0217C19.1882 44.1884 23.8679 44.8826 28.376 43.9859C32.8842 43.0891 36.9419 40.657 39.8579 37.1039C42.7739 33.5508 44.3676 29.0965 44.3676 24.5H48Z"
                fill="white"
              />
              <path
                d="M16.0158 39.8059C12.4747 37.843 9.72374 34.7131 8.23167 30.9493C6.73959 27.1856 6.59871 23.0209 7.83302 19.1649C9.06733 15.3089 11.6005 12.0002 15.0008 9.80253C18.4011 7.60485 22.4583 6.65418 26.481 7.11251C30.5037 7.57084 34.243 9.4098 37.0618 12.3161C39.8807 15.2223 41.6046 19.0161 41.9398 23.0509C42.2751 27.0857 41.201 31.1119 38.9005 34.4436C36.6 37.7752 33.2155 40.2061 29.3236 41.3221L28.578 38.7219C31.8683 37.7784 34.7297 35.7233 36.6746 32.9066C38.6195 30.0899 39.5276 26.686 39.2442 23.2749C38.9607 19.8637 37.5033 16.6564 35.1201 14.1993C32.737 11.7423 29.5757 10.1876 26.1748 9.8001C22.7739 9.41262 19.3438 10.2163 16.4691 12.0743C13.5943 13.9323 11.4527 16.7296 10.4092 19.9895C9.36571 23.2495 9.48482 26.7704 10.7463 29.9524C12.0077 33.1344 14.3334 35.7806 17.3272 37.44L16.0158 39.8059Z"
                fill="white"
              />
              <path
                d="M24.5 12C27.392 12 30.1944 13.0027 32.4299 14.8374C34.6654 16.672 36.1957 19.225 36.7598 22.0614C37.324 24.8977 36.8873 27.842 35.524 30.3925C34.1608 32.9429 31.9554 34.9418 29.2836 36.0485C26.6118 37.1552 23.6389 37.3012 20.8715 36.4618C18.1041 35.6223 15.7133 33.8492 14.1067 31.4446C12.5 29.0401 11.7768 26.1528 12.0602 23.2748C12.3437 20.3968 13.6163 17.7061 15.6612 15.6612L17.0274 17.0274C15.2986 18.7562 14.2227 21.031 13.983 23.4642C13.7434 25.8973 14.3548 28.3383 15.7132 30.3712C17.0715 32.4041 19.0927 33.9031 21.4323 34.6128C23.772 35.3225 26.2854 35.1991 28.5442 34.2634C30.803 33.3278 32.6675 31.6379 33.8201 29.4817C34.9726 27.3254 35.3418 24.8363 34.8648 22.4383C34.3879 20.0404 33.0942 17.882 31.2042 16.3309C29.3143 14.7799 26.945 13.9321 24.5 13.9321L24.5 12Z"
                fill="white"
              />
              <path
                d="M17.0301 20.4442C17.9684 18.7159 19.477 17.3666 21.2987 16.6259C23.1204 15.8853 25.1426 15.7992 27.0206 16.3823C28.8987 16.9655 30.5165 18.1818 31.5983 19.824C32.6801 21.4662 33.159 23.4328 32.9535 25.3885C32.7479 27.3442 31.8706 29.1682 30.471 30.5496C29.0714 31.931 27.2361 32.7844 25.2778 32.9643C23.3195 33.1443 21.3594 32.6397 19.7315 31.5364C18.1036 30.4332 16.9086 28.7997 16.3501 26.9141L17.7273 26.5062C18.1914 28.0731 19.1845 29.4306 20.5373 30.3474C21.8901 31.2642 23.519 31.6836 25.1464 31.534C26.7737 31.3845 28.2989 30.6753 29.462 29.5273C30.6251 28.3794 31.3542 26.8636 31.525 25.2384C31.6958 23.6131 31.2978 21.9789 30.3988 20.6142C29.4998 19.2495 28.1554 18.2387 26.5947 17.7541C25.034 17.2695 23.3535 17.341 21.8396 17.9565C20.3258 18.572 19.0721 19.6933 18.2924 21.1295L17.0301 20.4442Z"
                fill="white"
              />
              <path
                d="M28.2197 27.0327C27.6337 27.8933 26.7675 28.5241 25.7687 28.8176C24.7698 29.1111 23.7001 29.0492 22.7417 28.6424C21.7834 28.2356 20.9958 27.5091 20.513 26.5867C20.0303 25.6643 19.8823 24.603 20.0943 23.5837C20.3063 22.5644 20.8652 21.6502 21.6757 20.9968C22.4862 20.3434 23.4982 19.9912 24.5393 20.0003C25.5803 20.0094 26.586 20.3791 27.385 21.0466C28.184 21.7141 28.7269 22.6379 28.921 23.6607L28.0934 23.8179C27.9356 22.9865 27.4944 22.2356 26.845 21.6931C26.1955 21.1506 25.3781 20.85 24.5319 20.8426C23.6858 20.8353 22.8632 21.1215 22.2044 21.6526C21.5456 22.1837 21.0914 22.9268 20.9191 23.7553C20.7467 24.5837 20.867 25.4463 21.2594 26.1961C21.6517 26.9458 22.2919 27.5363 23.0709 27.867C23.8498 28.1976 24.7193 28.2479 25.5312 28.0094C26.3431 27.7708 27.0471 27.2581 27.5234 26.5586L28.2197 27.0327Z"
                fill="white"
              />
              <path
                d="M23.7068 22.1292C24.2553 21.9457 24.8504 21.9581 25.3909 22.1642C25.9313 22.3702 26.3835 22.7574 26.6705 23.2595C26.9575 23.7617 27.0615 24.3478 26.9648 24.918C26.8681 25.4883 26.5767 26.0074 26.1402 26.3868C25.7037 26.7663 25.1491 26.9826 24.5709 26.999C23.9928 27.0154 23.4268 26.8309 22.9695 26.4768C22.5122 26.1227 22.1918 25.621 22.0629 25.0571C21.934 24.4933 22.0046 23.9022 22.2627 23.3846L23.1394 23.8217C22.9825 24.1365 22.9395 24.4959 23.0179 24.8388C23.0963 25.1817 23.2911 25.4868 23.5693 25.7022C23.8474 25.9175 24.1916 26.0297 24.5431 26.0198C24.8947 26.0098 25.232 25.8782 25.4975 25.6475C25.7629 25.4167 25.9402 25.101 25.999 24.7543C26.0578 24.4075 25.9945 24.051 25.82 23.7456C25.6454 23.4403 25.3704 23.2048 25.0418 23.0795C24.7131 22.9542 24.3512 22.9467 24.0176 23.0583L23.7068 22.1292Z"
                fill="white"
              />
              <circle
                cx="24.5"
                cy="24.5"
                r="0.5"
                transform="rotate(-180 24.5 24.5)"
                fill="white"
              />
            </svg>
            <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setOpen(!open)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <ButtonContainer>
            <GitHubButton href="https://github.com/RashadMa">
              Github
            </GitHubButton>
          </ButtonContainer>
        </NavItems>
      </NavbarContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileMenuLink href="#about">About</MobileMenuLink>
          <MobileMenuLink href="#skills">Skills</MobileMenuLink>
          <MobileMenuLink href="#experience">Experience</MobileMenuLink>
          <MobileMenuLink href="#projects">Projects</MobileMenuLink>
          <MobileMenuLink href="#education">Education</MobileMenuLink>
          <GitHubButton
            style={{
              padding: "10px 16px",
              background: `${theme.primary}`,
              color: "white",
              width: "max-content",
            }}
            href="https://github.com/RashadMa"
            target="_blank"
          >
            Github Profile
          </GitHubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
