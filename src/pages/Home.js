import  React, {useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelection, useSelector } from 'react-redux';
import { loadPokemons , deletePokemon} from '../redux/actions';
import { useState } from "react";
import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein){
  return { name, calories, fat, carbs, protein };
}
 
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const Home = () => {
  let dispatch = useDispatch();
  let history = useHistory() ;
 const { pokemons } = useSelector(state => state.data)
  var test = 10 ;
 useEffect(() => {
    dispatch(loadPokemons());
  }, []);
  
  const handleDelete = (id) => {
    if(window.confirm("are you sure wanted todelete the pokemon?")) {
      
      dispatch(deletePokemon(id));
     }
    
    };
  return (
    <div>
      <div>      <Button variant="contained" color="secondary" onClick={() => history.push("/addPokemon")}>Add Pokemmon</Button>
 </div>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Base</StyledTableCell>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons && pokemons.map((pokemon) => (
             
            <StyledTableRow key={pokemon.id}>
              <StyledTableCell  component="th" scope="row">
                {pokemon.name["english"]}
                
                <StyledTableCell align="center" component="th" scope="row">
                {pokemon.name["french"]}
                
                <StyledTableCell align="center" component="th" scope="row">
                {pokemon.name["japanese"]}
              </StyledTableCell>
             
              </StyledTableCell>
              </StyledTableCell>
             
              <StyledTableCell align="center">{pokemon.type[0]}
              <StyledTableCell align="center">{pokemon.type[1]}
              </StyledTableCell>
              </StyledTableCell>
              
              
              <StyledTableCell align="center">{pokemon.base["HP"]}</StyledTableCell>
              <StyledTableCell align="center">
            if(pokemon.id {'<'} 10) {

             <StyledTableCell> <div> <img alt="pokemon" style={{width: "100px"}} src={`http://localhost:3000/00${pokemon.id}.png`}/></div> </StyledTableCell>
            }
               if(pokemon.id {'>='} 10){

<StyledTableCell> <div> <img alt="pokemon" style={{width: "100px"}} src={`http://localhost:3000/0${pokemon.id}.png`}/></div> </StyledTableCell>
}

if(pokemon.id {'>='} 100){

<StyledTableCell> <div> <img alt="pokemon" style={{width: "100px"}} src={`http://localhost:3000/${pokemon.id}.png`}/></div> </StyledTableCell>
}

</StyledTableCell>
              <StyledTableCell align="center">
                <StyledTableCell align="center">
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button color="primary" onClick={() => handleDelete(pokemon.id)}>Delete</Button>
  <Button color="secondary" onClick={() => history.push(`/editPokemon/${pokemon.id}`)}>Edit</Button>

</ButtonGroup>
                </StyledTableCell>
              </StyledTableCell>
            </StyledTableRow>
            
          ))
          
          }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
     
  )
        
}

export default Home