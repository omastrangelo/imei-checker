
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-router-dom';
import NavBar from './Components/NavBar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TableInfo from './Components/TableInfo';
import Create from './Components/Create';
import Edit from './Components/Edit';
import './index.css'
function App() {
  //const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route  path="/" element={<TableInfo/>}/>
      <Route  path="/create" element={<Create/>}/>
      <Route  path="/edit/:id" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
