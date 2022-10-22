import { useRouter } from "next/router";

const reviewProduct = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <div>
      <h1>
        Review {reviewId} of product {productId}
      </h1>
    </div>
  );
};
export default reviewProduct;
