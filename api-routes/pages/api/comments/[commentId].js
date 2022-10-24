import comments from "../../../data/comments";

function handler(req, res) {
  const { commentId } = req.query;

  if (req.method === "GET") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    comments.splice(index, 1);

    res.status(200).json(comment);
  } else if (req.method === "PATCH") {
    const { textToUpdate } = req.body;
    console.log(textToUpdate);

    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    comment["text"] = textToUpdate;
    console.log(comment);

    res.status(200).json(comment);
  }
}

export default handler;
