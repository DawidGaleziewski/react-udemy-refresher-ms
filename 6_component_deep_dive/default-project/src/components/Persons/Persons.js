import React from "react";

import Person from "./Person/Person";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";

const Persons = (props) =>
  props.persons.map((person, index) => (
    <ErrorBoundry key={person._id}>
      <Person
        name={person.name}
        age={person.age}
        onClickHandler={() => props.clicked(index)}
        onChangeHandler={(event) => props.changed(event, person._id)}
      />
    </ErrorBoundry>
  ));

export default Persons;
