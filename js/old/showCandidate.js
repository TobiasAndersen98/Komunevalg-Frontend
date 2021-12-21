'use strict'

async function wait4Fetch(){
    await getAllCandidate();
    await getAllPartyS();
    printAllCandidate();
    fillDropDown();
}

wait4Fetch();

function printAllCandidate(id){
    for(let key of candidateMap.keys()){
        let candidateKey = candidateMap.get(key);

        let childAppender = document.createElement('div');
        childAppender.setAttribute("class", "appending");
        inputWrapper.appendChild(childAppender);

        const nameH1 = document.createElement("h1")
        nameH1.innerHTML = "Candidate Name: "

        const nameP = document.createElement("p")
        nameP.innerHTML=candidateKey.name;

        const ageH1 = document.createElement("h1")
        ageH1.innerHTML = "Age: "

        const ageP = document.createElement("p")
        ageP.innerHTML=candidateKey.age;

        const deleteButton =document.createElement('input')
        deleteButton.setAttribute('class', 'button')

        deleteButton.type = "button";
        deleteButton.setAttribute('value', "Remove Candidate")
        deleteButton.onclick = function () {
            console.log(candidateKey.candidateId)
            deleteCandidate(candidateKey.candidateId)
            location.href= "../../html/showCandidate.html"
        }

        const editButton = document.createElement('input')
        editButton.type = 'button'
        editButton.setAttribute('value', "Edit Candidates Information");
        editButton.setAttribute('class', 'button');

        editButton.onclick = function (){
            const editName = document.createElement('input');
            editName.setAttribute('value', candidateKey.name)

            const editAge = document.createElement('input');
            editAge.setAttribute('value', candidateKey.age)

            const submitButton = document.createElement('input');
            submitButton.type = 'button';
            submitButton.setAttribute('value',"Submit Changes to Candidates Information ")
            submitButton.setAttribute('class', 'button');

            nameP.appendChild(editName);
            ageP.appendChild(editAge);
            childAppender.appendChild(submitButton);


            submitButton.onclick = function (){
                updateCandidatesInformation(candidateKey.candidateId, editName.value, editAge.value)
                location.href = "../../html/showCandidate.html"
            }
        }

        childAppender.appendChild(nameH1);
        childAppender.appendChild(nameP);
        childAppender.appendChild(ageH1);
        childAppender.appendChild(ageP);
        childAppender.appendChild(deleteButton);
        childAppender.appendChild(editButton);

    }
}


async function updateCandidatesInformation(id, newName, newAge){
    const URL = "http://localhost:8080/candidate/update/" + id;

    const updateCandidateJson = {
        "candidateId": id,
        "name": newName,
        "age": newAge
    }

    const updateMapObj ={
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateCandidateJson)
    }
    await fetch(URL, updateMapObj)
}


async function deleteCandidate(id){
    const URL = "http://localhost:8080/candidate/delete/" + id;

    const deleteMapObj = {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        body: ""
    }
    await fetch(URL, deleteMapObj);
}
