const LetterApplication = artifacts.require("LetterApplication");

module.exports = (deployer) => {
    deployer.deploy(LetterApplication);
}