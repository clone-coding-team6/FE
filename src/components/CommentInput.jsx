import React from "react";
import styled from "styled-components";

function CommentInput({ value, onChange, placeholder, onSubmit }) {
  function handleKeyPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSubmit();
    }
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyPress={handleKeyPress}
      />
      <CommentButton type="submit" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: none;
  width: 250px;
  background-color: #fffdfd;
`;

const CommentButton = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

export { CommentInput, CommentButton };
