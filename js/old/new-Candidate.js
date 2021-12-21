'use strict';

const saveCandidateURL = "http://localhost:8080/kandidater/save"
const candidateBTN = document.querySelector(".show-modal");

async function whte4fetch(){
    await getAllPartyS();
    fillDropDown();

}
whte4fetch();

let postRequestCandidate = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body:""
}

let candidateJson = {
    "candidateId" : "",
    "name" : "",
    "age" : ""
}

function createCandidate(){
    let inpValue1 = document.getElementById("name");
    let inpValue2 = document.getElementById("age");

    candidateJson.name = inpValue1.value;
    candidateJson.age = inpValue2.value;

    postRequestCandidate.body = JSON.stringify(candidateJson)
    fetch(saveCandidateURL, postRequestCandidate).catch((error) => console.log(error));
}



const partyList = document.getElementById("partyList")
function fillDropDown(){
    for (let i of partyMap.keys()){
        const option = document.createElement("option");
        option.innerHTML = partyMap.get(i).name;
        option.value = partyMap.get(i).partyId;
        partyList.appendChild(option)

    }
}

candidateBTN.addEventListener('click', function (){
    createCandidate();
})

