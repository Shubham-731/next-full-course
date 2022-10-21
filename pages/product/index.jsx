import Link from "next/link";

const index = ({ productId = "jeans" }) => {
  return (
    <div>
      <h1>Product list</h1>
      <ul>
        <li>
          <Link href="/product/product1">
            <a>Product 1</a>
          </Link>
        </li>
        <li>Product 2</li>
        <li>Product 3</li>
        <li>
          <Link href={`/product/${productId}`}>
            <a>Product {productId}</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default index;
