houseFactory = (comodos, banheiros, quartos, cor) => {
    return{
        comodos,
        banheiros,
        quartos,
        cor,
        anuncio : () => {
            console.log("tá a venda!")
        }
        //this could be written like "comodos: comodos..."
    }
}

mansaoDoLucioano = houseFactory(150, 32, 21, 'branco');

mansaoDoLucioano.anuncio()