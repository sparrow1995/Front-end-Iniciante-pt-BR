-------------------------------- Data Visualizarion ----------------------------------------

------------------		 Adicione Document Elements com D3 		----------------------------

 D3 tem muitos métodos q deixa vc adicionar e mudar elementos em seu documento.

 O método select() seleciona um elemento do documento. Isso recebe um argumento para o nome do
elemento q vc quer e retorna um nó HTML para o primeiro elemento no documento que combina o nome.
Aqui um exemplo:

const anchor = d3.select("a");

 O exemplo acima procura a primeira tag âncora na página e salva um nó HTML para ele na variavel
anchor. Vc pode usar a seleção com outros métodos. A parte do d3 no exemplo é uma referencia para o objeto D3, q é como vc acessa métodos D3.

 Dois outros métodos úteis são append() e text().

 O método append() recebe um argumento para o elemento q vc quer adcionar para o documento.Ele
acrescenta um nó HTML para o item selecionado, e retorna um identificador para aquele nó.

 O método text() também define o texto do nó selecionado, ou pega o texto atual. Para definir o
valor, vc passa uma string como um argumento dentro dos parenteses do método.

 Aqui um exemplo q seleciona uma lista não ordenada, acrescenta uma lista item, e adiciona texto:

d3.select("ul")
  .append("li")
  .text("Very important item");

 D3 permite vc acorrentar muitos métodos juntos com periodos para executar um número de ações em 
sequência.

---------------------------------------------------------------------------------------------

 Use o método select para selecionar a tag body no documento. Depois append uma tag h1 para isso,
e adcione o text Learning D3 no elemento h1.

<body>
  <script>
    // Add your code below this line
    d3.select("body")
      .append('h1')
      .text('Learning D3')
    // Add your code above this line
  </script>
</body>

----------------------------------------------------------------------------------------------

--------------------	 Selecione um grupo de elementos com D3		--------------------------

 D3 também tem o método selectAll() para selecionar um grupo de elementos. Ele retorna um array
de nós HTML para todos os items no documento que combinam com o string inserido. Aqui um exemplo
de como selecionar todas as tags anchor em um documento:

const anchors = d3.selectAll("a");

 Como o método select(), o método selectAll() suporta acorrentamento, e vc pode usar isso com
outros métodos.

---------------------------------------------------------------------------------------------

 Selecione todos as tags li no documento, e mude seus textos para a strin list item acorrentando
o método .text().

<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    // Add your code below this line
    const lis = d3.selectAll("li")
                  .text('list item');
    // Add your code above this line
  </script>
</body>

--------------------------------------------------------------------------------------------

---------------------		Trabalhando com Dados em D3		--------------------------------

 A biblioteca D3 se concentra em uma abordagem baseada em dados. Quando vc tem um conjunto de
dadoss, vc pode aplicar métodos D3 para mostrar isso na página. Dados vem em vários formatos, mas esse desafio usa um simples array de números.

 O primeiro passo é informar o D3 sobre os dados. O método data() é usado em uma seleção de
elementos DOM para atribuir o dado para esses elementos. O conjunto de dados como um argumento para o método.

 Um fluxo de trabalho comum pari é para criar um novo elemento no documento para cada pedaço de
dado no conjunto. D3 tem o método enter para esse propósito.

 Quando enter() é combinado com o método data(), ele procura pelos elemento selecionados na
página e compara eles como o número de dados items no conjunto. Se houver menos elementos que itens de dados, ele cria os elementos ausentes.

 Aqui um exemplo q seleciona um elemento ul e cria uma nova lista de itens baseado no número de
entradas no array:

<body>
	<ul></ul>
	<script>
		const dataset = ["a", "b", "c"];
		d3.select("ul").selectAll("li")
		  .data(dataset)
		  .enter()
		  .append("li")
		  .text("New item");
	</script>
</body>

 Isso pode parecer confunso para selecionar elementos que não existem ainda. Esse código está
mandando D3 para primeiro selecionar o ul na página. Depois, selecionar todas as lista de itens, que retorna uma seleção vazia. Depois o método data() mostra o conjunto de dados e executa o seguinte código três vezes, uma vez para cada item no array. O método enter() vê se não tem elementos li na página, mas ele precisa de 3 ( um para cada pedaço de dado no dataset ). Novos 
elementos li são acrescentados para o ul e tem o texto New item.

--------------------------------------------------------------------------------------------

 Selecione o nó body, depois selecione todos os elementos h2. Tendo criado d3 e acrescente uma
tag h2 para cada item no array dataset. O texto no h2 deverá dizer New Title. Seu código deverá usar os métodos data() e enter().

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    // Add your code below this line
    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title");
    // Add your code above this line
  </script>
