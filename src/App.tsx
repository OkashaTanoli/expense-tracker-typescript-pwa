import { useEffect } from 'react';
import './App.css';
import MainContainer from './components/maincontainer';
import { CreateContext } from './store/context'
import Notification from './firebase/firebase';



function App() {
useEffect(()=>{
  Notification()
}) 

  return (
    <CreateContext>
      <MainContainer />
    </CreateContext>
  );
}

export default App;
