
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from './Pages/LoginPage/LoginPage';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import CreateAccountPage from './Pages/CreateAccountPage/CreateAccountPage';
import UserProfilePage from './Pages/userProfile/UserProfilePage';
import SalesPage from './Pages/SalesPage/SalesPage';
import RecommendationsPage from './Pages/RecommendationsPage/RecommendationsPage';
import ArticleTipsPage from "./Pages/ArticleTipsPage/ArticleTipsPage";
import MusicPage from "./Pages/MusicPage/MusicPage";
import JobsPage from "./Pages/JobsPage/JobsPage";
 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<CreateAccountPage />} />
        <Route path="/userprofile" element={<UserProfilePage />} />
        <Route path="/createaccount" element={<CreateAccountPage />} />

        <Route path="/sales" element={<SalesPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/articletips" element={<ArticleTipsPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Routes>
    </div>
  );
}

export default App;
