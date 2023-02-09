// contract creation block address details

// first block address
// find it in .\mail-to-address-contract\MailToAddress.json
const contractAddress = "0x7E4FE738083918408a9fC6EFE6C04007c2d40856";

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
        "type": "function",
        "constant": true
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
        "type": "function",
        "constant": true
    }
]

