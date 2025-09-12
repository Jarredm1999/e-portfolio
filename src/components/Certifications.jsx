import React from "react";
import Title from "./Title";
import certifications from "../data/certifications";
import CertificationItem from "./CertificationItem";

function Certifications() {
  return (
    <div id="projects" className="scroll-mt-15 mt-3">
      <div className="justify-self-center">
        <Title>Certifications</Title>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((certification) => {
            <CertificationItem
              logo={certification.logo}
              name={certification.name}
            />
          })}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
