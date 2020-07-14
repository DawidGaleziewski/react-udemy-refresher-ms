// es6 syntax for creating a class
class Human {
  constructor(gender) {
    this.gender = gender;
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor(gender) {
    super();
    this.gender = gender;
  }
}

const humanInstanceES6 = new Human("male");
humanInstanceES6.printGender();

const personInstanceES6 = new Person("male");
personInstanceES6.printGender();

// es7 syntax for creating class
class SuperHuman {
  // in es7 we can ignore constructor it will be added automatically
  // it is however good only for values that do not change when initializing. In that scenario we still need constructor:
  // https://stackoverflow.com/questions/52787358/passing-in-data-to-class-in-es7-without-a-constructor-function
  gender = "female";
  //   we can also use arrow functions to avoid this keyword issues
  printGender = () => {
    console.log(this.gender);
  };
}

const superHumanInstanceES7 = new SuperHuman("female");
superHumanInstanceES7.printGender();
