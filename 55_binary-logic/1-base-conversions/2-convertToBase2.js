// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = (element) => {
  // Your code here
  /*
  // Method 1 - Recursive convert base 10 to binary
  const bit = parseInt(element) % 2;
  const rest = parseInt(element) / 2;

  if (rest < 1) return "0b" + bit;

  return convertToBase2(rest) + bit;
  */

  /*
  // Method 2 - If hexadecimal, convert to base 10, then convert to binary
  if (typeof element === "string" && element.startsWith("0x")) {
    element = parseInt(element);
  }

  return "0b" + element.toString(2);
  */

  // Method 3 - Convert base 10 and hexadecimal to binary
  return "0b" + (element >>> 0).toString(2);
};

/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log("––––––");

console.log(convertToBase2("0xf")); // 0b1111
console.log(convertToBase2("0xfa")); // 0b11111010
console.log(convertToBase2("0x1234")); // 0b1001000110100
console.log(convertToBase2("0xc9a1")); // 0b1100100110100001
console.log(convertToBase2("0xbf12")); // 0b1011111100010010
