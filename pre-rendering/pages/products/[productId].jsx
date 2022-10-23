const Product = ({ product }) => {
  return (
    <div>
      <h2>
        {product.id}: {product.title}
      </h2>
      <hr />
      <p>{product.description}</p>
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          productId: "1",
        },
      },
      {
        params: {
          productId: "2",
        },
      },
      {
        params: {
          productId: "3",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const product = await fetch(
    `http://localhost:4000/products/${params.productId}`
  ).then((res) => res.json());

  return {
    props: {
      product,
    },
  };
}
