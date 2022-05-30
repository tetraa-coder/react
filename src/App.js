import logo from './logo.svg';
import './App.css';
import  {Switch, Route} from "react-router-dom";
import {Routes} from 'react-router-dom'; 
import Home from "./pages/Home" ;
import AddPokemon from './pages/AddPokemon';
import EditPokemon  from './pages/EditPokemon';

function App() {
  return (
    <div className="App">
     
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/addPokemon" component={AddPokemon} />
       <Route exact path="/editPokemon/:id" component={EditPokemon} />

     </Switch>
     
    </div>
  );
}

export default App;
