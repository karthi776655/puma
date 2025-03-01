
// function signup()
// var userName = document.getElementById("usserName").value;
// var userName = document.getElementById("password").value;
// console.log("userName","password");


const signup = () => {
  var userName = document.getElementById("userName").value;
  var userPassword = document.getElementById("password").value;
  var activeUserDetail = userData.filter((data)=>{
    return userName == data.userName;
  });
  console.log(activeUserDetail);
  if (activeUserDetail.length > 0){
    if(activeUserDetail[0].password == userPassword){
      localStorage.setItem("userName",activeUserDetail[0].userName);
      window.location.replace("./Home");
    } else {
      alert("wrong password");
      
    }
  }
};
  return (
    <div className='backround' >

        <div className='ak'>                 
           
          <img className='logo' src={puma} alt=''/>
        <div>
         <p>username</p>
            <input id="userName" placeholder="Userid...." />
           
            </div>
            <div>
            <p>password</p>
            <input id="password" placeholder="password...." />
            
            </div>
            <button onClick={signup}>Login</button>
            </div>
            </div>
  );
};
export default Login;
