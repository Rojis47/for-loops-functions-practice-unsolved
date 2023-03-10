// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

import { bankAccounts } from "../data/data";

export function getClientWithLeastBalance(array) {
  // Your code goes here...
  var lowestAccountArray = []
  var accountNumber = 0
  var minBalance = array[0].balance
  for (let p = 0; p < array.length; p++) {
    const account = array[p];
    if (account.balance < minBalance && account.balance != 0 ) {
      minBalance = account.balance
      accountNumber = p // store the lowest number in a variable
    }
  } 
  lowestAccountArray.push(array[accountNumber])
  return lowestAccountArray
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
