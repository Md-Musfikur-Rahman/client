import React, { useState } from "react";

const internshipPrograms = [
  {
    id: 1,
    title: "Program 1",
    description: "This is the description for Program 1.",
    duration: "3 months",
  },
  {
    id: 2,
    title: "Program 2",
    description: "This is the description for Program 2.",
    duration: "6 months",
  },
  {
    id: 3,
    title: "Program 3",
    description: "This is the description for Program 3.",
    duration: "4 months",
  },

  {
    id: 4,
    title: "Program 4",
    description: "This is the description for Program 4.",
    duration: "3 months",
  },
  {
    id: 5,
    title: "Program 5",
    description: "This is the description for Program 5.",
    duration: "3 months",
  },
  {
    id: 6,
    title: "Program 6",
    description: "This is the description for Program 6  .",
    duration: "3 months",
  },
];

function InternshipProgram() {
  const [expandedProgramId, setExpandedProgramId] = useState(null);

  const handleProgramClick = (programId) => {
    if (expandedProgramId === programId) {
      setExpandedProgramId(null);
    } else {
      setExpandedProgramId(programId);
    }
  };

  return (
    <div>
      <h2 className="text-center mt-4">Internship Program</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card mt-4">
              <div className="card-body">
                <h5 className="card-title">Available Programs</h5>
                <ul className="list-group">
                  {internshipPrograms.map((program) => (
                    <li
                      key={program.id}
                      className={`list-group-item ${
                        expandedProgramId === program.id ? "active" : ""
                      }`}
                      onClick={() => handleProgramClick(program.id)}
                    >
                      <h6>{program.title}</h6>
                      {expandedProgramId === program.id && (
                        <>
                          <p>{program.description}</p>
                          <p>Duration: {program.duration}</p>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternshipProgram;
