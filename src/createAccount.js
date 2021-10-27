// Account Details  
const search = document.querySelector("#search")
const form = document.querySelector(".form");
const table = document.querySelector("table");
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
const arr = [];

const createAccount = () =>{
    const number = document.querySelector("#accountNum").value;
    const name = document.querySelector("#accountName").value;
    const bankName = document.getElementById("bankName");
    const bank = bankName.options[bankName.selectedIndex].text;
    const formData = {
        number,
        name,
        bank
    };


    arr.push(formData);
    try {
        if(localStorage.getItem("accountList") === null) {
            localStorage.setItem("accountList", JSON.stringify(arr));
        } else {
            let storage = JSON.parse(localStorage.getItem("accountList"));
            storage.push(formData);
            localStorage.setItem("accountList", JSON.stringify(storage));
            console.log(storage)
        }
    }   catch(err) {
        console.error(err)
    }

    const tableBody = data =>{
        for(let items of data){
            let ObjectKeys = Object.values(items)
        }
    }
    if(number === ""){
        alert("Check empty Field");
        document.querySelector("#accountNum").focus();
        return;
    }
    if(name === ""){
        alert("Check empty Field");
        document.querySelector("#accountName").focus();
        return;
    }
    let optionsLength = document.getElementById("bankName").length
    if (optionsLength == 0){
        alert("Bank name must be selected");
        return;
    }    
};

