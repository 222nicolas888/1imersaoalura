## ** Dead by DayShop - Projeto feito na Imersão Dev com Google Gemini da Alura**

### **Descrição**

O Dead by DayShop é uma aplicação web simples que permite aos usuários pesquisar por produtos relacionados ao jogo Dead by Daylight. A aplicação busca por termos em títulos, descrições e tags dos produtos, exibindo os resultados de forma clara e concisa.

### **Funcionalidades**

* **Pesquisa:** Permite aos usuários pesquisar por produtos utilizando palavras-chave.
* **Resultados dinâmicos:** A lista de resultados é atualizada em tempo real conforme o usuário digita na caixa de pesquisa.
* **Detalhes do produto:** Para cada produto encontrado, são exibidos o título, uma breve descrição e um link para compra.

### **Tecnologias Utilizadas**

* **HTML:** Estrutura básica da página, definindo os elementos da interface do usuário.
* **CSS:** Estiliza a página, definindo a aparência dos elementos e a disposição do layout.
* **JavaScript:** Cria a interatividade da aplicação, permitindo a pesquisa e a atualização dos resultados.

### **Como Funciona**

1. **Interface do Usuário:** O usuário interage com a aplicação através de uma caixa de texto para inserir o termo de pesquisa e um botão para iniciar a busca.
2. **Evento de Clique:** Ao clicar no botão "Buscar", a função `buscar()` em JavaScript é executada.
3. **Recuperação dos Dados:** A função `buscar()` obtém o valor digitado pelo usuário na caixa de pesquisa e busca por correspondências nos dados dos produtos (armazenados em um arquivo JavaScript separado, `dados.js`).
4. **Filtragem dos Resultados:** A função itera sobre os dados dos produtos, verificando se o termo de pesquisa está presente no título, descrição ou tags de cada produto.
5. **Atualização da Interface:** Os resultados da pesquisa são concatenados em uma string HTML e inseridos no elemento `<section>` com o ID "resultados-pesquisa", substituindo o conteúdo anterior.
6. **Exibição dos Resultados:** A página é atualizada para exibir a lista de produtos encontrados, com os detalhes de cada produto.

### **Estrutura do Projeto**

* **index.html:** Arquivo principal da aplicação, contendo a estrutura HTML da página.
* **style.css:** Arquivo CSS responsável por estilizar a página.
* **app.js:** Arquivo JavaScript contendo a lógica da aplicação, incluindo a função de busca.
* **dados.js:** Arquivo JavaScript contendo os dados dos produtos (um array de objetos).

### **Como Executar**

1. **Clonar o repositório:** Clone este repositório para o seu computador local.
2. **Abrir em um editor de código:** Abra os arquivos do projeto em um editor de código de sua preferência (Visual Studio Code, Sublime Text, etc.).
3. **Abrir no navegador:** Abra o arquivo `index.html` em um navegador web para visualizar a aplicação.

### **Observações**

* **Dados dos produtos:** Os dados dos produtos são armazenados em um arquivo JavaScript separado para facilitar a manutenção e a organização do código.
* **Otimizações:** A aplicação pode ser otimizada para realizar buscas mais complexas, como pesquisa por múltiplas palavras-chave ou filtragem por categorias.
* **Melhorias:** A interface do usuário pode ser melhorada com a adição de mais recursos, como paginação de resultados, ordenação por relevância e filtros adicionais.

**Contribuições:**
Se você deseja contribuir para este projeto, fique à vontade para abrir um pull request.

**Agradecimentos:**
Rafaella Ballerini (Instrutora front-end @ Alura)
Guilherme Lima (Tech Educator e Professor na Alura e na USP)
Luciano Martins (Developer Advocate, Google IA.)

**Este README.md fornece uma visão geral da aplicação Dead by DayShop. Para mais detalhes, consulte o código fonte.**

