import React from 'react';
import { motion } from 'framer-motion';

const StudentCard = ({ name, textSnippet, imageUrl }) => (
  <motion.div className="card">
    <img src={imageUrl} alt={name} />
    <h2>{name}</h2>
    <p>{textSnippet}</p>
  </motion.div>
);

export default StudentCard;