let me = {
  greeting: "Hello World",
  name: "Tochukwu Adams",
  hngId: "hng-04981",
  lang: "JavaScript",
  stage: "stage 2 task",
  email: "tosineluv99@yahoo.com",
};

function myDetails() {
  return (
    me.greeting +
    " " +
    "my name is " +
    me.name +
    " with" +
    " " +
    me.hngId +
    " using " +
    me.lang +
    " for my " +
    me.stage +
    "." +
    " " +
    me.email
  );
}

console.log(myDetails());
