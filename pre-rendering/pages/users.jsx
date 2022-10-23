import User from "../components/User";

const users = ({ users }) => {
  return (
    <>
      <h1>List of users</h1>

      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
};

export default users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}
