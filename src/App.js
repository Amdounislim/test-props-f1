import './App.css';
import UserCard from './components/UserCard';

function App() {

  let name="API";
  let age="28"

  let users=[
    {name:"Amal", email:"amal@gmail.com", phone:1111, function : (x)=>alert(`Hello ${x}`)},
    {name:"Hichem", email:"hichem@gmail.com", phone:2222, function : (x)=>alert(`Hello ${x}`)},
    {name:"Mouna", email:"mouna@gmail.com", phone:3333, function : (x)=>alert(`Hello ${x}`)}
  ]

  return (
    <div className="App">
        {/* <UserCard name={name} age={age} /> */}
        {users.map((el, i)=><UserCard user={el} key={i} />)}
    </div>
  );
}

export default App;
