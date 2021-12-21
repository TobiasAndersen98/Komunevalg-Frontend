const saveKandidatURL = "http://localhost:8080/Kandidater/save";
const kandidatBTN = document.querySelector('.show-modal');
const dropDown = document.getElementById('partyList');

async function wait4fetch(){
    await getAllPartyS();
}
wait4fetch().then(dropDownMenu);

let postRequestKandidat = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: ""
}

let kadidatJson ={
    "kandidaterId": "",
    "name" : "" ,
    "age" : "",
    "party": ""
}

function dropDownMenu(){
    for (let i of partyMap.keys()){
        const option = document.createElement("option");
        option.innerHTML=partyMap.get(i).name;
        option.value=partyMap.get(i).partyId;
        dropDown.appendChild(option);

    }
}

function createKandidat(){
    let inpValue1 = document.getElementById('name')
    let inpValue2 = document.getElementById('age');

    kadidatJson.name = inpValue1.value;
    kadidatJson.age = inpValue2.value;
    kadidatJson.party = {partyId:dropDown.value}
    console.log(dropDown.value)

    postRequestKandidat.body = JSON.stringify(kadidatJson)
    fetch(saveKandidatURL, postRequestKandidat).catch((error) => console.log(error))

}




kandidatBTN.addEventListener('click', function (){
    createKandidat()
})

