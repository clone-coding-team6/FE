import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <MyContainer>{children}</MyContainer>;
};

export default Layout;

const MyContainer = styled(Container)`
  max-width: 975px;
`;
