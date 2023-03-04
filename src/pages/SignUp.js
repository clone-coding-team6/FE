import { useState, useEffect } from 'react';
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { ReactComponent as IconLogo } from '../assets/icon/icon-logo.svg';
import { colors } from '../assets/theme/theme';
import { signup } from "./../api/axios";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const Signup = () => {

  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [signupVal, setSignupVal] = useState({
    useremail: '',
    nickname: '',
    password: '',
  });
  const { useremail, nickname, password } = signupVal;
  
  const [emailIcon, setEmailIcon] = useState(null);
  const [nicknameIcon, setNicknameIcon] = useState(null);
  const [passwordIcon, setPasswordIcon] = useState(null);


  
  const regNickname = /^[ㄱ-ㅎ|가-힣A-Za-z0-9]{2,10}$/; //한글, 영어 대소문자, 숫자로 이루어진 문자열 중 길이가 2 이상 10 이하
  const regPassword = /^[a-zA-Z0-9\\d`~!@#$%^&()-_=+]{8,24}$/; //대소문자, 숫자, 특수문자( `~!@#$%^&()-_=+)로 이루어진 문자열 중 길이가 8 이상 24 이하

  const { mutate } = useMutation(signup, {
    onSuccess: (response) => {
      if (response) {
        signupVal({ useremail: "", nickname: "", password: "" }); 
        alert("회원가입 성공!");
        navigate("/");
      }
    },
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
     if (name === 'useremail') {
      
      if (!value.includes("@")) {
        setEmailIcon(<CloseCircle color="red" />);
      } else {
        setEmailIcon(<CheckCircle color="green" />);
      }
    }

    if (name === 'nickname') {
      
      if (!regNickname.test(value)) {
        setNicknameIcon(<CloseCircle color="red" />);
      } else {
        setNicknameIcon(<CheckCircle color="green" />);
      }
    }

    if (name === 'password') {
      
      if (!regPassword.test(value)) {
        setPasswordIcon(<CloseCircle color="red" />);
      } else {
        setPasswordIcon(<CheckCircle color="green" />);
      }
    }
    setSignupVal({ ...signupVal, [e.target.name]: e.target.value });
  };

  const onSignupHandle = async (e) => {
    e.preventDefault();

    mutate(signupVal);
  };

  useEffect(() => {
    if (useremail !== '' && nickname !== '' && password.length > 3 && useremail.includes("@")) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [signupVal]);

  return (
    <SignupContainer>
      <SignupBox >
        <LogoBox>
          <IconLogo />
        </LogoBox>
        <SignupText>친구들의 사진과 동영상을 보려면 가입하세요</SignupText>
        <InputBox>
        <ButtonWrapper>
          <Input
            placeholder='이메일 주소'
            name='useremail'
            value={useremail}
            onChange={handleChange}
          />
          {emailIcon}
        </ButtonWrapper>
        <ButtonWrapper>
          <Input
            placeholder='사용자 이름'
            name='nickname'
            value={nickname}
            onChange={handleChange}
          />
          {nicknameIcon }
        </ButtonWrapper>
        <ButtonWrapper>
          <Input
            placeholder='비밀번호'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
          {passwordIcon}
        </ButtonWrapper>
          <ErrorMsg>{errorMsg}</ErrorMsg>
          {/* {errorMsg !== '' ? (
            <ErrorMsg>{errorMsg}</ErrorMsg>
          ) : null} */}
          <SignupButton type='submit' disabled={disabledBtn} onClick={onSignupHandle}>
            가입
          </SignupButton>
        </InputBox>
      </SignupBox>
      <LoginBox>
        이미 계정이 있으신가요?{' '}
        <span onClick={() => navigate('/')}>로그인</span>
      </LoginBox>
    </SignupContainer>
  );
};

export default Signup;

const SignupContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SignupBox = styled.form`
  background-color: white;
  width: 350px;
  border: 1px solid ${colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 36px;
`;

const InputBox = styled.div`
  margin-left: 5px;
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  position: relative;
  border: none;
  outline: 1px solid ${colors.border};
  width: 500px;
  height: 30px;
  margin-bottom: 8px;
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
  background: #fafafa;
  &:focus {
    outline: 1px solid #adadad;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  
  width: 250px;
`;

const SignupButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  width: 250px;
  height: 30px;
  margin-top: 40px;
  &:disabled {
    background-color: #b2dffc;
  }
`;

const LogoBox = styled.div`
  width: 175px;
  height: 51px;
  margin-top: 36px;
  margin-bottom: 12px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const SignupText = styled.div`
  width: 200px;
  text-align: center;
  font-size: 17px;
  line-height: 20px;
  font-weight: bold;
  color: ${colors.text};
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  width: 250px;
  word-break: keep-all;
`;

const LoginBox = styled.div`
  background-color: white;
  width: 310px;
  padding: 20px;
  border: 1px solid ${colors.border};
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: ${colors.primary};
    margin-left: 4px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const CloseCircle = styled(AiOutlineCloseCircle)`
  position: relative;
  right: 20px;
  font-size: 36px;
  bottom: 2px;
`;

const CheckCircle = styled(AiOutlineCheckCircle)`
  position: relative;
  right: 20px;
  bottom: 2px;
  font-size: 36px;
`;