</body>

--------------------------------------------------------------------------------------------

---------------- 		Trabalhando com Dados Dinâmicos no D3		------------------------

 Os últimos dois desafios cobriram os básicos de mostrar dados dinâmicamente com d3 usando os
métodos data() e enter(). Esses métodos recebem um conjunto de dados e, juntos com o método append(), cria um novo elemento DOM para cada entrada no conjunto de dados.

 No desafio passado, vc criou um novo elemento h2 para cada item no array dataset, mas todos
eles continham o msm texto, New Title. Isso é porque vc n mandou usar o dado q é vinculado para cada um dos elementos h2.

 O método text() do D3 pode receber uma string ou uma função callback como argumento:

selection.text((d) => d)

 No exemplo acima, o parâmetro d refere para uma única entrada no dataset q uma seleção é
vinculada para.

 Usando o atual exemplo como contexto, o primeiro elemento h2 é vinculado para 12, o segundo
elemento h2 é vinculado ao 31, o terceiro ao 22, e assim por diante.

--------------------------------------------------------------------------------------------

 Mude o método text() para que cada um elemento h2 mostra o valor correspondente do array dataset
com um único espaço e a string USD. Por exemplo, o primeiro cabeçalho deverá ser 12 USD.

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      // Add your code below this line

      .text((d) => d + " USD");

      // Add your code above this line
  </script>
</body>

-------------------------------------------------------------------------------------------

-------------------		Adicione Estilo em linha para elementos		-----------------------

 D3 permite vc adicionar inline CSS styles em elementos dinâmicos com o método style().

 O método style() recebe um par de valor-chave separado por vírgula como argumento. Aqui um
exemplo para definir o texto selecionado para cor azul:

selection.style("color", "blue");

-------------------------------------------------------------------------------------------

 Adicione o método style() para o código no editor para fazer todo o texto mostrado ter a 
font-family de verdana.

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // Add your code below this line
      .style("font-family", "verdana");
      // Add your code above this line
  </script>
</body>

------------------------------------------------------------------------------------------

-------------------		Mude Estilos baseados no dados 			--------------------------

 D3 é sobre visualização e apresentação de dado. Isso é como vc irá querer mudar o estilo de 
elementos baseado no dado. Vc pode usar uma função callback no método style() para mudar o estilo para elementos diferentes.

 Por exemplo, vc pode querer colorir um dado ponto azul se ele tem um valor menor q 20, e 
vermelho caso contrário. Vc pode usar uma função callback no método style() e incluir a condição lógica. A função callback usa o parâmetro d para representar o dado ponto:

selection.style("color", (d) => {
	
});

 O método style() não é limitado a configuração de color -  ele pode ser usado com outras
propriedades CSS tb.

-------------------------------------------------------------------------------------------

 Adicione o método style() para o code no editor e defina a cor dos elementos h2 condicionalmente
. Escreva a função callback então se o valor dado é menor q 20, ele retorna vermelho, caso contrario ele retorna verde.

Note: Vc pode usar if-else logic, ou operador ternario.

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // Add your code below this line
      .style("color", (d) => {
        if(d < 20){
          return "red";
        } else {
          return "green";
        }
      });
      // Add your code above this line
  </script>
</body>

-----------------------------------------------------------------------------------------

----------------------- 		Adicione Classes com D3		-------------------------------

 Usando um monte de estilos em linha em elementos HTML fica dificil de gerenciar, msm para apps
pequenos. É mais fácil adicionar uma classe para elementos e estilos para essas classes uma vez usando regras CSS. D3 tem o método attr() para adicionar qualquer atributo HTML para um elemento, incluindo um nome de classe.

 O método attr() funciona da msm forma q style(). Ele recebe valores separados por virgula, e 
pode usar uma função callback. Aqui um exemplo de como adicionar uma classe de container para uma seleção:

selection.attr("class", "container");

 Perceba q o parametro class ira continuar o msm sempre q vc precisar adicionar uma class e 
somente o parametro container ira mudar.

--------------------------------------------------------------------------------------------

 Adicione o método attr() para o code no editor e coloque uma classe de bar nos elementos div.

<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line
      .attr('class','bar');
      // Add your code above this line
  </script>
</body>

--------------------------------------------------------------------------------------------

------------       Atualize a altura de um elemento dinâmicamente       --------------------

 O último desafio falou sobre como mostrar dado de um array e como adicionar classes CSS. Vc pode
combinar essas lições para criar um simples gráfico de barras. São dois passos para isso:

1.  Crie um div para cada ponto de dado no array

