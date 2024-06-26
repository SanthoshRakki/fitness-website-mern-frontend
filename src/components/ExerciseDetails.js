import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOption, fetchData, youtubeoptions } from '../api/RapidApi'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideo, setExerciseVideo] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const {id} = useParams();


  useEffect(()=>{
    const fetchExerciseData = async()=>{
      const exerciseDburl = 'https://exercisedb.p.rapidapi.com';

      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDburl}/exercises/exercise/${id}`,exerciseOption)
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeoptions);
      setExerciseVideo(exerciseVideosData.contents)

      const targetMusclExercisesData = await fetchData(`${exerciseDburl}/exercises/target/${exerciseDetailData.target}`, exerciseOption)
      setTargetMuscleExercises(targetMusclExercisesData)

      const equipmentExercisesData = await fetchData(`${exerciseDburl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOption)
      setEquipmentExercises(equipmentExercisesData)
    }
    fetchExerciseData();

  },[id])

  return (
    <Box>
        <Detail exerciseDetail={exerciseDetail}/>
        <ExerciseVideos 
        exerciseVideo={exerciseVideo}
         name={exerciseDetail.name} />
        <SimilarExercises targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetails