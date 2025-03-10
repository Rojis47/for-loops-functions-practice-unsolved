// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data";

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  var resArr = [];
  for (let account of array) {
    let sumOfDeposits = 0
    let sumOfWithdrawals = 0
    if (account.deposits) {

      for (let deposit of account.deposits) {
        sumOfDeposits += deposit
      }
    }

    if (account.withdrawals) {
      for (let withdrawal of account.withdrawals) {
        sumOfWithdrawals += withdrawal
      }
    }

    let diffference = sumOfDeposits - sumOfWithdrawals
    if (diffference != account.balance) {
      resArr.push(account)
    }
  }
  return(resArr)
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
