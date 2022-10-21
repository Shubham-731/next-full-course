import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div>
      <h1>Reviews of the product {productId}</h1>
    </div>
  );
};

export default index;
