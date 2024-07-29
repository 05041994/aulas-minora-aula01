// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// function App() {
//   return (
//   <div>
//     <button className="square">X</button>
//   </div>
//   )
// }

const Square = (props) => {
  //const valor = props.value ?? "-";
  const valor : Number = 1;
  while (valor < 10){
    return (<button className="square">
    {valor}
  </button>);
  valor++;
  }
}

const App = () => {
  return (

    <>

    <div className="board-row">
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div className="board-row">
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div className="board-row">
      <Square/>
      <Square/>
      <Square/>
    </div>

    </>
  )
}

export default App
