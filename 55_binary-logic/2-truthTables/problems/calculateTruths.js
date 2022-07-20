const {
  or,
  and,
  calculateTruthTable,
} = require("../../utils/truthTableHelpers");

// Implement the imported helper functions from line 1
//    Read the export file for the explanation of how they work

// Example workflow for the problem directly below:
//    A    B     !A || (A && B)
//    -------------------
//    0    1      ?

//    1. !A -> 1
//    2. calculateTruthTable(0, and, 1) -> 0
//    3. calculateTruthTable(1, or, 0) -> 1
//    4. Answer: 1

/******************************************************************************/

const not = (A) => {
  if (A) return 0;
  else return 1;
};

// A    B    !A || (A && B)
// 0    0       1
calculateTruthTable(0, not); // !A = 1
calculateTruthTable(0, and, 0); // (A && B) = 0
calculateTruthTable(1, or, 0); // !A || (A && B) = 1
// 0    1       1
calculateTruthTable(0, not); // !A = 1
calculateTruthTable(0, and, 1); // (A && B) = 0
calculateTruthTable(1, or, 0); // !A || (A && B) = 1
// 1    0       0
calculateTruthTable(1, not); // !A = 0
calculateTruthTable(1, and, 0); // (A && B) = 0
calculateTruthTable(0, or, 0); // !A || (A && B) = 0
// 1    1       1
calculateTruthTable(1, not); // !A = 0
calculateTruthTable(1, and, 1); // (A && B) = 1
calculateTruthTable(0, or, 1); // !A || (A && B) = 1

// A    B     B || !A
// 0    0       1
calculateTruthTable(0, not); // !A = 1
calculateTruthTable(0, or, 1); // B || !A = 1
// 0    1       1
calculateTruthTable(0, not); // !A = 1
calculateTruthTable(1, or, 1); // B || !A = 1
// 1    0       0
calculateTruthTable(1, not); // !A = 0
calculateTruthTable(0, or, 0); // B || !A = 0
// 1    1       1
calculateTruthTable(1, not); // !A = 0
calculateTruthTable(1, or, 0); // B || !A = 1

// A    B     !(A && !B)
// 0    0       1
calculateTruthTable(0, not); // !B = 1
calculateTruthTable(0, and, 1); // (A && !B) = 0
calculateTruthTable(0, not); // !(A && !B) = 1
// 0    1       1
calculateTruthTable(1, not); // !B = 0
calculateTruthTable(0, and, 0); // (A && !B) = 0
calculateTruthTable(0, not); // !(A && !B) = 1
// 1    0       0
calculateTruthTable(0, not); // !B = 1
calculateTruthTable(1, and, 1); // (A && !B) = 1
calculateTruthTable(1, not); // !(A && !B) = 0
// 1    1       1
calculateTruthTable(1, not); // !B = 0
calculateTruthTable(1, and, 0); // (A && !B) = 0
calculateTruthTable(0, not); // !(A && !B) = 1

// A    B     !(A || !B)
// 0    0       0
calculateTruthTable(0, not); // !B = 1
calculateTruthTable(0, or, 1); // (A || !B) = 1
calculateTruthTable(1, not); // !(A || !B) = 0
// 0    1       1
calculateTruthTable(1, not); // !B = 0
calculateTruthTable(0, or, 0); // (A || !B) = 0
calculateTruthTable(0, not); // !(A || !B) = 1
// 1    0       0
calculateTruthTable(0, not); // !B = 1
calculateTruthTable(1, or, 1); // (A || !B) = 1
calculateTruthTable(1, not); // !(A || !B) = 0
// 1    1       0
calculateTruthTable(1, not); // !B = 0
calculateTruthTable(1, or, 0); // (A || !B) = 1
calculateTruthTable(1, not); // !(A || !B) = 0

// A    B     A || !A
// 0    0       1
calculateTruthTable(0, not); // !A = 1
calculateTruthTable(0, or, 1); // A || !A = 1
// 0    1       1
calculateTruthTable(0, not); // !A = 1
calculateTruthTable(0, or, 1); // A || !A = 1
// 1    0       1
calculateTruthTable(1, not); // !A = 0
calculateTruthTable(1, or, 0); // A || !A = 1
// 1    1       1
calculateTruthTable(1, not); // !A = 0
calculateTruthTable(1, or, 0); // A || !A = 1

