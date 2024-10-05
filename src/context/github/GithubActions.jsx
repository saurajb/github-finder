// env variables
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;

// search users from github
export const searchusers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const { items } = await response.json();

  return items;
};

// get single user profile info
export const getuser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status === "404") {
    window.location = "/notfound";
  } else {
    const data = await response.json();
    return data;
  }
};

// get user repos
export const getUserRepos = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};
