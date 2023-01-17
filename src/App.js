import './style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import GetNewsList from './components/GetNewsList';
import GetNewsCategoryList from "./components/GetNewsCategoryDetails";
import Footer from './components/Footer';
import NewDetails from './components/NewDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
  <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<GetNewsList/>}/>
          <Route  path="/:category" element={<GetNewsCategoryList/>}/>
          <Route  path="/details" element={<NewDetails />}/>
        
        </Routes>
        <Footer />
        
    </Router>

  )
}

export default App;


