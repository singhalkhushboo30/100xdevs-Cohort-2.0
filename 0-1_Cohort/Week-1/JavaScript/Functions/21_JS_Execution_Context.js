// //JS Execute Code + CALL stack

// _________________
// |                |
// |                |
// |       { }      |
// |                |
// |                |
// |________________|
//           |
//          \|/
// //Global Execution Context- this


// - Global Execution Context       
// - Function Execution Context 
// - Eval Execution Context
// ________
// |       | - Memory Execution(Creation) Phase
// |   {}  | - Execution Phase
// |_______|


// let value1=10;
// let value2=5
// function addNum(num1,num2){
//     let total=num1+num2
//     return total
// }

// let result1= addNum(value1,value2)
// let result2= addNum(18,5)

// 1. Global Execution -this
// 2. Memory Phase
// value1- undefined
// value2-undefined
// addNum - defination
// result1- undefined
// result- undefined

// 3. Execution Phase
// value1=10          result1=15
// value2=5  _________resutl2-23___________________
// addNum -> |                          |     -2 times(for result1 and result2)
//           |new variable environment  |
//           |      +                   |
//           |    Execution thread      |
//           |                          |
//           |                          |
//           |                          |
//           |__________________________|
//                        |
//                        |
//                        \/
//          ____________________________________
//         |                                   |
//         Memory phase                      Execution Context
                                         
//         value1- undefined                num1-10
//         value2- undesined                num2-5
//         total- undefined                 total-15(return to global execution context)


