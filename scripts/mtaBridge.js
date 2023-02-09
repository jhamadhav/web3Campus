let mtaContractAddress = "0x6FeAc5c4D2bcf59A0e705B2119F7967c0d96977C"
let mtaContractAbi = [
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
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "add",
                "type": "address"
            }
        ],
        "name": "getMail",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
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
