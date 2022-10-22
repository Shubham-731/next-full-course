import { useRouter } from "next/router";

const filter = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  /**
   * params 1 - brand
   * params 2 - price
   * params 3 - rating
   */
  let element = "No filters applied!";
  switch (params.length) {
    case 1:
      element = `Filters: Brand ${params[0]}`;
      break;

    case 2:
      element = `Filters: Brand ${params[0]}, Price ${params[1]}`;
      break;

    case 3:
      element = `Filters: Brand ${params[0]}, Price ${params[1]}, Rating ${params[2]}`;
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

export default filter;
