import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const apiService = axios.create({
    baseURL: API_BASE_URL,
  });
  
  export const fitnessApi = {
    getNotesContent: ()=> apiService.get('/getnotes'),
    getProteinContent: () => apiService.get('/getprotein'),
    getCarboContent: () => apiService.get('/getcarbo'),
    getFatContent: () => apiService.get('/getfat'),
    getFiberContent: () => apiService.get('/getfiber'),
    getVitaminContent: () => apiService.get('/getvitamin'),
    getMineralContent: () => apiService.get('/getmineral'),
    getbgwInitialPlanContent: ()=> apiService.get('/getbgwinitialplan'),
    getbgwPostPlanContent: ()=> apiService.get('/getbgwpostplan'),
    getblwInitialPlanContent : ()=> apiService.get('/getblwinitialplan'),
    getblwPostPlanContent: ()=> apiService.get('/getblwpostplan'),
    getigwInitialPlanContent: ()=> apiService.get('/getigwinitialplan'),
    getigwPostPlanContent: ()=> apiService.get('/getigwpostplan'),
    getilwInitialPlanContent: ()=> apiService.get('/getilwinitialplan'),
    getilwPostPlanContent : ()=> apiService.get('/getilwpostplan'),
    getagwInitialPlanContent: ()=> apiService.get('/getagwinitialplan'),
    getagwPostPlanContent: ()=> apiService.get('/getagwpostplan'),
    getalwInitialPlanContent : ()=> apiService.get('/getalwinitialplan'),
    getalwPostPlanContent : ()=> apiService.get('/getalwpostplan')
  };
  