// A    B     B && !B
// 0    0       0
calculateTruthTable(0, not); // !B = 1
calculateTruthTable(0, and, 1); // B && !B = 0
// 0    1       0
calculateTruthTable(1, not); // !B = 0
calculateTruthTable(1, and, 0); // B && !B = 0
// 1    0       0
calculateTruthTable(0, not); // !B = 1
calculateTruthTable(0, and, 1); // B && !B = 0
// 1    1       0
calculateTruthTable(1, not); // !B = 0
calculateTruthTable(1, and, 0); // B && !B = 0

// A    B    C     A && B || !C
// --------------------
// 0    0    0       1
calculateTruthTable(0, not); // !C = 1
calculateTruthTable(0, and, 0); // A && B = 0
calculateTruthTable(0, or, 1); // A && B || !C = 1
// 0    0    1       0
calculateTruthTable(1, not); // !C = 0
calculateTruthTable(0, and, 0); // A && B = 0
calculateTruthTable(0, or, 0); // A && B || !C = 0
// 0    1    0       1
calculateTruthTable(0, not); // !C = 1
calculateTruthTable(0, and, 1); // A && B = 0
calculateTruthTable(0, or, 1); // A && B || !C = 1
// 0    1    1       0
calculateTruthTable(1, not); // !C = 0
calculateTruthTable(0, and, 1); // A && B = 0
calculateTruthTable(0, or, 0); // A && B || !C = 0
// 1    0    0       1
calculateTruthTable(0, not); // !C = 1
calculateTruthTable(1, and, 0); // A && B = 0
calculateTruthTable(0, or, 1); // A && B || !C = 1
// 1    0    1       0
calculateTruthTable(1, not); // !C = 0
calculateTruthTable(1, and, 0); // A && B = 0
calculateTruthTable(0, or, 0); // A && B || !C = 0
// 1    1    0       1
calculateTruthTable(0, not); // !C = 1
calculateTruthTable(1, and, 1); // A && B = 1
calculateTruthTable(1, or, 1); // A && B || !C = 1
// 1    1    1       1
calculateTruthTable(1, not); // !C = 0
calculateTruthTable(1, and, 1); // A && B = 1
calculateTruthTable(1, or, 0); // A && B || !C = 1

// A    B    C    !A || (B && C)
// --------------------
// 0    0    0       1
calculateTruthTable(0, not); // !A = 1
calculateTruthTable(0, and, 0); // (B && C) = 0
calculateTruthTable(1, or, 0); // !A || (B && C) = 1
// 0    0    1       1
calculateTruthTable(0, not); // !A = 1
calculateTruthTable(0, and, 1); // (B && C) = 0
calculateTruthTable(1, or, 0); // !A || (B && C) = 0
// 0    1    0       1
calculateTruthTable(0, not); // !A = 1
calculateTruthTable(1, and, 0); // (B && C) = 0
calculateTruthTable(1, or, 0); // !A || (B && C) = 1
// 0    1    1       1
calculateTruthTable(0, not); // !A = 1
calculateTruthTable(1, and, 1); // (B && C) = 1
calculateTruthTable(1, or, 1); // !A || (B && C) = 1
// 1    0    0       0
calculateTruthTable(1, not); // !A = 0
calculateTruthTable(0, and, 0); // (B && C) = 0
calculateTruthTable(0, or, 0); // !A || (B && C) = 0
// 1    0    1       0
calculateTruthTable(1, not); // !A = 0
calculateTruthTable(0, and, 1); // (B && C) = 0
calculateTruthTable(0, or, 0); // !A || (B && C) = 0
// 1    1    0       0
calculateTruthTable(1, not); // !A = 0
calculateTruthTable(1, and, 0); // (B && C) = 0
calculateTruthTable(0, or, 0); // !A || (B && C) = 0
// 1    1    1       1
calculateTruthTable(1, not); // !A = 0
calculateTruthTable(1, and, 1); // (B && C) = 1
calculateTruthTable(0, or, 1); // !A || (B && C) = 1
