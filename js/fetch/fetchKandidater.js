const getKandidaterURL = "http://localhost:8080/Kandidater/get"

async function getKandidaters(){
    return fetch(getKandidaterURL).then(response => response.json());
}

async function callGetkandidaters(){
    const promis = getKandidaters();
    await  promis.then(createKandidatersMapper);
}

let kandidaterMap = new Map();

function createKandidatersMapper(data){
    data.forEach(kandidat => {
        kandidaterMap.set(kandidat.kandidaterId, kandidat)
    })
}

async function getAllKandidater(){
    await callGetkandidaters();
}