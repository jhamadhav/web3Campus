// contract creation block address details

// first block address
// find it in .\mail-to-address-contract\MailToAddress.json
const contractAddress = "0xE4685732c8Ad9714F08ae45c4BeeFbdb38935276";

// first block abi
// find it in .\mail-to-address-contract\MailToAddress.json
const abi = [
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
];

