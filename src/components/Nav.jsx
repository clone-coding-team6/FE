<<<<<<< HEAD:src/components/Navbar/index.js
import { ReactComponent as Logo } from "../../assets/icon/icon-logo.svg";
import { ReactComponent as IconHome } from "../../assets/icon/icon-home.svg";
import { ReactComponent as IconAdd } from "../../assets/icon/icon-add.svg";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// import defaultImg from '../assets/img/img-profile.jpg';
// import Layout from '../Layout/Layout';
import styled from "styled-components";
// import SearchBox from './SearchBox';
import { colors } from "../../assets/theme/theme";
import { useNavigate } from "react-router-dom";
=======
import { ReactComponent as Logo } from '../assets/icon/icon-logo.svg';
import { ReactComponent as IconHome } from '../assets/icon/icon-home.svg';
import { ReactComponent as IconAdd } from '../assets/icon/icon-add.svg';
import { Row, Col } from 'react-bootstrap';
import defaultImg from '../assets/img/img-profile.jpg';
import Layout from '../Layout/Layout';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import { colors } from '../theme/theme';
import { useNavigate } from 'react-router-dom';
>>>>>>> 09e3ed26f2ad47e06f658253ad9fd324eada7a2f:src/components/Nav.jsx

const Nav = ({ onClickAddPost }) => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <Layout>
        <LayoutRow>
          <Col>
            <Logo onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
          </Col>
          <Col>
            <SearchBox />
          </Col>
          <NavCol>
            <IconContainer onClick={() => navigate("/")}>
              <IconHome />
            </IconContainer>
            <IconContainer>
              <IconAdd onClick={onClickAddPost} />
            </IconContainer>
<<<<<<< HEAD:src/components/Navbar/index.js
            <IconContainer onClick={() => navigate("/myfeed")}>
              <img alt="프로필사진" />
=======
            <IconContainer onClick={() => navigate('/myfeed')}>
              <img src={defaultImg} alt='프로필사진' />
>>>>>>> 09e3ed26f2ad47e06f658253ad9fd324eada7a2f:src/components/Nav.jsx
            </IconContainer>
          </NavCol>
        </LayoutRow>
      </Layout>
    </NavContainer>
  );
};

<<<<<<< HEAD:src/components/Navbar/index.js
export default Navbar;

const MyContainer = styled(Container)`
  max-width: 975px;
`;
=======
export default Nav;

>>>>>>> 09e3ed26f2ad47e06f658253ad9fd324eada7a2f:src/components/Nav.jsx
const NavContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 60px;
  border: 1px solid ${colors.border};
  background-color: white;
`;

const LayoutRow = styled(Row)`
  margin-top: 16px;
  height: 100%;
`;

const LogoContainer = styled.div``;

const NavCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  cursor: pointer;

  img {
    width: 100%;
  }

  & + & {
    margin-left: 22px;
  }
`;
