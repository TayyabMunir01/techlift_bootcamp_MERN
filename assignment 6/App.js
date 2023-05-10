import './App.css';
import { QueryClientProvider,QueryClient } from 'react-query';
import WeatherWithQueryClient from './components/WeatherWithQueryClient'


const queryClient1 = new QueryClient()


function App() {


  return(
    <QueryClientProvider client={queryClient1}>
      
      <WeatherWithQueryClient>

      </WeatherWithQueryClient>
      
    </QueryClientProvider>
  )

}


export default App;