2.  Dê a cada um div uma altura dinâmica, usando função callback no método style q define a altura igual ao valor do dado

Relembre o formato para definir um estilo usando uma função callback:

selection.style("cssProperty", (d) => d)

-------------------------------------------------------------------------------------------

  Adicione o método style() para o code no editor e defina a propriedade height para cada um 
elemento. Use uma função callback para retornar o valor do ponto de dado coma string px adicionada a ele.

<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line
      .style("height", (h) => (h + "px"));
      // Add your code above this line
  </script>
</body>

--------------------------------------------------------------------------------------------

------------------    Mude a Apresentação do gráfico de barras    --------------------------

  O último desafio foi criado um gráfico de barras, mas tem um par de mudança de formação q pode
melhorar isso:

1. Adicione espaço entre cada barra visualmente separando eles, q é feito adicionando uma margin para o CSS para a classe bar

2. Aumente a altura das barras para melhor mostra a diferença em valores, que é feito por múltiplicar o valor de cada número para escala de altura

--------------------------------------------------------------------------------------------

 Primeiro, adicione uma margin de 2px para a classe bar na tag style. Depois, mude a função 
callback no método style() então ele irá retornar um valor 10x o valor do dado original(+ "px").

NOTA: Múltiplicar cada ponto de dado pela mesma constante somente altera a escada. Isso é como dar um zoom para dentro, e isso não muda o significado do dado subjacente.

<style>
  .bar {
    width: 25px;
    height: 100px;
    margin: 2px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d * 10 + "px")) // Change this line
  </script>
</body>

-------------------------------------------------------------------------------------------

------------------------       Aprenda sobre SVG em D3    ---------------------------------

 SVG é abreviação para Scalable Vector Graphics.

 Aqui "scalable" significa q, se vc dar um zoom pra dentro ou pra fora em um objeto, ele não irá
parecer pixelado. Isso escala com o display do sistema, quer ele esteja num celular de tela pequena ou num monitor de TV grande.

 SVG é usado para fazer corpos geometricos comuns. Desde D3 mapea dado em uma representação 
visual, isso usa SVG para criar os corpos para a visualização. Corpos SVG por uma uma web page irá junto a uma tag HTML svg.

 CSS pode ser escalável quando usa estilos de unidades relativas(como vh, vw, ou 
porcentagens), mas usando SVG é mais flexivél para contruir visualizações de dados.

------------------------------------------------------------------------------------------

 Adicione um nó svg para o body usando append(). Dê a isso um atributo width definido para a 
constante w apresentada e um atributo height apresentado por h usando o método attr() ou style() para cada um. Você irá ver isso na saída porque tem um background-color  de rosa aplicado para isso na tag style.

NOTA: Quando usando attr() atributos width e height não precisa usar unidades. Esse é o bloco de construção de escala - o elemento irá sempre ter uma razão 5:1 para largura e altura , não importa qual o level de zoom é.

<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", 500)
                  .style("height", 100 + "px")
  </script>
</body>

-----------------------------------------------------------------------------------------

------------------------   Mostrando corpos com SVG   -----------------------------------

 O último desafio foi criado um elemento svg com uma dada largura e altura, que fica visivel por 
causa dele ter um background-color aplicada para isso na tag style. O code abriu espaço para a largura e altura fornecidas.

 O próximo passo é criar um corpo para por na area svg. Tem um número de corpos suportados em
SVG, como os retangulos e circulos. Eles são usados para exibir dados. Por exemplo, um 
retangulo(<rect>) corpo SVG poderá criar uma barra em um gráfico de barras.

 Quando vc colocar um corpo em uma area svg, vc pode especificar pra onde ele vai com coordenadas
x e y. O ponto origem de (0,0) é no canto superior esquerdo. Valores positivos para x empurram o corpo para a direita, evalores positivos para y empurram o corpo para baixo do ponto origem.

 Para colocar um corpo no meio do 500(width)x100(height) svg do último desafio, a coordenada x 
irá ser 250 e a coordenada y irá ser 50.

 Um rect SVG tem quatro atributos. Tem as coordenadas x e y para onde isso pe colocado na área 
svg. Isso tb tem uma especificação de tamanho de altura(height) e largura(width).

-----------------------------------------------------------------------------------------

 Adicione um corpo rect para o svg usando append(), e dê a isso um atributo width de 25 e height
de 100. Tambem, dê a rect os atributos de x e y definidos para 0 em cada um.

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  .append("rect")
                  .attr("width", 25)
                  .attr("height", 100)
                  .attr("x",0)
                  .attr("y",0)
  </script>
</body>

----------------------------------------------------------------------------------------

