var liste = [
    { tittle: "galaxy s21", image: "image/galaxy/S21.jpg", description: "", prix: 120, type: "",note:6, },
    { tittle: "galaxy s22", image: "image/galaxy/s22.jpg", description: "", prix: 80, type: "",note:7, },
    { tittle: "galaxy s23", image: "image/galaxy/S23.jpg", description: "", prix: 220, type: "", note:4,},
    { tittle: "pc portable", image: "image/pc/pc1.jpg", description: "", prix: 130, type: "",note:9, },
    { tittle: "pc protable1", image: "image/pc/pc2.jpg", description: "", prix: 400, type: "",note:8, },
    { tittle: "pc portable2", image: "image/pc/pc3.jpg", description: "", prix: 125, type: "",note:5, },
    { tittle: "smart-watch", image: "image/watch/gear.jpg", description: "", prix: 135, type: "",note:4, },
    { tittle: "gear-watch", image: "image/watch/gear2.jpg", description: "", prix: 46, type: "",note:2, },
    { tittle: "montre-dégitale", image: "image/watch/gear3.jpg", description: "", prix: 46, type: "",note:2, },
    
    ]
    for (let index = 0; index < liste.length; index++) {
        document.getElementById("tout").innerHTML +=
        `
    <div class="carte">
        <img class="modele" src= ${liste[index].image}>
        <h1 class="tittle"> ${liste[index].tittle}</h1>
        <div class="details">
            <h1 class="prix">${liste[index].prix}
            <p>${liste[index].description}
        </div>
    <div>
    `
   }
