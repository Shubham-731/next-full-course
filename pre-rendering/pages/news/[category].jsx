const ArticlesByCategory = ({ category, articles }) => {
  return (
    <div>
      <h2>
        Showing articles filtered by category <i>{category}</i>
      </h2>

      {articles.map((article) => (
        <div key={article.id}>
          <h4>{article.title}</h4>
          <p>{article.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ArticlesByCategory;

export async function getServerSideProps(context) {
  const {
    params: { category },
    req,
    res,
    query,
  } = context;

  res.setHeader("Set-Cookie", ["name=Shubham"]);
  console.log(req.headers.cookie);
  console.log(query);

  console.log("Rendering the news page...");

  const articles = await fetch(
    `http://localhost:4000/news?category=${category}`
  ).then((res) => res.json());

  return {
    props: {
      articles,
      category,
    },
  };
}
