import { useState } from 'react';
import { flushSync } from 'react-dom';
import './login.scss'
import Loading from '../../components/Loading';
Loading.open()
setTimeout(() => {
  Loading.close()
}, 3000);
function Login(){
  const [loginRotate,setLoginRotate] = useState(0)
  const [registerRotate,setRegisterRotate] = useState(-180)
  function revsereCard(){
    setLoginRotate(val=>val+180)
    setRegisterRotate(val=>val+180)
  }
  
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
            <span className="activetitle" onClick={revsereCard}>
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
            <span className='activetitle' onClick={revsereCard}>
              Login now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login