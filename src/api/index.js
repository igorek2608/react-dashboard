export const getRepos = () =>
  fetch("https://api.github.com/users/Archakov06/repos").then((response) =>
    response.json()
  );

export const getReposPage = (currentPage) =>
  fetch(
    `https://api.github.com/users/Archakov06/repos?&per_page=10&page=${currentPage}`
  ).then((response) => response.json());

export const getReposInfo = (username, reponame) =>
  fetch(
    `https://api.github.com/users/Archakov06/repos/${username}/${reponame}`
  ).then((response) => response.json());

export const getSearchResults = (search) =>
  fetch(
    `https://api.github.com/users/Archakov06/repos?q=${search}&per_page=10`
  ).then((response) => response.json());

export const getCurrentRepo = async (repoName, setRepo) => {
  let response = await fetch(
    `https://api.github.com/repos/Archakov06/${repoName}`
  );
  let data = await response.json();
  setRepo(data);
  console.log(data);
};

export const getCurrentContributors = async (repoName, setContributors) => {
  let response = await fetch(
    `https://api.github.com/repos/Archakov06/${repoName}/contributors`
  );
  let data = await response.json();
  setContributors(data);
  console.log(data);
};

export const getCurrentLanguages = async (repoName, setLanguages) => {
  let response = await fetch(
    `https://api.github.com/repos/Archakov06/${repoName}/languages`
  );
  let data = await response.json();
  setLanguages(data);
  console.log(data);
};