import { useState } from 'react';
import './login.scss'
import Loading from '../../components/Loading';

function Login(){
  const [loginRotate,setLoginRotate] = useState(0)
  const [registerRotate,setRegisterRotate] = useState(-180)
  function toRegister(){
    setLoginRotate(180)
    setRegisterRotate(0)
  }
  function toLogin(){
    setLoginRotate(0)
    setRegisterRotate(-180)
  }
  Loading.open()
  setTimeout(() => {
    Loading.close()
  }, 3000);
  
  return (
    <div className="container">
      <div className="box">
        <div
          className="card login"
          style={{ transform: `rotateY(${loginRotate}deg)` }}
        >
          <div className="title">Login</div>
          <div className="inp">
            <div className="name">username:</div>
            <input type="text" />
          </div>
          <div className="inp">
            <div className="name">password:</div>
            <input type="password" />
          </div>
          <button className="logbtn">Login</button>
          <div className="subtitle">
            <span>No account yet? </span>
            <span className="regtitle" onClick={toRegister}>
              Register now
            </span>
          </div>
        </div>
        <div
          className="card register"
          style={{ transform: `rotateY(${registerRotate}deg)` }}
        >
          <div className="title">Register</div>
          <div className="inp">
            <div className="name">username:</div>
            <input type="text" />
          </div>
          <div className="inp">
            <div className="name">password:</div>
            <input type="password" />
          </div>
          <div className="inp">
            <div className="name">confirm password:</div>
            <input type="password" />
          </div>
          <button className="logbtn">Register</button>
          <div className="subtitle">
            <span>Already have an account?</span>
            <span className="regtitle" onClick={toLogin}>
              Login now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login