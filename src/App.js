import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./component/MainPage";
import './assets/css/main.css'
import {Helmet} from "react-helmet";

function App() {
  return (
      <>
      <Helmet>
      </Helmet>
    <MainPage/>
      </>
  );
}

export default App;
