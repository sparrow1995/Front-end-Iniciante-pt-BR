/* --------------------------------------------------------------------------------------------
                          Guarde dados com variáveis SASS

 Uma caracteristica de SASS q é diferente de CSS é q ele usa variáveis. Elas são declaradas e 
definidas para guardar dados, igual a JS.

 Em JS, variáveis são definidas usando let e const keywords. Em SASS, variáveis começam com um 
$ seguido da nome da variável.

Aqui alguns exemplos:

$main-fonts: Arial, sans-serif;
$headings-color: green;

E para usar as variáveis:

h1 {
  font-family: $main-fonts;
  color: headings-color;
}

Um exemplo onde variáveis são úteis é quando um número de elementos precisam ser da msm cor. Se
essa cor é mudada, o único lugar para editar o code é o valor da variável.

-------------------------------------------- ------------------------------------------------

Crie uma variável $text-color e defina-a para red. Depois mude o valor de color property para o
.blog-post e h2 para a variável $text-color.

<style type='text/scss'>
$text-color: red;
  h2 {
    color: $text-color;
  }
  .blog-post {
    color: $text-color;
  }
  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: red;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>

--------------------------------------------------------------------------------------------

                                  Aninhe CSS com SASS

 SASS permite o aninhamento de regras CSS, q é uma forma útil de organizar a folha de estilhos.

 Normalmente, cada elemento é apontado em uma linha diferente para estilizar isso, desse jeito:

nav {
  background-colo: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}

 Para um amplo projeto, o arquivo CSS irá ter mts linhas e regras. Isso é onde aninhamento pode
ajudar a organizar seu code colocando child style rules com o respectivo parent elements:

nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}

----------------------------------------------  ------------------------------------------

Use a técnica de aninhamento mostrada acima para re-organizar as regras CSS para ambos filhos
do elemento .blog-post. Para testar esse proposito, o h1 deve vir antes do elemento p.


<style type='text/scss'>
  .blog-post {
      h1 {
        text-align: center;
        color: blue;
      }
      p {
        font-size: 20px;
      }
    
  }
</style>

<div class="blog-post">
  <h1>Blog Title</h1>
  <p>This is a paragraph</p>
</div>

-----------------------------------------------------------------------------------------

                            Crie CSS Reusaveis com Mixins

 Em SASS, um mixin é um grupo de declarações CSS q pode ser reusado fora da style sheet.

 Novas caracteristicas CSS levam tempo até elas serem totalmente adotadas e prontas para uso em
todos os navegadores. Umas caracteristicas são adicionadas para navegadores, CSS rules usando eles
podem precisar de prefixos vendedores. Cosidere box-shadow:

div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}

 Isso é mt coisa para re-escrever essa regra para todos elementos q tem um box-shadow, ou para
mudar cada valor para testar diferentes efeitos. Mixins são como funções para CSS. Aqui como é
escrito um:

@mixin box-shadow($x, $y, $blur, $c) {
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}

 A definição começa com @mixin seguido por um nome personalizado. Os parametros(o $x, $y, $blur,
e $c no exemplo acima) são opcionais. Agr toda vez um box-shadow rule é preciso, somente uma
única linha chamando o mixin subistitui tendo par tipo todos os vendo prefixes. Um mixin é 
chamado com o @include directive:

div {
  @include box-shadow(0px, 0px, 4px, #fff);
}

------------------------------------------- --------------------------------------------

Escreva um mixin para border-radius e dê a ele um parâmetro $radius. Ele deverá usar todos os vendor
prefixes do exemplo. Depois use o border-radius mixin para dar o #awesome element um border radius
de 15px.

<style type='text/scss'>
  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    border-radius: $radius;
  }


  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>

----------------------------------------------------------------------------------------

                Use @if e @else para adicionar lógica para seus estilos

 A diretriz @if em SASS é útil para testar um caso específico - ele funciona como a instrução if
em JS.

@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}

 E como em JS, @else if e @else para mais condições:

@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}

--------------------------------------------  ---------------------------------------------

Crie um mixin chamado border-stroke q recebe um parametro $val. O mixin deve checar usando as
seguintes condições @if, @else if, e @else:

light - 1px solid black
medium - 3px solid black
heavy - 6px solid black

Se $val não é light, medium, ou heavy, a border deve ser definida para none.

<style type='text/scss'>
  @mixin border-stroke($val) {
    @if $val == light {
      border: 1px solid black;
    }
    @else if $val == medium {
      border: 3px solid black;
    }
    @else if $val == heavy {
      border: 6px solid black;
    }
    @else {
      border: none;
    }
  }


  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>

----------------------------------------------------------------------------------------

                        Use @for para criar um loop SASS

 A diretriz @for adicona estilos em um loop, mt similar ao for loop em JS.

 @for é usado de duas formas: "começo ao fim" ou "começo do fim". A principal diferença é q o
"start to end" exclui o número final como parte de uma contagem, e "start through end" inclui
o número final como partes de uma contagem.

Aqui um exemplo start through end:

@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}

 O #{$i} parte é a syntax parar combinar uma variável(i) com texto para fazer uma string. Quando
o arquivo SASS é convertido para CSS, ele se parece com isso:

.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}

Isso é uma forma poderosa para criar um grid layout. Agr vc tem doze opções para colunas widths
disponíveis como classe CSS.

------------------------------------------------- ------------------------------------------

 Escreva uma diretriz @for q receba uma variável $j q vai de 1 ao 6.

 Ele deve criar 5 classes chamadas .text-1 ao .text-5 onde cada uma tem um font-size definido
para 15px multiplicado pelo index.

<style type='text/scss'>
  @for $j from 1 through 6 {
    .text-#{$j} { font-size: 15px * $j }
  }


</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>

--------------------------------------------------------------------------------------------

                  Use @each para mapear sobre items em uma lista

 O último desafio mostrou como a diretriz for usa um starting e ending value para loop um certo
número de vezes. SASS tb oferece a diretriz @each q loop sobre cada item em uma list ou map.
Em cada iteração, a variável é atribuida para o valor atual da lista ou map.

@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}

Um map tem uma pequena diferença no syntax. Aqui um exemplo:

$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}

 Perceba q a variável $key é precisada para referência key in map. Caso contrário, o CSS compilado
irá ter color1, color2... nele. Ambos os codes acima são convertidos no seguinte CSS:

.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}

------------------------------------------------  -------------------------------------------

Escreva uma diretriz @each q vai atrávez de uma lista: blue, black, red e atribua cada variável
para uma class .color-bg, onde a color part muda para cada item. Cada class deve ser definida o
background-color da respectiva cor.

<style type='text/scss'>
  @each $color in blue, black, red {
    .#{$color}-bg {background-color: $color;}
  }


  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>

------------------------------------------------------------------------------------------

            Aplique um estilo até uma condição é conhecida com @while

 A diretriz @while é uma opção com funcionalidade parecida com o JS while loop. Ele cria regras
CSS até q uma condição é conhecida.

 O desafio @for dá um exemplo para criar um sistema de grade simples. Isso pode funcionar tb com
@while.

$x: 1;

@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x; }
  $x: $x + 1;
}

Primeiro, defina uma variável $x e defina-a para 1. Depois, use a diretriz @while para criar um
grid system while $x é menor q 13. Depois defina a regra CSS para width, $x é incrementada por
1 para eliminar um loop infinito.

----------------------------------------  ------------------------------------------------

 Use @while para criar uma serie de classes com diferentes font-sizes.

 Lá deve ter 5 classes diferentes do text-1 ao text-5. Depois defina font-size para 15px 
multiplicado pelo atual número do index. Certifique-se de eliminar um infinite loop!

<style type='text/scss'>
  $x: 1;
  @while $x < 6 {
    .text-#{$x} {font-size: 15px * $x;}
    $x: $x + 1;
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>


------------------------------------------------------------------------------------------

            Divida seus estilos em pequenos pedaços com partials

 Partials em SASS são arquivos separados q seguram segmentos de code CSS. São importados e usados
em outros arquivos SASS. Essa é uma ótima forma de agrupar code similares em um módulo para 
mantê-los organizados.

 Nomes para partials começam com um underscore(_) character, q fala pro SASS é um pequeno segmento
de CSS e n é convertido em um arquivo CSS. Tb, arquivos SASS terminam com o .scss file extension.
Para trazer o code em partial em outro arquivo SASS, use a diretriz @import.

 Por exemplo, se todos seus mixins são salvos em um partial named "_mixins.scss", e eles são
precisados no "main.scss" file, é assim como usaremos eles no arquivo principal:

@import 'mixins'

 Perceba q o underscore e a extensão não são necessárias na instrução import -  SASS entende q ele
é um partial. Uma vez um partial é importado para um arquivo, todas as variáveis, mixins e outros
codes são disponíveis para usar.

------------------------------------------------------------------------------------------

Escreva uma instrução @import para importar um partial named _variables.scss no main.scss file.

<!-- The main.scss file -->
<style>
  @import 'variables'
</style>

-------------------------------------------------------------------------------------------

                Extenda um conjunto de CSS styles para outro elemento

 SASS tem uma característica chamada extend q faz ficar fácil pegar emprestado regras CSS de um
elemento e construir sobre eles em outro.

 Por exemplo, o bloco de regras CSS style abaixo um .panel class. Ele tem um background-coler,
height e border.

.panel {
  background-color: red;
  height: 70px;
  border: 2px solid green;
}

 Agr vc quer outro panel chamado .big-panel. Ele tem as msm propriedades base como .panel, mas
tb precisa um width e font-size. É possível copiar e colar a inicial CSS rules do .panel, mas o
code se torna repetitivo como vc adicion mais tipos de panels. A diretriz extend é uma forma 
simples de reusar as regrass escritas para um elemento, depois add mais para outra:

.big-panel {
  @extend .panel;
  width: 150px;
  font-size: 2em;
}

 O .big-panel irá ter as msm propriedades como .panel em adição para novos estilos.

----------------------------------------------- -------------------------------------------

 Faça uma classe .info-important q extenda .info e tb tenha um background-color definido para
magenta.

<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important {
    @extend .info;
    background-color: magenta;
  }
</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>

------------------------------------------------------------------------------------------