--------------  Crie uma Barra para cada ponto de dado no conjunto  --------------------

 O último desafio adicionou somente um rentagulo para o elemento svg para reprensentar uma barra.
Aqui, vc irá combinar o que vc aprendeu até agora sobre data(), enter(), e corpos SVG para criar e acrescentar um retangulo para cada um ponto de dado num conjunto de dados(dataset).

 Um desafio passado mostrou o formato para como criar e acrescentar um div para cada um item num
dataset:

d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")

 Tem algumas pequenas diferenças trabalhando com elementos rect invés de elementos div. Os 
elementos rect devem ser acrescentados a um elemento svg, não diretamente ao body. Também, vc precisa falar para o D3 onde colocar cada elemento rect na area svg. O lugar da barra irá ser coberta no próximo desafio.

----------------------------------------------------------------------------------------

Use os métodos data(), enter(), e append() para criar e acrescentar um rect para cada item em um dataset. As barras devem exibir todos no topo de cara um outro; isso irá ser consertado no próximo desafio.

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>

----------------------------------------------------------------------------------------

---------   Dinâmicamente definindo as coordenadas para cada uma barras  ---------------

 No último desafio foi criado e acrescentado um retangulo para o elemento svg para cada ponto de
dados no dataset para representar uma barra. Infelizmente, eles foram todos empilhados um em cima do outro.

 O posicionamento de um retangulo é manipulado por atributos x e y. Eles falam pro D3 onde 
começar a desenha o corpo na area svg. O último desafio define cada um deles para 0, então todas as barra foram posicionadas no canto superior esquerdo.

 Para um gráfico de barras, todos as barras deveram sentar no msm level vertical, que significa
o valor y continua o msm(no 0) para todas as barras. O valor x, contudo, precisa mudar quando vc adiciona novas barras. Relembre q valores x maiores empurram os items mais distantes para a direita. Como vc vai pelos elementos do array no dataset, o valor x deverá aumentar.

 O método attr() em D3 aceita uma função callback para definir dinâmicamente aquele atributo. A
função callback recebe dois argumentos, um para cada ponto de dado dele msm(geralmente d) e um para o index do ponto de dado no array. O segundo argumento para o index é opcional. Aqui está o formato:

selection.attr("property", (d, i) => {
  
});

 É importante perceber q vc não irá precisar escrever um loop for ou usar forEach() para iterar 
sobre os itens no dataset. Relembre q o método data() analisa o dataset, e qualquer método acorrentado depois de data() é executado uma vez para cada item no data set.

-----------------------------------------------------------------------------------------

Modifique o atributo x numa função callback então isso retornará o index * 30;

NOTA: Cada barra tem uma largura de 25, então aumente cada um dos valores x por 30 adicionando algum espaço entre as barras. Qualquer valor maior que 25 irá funcionar nesse exemplo.

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => {
        return i * 30
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>

------------------------------------------------------------------------------------------

-------------    Dinâmicamente mudando a altura de cada barra   --------------------------

 A altura de cada barra pode ser definida para o valor do ponto de dado no array, parecido de 
como o valor de x foi definido dinâmicamente.

selection.attr("property", (d, i) => {
  
});

Aqui d irá ser o valor do ponto de dado, e i irá ser o index do ponto de dado no array.

-----------------------------------------------------------------------------------------

 Mude a função callback para o atributo height para retornar o valor do dado * 3.

NOTA: Relembre q múltiplicar todos os pontos de dados pela mesma constanta escala o dado (como dar zoom pra dentro). Isso ajuda a ver a diferença entre os valores das barras no exemplo.

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         return d * 3
       });
  </script>
</body>

----------------------------------------------------------------------------------------

---------------------------     Inverta elementos SVG     ------------------------------

 Voce pode ter percebido que o gráfico de barras se parece que está de cima para baixo, ou
invertido. Isso é por cause de como SVG usa as coordenadas (x, y).

 Em SVG, o ponto origem para as coordenadas é no canto superior esquerdo. Uma coordenada x de 0 
posiciona um corpo na borda esquerda da area SVG. Uma coordenada y posiciona um corpo na borda superior da area SVG. Valores mais altos de x empurram o retangulo para a direita. Valores mais altos de y empurra o retangulo para baixo.

 Para fazer o lado direito para cima, vc precisa mudar a forma q a coordenada y é calculada. Isso
precisa contar para ambos a height da barra e a altura total da area SVG.

 A altura da area SVG é 100. Se vc tem um ponto de dado de 0 no conjunto, vc irá precisar q a 
