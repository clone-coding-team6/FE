import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useCookies } from "react-cookie";
import styled from 'styled-components';
import loginImg from './../assets/img/img-login.png';
import { ReactComponent as IconLogo } from '../assets/icon/icon-logo.svg';
import { colors } from '../assets/theme/theme';
import { login } from "./../api/axios";




const Login = () => {

    const navigate = useNavigate();
    const [_, setCookie] = useCookies(["Access-Token"]);
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
    const [disabledBtn, setDisabledBtn] = useState(true);
  
    const { mutate } = useMutation(login, {
      onSuccess: (response) => {
        if (response) {
          sessionStorage.setItem("nickname", response.data.nickname);
          setCookie("Access-Token", response?.headers.authorization.substr(7));
          alert("로그인 성공!");
          navigate("/");
        }
      },
    });
  
    const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
    };
  
    const onSubmitHandler = async (e) => {
      e.preventDefault();  
      mutate(user);
      setUser({ user: "", password: "" });
    };

    useEffect(() => {
      if (user.email.trim() === "" || user.password.trim() === "") {
        setDisabledBtn(false);
      } else {
        setDisabledBtn(true);
      }
    }, [user]);
    
      return (
        <LoginContainer>
          <Wrap>
            <LoginImg src={loginImg} alt='로그인이미지' />
            <div>
              <LoginBox>
                <LogoBox>
                  <IconLogo />
                </LogoBox>
                <Input
                  placeholder='사용자 이메일'
                  type='text'
                  name='email'
                  value={user.email || ""}
                  onChange={onChangeHandler}
                />
                <Input
                  placeholder='비밀번호'
                  type='password'
                  name='password'
                  value={user.password || ""}
                  onChange={onChangeHandler}
                />
                <LoginButton disabled={disabledBtn} onClick={onSubmitHandler}>
                  로그인
                </LoginButton>
                {/* {errorMsg !== '' ? (
                  <ErrorMsg>{errorMsg}</ErrorMsg>
                ) : null} */}
                <ErrorMsg>s</ErrorMsg>
              </LoginBox>
    
              <SignupBox>
                <p>계정이 없으신가요?</p>
                <SignupButton onClick={() => navigate('/signup')}>
                  가입하기
                </SignupButton>
              </SignupBox>
            </div>
          </Wrap>
        </LoginContainer>
      );
    };
  
  
  export default Login;




  const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginImg = styled.img`
  width: 350px;
  height: 536px;
  margin-right: 30px;
  img {
    width: 100%;
  }
`;

const Wrap = styled.div`
  display: flex;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 350px;
  height: 320px;
  border: 1px solid #eee;
  /* margin: 0 auto; */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  outline: 1px solid ${colors.border};
  width: 250px;
  height: 40px;
  margin-bottom: 7px;
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
  background: #fafafa;
  &:focus {
    outline: 1px solid #adadad;
  }
`;

const LoginButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  width: 250px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
  &:disabled {
    background-color: #b2dffc;
  }
`;

const SignupBox = styled.div`
  background-color: white;
  width: 350px;
  height: 80px;
  border: 1px solid #eee;
  margin-top: 20px;
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoBox = styled.div`
  width: 175px;
  height: 51px;
  margin-bottom: 36px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const SignupButton = styled.button`
  border: none;
  background: none;
  font-weight: bold;
  color: ${colors.primary};
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  width: 250px;
  word-break: keep-all;
`;

