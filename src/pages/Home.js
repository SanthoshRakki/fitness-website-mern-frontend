import React from 'react'


const Home = () => {
  
  return (
    <main className='home' >
      
      <h1>{"Transform Your Body, Transform Your Life!"}</h1>
      <h2>{"Discover the Ultimate Fitness Experience"}</h2>
      <p>"Get Started Today"</p>
      <div className='features'>
        <div className='feature'>
          <h2>Fitness Charts</h2>
          <p>Access beginner, intermediate, and advanced fitness charts for weight gain and weight loss.</p>
        </div>
        <div className='feature'>
          <h2>Nutritional Charts</h2>
          <p>Explore nutritional charts for various foods to fuel your workouts and achieve your goals.</p>
        </div>
        <div className='feature'>
          <h2>Exercise Library</h2>
          <p>Discover over 1500+ exercises with workout gifs and YouTube links for guidance.</p>
        </div>
        <div className='feature'>
          <h2>BMI Calculator</h2>
          <p>Check your BMI to monitor your fitness progress and set realistic goals.</p>
        </div>
        <div className='feature'>
          <h2>Workout Timer</h2>
          <p>Optimize your workouts with a convenient timer for better accessibility.</p>
        </div>
        <div className='feature'>
          <h2>Workout Notes</h2>
          <p>Access personalized workout plans tailored to your fitness level and goals.</p>
        </div>
      </div>
    </main>
  )
}

export default Home