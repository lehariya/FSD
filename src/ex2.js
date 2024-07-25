import  {useState} from "react";
import Login from"./login";
import Ex3 from "./ex3";
function Ex2(){
  const [isLogin,setIsLogin] = useState(true);
  const showLogin=()=>{ setIsLogin(true)}
  const showRegister=()=>{ setIsLogin(false)}

  return(
    <div align="center">
      <button onClick={showLogin}>Login</button>
      <button onClick={showRegister}>Register</button>
    {isLogin ?
      <Login/>
      :
      <Ex3/>
    }
    </div>
  );
}
export default Ex2;