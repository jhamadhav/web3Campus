let mtaContractAddress = "0xE4685732c8Ad9714F08ae45c4BeeFbdb38935276"
let mtaContractAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "addressID",
                "type": "address"
            }
        ],
        "name": "onCreateEvent",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "addressID",
                "type": "address"
            }
        ],
        "name": "create",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "email",
                "type": "string"
            }
        ],
        "name": "getAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
]

class MtaBridge {
    provider = null
    contract = null
    signer = null
    isConnected = false;
    account = { address: '', balance: '' }

    async connect(letterObj) {
        this.provider = letterObj.provider;
        this.signer = letterObj.signer
        this.contract = new ethers.Contract(mtaContractAddress, mtaContractAbi, this.signer);
        this.isConnected = this.provider && this.signer && this.contract;
    }

    async getRecordByMail(email) {
        if (!this.isConnected) {
            console.log("Connect Your Account to Continue!")
            return []
        }

        const filter = await this.contract.filters.onCreateEvent(
            email,
            null
        );

        const entries = await this.contract.queryFilter(filter)

        return entries.map(entry => ({
            email,
            addressID: entry.args.addressID,
        }));
    }

}