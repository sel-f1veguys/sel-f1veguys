import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MainView from "./components/main/Main";
import AnalyticsView from "./components/analytics/Analytics";
import CalenderView from "./components/calendarCheck/CalendarCheck.jsx"
import CampaignView from "./components/campaign/Campaign";
import MypageView from "./components/mypage/Mypage";
import TreeView from "./components/tree/Tree";
import Navbar from "./components/navbar/Navbar"; 
import Header from './components/header/Header';
import './App.css';

const App = () => {
  return (
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
  );
};

const AppContent = () => {
  // const location = useLocation();

  // 특정 경로에서 Header와 Navbar를 숨기기
  // const hideHeaderPaths = ['/login'];
  // const hideNavbarPaths = ['/login'];

  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="/analytics" element={<AnalyticsView />} />
      <Route path="/calendar" element={<CalenderView />} />
      <Route path="/campaign" element={<CampaignView />} />
      <Route path="/mypage" element={<MypageView />} />
      <Route path="/tree" element={<TreeView />} />
      </Routes>
      <Navbar />  
    </div>
  );
}

export default App;
