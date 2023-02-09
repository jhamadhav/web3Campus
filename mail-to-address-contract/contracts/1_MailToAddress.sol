// SPDX-License-Identifier: MIT
/* @title MailToAddress
* @custom:dev-run-script ./scripts/deploy_with_ethers.ts
*/

pragma solidity >=0.5.0 < 0.9.0;

contract MailToAddress {

    mapping(string => address) private records;
    mapping(address => string) private addressRec;

    function create(string memory email, address addressID) public {
        // TODO: make if email already exist in map, it cannot be overwritten
        // for testing purposes allow this to happen
        records[email] = addressID;
        addressRec[addressID] = email;
    }

    function getAddress(string memory email) public view returns(address){
        return records[email];
    }
     function getMail(address add) public view returns(string memory){
        return addressRec[add];
    }
}
