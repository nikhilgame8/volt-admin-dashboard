import "./App.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Home from "./components/Home";
import Auth from "./components/Auth/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import AllPolls from "./components/All Polls/AllPolls";
import Layout from "./components/Navbar/Layout";
import ViewInsights from "./components/ViewInsights/ViewInsights";
import CreatePoll from "./components/Create_Poll/CreatePoll";
import Loader from "./components/UI/Loader";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [loader, setLoader] = useState(true);
  const [pollName , setPollName] = useState('')

  const isAuthRoute = location.pathname === "/login";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handlePollTitle = (title) =>{
    console.log(title)
    setPollName(title)
  }

  const getPollTitle = () =>{
    return pollName
  }
  // console.log(isAuthRoute)
  return (
    <div>
      {!isAuthRoute && <Layout getPollTitle={pollName}/>}
      <Loader/>
      <Routes>
        <Route path="/login" element={<Auth type="login" />} />
        {/* <Route element={<Layout/>}> */}
        <Route path="/" element={<Home loader={loader} pollName={pollName}/>} />
        <Route path="/polls" element={<AllPolls loader={loader}/>} />
        <Route path="/create-poll" element={<CreatePoll loader={loader} handlePollTitle={handlePollTitle}/>} />
        <Route path="/view-insights" element={<ViewInsights loader={loader}/>} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
