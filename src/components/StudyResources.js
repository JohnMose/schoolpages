import React from 'react';
import './StudyResources.css';
const StudyResources = () => {
  // Placeholder study resources (you can replace this with actual data from a backend or API)
  const studyResources = [
    { id: 1, title: 'Mathematics - Practice Problems', description: 'A collection of math practice problems.' },
    { id: 2, title: 'History Notes', description: 'Comprehensive history notes for exams.' },
    { id: 3, title: 'Physics - Formulas Sheet', description: 'Important physics formulas for quick reference.' },
  ];

  return (
    <div className="study-resources-container">
      <h1>Study Resources</h1>
      {studyResources.map((resource) => (
        <div key={resource.id} className="study-resource-card">
          <h2>{resource.title}</h2>
          <p>{resource.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StudyResources;
