import './App.css';
import Card from './Card';
import UserList from './UserList';
// import logo from '././public/kama.png';
//import {UserDetails} from './UserDetails'
//import EventHandling from './EventHandling';
// import { ConditionalRendering } from './ConditionalRendering';

function App() {
  // const displayName = (name) =>{
  //   alert('Hi'+ ' ' +name)
  // }
  return (
    <div className="App">
      {/* <UserDetails name="New" displayName={displayName}/> */}
      {/* <EventHandling/> */}
      {/* <ConditionalRendering isLoggedIn = {true} /> */}
      <Card produtname="Kama Ayurveda Natural Organic Hair Color Kit" brandname="Kama Ayurveda" cost="1,275" ratings="1"  />
      <Card produtname="A Ayurveda Natural Organic Hair Color Kit" brandname="A Ayurveda" cost="1,575" ratings="3"  />
      <Card produtname="B Ayurveda Natural Organic Hair Color Kit" brandname="B Ayurveda" cost="870" ratings="5"  />
      <Card produtname="C Ayurveda Natural Organic Hair Color Kit" brandname="C Ayurveda" cost="2,000" ratings="2"  />
      <UserList />
    </div>
  );
}
  
export default App;
