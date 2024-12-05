fetch("data.json.json")
.then(rep=>{
    return rep.json()
})
.then(donnee=>{
    console.log(donnee)
    afficheInfos(donnee)
    // j'affiche les produits
    // donnee.produits est un tableau
    //je bouche sur le tableau et pour chacun des pproduit : je l'affiche
    donnee.produits.forEach(produit => {
        afficheUnProduit(produit)
    });
})
function afficheInfos(info){
    document.querySelector("#produit").innerHTML = info.produits
}
function afficheUnProduit(p){
    // ROle: affiche un produit dans la div qui a l'id "produits"
    //parametre : p, le produit a afficher
    // retour rien
    console.log(p.nom)
    console.log(p.description)
    console.log(p.imageUrl)
    let template = `<div class="produit">
            <img src="${p.imageUrl}" alt="">
            <h2>${p.nom}</h2>
            <p>${p.description}</p>
        </div>`
    document.querySelector("#produit").innerHTML += template
}