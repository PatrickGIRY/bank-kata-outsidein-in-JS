
const displayAccountStatementCommands = {
  shouldDisplayAccountStatement(dataTable) {
    const expectedValues = dataTable.raw();
    return this.waitForElementPresent('@accountStatement')
    .api.perform((div, done) => {
        div.elements('css selector', 'tr', rows => {
          rows.value.map((row, y) =>
            div.elementIdElements(row.ELEMENT, 'css selector', 'th, td', cells => {
              cells.value.map((cell, x) => div.elementIdText(cell.ELEMENT, text => {
                div.assert.equal(text.value, expectedValues[y][x], JSON.stringify({row:x, cell:y}))
              }));
            }));
        });
      done();
    });
  }
};

module.exports = {
  url: function() { return this.api.launchUrl; },
  commands: [displayAccountStatementCommands],
  elements: {
    accountStatement: {
      selector: '#accountStatement',
      locateStrategy: 'css selector'
    }
  }
}
