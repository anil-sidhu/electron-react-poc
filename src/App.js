import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
const  {ipcRenderer}  = window.require('electron');
// const { ipcRenderer, remote } = require('electron');

// const { ipcRenderer } = require('electron');
// console.warn("app data",Notificaion)
function App() {
//   setTimeout(()=>{
//    var  notification = new Notification("Message from: ")
//   // const notification = new Notification(title, options);

//   notification.onclick = function() {
//     console.warn('Notification clicked')
//     window.focus(); //just in case, older browsers
//   }
// },3000)
const dataFunction=()=>{
  console.warn("done");
  ipcRenderer.send('notiGet','a string', 10);
}
  return (
    <div className="App">
      <HeaderContainer />
     <button onClick={()=>dataFunction()} >Click for notification</button>
      <HomeContainer />
    </div>
  );
};
 
export default App;
