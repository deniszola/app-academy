const ValidationError = require("./validation-error");

// Your code here
class MaximumLengthExceededError extends ValidationError {
  constructor(excessLength) {
    super(
      `Maximum length exceeded${excessLength ? ` by ${excessLength}` : ""}`
    );
    this.name = "MaximumLengthExceededError";
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
