import React from 'react';
import StudentCard from './StudentCard';

const Deck = ({ students }) => (
  <div className="deck">
    {students.map(student => <StudentCard key={student.id} {...student} />)}
  </div>
);

export default Deck;