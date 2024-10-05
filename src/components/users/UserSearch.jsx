import { useState, useContext } from "react";
import { GithubContext } from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchusers } from "../../context/github/GithubActions";

function UserSearch() {
  const [text, settext] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setalert } = useContext(AlertContext);

  const handlechange = (e) => settext(e.target.value);

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setalert("error", "something went wrong");
    } else {
      dispatch({ type: "SET_LOADING" });

      const users = await searchusers(text);
      settext("");

      dispatch({ type: "GET_USERS", payload: users });
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handlesubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handlechange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => {
              dispatch({
                type: "CLEAR_USERS",
              });
            }}
            className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
