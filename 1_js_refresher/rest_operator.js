// Allows to use as many function params as we want
function rest(...restArgs) {
  return restArgs;
}

console.log(rest("a", "b", 1, 2, 34));
