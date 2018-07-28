Feature: Display account statement

Scenario: Display account statement containing all transactions
  Given a deposit of 1000 on 01-07-2018
  And a withdrawal of 100 on 10-07-2018
  And a deposit of 500 on 23-07-2018
  When he display the account statement
  Then the statement should have transactions in the following format:
    | DATE       | AMOUNT  | BALANCE |
    | 23/07/2018 | 500.00  | 1400.00 |
    | 10/07/2018 | -100.00 | 900.00  |
    | 01/07/2018 | 1000.00 | 1000.00 |
