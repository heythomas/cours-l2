import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './user';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

console.log(data)
const img = data["results"][0]["picture"]["large"];
const name = data["results"][0]["name"]["title"] + " " + data["results"][0]["name"]["first"] + " " + data["results"][0]["name"]["last"];
const address = data["results"][0]["location"]["postcode"] + " " + data["results"][0]["location"]["city"] + " " + data["results"][0]["location"]["state"] + ", " + data["results"][0]["location"]["country"];
const gender = function () {if(data["results"][0]["gender"] === "female"){return "her"}else{return "him"}}
const her_him = gender();
const email = data["results"][0]["email"];
console.log(email);

function App() {
  return (
    <div className="App">
      <div className="card m-5">
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{address}</p>
          <a href={"mailto:"+email} className="btn btn-primary">Contact {her_him} by email !</a>
        </div>
      </div>
    </div>
  );
}

export default App;
