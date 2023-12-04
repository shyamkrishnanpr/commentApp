import React, { useState } from "react";

import Comment from "./Comment";

const Post = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {

    if (newComment.trim() !== "") {
      setComments([...comments, { text: newComment, replies: [] }]);
      setNewComment("");

     
    }
  };

  return (
    <>
      <div style={{ alignContent:"center", maxWidth: '600px', margin: '50px ', padding: '20px', border: '1px solid gray' }}>
      <h2 style={{ marginBottom: '20px' }}>Its Shyam's Birthday</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addComment();
        }}
      >
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          style={{ width: '70%', padding: '10px' }}
        />
        <button type="submit" style={{ width: '50%', padding: '10px' }}>Add Comment</button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <strong>Comments:</strong>
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} addReply={(text) => comment.replies.push({ text, replies: [] })} />
        ))}

      </div>
    </div>

    
    </>
  );
};

export default Post;
