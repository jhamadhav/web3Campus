class MtaProxy {
    provider = null
    contract = null
    signer = null
    isConnected = false;
    account = { address: '', balance: '' }

    async connect() {
        this.provider = new ethers.providers.Web3Provider(window.ethereum)
        await this.provider.send("eth_requestAccounts", []);
        this.signer = this.provider.getSigner()
        this.contract = new ethers.Contract(contractAddress, abi, this.signer);
        this.isConnected = this.provider && this.signer && this.contract;
        await this.getAccount()
    }

    async getAccount() {
        if (!this.isConnected) {
            console.log("Connect Your Account to Continue!")
            this.account = { address: '', balance: '' }
            return this.account
        }

        const address = await this.signer.getAddress()
        const balance = ethers.utils.formatEther(await this.signer.getBalance())

        return this.account = { address, balance }
    }

    async createRecord(email, address) {
        if (!this.isConnected) {
            console.log("Connect Your Account to Continue!")
            return []
        }

        const tx = await this.contract.functions.create(
            email,
            address
        )
        const receipt = await tx.wait();
        console.log(receipt);
    }

    async getRecordByMail(email) {
        if (!this.isConnected) {
            console.log("Connect Your Account to Continue!")
            return []
        }
        const tx = await this.contract.functions.getAddress(
            email
        )
        return tx[0]
    }

    async getRecordByAddress(address) {
        if (!this.isConnected) {
            console.log("Connect Your Account to Continue!")
            return []
        }

        const tx = await this.contract.functions.getMail(
            address
        )
        return tx[0]
    }

}
