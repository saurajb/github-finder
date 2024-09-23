import { useEffect, useState } from "react";

function UserResults() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setdata(data);
    setloading(false);
  };

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {data.map((item) => (
        <h3 key={item.id}>{item.login}</h3>
      ))}
    </div>
  );
}

export default UserResults;
