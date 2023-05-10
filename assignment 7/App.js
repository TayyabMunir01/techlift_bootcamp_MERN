import './App.css';
import Sum from './assignment 7/Sum'
import Difference1 from './assignment 7/Difference1'
import Division from './assignment 7/Division'
import Box from '@mui/material/Box';

function App() {

  console.log('app rerenderd')

  return(
    <>
      <h1>useRef and Rerendering</h1>
      <Box sx={{m:1}}> <Sum></Sum>  </Box> 
      <Box sx={{m:1}}><Difference1></Difference1></Box>
      <Box sx={{m:1}}><Division></Division></Box>      
      
    </>
  )

}


export default App;
