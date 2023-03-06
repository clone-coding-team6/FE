import React from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

const Username = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

const CommentText = styled.span`
  font-size: 12px;
`;

function CommentDel({ comment, onDelete }) {
  return (
    <CommentContainer>
      <ProfileImg src={comment.user.profileImageUrl} />
      <CommentContent>
        <Username>{comment.user.username}</Username>
        <CommentText>{comment.text}</CommentText>
        <DeleteButton onClick={() => onDelete(comment.id)}>삭제</DeleteButton>
      </CommentContent>
    </CommentContainer>
  );
}

const DeleteButton = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
  background-color: #fff;
  color: #e74c3c;
  border: 1px solid #e74c3c;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;

export default CommentDel;
