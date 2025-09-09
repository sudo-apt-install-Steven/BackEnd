import colecaogenero from "../../dados/dados.js";

export const buscarUfs = () => {
    return colecaoUf;
}

export const buscarUfsporGenero = (generoUf) => {
    return colecaoUf.filter(uf => uf.genero.toLowerCase().includes(generoUf.toLowerCase()));
};

export const buscarUfsporPlataforma = (uf) => {
    const plataformaUf = uf.toUpperCase();
    return colecaoUf.find(uf => uf.plataforma === plataformaUf);
};



export const buscarUfPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
}


