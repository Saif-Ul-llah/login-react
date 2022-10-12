import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import pic from "./uTrYYf.jpg";
{/* <link rel="icon" href="./uTrYYf.jpg" /> */}
function Login(){
return(
  <div class="dis">
   <div>
   <img class='im' src={pic} alt='img'/>
   </div>
   <div class="in">
      <h1>Login to continue</h1>
  <input type="email" name="name" placeholder='Email'></input>
  <input type="password" name="name" placeholder='Password'></input>
<div class="fl">  <input type="checkbox" name='chec' class="chec" /><p>Remember me</p> <a href='#'>Forgot Password? </a></div>
 <button type="submit">LOGIN</button>
  </div>
 
</div>
)

}  

ReactDOM.render(<Login/>,document.querySelector("#root"));