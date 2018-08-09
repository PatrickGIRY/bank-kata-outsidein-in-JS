import { client } from 'nightwatch-cucumber'
import { Given, When, Then, After} from 'cucumber'


Given('a deposit of {int} on {int}-{int}-{int}', (amount, day, month, year) => {
  // Write code here that turns the phrase above into concrete actions
  return ;
});

Given('a withdrawal of {int} on {int}-{int}-{int}', (amount, day, month, year) => {
  // Write code here that turns the phrase above into concrete actions
  return ;
});

When('he display the account statement', async () => {
  const accountStatement = client.page.accountStatement();
  await accountStatement.navigate();
});

Then('the statement should have transactions in the following format:', async (dataTable) => {
  const accountStatement = client.page.accountStatement();
  await accountStatement.shouldDisplayAccountStatement(dataTable);
});

After( async () => {
  await client.end();
});
