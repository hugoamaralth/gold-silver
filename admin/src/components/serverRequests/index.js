import axios from "axios";

//o IP estava errado, arrumei e já coloquei o endereço do backend numa varaivel, vai facilitar de trocar em tudo depois
const SERVER_URL = "http://192.168.1.7:3003/api";

//arrumei o metodo também, siga esse padrão para as demais chamadas;
export async function listarProdutos(){
    const ret = await axios.get(`${SERVER_URL}/product`);
    return ret.data;
};

export async function produtoPorId(id){
    const ret = await axios.get(`${SERVER_URL}/product/${id}`);
    return ret.data;
};

export async function updateProduct(id, pars){
    const ret = await axios.put(`${SERVER_URL}/product/${id}`, {...pars});
    return ret;
}

export async function saveProduct(pars){
    const ret = await axios.post(`${SERVER_URL}/product`, {...pars});
    console.log(ret);
}