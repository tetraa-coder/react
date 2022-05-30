import React, { useState } from 'react'
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import {useDispatch} from "react-redux" ;
import { loadPokemons , deletePokemon , addPokemon} from '../redux/actions';

const AddPokemon = () => {
    const [state, setState] = useState({
        name: "",
        type: "",
        base: "",
       
    });

const [error, setError] = useState("") ;

    let history = useHistory();
    let dispatch = useDispatch() ;
    const {name, type, base} = state;
    const handleInputChange = (e) => {
        let {name, value} = e.target;
setState({ ...state, [name]: value });

    };
    const handleSubmit = (e) => {
        e.preventDefault() ;
        if(!name || !type || !base ){
            setError("please input all input field") ;
        } else {
dispatch(addPokemon(state));
history.push("/");
setError("");
        }
    };
    return (
        <div>
                        <Button style={{width: "250px"}}variant="contained" color="primary" onClick={() => history.push("/")} >Go Back</Button>

            <h2>
            AddPokemon
            </h2>
            {error && <h3 style={{ color: "blue" }}>{error}</h3>}
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
  
      <TextField id="standard-basic" label="Name" variant="standard" value={name} type="text" name="name"  onChange={handleInputChange} />
      <br />
            <TextField id="standard-basic" label="Type" variant="standard" value={type} name="type" type="text" onChange={handleInputChange} />
            <br />
            <TextField id="standard-basic" label="Base" variant="standard" value={base} type="number" name="base"  onChange={handleInputChange} />
            
            <br />
            <Button style={{width: "250px"}}variant="contained" color="secondary" type="submit" onChange={handleInputChange} >Add Pokemmon</Button>
    </Box>
        </div>
    )
}

export default AddPokemon