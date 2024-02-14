
import './App.css';
import SellerApp from './seller/SellerApp';
import UserApp from './user/UserApp';


function App() {

  let name = localStorage.getItem("fullname");
  if ( name == null)
  return ( <UserApp /> )

  else 
  return ( <SellerApp /> )
}

export default App;
