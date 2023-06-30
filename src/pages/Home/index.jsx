import { lazy,useState,useEffect } from 'react'
import './home.scss'
import logo from './logo192.png'

const NavBar = lazy(()=>import('./components/Navbar/NavBar'))
const FriendsList = lazy(()=>import('./components/FriendsList/FriendsList'))
const CenterCard = lazy(()=>import('./components/CenterCard/CenterCard'))

function createFriends(){
  const arr = []
  for(let i=0;i<30;i++){
    let obj = { name: `conquer${i}`, imgUrl: logo, status: Math.random() > 0.5 };
    arr.push(obj)
  }
  return arr
}

function Home(){
  const friendsList = createFriends().sort((a,b)=>{
    if(!a.status && b.status) return 1
    else return -1
  })
  const [chater,setChater] = useState('')

  function clickFriend(name){
    setChater(name)
  }
  return (
    <div className="main">
      <div className="header">
        <NavBar name={"killer"} imgSrc={logo} />
      </div>
      <div className="main">
        <div className="right">
          <FriendsList friendsInfoList={friendsList} clickFriend={clickFriend} />
        </div>
        <div className="left">
          <CenterCard name={chater} />
        </div>
      </div>
    </div>
  );
}

export default Home