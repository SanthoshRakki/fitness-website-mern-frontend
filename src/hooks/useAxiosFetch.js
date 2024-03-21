import  { useEffect, useState } from 'react';
import { fitnessApi } from '../api/posts';
import axios from 'axios';

const useAxiosFetch = ( ) => {
  const [proteinData, setProteinData] = useState([]);
  const [carboData, setCarboData] = useState([]);
  const [fatData, setFatData] = useState([]);
  const [fiberData, setFiberData] = useState([]);
  const [vitaminData, setVitaminData] = useState([]);
  const [mineralData, setMineralData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [bgwInitialPlan, setBgwInitialPlan] = useState([]);
  const [bgwPostPlan, setBgwPostPlan] = useState([]);
  const [blwInitialPlan, setBlwInitialPlan] = useState([]);
  const [blwPostPlan, setBlwPostPlan] = useState([]);
  const [igwInitialPlan, setIgwInitialPlan] = useState([]);
  const [igwPostPlan, setIgwPostPlan] = useState([]);
  const [ilwInitialPlan, setIlwInitialPlan] = useState([]);
  const [ilwPostPlan, setIlwPostPlan] = useState([]);
  const [agwInitialPlan, setagwInitialPlan] = useState([]);
  const [agwPostPlan, setAgwPostPlan] = useState([]);
  const [alwInitialPlan, setAlwInitialPlan] = useState([]);
  const [alwPostPlan, setAlwPostPlan] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async () => {
        setIsLoading(true);
      try {
        const [proteinResponse, carboResponse, fatResponse, fiberResponse, vitaminResponse, mineralResponse,agwInitialPlanResponse,agwPostPlanResponse,alwInitialPlanResponse,alwPostPlanResponse,bgwInitialPlanResponse,bgwPostPlanResponse,blwInitialPlanResponse,blwPostPlanResponse,igwInitialPlanResponse,igwPostPlanResponse,ilwInitialPlanResponse,ilwPostPlanResponse] =
          await Promise.all([
            fitnessApi.getProteinContent(),
            fitnessApi.getCarboContent(),
            fitnessApi.getFatContent(),
            fitnessApi.getFiberContent(),
            fitnessApi.getVitaminContent(),
            fitnessApi.getMineralContent(),
            fitnessApi.getagwInitialPlanContent(),
            fitnessApi.getagwPostPlanContent(),
            fitnessApi.getalwInitialPlanContent(),
            fitnessApi.getalwPostPlanContent(),
            fitnessApi.getbgwInitialPlanContent(),
            fitnessApi.getbgwPostPlanContent(),
            fitnessApi.getblwInitialPlanContent(),
            fitnessApi.getblwPostPlanContent(),
            fitnessApi.getigwInitialPlanContent(),
            fitnessApi.getigwPostPlanContent(),
            fitnessApi.getilwInitialPlanContent(),
            fitnessApi.getilwPostPlanContent()
          ],{
            cancelToken: source.token
        });
          if(isMounted){
            setProteinData(proteinResponse.data);
            setCarboData(carboResponse.data);
            setFatData(fatResponse.data);
            setFiberData(fiberResponse.data);
            setVitaminData(vitaminResponse.data);
            setMineralData(mineralResponse.data);
            setAgwPostPlan(agwPostPlanResponse.data);
            setagwInitialPlan(agwInitialPlanResponse.data);
            setAlwInitialPlan(alwInitialPlanResponse.data);
            setAlwPostPlan(alwPostPlanResponse.data);
            setBgwInitialPlan(bgwInitialPlanResponse.data);
            setBgwPostPlan(bgwPostPlanResponse.data);
            setBlwInitialPlan(blwInitialPlanResponse.data);
            setBlwPostPlan(blwPostPlanResponse.data);
            setIgwInitialPlan(igwInitialPlanResponse.data);
            setIgwPostPlan(igwPostPlanResponse.data);
            setIlwInitialPlan(ilwInitialPlanResponse.data);
            setIlwPostPlan(ilwPostPlanResponse.data)

            setFetchError(null)

        }

        
      } catch (error) {
        if(isMounted){
            setFetchError(error.message);
            setProteinData([]);
            setCarboData([]);
            setFatData([]);
            setFiberData([]);
            setVitaminData([]);
            setMineralData([]);
            setBgwInitialPlan([]);
            setBgwPostPlan([]);
            setBlwInitialPlan([]);
            setBlwPostPlan([]);
            setIgwInitialPlan([]);
            setIgwPostPlan([]);
            setIlwInitialPlan([]);
            setIlwPostPlan([]);
            setagwInitialPlan([]);
            setAgwPostPlan([]);
            setAlwInitialPlan([]);
            setAlwPostPlan([]);
            
        }
      } finally {
        isMounted && setTimeout(()=>setIsLoading(false),0);
      }
    };

    fetchData();
    // console.log(proteinData);

    const cleanUp = ()=>{
        isMounted = false;
        source.cancel();
    }
    return cleanUp;
  }, []);
  // console.log(notes)

  // Render your components or use the data as needed
  return {proteinData,carboData,fatData,fiberData,vitaminData,mineralData,bgwInitialPlan,bgwPostPlan,blwInitialPlan,blwPostPlan,igwInitialPlan,igwPostPlan,ilwInitialPlan,ilwPostPlan,agwInitialPlan,agwPostPlan,alwInitialPlan,alwPostPlan,
    isLoading,fetchError};
};

export default useAxiosFetch;