barra comece na parte de baixo da area SVG (não no topo). Para fazer isso, a coordenada y precisa de um valor de 100. Se o valor do ponto de dado for 1, vc irá começar com a coordenada y de 100 para definir a barra na parte de baixo. Depois vc precisa considerar para a alturada barra de 1, então a coordenada final de y irá ser 99.

 A coordenada y q é y = heightOfSVG - heightOfBar irá posicionar as barras right-side-up.

---------------------------------------------------------------------------------------

 Mude a função callback para o atributo y para definir as barras da direita para cima. Relembre q
a altura da barra é 3 * o valor do dado d.

NOTA: De modo geral, a relação é y = h - m * d, onde m é a constante q escala os pontos de dado.

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => {
         return h - 3 * d;
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
  </script>
</body>

---------------------------------------------------------------------------------------

------------------      Mude a cor de um elemento SVG       ---------------------------

 As barras estão na posição correta, mas elas estão todas na msm cor preta. SVG tem uma forma 
para mudar a cor das barras.

 Em SVG, um corpo é colorido com o atributo fill. Isso suporta hex codes, nomes de cores, e 
valores rgb, assim como opções mais complexas como gradientes e transparencias.

--------------------------------------------------------------------------------------

Adicione um método attr() definido o fill de todas as barras para a cor navy.

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");
  </script>
</body>

----------------------------------------------------------------------------------------

------------------    Adicione Etiquetas para elementos D3    --------------------------

 D3 permite vc etiquetar um elemento gráfico, como uma barra, usando o elemento SVG text.

 Como o elemento rect, um elemento text precisa ter atributos x e y, para posicionar isso na tela
SVG. Isso tb precisa acessar o dado da tela para esses valores.

 D3 te da um alto nível de controle sobre como vc etiqueta suas barras.

--------------------------------------------------------------------------------------

 O code no editor já liga o dado de cada novo elemento text. Primeiro, acrescente nós text para o
svg. Depois, adicione atributos para as coordenadas x e y. Eles irão ser calculados da msm forma como cada rect, exceto o valor y para text deverá fazer uma etiqueta q senta 3 unidades maior q a barra. Terminando, use o método D3 text() para definir a etiqueta igual ao valor do ponto de dado.

NOTA: Para a etiqueta sentar mais alto que a barra, decida se o valor y para o text deve ser 3 maior ou 3 menor q o valor de y para a barra.

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d - 3)
       .text((d, i) => d);
  </script>
<body>

---------------------------------------------------------------------------------------------

---------------------------    Estilize etiquetas D3    -------------------------------------

 Métodos d3 podem adicionar estilos para as etiquetas das barras. O atributo fill defini a cor do
texte para um nó text. O método style() define regras CSS para outros estilos, como font-family ou font-size.

---------------------------------------------------------------------------------------------

 Defina a font-size dos elementos text para 25px, e a cor do texto para vermelho.

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .style("font-size", 25 + "px")
       .attr("fill", "red");
  </script>
</body>

--------------------------------------------------------------------------------------------

------------------   Adicione um efeito pairar para o elemento D3    -----------------------

 É possivel adicionar efeitos q iluminem uma barra quando o usuario paira sobre isso com o mouse.
Até agora, o estilizamento para retangulos é aplicado com o build-in D3 e métodos SVG, mas vc pode usar CSS da mesma forma.

 Você define a classe CSS nos elementos SVG com o método attr(). Depois a pseudo-classe :hover 
para sua nova classe segurar as regras de estilo para quaisquer efeitos hover.

--------------------------------------------------------------------------------------------

 Use o método attr() para adicionar uma classe de bar para todos os elementos rect. Isso muda a
cor do fill da barra para marrom quando vc passar o mouse sobre isso.

<style>
  .bar:hover {
    fill: brown;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy")
       .attr("class", "bar")

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);

  </script>
</body>

-------------------------------------------------------------------------------------------

-------------   Adicione uma ferramenta de dica para um elemento D3   ---------------------

 Uma ferramenta de dica mostra informação sobre um item na page quando o usuario paira sobre 
aquele item. São várias as maneiras de adicionar um tooltip para uma visualização, esse desafio usa o elemento d3 title.

 Pares title com o método text() para adicionar dinâmicamente dado para as barras.

-------------------------------------------------------------------------------------------

 Acrescente um elemento title em baixo de cada nó rect. Depois chame o método text() com uma 
função callback então o texto exibe o valor dado.

