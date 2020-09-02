import React, { useState } from 'react';
import './app.css';

function initCount() {
  console.log('function runs first time.');
  return 4;
}

const initTheme = {
  color: 'red',
  mode: 'dark',
  usedTimes: 0
}

function App() {
  const [count, setCount] = useState(initCount);
  // 如果初始值需要经过及其复杂的函数计算得出，每次 render 都会重新计算一次这个值开销会很大，所以只需要在第一次 render 的时候进行对应的初始值计算就可以了。
  // 方法是传入一个函数，返回初始值
  // useState(() => someComplexFunction());

  const [theme, setTheme] = useState(initTheme);


  // if(true) {
  //   useState(0);
  // }
  // React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render

  const handleDecrease = () => {
    setCount(prevCount => prevCount - 1);
  }

  const handleIncrease = () => {
    setCount(prevCount => prevCount + 1);
  }
  
  const handleChangeUsedTimes = () => {
    setTheme(prevTheme => ({
      ...prevTheme,
      usedTimes: prevTheme.usedTimes + 1
    }));
  }

  return (
    <div className="App">
      <button onClick={handleDecrease}>-</button>
      <span>{count }</span>
      <button onClick={handleIncrease}>+</button>

      <div className="theme-container">
        color: { theme.color } <br />
        mode: { theme.mode } <br/>
        usedTimes: { theme.usedTimes } <br/>
        <button onClick={handleChangeUsedTimes}>Use Plus 1</button>
      </div>
    </div>
  );
}

export default App;
