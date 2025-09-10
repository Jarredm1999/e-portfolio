import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  return portfolio.length > 0 ? (
    <div>
      <div className="justify-self-center">
        <Title>Projects</Title>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((project) => (
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              desc={project.desc}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    // Display when there are no portfolios
    <div>
      <div className="justify-self-center">
        <Title>Projects</Title>
      </div>
      <div className="justify-self-center">
        <p>No projects to display at this time...</p>
      </div>
    </div>
  );
}

export default Portfolio;
