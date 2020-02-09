import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// import pretty from "pretty";
import Card from './card';
import data from './user';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it('renders with good informations', () => {
  act(() => {
    render(<Card />, container);
  });
  expect(document.querySelector(".card-title").textContent).toMatch(
    data["results"][0]["name"]["title"] + " " + data["results"][0]["name"]["first"] + " " + data["results"][0]["name"]["last"]
  );
  expect(document.querySelector(".card-text").textContent).toMatch(
    data["results"][0]["location"]["postcode"] + " " + data["results"][0]["location"]["city"] + " " + data["results"][0]["location"]["state"] + ", " + data["results"][0]["location"]["country"]
  );
  expect(document.querySelector(".card-img-top").src).toMatch(
    data["results"][0]["picture"]["large"]
  );
  expect(document.querySelector(".btn").href).toMatch(
    "mailto:" + data["results"][0]["email"]
  );
  expect(document.querySelector(".btn").textContent).toMatch(
    "Contact " + her_him() + " by email !"
  );

});

function her_him(){
  if(data["results"][0]["gender"] === "female"){
    return "her"}
  else{
    return "him"
  }
}
