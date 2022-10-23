const Products = ({ products }) => {
  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <strong>Price: {item.price}</strong>
          <p>{item.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Products;

export async function getStaticProps() {
  const products = await fetch("http://localhost:4000/products").then((res) =>
    res.json()
  );

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
