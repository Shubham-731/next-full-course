const News = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.title} | {article.category}
          </h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default News;

export async function getServerSideProps() {
  const news = await fetch("http://localhost:4000/news").then((res) =>
    res.json()
  );

  return {
    props: {
      articles: news,
    },
  };
}
