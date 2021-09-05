import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCurrentRepo, getCurrentContributors, getCurrentLanguages } from "../api/index";

function Card() {
  const { userName, repoName } = useParams();
  
  const [repo, setRepo] = useState({ owner: {} });
  const [contributors, setContributors] = useState([]);
  const [languages,setLanguages]=useState({})

  useEffect(() => {
    getCurrentRepo(repoName, setRepo);
    getCurrentContributors(repoName,setContributors)
    getCurrentLanguages(repoName,setLanguages)
  }, []);
  // console.log(repo);
 

  return (
    <div className="repos-item">
      <h3 className="repos-title">Name repo:{repo.name}</h3>
      <ul className="repos-description">
        <li>Nmber of stars:{repo.stargazers_count}</li>
        <li>Date of last commits:{repo.updated_at}</li>
        <li>Avatar link:{repo.owner.avatar_url}</li>
        <li>Number contributors:{contributors.map((c)=>c.contributions)} </li>
        <li>List of languages:HTML-{languages.HTML},CSS-{languages.CSS},JavaScript-{languages.JavaScript}</li>
      </ul>
     
    </div>
  );
}

export default Card;