<style>
  .bar:hover {
    fill: brown;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       .append("title")
       .text((d) => d)

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

  </script>
</body>

----------------------------------------------------------------------------------------------

--------------------    Crie um gráfico de dispersão com circulos    -------------------------

 Um gráfico de dispersão é outro tipo de visualização. Isso geralmente usa circulos para mapear
pontos de dados, que tem dois valores cada. Esses valores laçam os eixos x e y, e são usados para posicionar o circulo na visualização.

 SVG tem uma tag circle que cria um corpo circular. Isso funciona muito parecido com os elementos
rect que vc usou no gráfico de barras.

---------------------------------------------------------------------------------------------

 Use os métodos data(), enter(), e append() para ligar dataset para novos elementos circle que
são acrescentados para a tela SVG.

NOTA: Os circulos não serão visiveis porque nós não termos definidos seus atributos ainda. Nós iremos fazer isso no próximo desafio.

<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")     
  </script>
</body>

--------------------------------------------------------------------------------------------

-----------------   Adicione atributos para os elementos circle    -------------------------

 No último desafio foi criado os elementos circle para cada ponto no dataset, e eles foram
acrescentados à tela SVG. Mas D3 precisa de mais informação sobre a posição e tamanho de cada circle para mostra-los corretamente.

 Um circle em SVG tem três atributos principais. Os atributos cx e cy são coordenadas. Ele falará
ao D3 onde posicionar o centro do corpo na tela SVG. O raio (atributo r) da o tamanho ao circle.

 Como a coordenada y em rect, o atributo cy para um circle é significada do topo da tela SVG, não
de baixo.

 Todos os três atributos podem usar função callback para definir seus valores dinâmicamente. 
Relembra que todos métodos acorrentados depois de data(dataset) executam uma vez por cada item no dataset. O parâmetro d na função callback referencia o atual item no dataset, que é um array para cada ponto. Vc usa bracket notation, assim d[0], para acessar valores naquele array.

--------------------------------------------------------------------------------------------

 Adicione os atributos cx, cy e r para os elementos circle. O valor cx deverá ser o primeiro 
número no array para cada item no dataset. O valor cy deverá ser baseado fora do segundo número no array, mas certifique-se de exibir o gráfico lado-direita-cima e não invertida. O valor r deverá ser 5 para todos os circles.

<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => d[0])
       .attr("cy", (d) => h - d[1])
       .attr("r", 5);

  </script>
</body>

---------------------------------------------------------------------------------------------

-------------   Adicionar etiquetas para gráficos de dispersão circulares    ----------------

 Você pode adicionar texto para criar etiquetas para pontos em gráfico de dispersão.

 O objetivo é exibir os valores separados por virgula para os campos primeiro(x) e segundo(y) de
cada um item no dataset.

 Os nós text precisam dos atributos x e y para posicionar isso na tela SVG. Nesse desafio, o 
valor y(que determina a altura) pode usar o mesmo valor que é o circle usa para esse atributo cy. O valor x pode ser um pouco maior q o valor do cx do circle, então a etiqueta é visivel. Isso irá empurrar a etiqueta para o a direita do ponto gráfico.

--------------------------------------------------------------------------------------------

 Etiquete cada ponto no gráfico de dispersão usando elementos text. O text da etiqueta deverá ser dois valores separados com uma vírgula e um espaço. Por exemplo, a etiqueta para pimeiro ponto é 34, 78. Defina o atributo x então isso terá 5 unidades mais q o valor q vc usou para o atributo cx no circle. Defina o atributo y da mesma forma que é usada para o valor cy no circle.

<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d) => d[0] + 5)
       .attr("y", (d) => h - d[1])
       .text((d) => (d[0] + ', ' + d[1]))
  </script>
</body>

--------------------------------------------------------------------------------------------

--------------------------   Crie uma escala linear com D3   -------------------------------

 A barra e o gráfico de dispersão ambos mapeiam dados diretamente pela tela SVG. Contudo, se a
altura de uma barra ou um dos pontos de dados forem maior que aos valores de largura e altura SVG, isso irá sair da area SVG.

 No D3, exitem escalas para ajudar a mapear dados. scales são função que falam para o programa
como mapear um conjunto de pontos de dados cru em pixels da tela SVG.

 Por exemplo, digamos que vc tem uma tela SVG de tamanho 100x500 e voce quer mapear par Gross
Domestic Product(GDP) para um número de Regiões. O conjunto de números irá estar em um range de bilhões ou trilhões. Voce apresenta D3 um tipo de scale para falar a isso como posicionar os maiores valores GDP dentro daquela area 100x500.

 É improvavel que vc plote os dados brutos no estado em que se encontram. Antes de mapear isso,
vc define a escala para seu conjunto de dados inteiro, então aqueles valores de x e y encaixam na sua largura e altura de tela.

 D3 tem muitos tipos de escalas. Para uma escala linear(normalmente usado com dados
quantitativos), tem o método D3 scaleLinear():

