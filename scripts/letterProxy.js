/**event ApplicationWrite(
        string indexed id,
        address indexed applierAddress,
        string indexed institute,
        Application application
    ); */
class LetterProxy {
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

    async createApplication(name, subject, description, recipients, institute, fileLink) {
        if (!this.isConnected) {
            console.log("Connect Your Account to Continue!")
            return []
        }
        let data = {
            id: uuid(),
            name,
            subject,
            description,
            recipients,
            institute,
            fileLink
        }
        const tx = await this.contract.functions.create(
            data.id,
            data.name,
            data.subject,
            data.description,
            data.recipients,
            data.institute,
            data.fileLink
        )
        const receipt = await tx.wait();
        console.log(receipt);
    }

    async getApplicationByInstitute(institute) {
        if (!this.isConnected) {
            console.log("Connect Your Account to Continue!")
            return []
        }

        const filter = await this.contract.filters.ApplicationWrite(
            null,
            null,
            institute,
            null
        );

        const entries = await this.contract.queryFilter(filter)

        return entries.map(entry => ({
            id: entry.args.application.id,
            name: entry.args.application.name,
            subject: entry.args.application.subject,
            description: entry.args.application.description,
            file: entry.args.application.file,
            applierAddress: entry.args.application.applierAddress,
            recipients: entry.args.application.recipients,
            "institute": institute,
            states: entry.args.application.states,
            remarks: entry.args.application.remarks,
        }));
    }

    async getApplicationByID(id) {
        if (!this.isConnected) {
            console.log("Connect Your Account to Continue!")
            return []
        }

        const filter = await this.contract.filters.ApplicationWrite(
            id,
            null,
            null,
            null
        );

        const entries = await this.contract.queryFilter(filter)

        return entries.map(entry => ({
            "id": id,
            name: entry.args.application.name,
            subject: entry.args.application.subject,
            description: entry.args.application.description,
            file: entry.args.application.file,
            applierAddress: entry.args.application.applierAddress,
            recipients: entry.args.application.recipients,
            institute: entry.args.application.institute,
            states: entry.args.application.states,
            remarks: entry.args.application.remarks,
        }));
    }

}