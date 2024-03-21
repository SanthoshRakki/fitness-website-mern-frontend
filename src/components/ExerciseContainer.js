import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ExerciseNav from '../components/ExerciseNav';
import ExerciseHome from '../components/ExerciseHome';
import ExerciseDetails from '../components/ExerciseDetails';

const ExerciseContainer = () => (
  <main
    width="600px"
    style={{
      width: '100%',
      margin: 'auto',
      fontFamily: 'Times New Roman', 
    }}
  >
    <ExerciseNav />
    <Routes>
      <Route path="/" element={<ExerciseHome />} />
      <Route path="/:id" element={<ExerciseDetails />} />
    </Routes>
  </main>
);

export default ExerciseContainer;
