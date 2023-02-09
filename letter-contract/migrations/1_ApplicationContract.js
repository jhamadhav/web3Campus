const ApplicationContract = artifacts.require("ApplicationContract");

module.exports = (deployer) => {
    deployer.deploy(ApplicationContract);
}