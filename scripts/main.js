import { Web3Storage } from "https://cdn.jsdelivr.net/npm/web3.storage/dist/bundle.esm.min.js";

let tokenInput =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGVFOTE5N0UzZjg4NDVERDZFREI0MjAwMzUyNDkwZGRiNDYwMWI2QjYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzU4Nzc5Mjk5ODgsIm5hbWUiOiJ0ZW1wIn0.3NRcLALJLP1Noh48GThYaHGkL_CMaMysCNxmQ6l-VKY";
const token = tokenInput;

let letterProxy = null
let mtaBridge = null
window.onload = async () => {
    letterProxy = new LetterProxy()
    mtaBridge = new MtaBridge()

    document.getElementById("connect").addEventListener("click", connect);

    document.getElementById("create").addEventListener("click", create);
    // document.getElementById("by-mail-btn").addEventListener("click", getAddressByMail);
    document.getElementById("by-institute-btn").addEventListener("click", getAppByInstitute);
    document.getElementById("getFileLink").addEventListener("click", getFileLink)
}

const connect = async () => {
    if (letterProxy == null) return;
    await letterProxy.connect()
    console.log("on connect: account details");
    console.log(letterProxy.account);

    await mtaBridge.connect(letterProxy)
}

const create = async () => {
    // name, subject, description, recipients, institute, fileLink
    if (letterProxy == null) return;
    let name = document.getElementById("name-input").value;
    let subject = document.getElementById("subject-input").value;
    let description = document.getElementById("description-input").value;
    let recipients = document.getElementById("recipients-input").value;
    recipients = recipients.split(",")
    let institute = document.getElementById("institute-input").value;
    let fileLink = await getFileLink();

    console.log(name);
    console.log(subject);
    console.log(description);
    console.log(recipients);
    console.log(institute);
    console.log(fileLink);
    let res = await letterProxy.createApplication(name, subject, description, recipients, institute, fileLink);
    console.log("on create: ");
    // console.log(res);
}

const getAppByInstitute = async () => {
    if (letterProxy == null) return;
    let institute = document.getElementById("by-institute-input").value;
    let res = await letterProxy.getApplicationByInstitute(institute);
    console.log(`get application by institute: ${institute} `);
    console.log(res);
}

const getAddressFromMail = async (mail) => {
    if (mtaBridge == null) {
        console.log("mta bridge is down !!");
        return;
    }
    let res = await mtaBridge.getRecordByMail(mail);
    console.log(res);
}

const getFileLink = async () => {
    let client = new Web3Storage({ token });
    let files = document.getElementById("filepicker").files;
    console.log("file uploading");
    let cid = await client.put(files, {
        onRootCidReady: (localCid) => {
            console.log(`> 🔑 locally calculated Content ID: ${localCid} `);
            console.log("> 📡 sending files to web3.storage ");
        },
        onStoredChunk: (bytes) =>
            console.log(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`),
    });
    let link = `https://dweb.link/ipfs/${cid}`
    console.log(link);
    return link
}