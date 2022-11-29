import { useState } from "react";
import data from "./data/data.json";
import "./JobListings.css";

const JobListings = () => {
  const [jobData, setJobData] = useState(data);

  return (
    <div className="container">
      {jobData.map(
        ({
          company,
          id,
          logo,
          featured,
          position,
          role,
          level,
          postedAt,
          contract,
          location,
          languages,
          tools,
          new: newAd,
        }) => {
          return (
            <div className="cardContainer" key={id}>
              <div className="jobCard">
                <div className="imageContainer cardContent">
                  <img src={logo} alt="" />
                </div>
                <div className="cardContent centerContent">
                  <div className="centerTitle">
                    <li className="cardListItem company">
                      {company}
                    </li>
                    <li
                      className={newAd ? "isNewAd" : "cardListItem"}
                    >
                      {newAd ? "New!" : ""}
                    </li>
                    <li
                      className={
                        featured ? "featured" : "cardListItem"
                      }
                    >
                      {featured ? "Featured" : ""}
                    </li>
                  </div>
                  <div className="centerBody">
                    <li className="cardListItem" position>
                      {position}
                    </li>
                  </div>
                  <div className="centerFoot">
                    <li className="cardListItem postedAt">
                      {postedAt}
                    </li>
                    <li className="cardListItem end contract">
                      {contract}
                    </li>
                    <li className="cardListItem end">{location}</li>
                  </div>
                </div>
                <div className="cardContent endContent">
                  <li>{role}</li>
                  <li>{level}</li>

                  {languages.map((lang, index) => (
                    <li key={index}>{lang}</li>
                  ))}

                  {tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default JobListings;
