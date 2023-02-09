// SPDX-License-Identifier: MIT
/* @title LetterApplication
* @devjust LetterApplication
* @custom:dev-run-script ./scripts/deploy_with_ethers.ts
*/

pragma solidity >=0.5.0 < 0.9.0;

contract LetterApplication {
    mapping(string => string) public records;

    function create(string memory email, string memory addressID) public {
        records[email] = addressID;
    }
}
