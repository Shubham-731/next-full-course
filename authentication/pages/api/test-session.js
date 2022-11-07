import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const session = await getSession({ req });
  console.log(session);

  if (!session) {
    res.status(401).json({ status: 401, msg: "Unauthorized", session });
  } else {
    res
      .status(200)
      .json({ status: 200, msg: "Successfully made request", session });
  }
};

export default handler;
