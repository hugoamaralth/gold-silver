import axios from 'axios';

const URL_SERVER = 'http://localhost:3003/api/';

export async function productById(id){
    const ret = await axios.get(`${URL_SERVER}product?_id=${id}`);
    return ret.data[0];
}

export async function productList(amount){
    amount = amount ? amount : 0;
    const ret = await axios.get(`${URL_SERVER}product?limit=${amount}`);
    return shuffle(ret.data);
}

export async function productListFilter(filters){
    filters.amount = filters.amount ? filters.amount : 0;
    let allFilters = '';
    for(let f in filters){
        if(f === "amount" || f === "shuffle") continue;
        allFilters += `&${f}=${filters[f]}`
    }
    let ret = await axios.get(`${URL_SERVER}product?&limit=${filters.amount}${allFilters}`);

    if(filters.shuffle){
        ret.data = shuffle(ret.data);
    }
    return ret.data;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}