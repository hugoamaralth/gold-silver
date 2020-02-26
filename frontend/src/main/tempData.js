const data = [
    {
        id: 1,
        image: images/products/01.jpg,
        category: cabos,
        name: Cabo PP 500V,
        marca: cobrecom,
        description: Disponível em vários modelos,
        price: 130,
        othersImages: 1
    },
    {
        id: 2,
        image: images/products/02.jpg,
        category: cabos,
        name: CABOFLEX 750V -16,00mm2,
        marca: cobrecom,
        description: Disponível em várias cores,
        price: 70,        othersImages: 1
    },
    {
        id: 3,
        image: images/products/03.jpg,
        category: cabos,
        name: CABOFLEX 750V – 10,00mm2,
        marca: cobrecom,
        description: Disponível em várias cores,
        price: 170,
        othersImages: 1
    },
    {
        id: 4,
        image: images/products/04.jpg,
        category: cabos,
        name: CABOFLEX 750V – 6,00mm,
        marca: cobrecom,
        description: Disponível em várias cores,
        price: 50,        othersImages: 1
    },
    {
        id: 5,
        image: images/products/05.jpg,
        category: cabos,
        name: CABOFLEX 750V – 4,00mm2,
        marca: cobrecom,
        description: Disponível em várias cores,
        price: 80,        othersImages: 1
    },
    {
        id: 6,
        image: images/products/06.jpg,
        category: cabos,
        name: CABOFLEX 750V – 2,50mm2,
        marca: cobrecom,
        description: Disponível em várias cores,
        price: 10,    },
    {
        id: 7,
        image: images/products/07.jpg,
        category: cabos,
        name: CABOFLEX 750V – 1,50mm2,
        marca: cobrecom,
        description: Disponível em várias cores,
        price: 90,   },
    {
        id: 8,
        image: images/products/08.jpg,
        category: conectores,
        name: CONECTOR DE EMENDA 2 POLOS,
        marca: Wago,
        description: Eles conectam e isolam diferentes tipos e dimensões de condutores, tem fácil manuseio, são livres de manutenção e permitem derivações de mesma fase, além de garantir: Economia de tempo, Redução de custos, Segurança e Versatilidade. oferecendo conexões para todos os tipos de fios e cabos.,
        price: 50,   },
    {
        id: 9,
        image: images/products/09.jpg,
        category: conectores,
        name: CONECTOR DE EMENDA 3 POLOS,
        marca: Wago,
        description: Eles conectam e isolam diferentes tipos e dimensões de condutores, tem fácil manuseio, são livres de manutenção e permitem derivações de mesma fase, além de garantir: Economia de tempo, Redução de custos, Segurança e Versatilidade. oferecendo conexões para todos os tipos de fios e cabos.,
        price: 80,   },
    {
        id: 10,
        image: images/products/10.jpg,
        category: conectores,
        name: CONECTOR DE EMENDA 5 POLOS,
        marca: Wago,
        description: Eles conectam e isolam diferentes tipos e dimensões de condutores, tem fácil manuseio, são livres de manutenção e permitem derivações de mesma fase, além de garantir: Economia de tempo, Redução de custos, Segurança e Versatilidade. oferecendo conexões para todos os tipos de fios e cabos.,
        price: 10,    },
    {
        id: 11,
        image: images/products/11.jpg,
        category: conectores,
        name: CONECTOR DE EMENDA 2 POLOS 6MM,
        marca: Wago,
        description: Eles conectam e isolam diferentes tipos e dimensões de condutores, tem fácil manuseio, são livres de manutenção e permitem derivações de mesma fase, além de garantir: Economia de tempo, Redução de custos, Segurança e Versatilidade. oferecendo conexões para todos os tipos de fios e cabos.,
        price: 90,   }
]
export function allProducts (amount) {
    let prod = 0;
    let ret = [];
    for(let i = 0; i < amount; i++){
        ret.push(data[prod]);
        prod++;
        if(prod == data.length){
            prod = 0;
        }
    }
    return shuffle(ret);
}

export function productById (id) {
    let ret;
    for(let p in data){
        if(data[p].id === parseInt(id)){
            ret = data[p];
        }
    }
    return ret;
}

export function productsByFilter(filter, amount){    
    let ret = [];
    let i = 0;
    for(let p in data){
        let prd = data[p];
        let include = true;
        for(let f in filter){
            if(prd[f] !== filter[f]){
                include = false;
            }
        }
        if(include){
            ret.push(prd);
            i++;
            if(i === amount){
                break;
            }
        }
    }
    return ret;
}


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}