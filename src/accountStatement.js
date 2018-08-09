import React from "react";

const AccountStatement = () => {
  return (
    <div id="accountStatement">
      <table>
        <tr><th>DATE</th><th>AMOUNT</th><th>BALANCE</th></tr>
        <tr><td>23/07/2018</td><td>500.00</td><td>1400.00</td></tr>
        <tr><td>10/07/2018</td><td>-100.00</td><td>900.00</td></tr>
        <tr><td>01/07/2018</td><td>1000.00</td><td>1000.00</td></tr>
      </table>
    </div>
  );
}

export default AccountStatement;
