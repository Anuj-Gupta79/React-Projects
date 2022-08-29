import React,{useState} from 'react';
import Tour from './Tour';
import Loading from './Loading';
import Data from './Data';

function App() {
  const [loading,setLoading] = useState(true);
  const [tour,setTour] = useState([]);

  const fetchTours = async()=>{
    setLoading(true);

    try {
      setLoading(false);
      setTour(Data);

    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  
  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }
}

export default App;
