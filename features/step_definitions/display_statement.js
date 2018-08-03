import { client } from 'nightwatch-cucumber'
import { Given, When, Then} from 'cucumber'


Given('a deposit of {int} on {int}-{int}-{int}', function (int, int2, int3, int4) {
  // Write code here that turns the phrase above into concrete actions
  return ;
});

Given('a withdrawal of {int} on {int}-{int}-{int}', function (int, int2, int3, int4) {
  // Write code here that turns the phrase above into concrete actions
  return ;
});

When('he display the account statement', async () => {
  const accountStatement = client.page.accountStatement();
  await accountStatement.navigate();
});

Then('the statement should have transactions in the following format:', async (dataTable) => {
  const accountStatement = client.page.accountStatement();
  await accountStatement.waitForElementVisible('@accountStatement', 1000);
});
