// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

const helloMessage = { message: "Hello," };
const heyThereMessage = { message: "Hey there," };

say.call(helloMessage, "John");
say.call(heyThereMessage, "Michael");
