var Ratings = artifacts.require("./Rating.sol");

module.exports = function(deployer) {
  deployer.deploy(Ratings,['EOS', 'Cardano', 'Ethereum'], {gas: 6700000});
};