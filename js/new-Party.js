'use strict'

const savePartyURL = "http://localhost:8080/party/save"
const partyBTN = document.querySelector(".show-modal");

let postRequestParty ={
    method: "POST",
    headers:{
        "content-type": "application/json"
    },
    body:""
}

let partyJson = {
    "partyId": "",
    "name" : ""
}

function createPraty(){
    let inpValue1 = document.getElementById("partyName");

    partyJson.name = inpValue1.value;

    postRequestParty.body = JSON.stringify(partyJson)
    fetch(savePartyURL, postRequestParty).catch((error) => console.log(error));
}

partyBTN.addEventListener('click', function (){
    createPraty()
    })


