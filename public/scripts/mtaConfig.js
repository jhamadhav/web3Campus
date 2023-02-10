// contract creation block address details

// first block address
// find it in .\mail-to-address-contract\MailToAddress.json
const contractAddress = "0x7Da9DF61364B0c497DE7D3C6826c17cAD4296D8e";

// first block abi
// find it in .\mail-to-address-contract\MailToAddress.json
let abi = [
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

