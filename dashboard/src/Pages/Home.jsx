import { ToastContainer } from "react-toastify";
import Dashboard from "../components/Dashboard";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;