// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  var resArr = [];
  for (let account of array) {
    if (account.deposits) {
      let sum = 0;
      for (let deposit of account.deposits) {
        sum += deposit;
      }
      if (sum < 2000) {
        resArr.push(account);
      }
    } else resArr.push(account);
  }
  return resArr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
