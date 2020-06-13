//REDUX tutorial
const BUY_CAKE = "BUY_CAKE";

//REDUC ACTION CTREATOR should me a function, which return an ACTION as Object
//ACTION is an object with TYPE (here, type: BUY_CAKE) property
buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First Rexud Action",
  };
};
