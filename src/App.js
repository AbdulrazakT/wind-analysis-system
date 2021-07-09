import "./App.css";
import Signin from "./components/signin/Signin";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import { useState } from "react";
import { useEffect } from "react";
import Admin from "./components/admin/Admin";

function App() {
  const [route, setRoute] = useState("signin");
  const [user, setUser] = useState({ firstname: "", lastname: "" });
  const [avatarName, setAvatarName] = useState("");

  const updateProfile = (response) => {
    setUser({ ...response });
  };

  useEffect(() => {
    setAvatarName(user.firstname.charAt(0) + user.lastname.charAt(0));
  }, [user]);

  const handleRouteChange = (route) => {
    setRoute(route);
  };

  return (
    <div className="App">
      {route === "signin" ? (
        <Signin changeRoute={handleRouteChange} updateProfile={updateProfile} />
      ) : route === "register" ? (
        <Register
          changeRoute={handleRouteChange}
          updateProfile={updateProfile}
        />
      ) : route === "admin" ? (
        <Admin changeRoute={handleRouteChange} updateProfile={updateProfile} />
      ) : (
        <Home name={avatarName} changeRoute={handleRouteChange} user={user} />
      )}
    </div>
  );
}

export default App;
