fetch("data.json.json")
.then(rep=>{
    return rep.json()
})
.then(donnee=>{
    console.log(donnee)
})