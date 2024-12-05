fetch("data.json.json")
    .then(rep => {
        return rep.json()
    })
    .then(donnee => {
        console.log(donnee)
        donnee.produits.forEach(instru => {
            afficherLesInstruments(instru)
        });

    })

function afficherLesInstruments(i) {
    // parametre: 1 seul instrument
    // role afficher la carte d'un instrument dnas la page html dans la div qui a l'id Instruments
    // pas de retour

    let template = `<div class="cardInstru">
                <a href="">
                    <img src="${i.imageUrl}" class="tailleImg" alt="instrument de musique hang"></a>
                <h5>${i.nom}:</h5>
                <p class="widthP">${i.description}</p>
            </div>`

    document.querySelector("#Instruments").innerHTML += template
}

fetch("data.json.json")
    .then(rep => {
        return rep.json()
    })
.then(donnee => {
    console.log(donnee)
    donnee.temoignages.forEach(client => {
        afficherTemoignages(client)
    });

    function afficherTemoignages(t) {
    //parametre: un prenom
    // role: afficher le prenom d'une personne qui a temoigne dans la page html qui a l'id Temoignages
    //retour: aucun
    let template = `<div class="cardTemoignages">
                <h5>${t.prenom}</h5>
                <p>${t.prestation}</p>
                <p>${t.commentaire}</p>
                <h5>${t.note} /5</h5>
            </div>`

    document.querySelector("#Temoignages").innerHTML += template
}
})
