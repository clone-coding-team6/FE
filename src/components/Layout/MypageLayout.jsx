import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import Sidebar from "../Navbar/Sidebar";
import MypageModal from "../Modal/MypageModal";

const MypageLayout = () => {
  const [posts, setPosts] = useState([
    {
      postId: 1,
      imageList: "https://img.seoul.co.kr//img/upload/2023/02/02/SSC_20230202065007_V.jpg",
      postLikeCount: 10,
      commentList: 5,
    },
    {
      postId: 2,
      imageList:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F020%2F2022%2F10%2F25%2F0003458220_001_20221025135701071.jpg&type=a340",
      postLikeCount: 5,
      commentList: 2,
    },
    {
      postId: 3,
      imageList:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5809%2F2020%2F09%2F21%2F0000002895_002_20200921090938169.jpg&type=a340",
      postLikeCount: 8,
      commentList: 3,
    },
    { postId: 4, imageList: "https://via.placeholder.com/300x300", postLikeCount: 2, commentList: 1 },
    { postId: 5, imageList: "https://via.placeholder.com/300x300", postLikeCount: 12, commentList: 4 },
    { postId: 6, imageList: "https://via.placeholder.com/300x300", postLikeCount: 7, commentList: 2 },
    { postId: 7, imageList: "https://via.placeholder.com/300x300", postLikeCount: 3, commentList: 1 },
    { postId: 8, imageList: "https://via.placeholder.com/300x300", postLikeCount: 6, commentList: 2 },
    { postId: 9, imageList: "https://via.placeholder.com/300x300", postLikeCount: 9, commentList: 3 },
  ]);

  return (
    <>
      <Sidebar />
      <MyPageWrapper>
        <ProfileWrapper>
          <ProfileImg src="https://via.placeholder.com/100x100" />

          <ProfileInfoWrapper>
            <ProfileName>Juaeworld_</ProfileName>
            <ProfileFollow>
              <span>게시물12</span> <span>팔로워 10</span>
              <span>팔로우 10</span>
            </ProfileFollow>
            <Usernick>주애(32)</Usernick>
          </ProfileInfoWrapper>
        </ProfileWrapper>
        <Separator />

        <PostWrapper>
          {posts.map((post) => (
            <MypageModal key={post.postId} imageUrl={post.imageList} />
          ))}
        </PostWrapper>
      </MyPageWrapper>
    </>
  );
};
export default MypageLayout;

//////////////////////스타일컴포넌트///////////////////////////////

//마이페이지전체
const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #000; /* 바탕색 검정색으로 변경 */
  color: #fff; /* 글씨색 밝은색으로 변경 */
`;

//프로필영역

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 80px;
  position: relative; /* 상위 위치 설정 */
`;

//프로필사진
const ProfileImg = styled(FaUserCircle)`
  width: 150px;
  height: 150px;
  color: #fff; /* 아이콘 색 밝은색으로 변경 */
  background-color: #000; /* 아이콘 바탕색 검정색으로 변경 */
  position: absolute; /* 절대 위치 설정 */
  top: 50%; /* 상위 위치를 중앙으로 지정 */
  left: -230px; /* 좌측 위치 지정 */
  transform: translateY(-50%); /* 수직 중앙 정렬 */
`;

//프로필소개
const ProfileInfoWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
  font-size: 100px;
`;

//계정명
const ProfileName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

//상태박스
const ProfileFollow = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;

  span {
    color: #ffffff;
    font-size: 20px;
    margin-right: 15px;
  }
`;

const Usernick = styled.div`
  font-size: 16px;
  color: #ffffff;
  margin-top: 10px;
`;

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 30px;
`;

const PostImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Separator = styled.hr`
  margin: 40px 0;
  border: none;
  border-bottom: 2px solid #88848476;
  width: 950px;
`;
