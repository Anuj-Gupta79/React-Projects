import React from "react";
import Person from "./Person";

function PersonList() {
  const Persons = [
    {
        name : "A",
        age : 1,
        city : "X"
    },
    {
        name : "B",
        age : 2,
        city : "Y"
    },
    {
        name : "C",
        age : 3,
        city : "Z"
    },
  ];

  const personList = Persons.map(person => (<Person key={person.name} person = {person}/>))
  return <div>{personList}</div>;
}

export default PersonList;
