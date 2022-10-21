import { useRouter } from "next/router";

const params = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  let element = "Docs home page";

  switch (params.length) {
    case 1:
      element = `docs of feature ${params[0]}`;
      break;

    case 2:
      element = `docs for concept ${params[1]} of feature ${params[0]}`;
      break;

    case 3:
      element = `Example ${params[2]} for concept ${params[1]} of feature ${params[0]}`;
      break;

    default:
      break;
  }

  return (
    <div>
      <h1>{element}</h1>
    </div>
  );
};
export default params;
