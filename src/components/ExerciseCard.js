import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" style={{ marginBottom: '10px' }} /> 
      <Stack direction="row">
        <Button sx={{ ml: '21px', color: '#fff', background: '#5b886e', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: '#fff', background: '#6e6b6b', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px" color="#fff" fontWeight="bold" mt="11px"  textTransform="capitalize" fontSize="22px" style={{ textDecoration: 'none' }} 
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
