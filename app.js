function buscar() {

    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;

    //se o campopesquisa for igual a string vazia
    if (campoPesquisa== "") {
    // ou poderia usar (!campoPesquisa)
        section.innerHTML = "<h2>Pesquise por algum produto</h2> !"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    console.log(campoPesquisa);

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) { 
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += ` 
            <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a> 
            </h2>
            <p class="descricao_meta">${dado.descricao}</p>
            <a href= ${dado.link} target="_blank">Comprar</a>
            </div> 
            `;
        }
    console.log(dado.titulo.includes(campoPesquisa));
    }

    if(!resultados){
        resultados = "<h2> Nenhum produto encontrado! </h2> "
    }


        section.innerHTML = resultados;

}
