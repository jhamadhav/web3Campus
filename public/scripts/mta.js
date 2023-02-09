let userDetails = null
let mtaProxy = null

window.onload = async () => {
    mtaProxy = new MtaProxy()
    // document.getElementById("connect").addEventListener("click", connect);

    // document.getElementById("create").addEventListener("click", create);
    // document.getElementById("by-mail-btn").addEventListener("click", getAddressByMail);
    // document.getElementById("by-address-btn").addEventListener("click", getMailByAddress);

    console.log("Firebase loaded")
    document.getElementById("sign-in").addEventListener("click", async () => {
        console.log("hi");
        googleSignIn()
    })
    // document.getElementById("sign-out").addEventListener("click", signOut)
    // firebase.auth().onAuthStateChanged((user) => {
    //     if (!user) {
    //         userDetails = undefined
    //         console.log("user not signed in")
    //         return
    //     }
    //     userDetails = {
    //         "name": user["multiFactor"]["user"]["displayName"],
    //         "email": user["multiFactor"]["user"]["email"],
    //     }
    //     console.log(userDetails)
    //     document.getElementById("user-details").innerText = `Hi ${userDetails["name"]} 👋`
    // })
}

const connect = async () => {
    if (mtaProxy == null) return;
    await mtaProxy.connect()
    console.log("on connect: account details");
    console.log(mtaProxy.account);

    // map google mail to wallet address
    if (mtaProxy == null || userDetails == null || mtaProxy.account.address == '') return;
    let res = await mtaProxy.createRecord(userDetails.email, mtaProxy.account.address);
    console.log("on create: mapping done");
    console.log(res);
}

const create = async () => {
    if (mtaProxy == null) return;
    let email = document.getElementById("mail-input").value;
    let address = document.getElementById("address-input").value;
    let res = await mtaProxy.createRecord(email, address);
    console.log("on create: ");
    console.log(res);
}

const getAddressByMail = async () => {
    if (mtaProxy == null) return;
    let email = document.getElementById("by-mail-input").value;
    let res = await mtaProxy.getRecordByMail(email);
    console.log(`get address by mail: ${email} `);
    console.log(res);
}

const getMailByAddress = async () => {
    if (mtaProxy == null) return;
    let address = document.getElementById("by-address-input").value;
    let res = await mtaProxy.getRecordByAddress(address);
    console.log(`get address by address: ${address} `);
    console.log(res);
}

// google login and log out

const googleSignIn = () => {
    if (userDetails != null) {
        console.log("already signed in !!");
        console.log(userDetails);
        return
    }
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then(async (result) => {
            console.log("sign in successful")
            console.log("logging into metamask");
            await connect()
            window.location = "https://jhamadhav.com/web3Campus/index.html"
        }).catch((error) = () => {
            console.log(error);
            console.log("sign in successful")
        })
}

const signOut = () => {
    firebase.auth().signOut().then(() => {
        console.log('Sign-out successful')
    }, (error) => {
        console.log('Sign-out failed')
        console.log(error)
    })
    userDetails = undefined
}
