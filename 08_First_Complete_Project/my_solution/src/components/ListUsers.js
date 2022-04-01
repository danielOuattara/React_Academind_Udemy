function ListUsers({ allUsers }) {
  return (
    <div className="users-list">
      {allUsers.map((user) => {
        const { username, age, id } = user;
        return (
          <p className="user-data" key={id}>
            {username} ({age} years old)
          </p>
        );
      })}
    </div>
  );
}

export default ListUsers;
