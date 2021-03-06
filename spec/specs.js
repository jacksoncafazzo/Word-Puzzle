describe("getNumberArray", function(userNumber) {
  it("outputs an array from 1 to userNumber with pIng for 3", function() {
    expect(getNumberArray(3)).to.eql("<li>1</li><li>2</li><li>pIng</li>");
  });

  it("outputs an array from 1 to userNumber with pIng for 3 and poNg for 5", function() {
    expect(getNumberArray(5)).to.eql("<li>1</li><li>2</li><li>pIng</li><li>4</li><li>poNg</li>");
  });

  it("outputs as array from 1 to userNumber replacing ping, pong and pingpong", function() {
    expect(getNumberArray(15)).to.eql("<li>1</li><li>2</li><li>pIng</li><li>4</li><li>poNg</li><li>pIng</li><li><span class=\'glyphicon glyphicon-ice-lolly-tasted\'></span></li><li>8</li><li>pIng</li><li>poNg</li><li><span class=\'glyphicon glyphicon-knight\'></span></li><li>pIng</li><li>13</li><li><span class=\'glyphicon glyphicon-ice-lolly-tasted\'></span></li><li>pIngPoNg</li>");
  });
});
