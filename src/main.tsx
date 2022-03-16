import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'));

// import './index.css'
// import App from './App'
// const myName : string = "Nguyễn Tiến Mạnh";
// const myStatus : boolean = true;
// const myAge : number = 20;
// const product :{id:number, name: string} = {id:1, name : "Mạnh"}
// type ShowProps = {
//   name : string
// }

//  function show (props: ShowProps) : any{
//   console.log(props.name);
//  }

// function Show(props : ShowProps) : any {
//   console.log('props',props);
//   console.log(props.name);
//   return null;
// }

// ReactDOM.render(<div>
//   <h1>Hello {myName}</h1>
//   <div>{myStatus ? "manh" : "tien"}</div>
//   <div>{myAge}</div>
//   <div>{product.name}</div>
//   <div>{show({name : myName})}</div>
// </div>, document.querySelector('#root'))
