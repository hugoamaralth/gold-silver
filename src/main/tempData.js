export default amount => {
    let data = [
        {
            image: "images/products/01.jpg",
            name: "Cabo PP 500V",
            sub: "",
            description: "Disponível em vários modelos",
            price: "130,00"
        },
        {
            image: "images/products/02.jpg",
            name: "CABOFLEX 750V -16,00mm2",
            sub: "",
            description: "Disponível em várias cores",
            price: "70,00"
        },
        {
            image: "images/products/03.jpg",
            name: "CABOFLEX 750V – 10,00mm2",
            sub: "",
            description: "Disponível em várias cores",
            price: "170,00"
        },
        {
            image: "images/products/04.jpg",
            name: "CABOFLEX 750V – 6,00mm",
            sub: "",
            description: "Disponível em várias cores",
            price: "50,00"
        },
        {
            image: "images/products/05.jpg",
            name: "CABOFLEX 750V – 4,00mm2",
            sub: "",
            description: "Disponível em várias cores",
            price: "80,00"
        },
        {
            image: "images/products/06.jpg",
            name: "CABOFLEX 750V – 2,50mm2",
            sub: "",
            description: "Disponível em várias cores",
            price: "100,00"
        },
        {
            image: "images/products/07.jpg",
            name: "CABOFLEX 750V – 1,50mm2",
            sub: "",
            description: "Disponível em várias cores",
            price: "90,00"
        }
    ]
    
    let prod = 0;
    let ret = [];
    for(let i = 0; i < amount; i++){
        ret.push(data[prod]);
        prod++;
        if(prod == 7){
            prod = 0;
        }
    }
    return shuffle(ret);
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}