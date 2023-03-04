import { useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Navbar';

const Main = () => {
  const [isCreate, setIsCreate] = useState(false);

  const handleAddPost = () => {
    setIsCreate(true);
    document.body.style.overflow = 'hidden';
  };
    
    return <Nav onClickAddPost={handleAddPost} />;
  };
  
  export default Main;

  
  