const scale = d3.scaleLinear()

 Por padrão, uma escala usa a identificação de relação. O valor do input é o mesmo do valor do
output. Um desafio separado cobre como mudar isso.

--------------------------------------------------------------------------------------------

 Mude a variavel scale para criar uma escala linear. Depois defina a variavel output para a 
escala chamada com um argumento de entrada de 50.

<body>
  <script>
    // Add your code below this line

    const scale = d3.scaleLinear(); // Create the scale here
    const output = scale(50); // Call scale with an argument here
    
    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>

-------------------------------------------------------------------------------------------

------------------   Defina um dominio e um range em uma escala   -------------------------

 Por padrão, escalas usam identidade de relação. Isso quer dizer que o valor de entrada mapeia
para o valor de saida. Contudo, escalas podem ser muito mais flexiveis e interessantes.

 Digamos um dataset tem valores num range de 50 a 480. Isso é a informação de entrada para a 
escala, tambem conhecido como domain.

 Voce quer mapear esses pontos ao longo do eixo x na tela SVG, entre 10 e 500 unidades. Essa é
a informação de saida, tambem conhecida como range.

 Os métodos domain() e range() definem esses conjuntos de valores para a escala. Ambos métodos
recebem um array de no minimo dois elementos como um argumento. Aqui um exemplo:

scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)
scale(400)
scale(325)
scale(750)
d3.scaleLinear()

 Em ordem, os seguintes valores serão exibido no console: 10, 500, 323.37, e 807.67.

 Perceba que a escala usa relação linear entre os valores de dominio e range para exibir oque a
saida deverá ser para um número recebido. O valor minimo no dominio(50) mapeia sobre o valor minimo(10) no range.

------------------------------------------------------------------------------------------

 Crie uma escala e defina seu dominio para [250, 500] e range para [10, 150].

NOTA: Voce pode acorrentar os métodos domain() e range() na variavel scale.

<body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear();
    scale.domain([250, 500]);
    scale.range([10, 150])
    // Add your code above this line
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>

-----------------------------------------------------------------------------------------

---   Use as funções d3.max e d3.min para encontrar o valores Max e Min num dataset   ---

 Os métodos D3 domain() e range() definem aquela informação para aquela sua escala baseada no
dado. Tem um casal de métodos para tornar isso mais fácil.

 Muitas vezes quando vc define o dominio, vc irá querer usar os valores maximo e minimo com o 
data set. Tentando encontrar esses valores manualmente, especialmente em um data set grande, pode causar erros.

 D3 tem dois métodos - min() e max() para retornar essa informação. Aqui um exemplo:

const exd = [34, 234, 73, 90, 6, 52];
d3.min(exd)
d3.max(exd)

 Um dataset pode ter arrays aninhados, como as coordenadas [x, y] que estão no exemplo de
gráfico de dispersão. Naquele caso, vc precisa falar para d3 como calcular o max e min. Felizmente, ambos os métodos min() e max() recebem uma função callback. Nesse exemplo, o argumento da função callback d é para o atual array interno. O callback precisa retornar o elemento para o array interno(o valor x ou y) sobre oque vc quer para computar o max ou min. Aqui um exemplo para como encontrar os valor min e max com um array de arrays:

const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);

minX irá ter o valor 1.

-----------------------------------------------------------------------------------------

 O array positionData guarda sub arrays de coordenadas x, y e z. Use um método D3 para encontrar
o valor minimo da coordenada z(o terceiro valor) dos arrays e salve isso na variavel output.

<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
    // Add your code below this line

    const output = d3.max(positionData, (d) => d[2]); // Change this line

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>

----------------------------------------------------------------------------------------

-----------------------------   Use escala dinâmica   ----------------------------------

 Os métodos d3 min() e max() são úteis para ajudar a definir a escala.

 Dado um conjunto de dados complexo, uma prioridade é de definir a escala então a visualização
encaixa a largura e altura do container SVG. Voce quer todos os dados traçados dentro da tela SVG então isso é visivel na web page.

 O exemplo abaixo define a escala do eixo x para dados de gráfico de dispersão. O método 
domain() passa informação para a escala sobre valores de dados cru para o gráfico. O método range() da essa informação sobre o atual espaço na web page para a visualização.

 No exemplo, o dominio vai de 0 para o max no conjunto. Isso usa o método max() com uma função
callback baseado no valor x nos arrays. O range usa a largura(w) da tela SVG, mas isso inclui um pouco de padding, tambem. Isso coloca espaço entre os pontos do gráfico de dispersão e a beira da tela SVG.

const dataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123]
];

const w = 500;
const h = 500;

