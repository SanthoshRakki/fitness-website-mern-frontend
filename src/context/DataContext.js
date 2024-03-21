import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch"
import baseURL from '../api/apipost';
import axios from "axios";

const DataContext = createContext({})

export const DataProvider = ({children})=>{
    const {proteinData,carboData,fatData,fiberData,vitaminData,mineralData,bgwInitialPlan,bgwPostPlan,blwInitialPlan,blwPostPlan,igwInitialPlan,igwPostPlan,ilwInitialPlan,ilwPostPlan,agwInitialPlan,agwPostPlan,alwInitialPlan,alwPostPlan,
        isLoading,fetchError} = useAxiosFetch();

    const [newNote, setNewNote] = useState([]); 
    const[protein, setProtein] = useState([])
    const[carbohydrates, setCarbohydrates] = useState([])
    const[fat, setFat] = useState([])
    const[fiber, setFiber] = useState([])
    const[Vitamin, setVitamin] = useState([])
    const[mineral, setMineral] = useState([])
    const[bgwIP, setBgwIP]= useState([])
    const[bgwPP, setBgwPP]= useState([])
    const[blwIP, setBlwIP]= useState([])
    const[blwPP, setBlwPP]= useState([])
    const[igwIP, setIgwIP]= useState([])
    const[igwPP, setIgwPP]= useState([])
    const[ilwIP, setIlwIP]= useState([])
    const[ilwPP, setIlwPP]= useState([])
    const[agwIP, setAgwIP]= useState([])
    const[agwPP, setAgwPP]= useState([])
    const[alwIP, setAlwIP]= useState([])
    const[alwPP, setAlwPP]= useState([])
    const[userData, setUserData] = useState(null)
    const [emailValue, setEmailValue] = useState('');
 
    useEffect(()=>{
           setProtein(proteinData)
           setCarbohydrates(carboData)
           setFat(fatData)
           setFiber(fiberData)
           setMineral(mineralData)
           setVitamin(vitaminData)
           setBgwIP(bgwInitialPlan)
           setBgwPP(bgwPostPlan)
           setBlwIP(blwInitialPlan)
           setBlwPP(blwPostPlan)
           setIgwIP(igwInitialPlan)
           setIgwPP(igwPostPlan)
           setIlwIP(ilwInitialPlan)
           setIlwPP(ilwPostPlan)
           setAgwIP(agwInitialPlan)
           setAgwPP(agwPostPlan)
           setAlwIP(alwInitialPlan)
           setAlwPP(alwPostPlan)
  

    },[proteinData, carboData,fatData,fiberData,mineralData,vitaminData,bgwInitialPlan,bgwPostPlan,blwInitialPlan,blwPostPlan,igwInitialPlan,igwPostPlan,ilwInitialPlan,ilwPostPlan,agwInitialPlan,agwPostPlan,alwInitialPlan,alwPostPlan])

    const email = JSON.parse(localStorage.getItem('email'));
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const res = await axios.get(`${baseURL}/getuser?email=${email}` );
          const  userData  =  res.data;
          setUserData(userData);
        } catch (err) {
          console.error('Error fetching data:', err);
        }
      };
      
      fetchUserData();
  }, [ email]);
  

  const handleNotes = async () => {
    try {
      const res = await axios.post(`${baseURL}/addnote`, {
        userId: userData._id, 
        content: newNote,
      });

      setUserData(res.data);

      setNewNote("");
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  
  const handleDelete = async (_id) => {
    try {
      const response = await axios.delete(`${baseURL}/deletenotes`, {
        data: {
          userId: userData._id,
          noteId: _id
        }
      });
  
      if (response.status === 200) {
        setUserData(response.data);
      } else {
        console.error("Note deletion failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };
    
    return(
        <DataContext.Provider value={{ newNote,setNewNote,protein,carbohydrates,fat,fiber,mineral,Vitamin,isLoading,fetchError,bgwIP,bgwPP,blwIP,blwPP,igwIP,igwPP,ilwIP,ilwPP,agwIP,agwPP,alwIP,alwPP,setUserData,userData,emailValue, setEmailValue,handleNotes,handleDelete}}>
            {children}
        </DataContext.Provider>
    )

}

export default DataContext