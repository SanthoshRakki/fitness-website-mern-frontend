import React, { useState } from 'react'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../pages/Exercises'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'

const ExerciseHome = () => {
  
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  

  return (
    <Box>
        <HeroBanner />
        <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
         />
        <Exercises
         exercises={exercises}
         setExercises={setExercises}
         bodyPart={bodyPart}
         />
    </Box>
  )
}

export default ExerciseHome