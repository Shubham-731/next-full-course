import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  async function fetchComments() {
    const comments = await fetch("http://localhost:3000/api/comments").then(
      (res) => res.json()
    );

    setComments(comments);
  }

  async function postComment() {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    fetchComments();
  }

  async function updateComment(commentId, commentText) {
    const textToUpdate = prompt("Edit comment", commentText);

    const updatedComment = await fetch(`/api/comments/${commentId}`, {
      method: "PATCH",
      body: JSON.stringify({ textToUpdate }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    console.log(updatedComment);

    fetchComments();
  }

  async function deleteComment(commentId) {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    fetchComments();
    console.log(data);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={postComment}>Submit comments</button>
      </div>

      <button onClick={fetchComments}>Populate comments</button>

      <div>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>
                {comment.id}: {comment.text}
              </p>
              <button onClick={() => updateComment(comment.id, comment.text)}>
                Update
              </button>
              <button onClick={() => deleteComment(comment.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
