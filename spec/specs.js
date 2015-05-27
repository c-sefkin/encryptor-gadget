describe('cryptoSquare', function() {

  it('will be lowercase and have no punctuation or whitespace', function() {
    expect(cryptoSquare("Bella loves Sundance!")).to.equal("bellalovessundance");
  });

  it('will count the number of columns', function() {
    expect(columns("Bella loves Sundance!")).to.equal(5);
  });

  it ('will count the number of rows', function() {
    expect(rows("Bella loves Sundance!")).to.equal(4)
  })

});
