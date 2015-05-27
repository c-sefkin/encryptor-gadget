describe('cryptoSquare', function() {

  it('will be lowercase and have no punctuation or whitespace', function() {
    expect(cryptoSquare("Bella loves Sundance!")).to.equal("bellalovessundance");
  });

  it('will count the number of columns', function() {
    expect(columns("Bella loves Sundance!")).to.equal(5);
  });

  it ('will count the number of rows', function() {
    expect(rows("Bella loves Sundance!")).to.equal(4);
  });

  it ('will split string into multiple strings that are the length of the number of columns', function() {
    //expect(splitty("Bella loves Sundance!")).to.equal(["Bella", " love", "s Sun", "dance", "!"]);
    var test = splitty("Bella loves Sundance!");
    expect(test[0]).to.equal("Bella");
    //expect(splitty(""))
  });

});
