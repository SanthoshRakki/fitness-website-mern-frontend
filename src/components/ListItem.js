const ListItem = ({goal, level,bgwIP,bgwPP,blwIP,blwPP,igwIP,igwPP,ilwIP,ilwPP,agwIP,agwPP,alwIP,alwPP}) => {
    const handleWorkout = (goal, level) => {
        if (level === 'beginner' && goal === 'weightGain') {
          return bgwIP;
        }else if (level === 'beginner' && goal === 'weightLoss') {
            return blwIP;
          }else if (level === 'intermediate' && goal === 'weightGain') {
            return igwIP;
          }else if (level === 'intermediate' && goal === 'weightLoss') {
            return ilwIP;
          }else if (level === 'advance' && goal === 'weightGain') {
            return agwIP;
          }else if (level === 'advance' && goal === 'weightLoss') {
            return alwIP;
          }
        return [];
      };
      const handlePostWorkout = (goal, level)=>{
        if (level === 'beginner' && goal === 'weightGain') {
            return bgwPP;
          }else if (level === 'beginner' && goal === 'weightLoss') {
              return blwPP;
            }else if (level === 'intermediate' && goal === 'weightGain') {
              return igwPP;
            }else if (level === 'intermediate' && goal === 'weightLoss') {
              return ilwPP;
            }else if (level === 'advance' && goal === 'weightGain') {
              return agwPP;
            }else if (level === 'advance' && goal === 'weightLoss') {
              return alwPP;
            }
          return [];
        };

      
      const workout = handleWorkout(goal, level);
      const postWorkout = handlePostWorkout(goal, level)

        return (
        <div className="listItem" >
            <div>
          {workout.map((item) => (
            <div key={item._id}>
              <h1>{item.head}</h1>
              <ul>
                {item.list.map((listItem, index) => (
                  <li key={index}>{index+1}: {listItem}</li>
                ))}
              </ul>
            </div>
          ))}
           </div>
           <div>{postWorkout.map((item) => (
            <div key={item._id}>
              <h1>{item.workout}</h1>
              <ul>
                {item.Days.map((listItem, index) => (
                  <li key={index}>{index+1}: {listItem}</li>
                ))}
              </ul>
            </div>
          ))}
           </div>

        </div>
        
      );
    };
export default ListItem