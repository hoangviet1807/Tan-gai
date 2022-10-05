import { useState } from 'react';
import { HomePage } from './feature/HomePage';
import './app.css'

function App() {
  const [left, setLeft] = useState()
  const [top, setTop] = useState()
  const handleHover = () => {
    setLeft(Math.floor(Math.random() * (70 - 10)) + 10 + '%')
    setTop(Math.floor(Math.random() * 70 - 10) + 10 + '%')

  }
  return (
    <div style={{
      width: '100%', height: '100vh', background: 'rgb(2,0,36)',
      background: 'linear-gradient(6deg, rgba(2,0,36,1) 0%, rgba(9,121,14,1) 35%, rgba(7,142,70,1) 50%, rgba(7,146,81,1) 53%, rgba(6,153,99,1) 58%, rgba(5,160,118,1) 63%, rgba(0,212,255,1) 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
    }}>
      {/* <HomePage /> */}
      <div id="heart"></div>
      <h1>HEY YOU</h1>
      <div style={{ display: 'flex' }}>
        <button className='button-87' onClick={() => alert("Có chắc yêu là đây")}>LOVE</button>
        <button className='button-87' style={{ fontSize: '14px', position: top ? 'absolute' : 'unset', top: top, left: left }} onClick={handleHover} onMouseLeave={() => { }} onMouseOver={handleHover}>OH NO</button>
      </div>
    </div>
  );
}

export default App;
