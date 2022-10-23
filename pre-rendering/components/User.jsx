const User = ({ user }) => {
  return (
    <ol key={user.id}>
      <li>
        <b>{user.name}</b>
      </li>
      <li>{user.email}</li>
    </ol>
  );
};

export default User;
