import { useEffect, useContext } from "react";
import Spinner from "../layout/spinner";
import UserItem from "./UserItem";
import { GithubContext } from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading } = useContext(GithubContext);
  console.log(GithubContext, users);

  if (loading) {
    return (
      <div className="loader">
        <Spinner />
        <h3 className="text-white">Loading</h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.length !== 0 ? (
        users.map((user) => <UserItem key={user.id} item={user} />)
      ) : (
        <div className="loader">
          <Spinner />
          <h3 className="text-white">Loading</h3>
        </div>
      )}
    </div>
  );
}

export default UserResults;
