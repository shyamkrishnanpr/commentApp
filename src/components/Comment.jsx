import React, { useState } from 'react';

const Comment = ({ comment, addReply }) => {
  const [newReply, setNewReply] = useState('');

  const addNestedComment = () => {
    if (newReply.trim() !== '') {
      addReply(newReply);
      setNewReply('');
    }
  };

  return (
    <div style={{ marginLeft: '20px', marginTop: '10px', padding: '10px', border: '1px solid #ccc' }}>
      <p style={{ marginBottom: '5px' }}>{comment.text}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addNestedComment();
        }}
      >
        <input
          type="text"
          value={newReply}
          onChange={(e) => setNewReply(e.target.value)}
          placeholder="Reply ..."
          style={{ marginRight: '5px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px' }}>Reply</button>
      </form>
      {comment.replies && comment.replies.length > 0 && (
        <div style={{ marginTop: '10px', marginLeft: '10px', borderLeft: '2px solid #ccc', paddingLeft: '10px' }}>
          <strong>Replies:</strong>
          {comment.replies.map((reply, index) => (
            <Comment key={index} comment={reply} addReply={(text) => reply.replies.push({ text, replies: [] })} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
