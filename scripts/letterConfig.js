// contract creation block address details

// first block address
// find it in .\mail-to-address-contract\MailToAddress.json
const contractAddress = "0xAa983f4dFE9E551F888865801de539e46B2223C7";

// first block abi
// find it in .\mail-to-address-contract\MailToAddress.json
const abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "string",
                "name": "id",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "applierAddress",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "string",
                "name": "institute",
                "type": "string"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "subject",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "file",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "applierAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address[]",
                        "name": "recipients",
                        "type": "address[]"
                    },
                    {
                        "internalType": "string",
                        "name": "institute",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "states",
                        "type": "string[]"
                    },
                    {
                        "internalType": "string[]",
                        "name": "remarks",
                        "type": "string[]"
                    }
                ],
                "indexed": false,
                "internalType": "struct ApplicationContract.Application",
                "name": "application",
                "type": "tuple"
            }
        ],
        "name": "ApplicationWrite",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string[]",
                "name": "applicationID",
                "type": "string[]"
            }
        ],
        "name": "ApplicationsToAddress",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "subject",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "address[]",
                "name": "recipients",
                "type": "address[]"
            },
            {
                "internalType": "string",
                "name": "institute",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "file",
                "type": "string"
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
                "name": "id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "status",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "remark",
                "type": "string"
            }
        ],
        "name": "updateRemark",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "applications",
        "outputs": [
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "subject",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "file",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "applierAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "institute",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "applicationsReceived",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
            }
        ],
        "name": "getApplication",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "subject",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "file",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "applierAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address[]",
                        "name": "recipients",
                        "type": "address[]"
                    },
                    {
                        "internalType": "string",
                        "name": "institute",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "states",
                        "type": "string[]"
                    },
                    {
                        "internalType": "string[]",
                        "name": "remarks",
                        "type": "string[]"
                    }
                ],
                "internalType": "struct ApplicationContract.Application",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getApplicationsToAddress",
        "outputs": [
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getID",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]