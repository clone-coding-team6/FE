import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { CommentInput, CommentButton } from "../CommentInput";
import CommentDel from "../CommentDel";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",

    padding: "20px",
    backgroundColor: "white",
    overflow: "auto",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "1200",
  },
};

Modal.setAppElement("#root");

function MypageModal({ imageUrl }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const user = { username: "juaeworld_", profileImageUrl: "https://via.placeholder.com/30x30" };
  const [newCommentText, setNewCommentText] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleNewCommentTextChange(event) {
    setNewCommentText(event.target.value);
  }

  function handleCommentFormSubmit(event) {
    event.preventDefault();

    if (newCommentText !== "") {
      const newComment = { id: comments.length + 1, text: newCommentText, user: user };
      setComments([...comments, newComment]);
      setNewCommentText("");
    }
  }

  function handleCommentDelete(commentId) {
    setComments(comments.filter((comment) => comment.id !== commentId));
  }

  return (
    <div>
      <PostImgStyled src={imageUrl} onClick={openModal} />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <ModalContainer>
          <ModalImg src={imageUrl} />
          <ModalContent>
            <UserInfo>
              <ProfileImg src={user.profileImageUrl} />
              <Username>{user.username}</Username>
            </UserInfo>

            <CommentSection>
              <CommentList isEmpty={comments.length === 0}>
                {comments.length === 0 ? (
                  <div>
                    <h2>아직 댓글이 없습니다.</h2>
                    <h3>댓글을 남겨보세요</h3>
                  </div>
                ) : (
                  comments.map((comment) => (
                    <Comment key={comment.id}>
                      <CommentDel comment={comment} onDelete={handleCommentDelete} />
                    </Comment>
                  ))
                )}
                <CommentForm onSubmit={handleCommentFormSubmit}>
                  <CommentInput value={newCommentText} onChange={handleNewCommentTextChange} placeholder="댓글..." />
                  <CommentButton onClick={handleCommentFormSubmit}>게시</CommentButton>
                </CommentForm>
              </CommentList>
            </CommentSection>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </div>
  );
}

const PostImgStyled = styled.img`
  width: 300px;
  height: 300px; /* height를 300px으로 고정 */
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
const ModalImg = styled.img`
  width: 55%;
  height: auto;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 500px;
  width: 900px;
  padding: 30px;
  margin: -20px;
  background-color: #000000;
  color: white;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Username = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;

const CommentSection = styled.div`
  max-height: 400px;
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: row;
  margin-bottom: 0;
  margin-top: 10px;
`;

const CommentList = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.isEmpty ? "center" : "flex-start")};
  align-items: center;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 10px;
`;
const Comment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
`;

export default MypageModal;
