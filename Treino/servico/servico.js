import tenisNike from "../dados/dados.js";

export const buscarTodosOsTenis = () => {
    return tenisNike;
};


export const buscarTenisPorNumero = (numero) => {
    const num = parseInt(numero);
    return tenisNike.filter((item) => item.numero === num);
};


export const buscarTenisPorId = (id) => {
    const idTenis = parseInt(id);
    return tenisNike.find((item) => item.id === idTenis);
};


export const buscarTenisPorNome = (nome) => {
    const nomeLower = nome.toLowerCase();
    return tenisNike.filter(
    (item) =>
        item.nome.toLowerCase().includes(nomeLower) || (item.nome.split(" ")[1] && item.nome.split(" ")[1].toLowerCase().includes(nomeLower)));
};


export const buscarTenisPorEstilo = (estilo) => {
    const estiloLower = estilo.toLowerCase();
    return tenisNike.filter(
    (item) => item.estilo && item.estilo.toLowerCase().includes(estiloLower));
};
