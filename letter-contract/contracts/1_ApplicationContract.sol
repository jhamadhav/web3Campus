// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;

contract ApplicationContract {
    event ApplicationWrite(
        string indexed id,
        address indexed applierAddress,
        string indexed institute,
        Application application
    );
    event ApplicationsToAddress(
        address indexed userAddress,
        string[] applicationID
    );

    struct Application {
        string id;
        string name;
        string subject;
        string description;
        string file;
        address applierAddress;
        address[] recipients;
        string institute;
        string[] states;
        string[] remarks;
    }

    mapping(string => Application) public applications;
    mapping(address => string[]) public applicationsReceived;

    function create(
        string memory id,
        string memory name,
        string memory subject,
        string memory description,
        address[] memory recipients,
        string memory institute,
        string memory file
    ) public {
        Application memory a;
        a.id = id;
        a.name = name;
        a.subject = subject;
        a.description = description;
        a.applierAddress = msg.sender;
        a.recipients = recipients;
        a.file = file;
        a.institute=institute;
        
        uint256 addLength = recipients.length;
        a.states = new string[](addLength);
        a.remarks = new string[](addLength);
        for(uint256 i=0;i<addLength;++i){
            a.states[i] = "0";
            a.remarks[i] = "none";
            applicationsReceived[ recipients[i] ].push(id);
            emit ApplicationsToAddress(recipients[i], applicationsReceived[ recipients[i] ]);
        }
        applications[id] = a;

        emit ApplicationWrite(a.id, msg.sender,  a.institute, a);
    }

    function getApplication(string memory id) public view returns (Application memory) {
        return applications[id];
    }

    function updateRemark(string memory id, string memory status, string memory remark ) 
    public{
            Application memory a = applications[id];
            uint256 ind = 100;
            for(uint256 i=0;i<a.recipients.length;++i){
                if(msg.sender == a.recipients[i]){
                    ind = i;
                }
            }
            if(ind != 100){
                a.remarks[ind] = remark;
                a.states[ind] = status;
                applications[a.id] = a;
                emit ApplicationWrite(a.id, msg.sender,  a.institute,a);
            } 
    }

    function getID() public view returns(address){
        return msg.sender;
    }

    function getApplicationsToAddress() public view returns(string[] memory){
        return applicationsReceived[msg.sender];
    }

}