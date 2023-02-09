let letterProxy = null
window.onload = async () => {
    letterProxy = new LetterProxy()
    document.getElementById("connect").addEventListener("click", connect);

    document.getElementById("create").addEventListener("click", create);
    // document.getElementById("by-mail-btn").addEventListener("click", getAddressByMail);
    document.getElementById("by-institute-btn").addEventListener("click", getAppByInstitute);
}

const connect = async () => {
    if (letterProxy == null) return;
    await letterProxy.connect()
    console.log("on connect: account details");
    console.log(letterProxy.account);
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
    let fileLink = document.getElementById("fileLink-input").value;
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

const getAddressFromMail = (mail) => {

}