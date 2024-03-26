import React, { useState } from 'react';
import studentsData from './studentsData.json';
import SearchBar from './SearchBar'; // Ensure you import the SearchBar component
import { motion } from 'framer-motion';

const StudentCard = ({ name, textSnippet, imageUrl }) => (
    <motion.div className="card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{textSnippet}</p>
    </motion.div>
  );

const StudentsGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="students-gallery">
        {filteredStudents.length > 0 ? (
          filteredStudents.map(student => (
            <StudentCard key={student.id} student={student} />
          ))
        ) : (
          <p>No students found.</p>
        )}
      </div>
    </div>
  );
};

export default StudentsGallery;
