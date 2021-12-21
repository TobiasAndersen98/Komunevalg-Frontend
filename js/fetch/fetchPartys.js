const getParysURL = "http://localhost:8080/party/get"
const inputWrapper = document.querySelector(".inputWrapper")
let partyMap = new Map();

async  function getPartys(){
    return fetch(getParysURL).then(response => response.json());
}

async function callGetPartys(){
    const promise = getPartys()
    await promise.then(creatPartyMapper);
}

function creatPartyMapper(data){
    data.forEach(party =>{
        partyMap.set(party.partyId, party)
    })
}

async function getAllPartyS(){
    await callGetPartys()
}