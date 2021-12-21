'use strict'

async function wait4Fetch(){
    await getAllKandidater();
    printAllKandidater();
}

wait4Fetch();
const bob = document.querySelector(".inputWrapper")


function printAllKandidater(){
    for (let key of kandidaterMap.keys()) {
        let kandidaterKey = kandidaterMap.get(key);

        let childAppender = document.createElement('div');
        childAppender.setAttribute('class', 'appending');
        bob.appendChild(childAppender);

        const kandidatNameH1 = document.createElement('h1');
        kandidatNameH1.innerHTML = "Name: "

        const kandidatNameP = document.createElement('p');
        kandidatNameP.innerHTML = kandidaterKey.name;
        console.log(kandidatNameP);

        const ageH1 = document.createElement('h1');
        ageH1.innerHTML = "Age: "

        const ageP = document.createElement('p');
        ageP.innerHTML= kandidaterKey.age;

        const partyH1 = document.createElement('h1');
        partyH1.innerHTML = " Party: "

        const partyP = document.createElement('p');
        partyP.innerHTML = kandidaterKey.party.name;

        const deleteButton = document.createElement('input')
        deleteButton.setAttribute('class', 'button')
        deleteButton.type = "button"

        deleteButton.setAttribute('value', 'Remove Candidate')
        deleteButton.onclick = function () {
            console.log(kandidaterKey.kandidaterId)
            deleteKandidat(kandidaterKey.kandidaterId)
            location.href="../html/showKandidater.html"
        }

        const editButton = document.createElement('input')
        editButton.type = 'button'
        editButton.setAttribute('value', 'Edit Candidates Information' );
        editButton.setAttribute('class', 'button');

        editButton.onclick = function (){
            const editName = document.createElement('input');
            editName.setAttribute('value', kandidaterKey.name)

            const editAge = document.createElement('input');
            editAge.setAttribute('value', kandidaterKey.age)

            const submitButton = document.createElement('input');
            submitButton.type = 'button';
            submitButton.setAttribute('value', 'Submit Changes to Candidates Information')
            submitButton.setAttribute('class', 'button');

            kandidatNameP.appendChild(editName);
            ageP.appendChild(editAge);
            childAppender.appendChild(submitButton);

            submitButton.onclick = function (){
                updateKandidatInfo(kandidaterKey.kandidaterId, editName.value, editAge.value)
                location.href="../html/showKandidater.html"
            }
        }

        childAppender.appendChild(kandidatNameH1)
        childAppender.appendChild(kandidatNameP)
        childAppender.appendChild(ageH1)
        childAppender.appendChild(ageP)
        childAppender.appendChild(partyH1)
        childAppender.appendChild(partyP)
        childAppender.appendChild(deleteButton)
        childAppender.appendChild(editButton)

    }
}





async function updateKandidatInfo(id, newName, newAge){
    const URL = "http://localhost:8080/Kandidater/update/" + id;

    const updateKandidateJson = {
        "kandidaterId": id,
        "name": newName,
        "age": newAge
    }

    const updateMapObj ={
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateKandidateJson)
    }
    await fetch(URL, updateMapObj)
}


async function deleteKandidat(id){
    const URL = "http://localhost:8080/Kandidater/delete/" + id;

    const deleteMapObj = {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        body: ""
    }
    await fetch(URL, deleteMapObj)
}