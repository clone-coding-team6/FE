import Comment from './Comment';

const CommentList = ({ commentList }) => {
  return (
    <>
      {commentList.map((comments,id) => (
        <Comment key={id} comments={comments} />
      ))}
    </>
  );
};

export default CommentList;
