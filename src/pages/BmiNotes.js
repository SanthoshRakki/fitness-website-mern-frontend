import React, { useContext, useState } from 'react'
import Clock from '../components/Clock';
import Notes from '../components/Notes';
import DataContext from '../context/DataContext';

const BmiNotes = () => {
  const{ userData,setUserData,newNote,setNewNote,handleNotes,handleDelete} = useContext(DataContext);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('');
  const [feedBack, setFeedBack] = useState('');
 
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const roundedBmi = parseFloat(bmi.toFixed(2));
  let targetWeightLower;
  let targetWeightUpper;

  const handleFeedBack = async(e) => {
    e.preventDefault();

    if (roundedBmi < 18.5) {
      setStatus('Underweight');
      targetWeightLower = 18.5 * heightInMeters * heightInMeters;
      setFeedBack(
        `Underweight - Need to improve weight. Target weight: ${targetWeightLower.toFixed(2)} kg`
      );
    } else if (roundedBmi < 24.9) {
      setStatus('Normal (Healthy) Weight');
      setFeedBack('Normal weight - Healthy range');
    } else if (roundedBmi < 29.9) {
      setStatus('Overweight');
      targetWeightUpper = 24.9 * heightInMeters * heightInMeters;
      setFeedBack(
        `Overweight - Need to reduce weight. Target weight: ${targetWeightUpper.toFixed(2)} kg`
      );
    } else {
      setStatus('Obese');
      targetWeightUpper = 24.9 * heightInMeters * heightInMeters;
      setFeedBack(
        `Obese - Need to reduce weight. Target weight: ${targetWeightUpper.toFixed(2)} kg`
      );
      setWeight("");
      setHeight("")
      setAge("")
    }
    
  };
  return (
    <main className='bmiNotes' >
      <div>
        <div className='bmiCalcultor' >
          
          <br></br>
          <form onSubmit={handleFeedBack}>
          <h2>{"Understand Your Body Mass Index"}</h2>
            <label htmlFor='postWeight'>Weight</label>
            <input
              id='postWeight'
              type='number'
              required
              value={weight}
              placeholder='Enter your weight'
              onChange={(e) => setWeight(e.target.value)}
            />
            <br />

            <label htmlFor='postHeight'>Height</label>
            <input
              id='postHeight'
              type='number'
              required
              value={height}
              placeholder='Enter your height'
              onChange={(e) => setHeight(e.target.value)}
            />
            <br />

            <label htmlFor='postAge'>Age</label>
            <input
              id='postAge'
              type='number'
              required
              value={age}
              placeholder='Enter your age'
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <br />

            <button type='submit'>Submit</button>
          </form>
          <div className='bmi'>
          <h1>{status}</h1>
          <p>{feedBack}</p>
          </div>
        </div>
      </div>
      
      <div className='notesClock' >
      <div ><Clock /></div>
        <div ><Notes 
        userData={userData}
        setUserData={setUserData}
        newNote={newNote}
        setNewNote={setNewNote}
        handleNotes={handleNotes}
        handleDelete={handleDelete}
        /></div>
      </div>
    </main>
  )
}

export default BmiNotes