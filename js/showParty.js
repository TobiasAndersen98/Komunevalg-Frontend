'use strict'

async function wait4Fetch(){
    await getAllPartyS();
    printAllParty();
}

wait4Fetch();

function printAllParty(id){
    for (let key of partyMap.keys()){
        let partyKey = partyMap.get(key);

        let partyKetID =partyMap.get(id)

        let childAppender = document.createElement('div');
        childAppender.setAttribute("class", 'appending');
        inputWrapper.appendChild(childAppender);

        const partynameH1 = document.createElement("h1")
        partynameH1.innerHTML = "Party Name: "

        const partynameP = document.createElement("p")
        partynameP.innerHTML = partyKey.name;

        const deleteButton = document.createElement('input')
        deleteButton.setAttribute('class', 'button')

        deleteButton.type = "Button"
        deleteButton.setAttribute('value', 'Remove')
        deleteButton.onclick = function () {
            console.log(partyKey.partyId)
            deleteParty(partyKey.partyId)
            location.href= "../html/showParty.html"
        }


        const editButton = document.createElement("input");
        editButton.type = "button";
        editButton.setAttribute('value', "rename the party her")
        editButton.setAttribute('class', 'button');

        editButton.onclick = function (){
            const editName = document.createElement('input');
            editName.setAttribute('value', partyKey.name);

            const submitButton = document.createElement('input');
            submitButton.type = 'button';
            submitButton.setAttribute('value',"Submit Changes")
            submitButton.setAttribute('class', 'button');

            partynameP.appendChild(editName);
            childAppender.appendChild(submitButton);

            submitButton.onclick = function (){
                updatePartyName(partyKey.partyId, editName.value)

                console.log(updatePartyName)
                location.href = "../html/showParty.html"
            }
        }

        childAppender.appendChild(partynameH1);
        childAppender.appendChild(partynameP);
        childAppender.appendChild(editButton);
        childAppender.appendChild(deleteButton);
    }
}

async function updatePartyName(id, newName){
    const URL = "http://localhost:8080/party/update/" + id;

    const updatePartyNameJson = {
        "partyId": id,
        "name": newName
    }
    const updateMapObj={
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(updatePartyNameJson)
    }
    await fetch(URL, updateMapObj)
}

async function  deleteParty(id){
    const URL = "http://localhost:8080/party/delete/" +id;

    const deleteMapObj = {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        body: ""
    }
    await fetch(URL, deleteMapObj)
}