const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);

 O paddign pode ser confuso no começo. Imagine o eixo x como um linha horizontal de 0 a 500(o
valor da largura da tela SVG). Incluindo o padding no método range() força o gráfico a começar no 30 ao longo da linha (invés de 0), e parar no 470 (invés de 500).

-----------------------------------------------------------------------------------------

 Use a variavel yScale para criar uma escala linear para o eixo y. O dominio deve começar no 0 e
vai até o maximo valor y no conjunto. O range deve usar a altura (h) do SVG e incluir padding.

NOTA: Relembre de mantem o gráfico para cima. Quando vc define o range para coordenadas y, o maior valor (altura - padding) é o primeiro argumento, e o menor valor é o segundo argumento.

<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];

    const w = 500;
    const h = 500;

    // Padding between the SVG canvas boundary and the plot
    const padding = 30;

    // Create an x and y scale

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // Add your code below this line

    const yScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[1])])
                    .range([h - padding, padding]);
    // Add your code above this line

    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>

--------------------------------------------------------------------------------------------

-------------   Use uma escala pré-definida para posicionar elementos   --------------------

 Com as escalas definidas, é hora de mapear o gráfico de dispesão novamente. A escala são como
processar funções que tornam o dado cru de x e y em valores que cabem e renderizam corretamente na tela SVG. Eles mantem o dado com a area de tela traçada.

 Vc define os valores do atributo coordenada para o corpo SVG com a função escala. Isso inclui 
os atributos x e y para elementos rect ou text, ou cx e cy para circle. Aqui um exemplo:

shape
  .attr("x", (d) => xScale(d[0]))

 Scales define o atributo coordenada do corpo para posicionar os pontos de dados na tela SVG.
Vc n precisa aplicar escalas quando vc exibe o valor atual do dado, por exemplo, no método text() para um tooltip ou etiqueta.

-------------------------------------------------------------------------------------------

 Use xScale e yScale para posicionar ambos corpos circles e text na tela SVG. Para os circles,
aplique a escala definindo os atributos cx e cy. Dê a eles um raio de 5 unidades, tambem.

 Para os elementos text, aplique a escala definindo os atributos x e y. As etiquetas devem estar
fora do alinhamento para a direita dos pontos. Para fazer isso, adicione 10 unidades para o valor de x antes de passar isso para o xScale.

<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy", (d) => yScale(d[1]))
       .attr("r", 5)
       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))
       // Add your code above this line
  </script>
</body>

-------------------------------------------------------------------------------------------

---------------------   Adicione eixos para a visualização    -----------------------------

 Outra forma de melhorar o gráfico de dispersão é adicionando um eixo x e um eixo y.

 D3 tem dois métodos, axisLeft() e axisBottom(), para renderizar o eixo x e y, respectivamente.
Aqui um exemplo para criar o eixo x baseado no xScale no último exemplo:

const xAxis = d3.axisBottom(xScale);

 O próximo passo é renderizar o eixo na tela SVG. Para fazer entao, vc pode usar um componente
principal SVG, o elemento g. O g representa grupo. Diferente de rect, circle, e text, um eixo é somente uma linha reta quando ele é renderizado. Porque isso é um corpo simples, usando g funciona. O último passo é aplicar o atributo transform para posicionar o eixo na tela SVG no lugar certo. Caso contrário, a linha irá renderizar ao longo da borda da tela canvas e não irá ser visivel. SVG suporta tipos diferentes de transforms, mas posicionando um eixo precisa translate. Quando isso é aplicado para o elemento g, isso move todo o grupo para cima e para baixo nas quantidades fornecidas. Aqui um exemplo:

const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);

 O código acima posiciona o eixo x na parte de baixo da tela SVG. Depois isso é passado como um
argumento para o método call(). O eixo y funciona da mesma forma, exceto o argumento translate é em forma(x, 0). Porque translate é uma string no método attr() acima, vc pode usar concatenação para incluir valores de variaveis para esses argumentos.

------------------------------------------------------------------------------------------

 O gráfico de dispersão agora tem um eixo x. Crie um eixo y em uma variavel chamada yAxis
usando o método axisLeft(). Depois renderize o eixo usando o elemento g. Certifique-se de usar um atributo transform para traduzir o eixo pela quantidade de unidades padding certa, e 0 unidades para baixo. Relembre de call() o eixo.

<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);
    // Add your code below this line
    const yAxis = d3.axisLeft(yScale);
    // Add your code above this line

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

    // Add your code below this line
    svg.append("g")
       .attr("transform", "translate(" + padding + ",0)")
       .call(yAxis);
    // Add your code above this line

  </script>
</body>

----------------------------------------------------------------------------------------------