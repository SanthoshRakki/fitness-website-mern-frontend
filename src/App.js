import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import NutrionalChart from "./pages/NutrionalChart";
import Footer from "./pages/Footer";
import FitnessChart from "./components/FitnessChart";
import ExerciseContainer from "./components/ExerciseContainer";
import BmiNotes from "./pages/BmiNotes";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRouter from "./pages/ProtectedRouter";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <DataProvider>
        <Routes>
        <Route element={<ProtectedRouter/>}>
          <Route path="/" element={<Home />} />
          <Route path="nutrionalchart" element={<NutrionalChart />} />
          <Route path="exercise/*" element={<ExerciseContainer />} />
          <Route path="fitnesschart" element={<FitnessChart />} />
          <Route path="bmi" element={<BmiNotes />} />
        </Route>
         
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </DataProvider>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
