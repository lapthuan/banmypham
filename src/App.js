import "./App.css";

import AllRoutes from "./AllRoutes";
import FinalNavbar from "./FinalNavbar/FinalNavbar";
// import HomePage from './Static-Pages/HomePage/HomePage'
import Footer from "./Static-Pages/Footer/Footer";
import Ileft from "./Components/Itop/Ileft";

function App() {
  return (
    <div className="App">
      <FinalNavbar />

      <AllRoutes />
      {/* <HomePage/> */}
      <Ileft /> 
      <Footer />
    </div>
  );
}

export default App;
