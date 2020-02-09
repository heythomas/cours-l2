import React from 'react';
import data from './user';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Card extends React.Component{

  constructor(props){
    super(props);
    this.img = data["results"][0]["picture"]["large"];
    this.name = data["results"][0]["name"]["title"] + " " + data["results"][0]["name"]["first"] + " " + data["results"][0]["name"]["last"];
    this.address = data["results"][0]["location"]["postcode"] + " " + data["results"][0]["location"]["city"] + " " + data["results"][0]["location"]["state"] + ", " + data["results"][0]["location"]["country"];
    this.gender = function () {if(data["results"][0]["gender"] === "female"){return "her"}else{return "him"}}
    this.her_him = this.gender();
    this.email = data["results"][0]["email"];
  }

  render() {
    return (
      <div className="card w-50">
        <div className="card m-5">
          <img className="card-img-top" src={this.img} alt={this.name+" at work"} />
          <div className="card-body">
            <h5 className="card-title">{this.name}</h5>
            <p className="card-text">{this.address}</p>
            <a href={"mailto:"+this.email} className="btn btn-primary">Contact {this.her_him} by email !</a>
          </div>
        </div>
      </div>
    );
  }

}



export default Card;
