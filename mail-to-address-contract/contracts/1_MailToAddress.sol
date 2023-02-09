// SPDX-License-Identifier: MIT
/* @title title
* @custom:dev-run-script ./scripts/deploy_with_ethers.ts
*/

pragma solidity >=0.5.0 < 0.9.0;

contract MailToAddress {

    event onCreateEvent(string indexed email, address indexed addressID);


    mapping(string => address) public records;

    function create(string memory email, address addressID) public {
        records[email] = addressID;
        emit onCreateEvent(email, addressID);
    }

    function getAddress(string memory email) public view returns(address){
        return records[email];
    }
}
