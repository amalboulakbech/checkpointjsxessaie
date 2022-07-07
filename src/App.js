import "./App.css";
import FullName from "./component/Profile/FullName";
import Address from "./component/Profile/Address";
import ProfilePhoto from "./component/Profile/ProfilePhoto";

function App() {
  return <div className="App">
 <FullName/>
  <Address/>
  <ProfilePhoto/>
  </div>;
 
}

export default App;
