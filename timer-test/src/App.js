import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    var timer = new Date().getTime() + 620840000;
    var date = new Date(timer);
    var dateStr = date.toString();

    var countDownDate = new Date("Jan 25, 2023 15:37:25").getTime(); // <-- Why does this persist on refresh
    /*var countDownDate new Date(dateStr).getTime();*/               // <-- and this does not persist on refresh?
    
    const interval = setInterval(() => {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      console.log(days, hours, minutes, seconds); 
    }, 1000);
    return (distance) => {
        if(distance < 0){
        clearInterval(interval);
        console.log('Expired');
      }
    }
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
