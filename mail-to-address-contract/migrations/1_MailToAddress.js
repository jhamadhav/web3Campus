const MailToAddress = artifacts.require("MailToAddress");

module.exports = (deployer) => {
    deployer.deploy(MailToAddress);
}