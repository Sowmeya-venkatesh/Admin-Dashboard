import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";


function App() {


const admin = true
return (
    <Router>
        <Switch>
        
      { admin && <>
      <Topbar />
      <div className="container">
        <Sidebar />
          
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          
        </div>
        </>}
        </Switch>
    </Router>
  );
}

export default App;