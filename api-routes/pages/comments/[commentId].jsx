import comments from "../../data/comments";

const Comment = ({ comment }) => {
  return (
    <div>
      <h3>
        {comment.id}: {comment.text}
      </h3>
    </div>
  );
};

export default Comment;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { commentId: "1" },
      },
      {
        params: { commentId: "2" },
      },
      {
        params: { commentId: "3" },
      },
      {
        params: { commentId: "4" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { commentId },
  } = context;

  // ***** SHOULD NOT CALL OWN API ROUTES FOR PRE-RENDERING
  /* const comment = await fetch(
    `http://localhost:3000/api/comments/${commentId}`
  ).then((res) => res.json()); */

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  return {
    props: {
      comment,
    },
  };
}
