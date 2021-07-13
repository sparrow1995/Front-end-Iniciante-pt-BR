/* ----------------------------------------------------------------------------------------------

                Aprenda como Script Tags e documentos prontos funcionam

 Agr estamos prontos para aprender jQuery, a ferremanenta JS mais popular de todos os tempos.

 Antes de começarmos a usar jQuery, precisamos adicionar algumas coisas ao nosso HTML.

 Primeiro, adicione um elemento script no todo da page. Certifique-se de fecha-lo na seguinte linha.

 Seu navegador irá rodar qualquer JS dentro de um elemento script, incluindo jQuery.

 Dentro do seu elemento script, adicione esse code:

$(document).ready(function() { para seu script. Depois feche-o na linha seguinte(ainda dentro
do seu elemento script) com: });

 Aprenderemos mais sobre functions depois. A coisa importante é saber q esse code vc coloca dentro
dessa function irá roda breve como seu navegador carrega sua page.

 Isso é importante pq sem seu document ready function, seu code pode roda antes do seu HTML é
renderizado, q irá causar bugs.

------------------------ ---------------------- -------------------------- ---------------------

<script>

$(document).ready(function() {

});
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

-----------------------------------------------------------------------------------------------

                  Aponte HTML elements com Selector usando jQuery

 Agr nóis temos um document ready function.

 Vms escrever nossa primeira instrução jQuery. Todas as funções jQuery começam com um $, normalmente
referred como um dollar sign operator, ou como bling.

 jQuery mts vezes seleciona um elemento HTML com um selector, depois faz alguma coisa com aquele
elemento.

 Por exemplo, vms fazer todos seus elementos button quicar. Só precisa adicionar esse code dentro
do seu document ready function:

$("button").addClass("animated bounce");

 Perceba q nóis já incluimos ambas bibliotecas jQuery e Animate.css no fundo então vc pode usá-lo
no editor. Então vc está usando jQuery para adicionar o Animate.css bounce class para seus 
elementos button.

------------- ----------------- ---------------- ----------------- -------------- ---------------

<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

-----------------------------------------------------------------------------------------------

                    Aponte Elementos por classe usando jQuery

 Vc vê como fizemos todos seus elementos button quicar? Nóis selecionamos eles com $("button"),
depois adicionamos algumas CSS classes para eles com .addClass("animated bounce");.

 Vc só usou a função .addClass() do jQuery, q permite vc adicionar classes para elementos.

 Primeiro, vms apontar seus elementos div com a classe well usando o selector $(".well").

 Perceba q, como declarações CSS, seu tipo tem um . antes do nome da classe.

 Depois use jQuery .addClass() para adicionar a classe animated e shake.

 Por exemplo, vc pode fazer todos os elementos com a classe text-primary tremer adicionando o
seguinte para seu document ready function:

$(".text-primary").addClass("animated shake");

------------- ----------------- ------------------ -------------------- -------------- ---------

<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

-----------------------------------------------------------------------------------------------

                    Aponte Elementos por id Usando jQuery

 Vc pode tb apontar elementos pelos seus atributos id.

 Primeira mire seu elemento button com o id target3 usando o selector $("#target3").

 Perceba q, como declarações CSS, seu tipo id tem um # antes do nome do id.

 Depois use jQuery .addClass() para adicionar as classes animated e fadeOut.

 Aqui como vc fazer o button com id target6 sumir:

$("#target6").addClass("animated fadeOut");

------------------ ----------------------- -------------------- -------------------- ----------

<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

----------------------------------------------------------------------------------------------

                            Delete suas Funções jQuery

 Essas animações são legais no começo, mas agr estão ficando destrativas.

 Delete todas essas três funções jQuery do seu document ready function, mas deixe seu 
document ready function intacto.

------------------------- ---------------------------- ------------------------------ ---------

<script>
  $(document).ready(function() {
   
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

-------------------------------------------------------------------------------------------

              Aponte o msm elemento com multiplos seletores jQuery

 Agr vc sabe três formas de apontar elementos: pelo tipo: $("button"), pela classe: $(".btn"),
e pelo id: $("#target1").

 Contudo é possivel adicionar multiplas classes numa única chamada .addClass(), vms adiciona-los
num msm elementos em três formas separadas.

 Usando .addClass(), adicione somenete uma classe por vez para o msm elemento, três formas
diferentes:

- Adicione a classe animated para todos elementos com tipo button.

- Adicione a classe shake para todos os buttons com classe .btn.

- Adicione a classe btn-primary para o button com id #target1.

NOTE: Vc deve somente apontando um elemento e adicionando uma classe por vez. Ao todo, seus três
seletores individuais irão acabar adicionando três classes shake, animated, e btn-primary para
#targer1.

------------------------------------------------ ------------------------------------------

<script>
  $(document).ready(function() {
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

--------------------------------------------------------------------------------------------

                        Remova classes de um elmento com jQuery

 Da msm forma q vc pode adicionar classes para um elemento com jQuery addClass(), vc pode remover
eles com jQuery removeClass().

Aqui como vc irá fazer isso para um botão especifico:

$("#target2").removeClass("btn-default");

 Vms remover a class btn-default de todos os nossos elementos button.

-------------------------------------------- ----------------------------------------------

<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

-----------------------------------------------------------------------------------------

                      Troque o CSS de um elemento usando jQuery

 Podemos tb mudar o CSS de um elemento HTML diretamente com jQuery.

 jQuery tem uma função chamada .css() q te permite mudar o CSS de um elemento.

Aqui como podemos mudar sua cor para azul:

$("#target1").css("color", "blue");

 Isso é um pouco diferente da declaração normal de CSS, pq a propriedade CSS e seu valor estão
em aspas, e separados com uma vírgula invés de um dois pontos.

 Delete seus seletores jQuery, deixando um document ready function vazio.

 Selecione target1 e mude sua cor para vermelho.

----------------------------------------- ----------------------------------------------

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red")
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

-----------------------------------------------------------------------------------------

                      Desabilite um elemento usando jQuery

 Vc pode tb mudar a propriedade non-CSS do HTML elements com jQuery. Por exemplo, vc pode
desabilitar buttons.

 Quando vc desabilita um button, ele irá ficar cinzado e n poderá ser clicado.

 jQuery tem uma função chamada .prop() q te permite ajustar propriedades dos elementos.

Aqui como vc irá desabilitar todos os botões:

$("button").prop("disabled", true);

Desabilite somente o botão target1.

-------------------------------------------- -------------------------------------------

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

----------------------------------------------------------------------------------------

                Mude o texto dentro de um elemento usando jQuery

 Usando jQuery, vc pode mudar o texto entre as tags de começo e fim de um elemento. Vc pode tb
mudar marcação HTML.

 jQuery tem uma função chamada .html() q vai fazer vc adicionar tags HTML e text com um elemento.
Qualquer conteúdo anteriormente com o elemento irá ser completamente substituido com o conteúdo
vc aprensentou usando essa função.

Aqui como vc irá reescrever e emfatizar o text do nosso heading:

$("h3").html("<em>jQuery Playground</em>");

 jQuery tb tem uma função parecida chamada .text() q altera somente sem adicionar tags. Em outras
palavras, essa função não irá avaliar qualquer HTML tags passada para ela, mas invés disso irá
trata-la como text q vc quer substituir para o conteúdo existente.

Mude o button com id target emfatizando seu text.

Perceba q enquanto a tag <i> tradionalmente é usado para enfatizar text, ele tem sido adotado desde
então para usa como um tag para icons. O <em> tag é agr amplamente aceito como a tag para
enfatizar. Ambas irão funcionar para esse desafio.

---------------------------------------------- -----------------------------------------

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target4").html("<em>#target4</em>")
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

---------------------------------------------------------------------------------------

                        Remova um elemente usando jQuery

 Agr vms remover um elemento HTML de sua page usando jQuery.

 jQuery tem uma function chamada .remove() q irá remover um elemento HTML inteiramente.

 Remova o elemento #target4 de sua page usando a função .remove().

----------------------------------------------- ---------------------------------------

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

-------------------------------------------------------------------------------------

                  Use appendTo para mover elementos com jQuery

 Agr vms tentar mover elementos de um div para outro.

 jQuery tem uma função chamada appendTo() q te permite selecionar elementos HTML e acrescenta-lo
para outro elemento.

Por exemplo, se vc quisesse mover o target4 da nossa direira well para nosso well da esquerda,
iremos usar:

$("#target4").appendTo("#left-well");

 Mova seu elemento target2 do seu left-well para seu right-well.

------------------------------------ ---------------------------------------------------

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target2").appendTo("#right-well");

  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

-------------------------------------------------------------------------------------------

                        Clone um elemento usando jQuery

 Em adição para mover elementos, vc pode tb copia-los de um lugar para outro.

 jQuery tem uma função chamada clone() q faz uma cópia de um elemento.

 Por exemplo, se vc quuiser copiar target2 de nosso left-well para nosso right-well, usaremos:

$("target2").clone().appendTo("#right-well");

 Vc percebeu envolve colocar duas funções jQuery juntas? Isso é chamado function chaining e é
uma forma conveniente de fazer coisas com jQuery.

Clone seu target5 e acrescente-o no seu left-well.

-------------------------------------------- ----------------------------------------------

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

------------------------------------------------------------------------------------------

                  Aponte o pai de um elemento usando jQuery

 Todo elemento HTML tem um parent element de q ele herda propriedades.

 Por exemplo, seu jQuery Playground h3 element tem o parent element de <div class="container-fluit">,
q ele msm tem o parent body.

 jQuery tem uma função chamada parent() q te permite acessar o parente de qualquer elemento q vc
selecionou.

Aqui um exemplo de como vc irá usar a função parent() se vc quiser dar ao elemento pai de left-well
element um background color de blue:

$("#left-well").parent().css("background-color", "blue");

Dê ao parent do elemento #target1 um background-color de red.

-------------------------------------------- ---------------------------------------------

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
  });
</script>

<!-- Only change code above this line -->

<body>
  <div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
      <div class="col-xs-6">
        <h4>#left-well</h4>
        <div class="well" id="left-well">
          <button class="btn btn-default target" id="target1">#target1</button>
          <button class="btn btn-default target" id="target2">#target2</button>
          <button class="btn btn-default target" id="target3">#target3</button>
        </div>
      </div>
      <div class="col-xs-6">
        <h4>#right-well</h4>
        <div class="well" id="right-well">
          <button class="btn btn-default target" id="target4">#target4</button>
          <button class="btn btn-default target" id="target5">#target5</button>
          <button class="btn btn-default target" id="target6">#target6</button>
        </div>
      </div>
    </div>
  </div>
</body>

-----------------------------------------------------------------------------------------

                  Aponte o filho de um elemento usando jQuery

 Quando HTML é colocado um level abaixo de outro ele é chamado children daquele elemento. Por
exemplo, o elemento button nesse desafio com o text #target1, #target2, e #target3 são todos
filhos do elemento <div class="well" id="left-well">.

 jQuery tem uma função chamada children() q te permite acessar o filho de qualquer elemento 
q vc selecionou.

Aqui um exemplo de como vc irá usar o children() para dar children de seu elemento left-well a
cor blue:

$("#left-well").children().css("color", "blue");

-------------------------------------------- ---------------------------------------------

Dê a todos os children de seu elemento right-well a cor de laranja.

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

----------------------------------------------------------------------------------------

            Aponte um Child especifico de um elemento usando jQuery

 Vc vê pq atributos id são tão convenientes para apontar seletores jQuery. Mas vc nem sempre
terá ids tão arrumados para trabalhar.

 Felizmente, jQuery tem alguns outros truques para apontar os elementos certos.

 jQuery usa CSS selectors para apontar elementos. O target:nth-child(n) CSS selector te permite
selecionar todos nth elements com a class alvo ou tipo de elemento.

 Aqui como vc irá dar o terceiro elemento em cada well a classe bounce:

$(".target:nth-child(3").addClass("animated bounce");

Faça o segundo child em cada de seus elementos well quicar. Vc deve selecionar os elementos filhos
com a classe target.

---------------------------------------------- -----------------------------------------

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $(".target:nth-child(2)").addClass("animated bounce");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

------------------------------------------------------------------------------------------

                        Aponte elementos Pares usando jQuery

 Vc pode tb apontar elementos baseado em quais posições usando :odd ou :even selectors.

 Perceba q jQuery é zero-indexed q significa q o primeiro elemento é uma seleção tem uma posição
de 0. Isso pode ser um pouco confuso como, contar-intuitivamente, :odd selects o segundo elemento
(position 1), quarto elemento(position 3), e assim por diante.

 Aqui como vc irá apontar todos os elementos impáres com class target e dá-los classes:

$(".target:odd").addClass("animated shake");

 Tente selecionar todos os target elementos pares e dando a eles a classe de animated e shake.
Relembre q par refere-se a posição do elmento com um sistema zero-based em mente.

------------------------------------------- ----------------------------------------------

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

-----------------------------------------------------------------------------------------

                  Use jQuery para modificar a page inteira

 Acabamos de brincar com nosso jQuery playground. Vms derrubá-lo!

 jQuery pode apontar o elemento body tb.

 Aqui como podemos fazer o body inteiro desaparecer:

$("body").addClass("animated fadeOut");

 Mas vms tornar isso mais dramático. Adicionee as classes animated e hinge para seu elemento body.

---------------------------------------- -----------------------------------------------

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
    $("body").addClass("animated hinge");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

-----------------------------------------------------------------------------------------------