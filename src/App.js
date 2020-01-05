import React from 'react';
import Hello from "./Hello";
import './App.css'

function App() {
    const name = 'react 알아보자!';
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24,
        padding:'1rem'
    };
      return (
        <>
            {/* 주석이므로 브라우저에 나타나지 않음 */}
            <Hello
                // 이런식으로 작성하는 주석문은 화면에 안나타남.
            />
            <div
                // 이런식으로 작성하는 주석문은 화면에 안나타남.
                style={style}>{name}</div>
            <div className="gray-box"></div>
        </>
      )
}

export default App;






