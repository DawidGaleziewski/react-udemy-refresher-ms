// spread operator can be used as shallow copy
const starTroper = {
  name: "Han",
  age: 30,
};

const cloneSoldier = {
  ...starTroper,
};

starTroper.name = "Luke";
starTroper.age = 18;

console.log(cloneSoldier);
