/* 				    		React
				 Crie um simples elemento JSX	           /
 
 React é um Open Source view library criado e mantido pelo
Facebook. Ele é uma boa ferramenta para rendenizar o User
Interface(UI) de aplicações web modernas.

 React usa uma extensão do JavaScript chamada JSX que 
autoriza vc para escrever HTML diretamente com JavaScript.
Isso tem mts beneficios. Ele vai fazer vc usar o Poder Total
Programatico do JavaScript com HTML. e ajudar a manter seu
code legivel. Na maior parte, JSX é semelhante ao HTML que
vc já aprendeu, no entanto, existem algumas diferenças 
importantes que serão abordadas ao longo desses desafios.

 Por exemplo, como JSX é uma extensão sintática de JS, vc 
pode escrever JS diretamente no JSX. Para fazer isso, vc 
simplesmente inclui o código que deseja que seja tratado como
JS entre as chaves: {'isto é tratado como código JS'}. 
Lembre-se disso, pois ele será usado em vários desafios 
futuros.
 
 No entanto, como JSX não é o JS válido, o código JSX deve
ser compilado em JS. O transpiler Babel é uma ferramenta
popular para este processo. Para sua conveniência, já foi
adicionado nos bastidores para esses desafios. Se acontecer
de vc escrever JSX sintaticamente inválido, verá o primeiro
teste desses desafios falhar.

 É importante notar que, por baixo do capô, os desafios
estão chamando "ReactDOM.render(JSX,document.getElementByID('root'))".
Essa chamada de função é o que coloca seu JSX na 
representação leve do DOM do próprio React. O React então
usa intantâneos de seu próprio DOM para otimizar a 
atualização de apenas partes específicas do DOM real.

------------------------------------------------------------------

 O códico corrente usa JSX para atribuir um elemento "div"
na constante JSX. Substitua o "div" com um elemento "h1" e 
adicione o texto "Hello JSX!" dentro dele. /

const JSX = <h1>Hello JSX!</h1>;

------------------------------------------------------------------

/                Criando um Elemento JSX complexo            /

 O último desafio foi um simples exemplo do JSX, mas JSX pode
representar ainda mais complexos HMTL.

 Uma coisa importante para saber sobre aninhamentos de JSX é q
ele deve retornar um elemento único.

 Esse elemento pai irá abraçãr todos os outros levels de 
elementos aninhados.

 Por exemplos, vários elementos JSX escritos como irmão sem 
elemento de wrapper pai não transpilarão.

Por exemplo:

Valid JSX:
    <div>
        <p>P1</p>
        <p>P2</p>
        <p>P3</p>
    </div>
Invalid JSX:
    <p>P1</p>
    <p>P2</p>
    <p>P3</p>

 Defina uma nova constante "JSX" q renderize um "div" q contém os 
seguintes elementos em ordem:
 
 Num "h1", um "p", e uma lista não ordenada que contenha três
elementos "li". Vc pode incluir qualquer texto q quiser dentro de
cada elemento.

NOTE: Ao renderizar vários elementos como este, vc pode colocá-los
todos entre parênteses, mas não é estritamente necessário. Observe
tb q este desafio usa uma tag "div" para envolver todos os 
elementos filhos em um único elemento pai. Se vc remover o div, o
JSX não irá mais transpilar. Lembre-se disso, pois tb se aplicará
quando vc retornar elementos JSX nos componentes React.

const JSX = <div>
              <h1>Paragraph One</h1>
              <p>Paragraph Two</p>
              <ul>Paragraph Three
                <li>L1</li>
                <li>L2</li>
                <li>L3</li>
              </ul>
            </div>;

            Adicione Comentários em JSX
 
 JSX é uma sintax q será compilado em JS válido. As vezes, para
legibilidade, vc precisará de adicionar comentários em seus 
códigos. Como em muitas Linguagens de Programação, JSX tem sua
própria forma para fazer isso.

 Para colocar comentários dentro JSX, vc usa a sintax "{/* * /}
para agrupar em torno do texto comentário.

--------------------------------------------------------------------

 O editor de código tem um elemento JSX similar para oq vc criou
no último desafio. Adicione um comentário em algum lugar junto do
elemento "div" apresentado, sem modificar os elementos existentes
"h1" ou "p".

const JSX = (
  <div>{/*oi* /}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

----------------------------------------------------------------------

                Renderize Elementos HTML para o DOM
 
 Até agr, vc aprendeu q JSX é uma ferramenta conveniente para 
escrever HTML legível em JS. Com o React, podemos renderizar
esse JSX diretamente para o HTML DOM usando a API de renderização
do React, conhecida como ReactDOM.

 ReactDOM oferece um método simples para renderizar elementos
React para DOM que parece com isso:
"ReacDOM.render(componentToRender, targetNode)", onde o primeiro
argumento é o elemento React ou componentes q vc quer renderizar,
e o segundo argumento é o DOM node q vc quer para renderizar o
componente para.

 Como vc pode esperar, ReactDOM.render() deve ser chamado antes
de declarar os elementos JSX, assim como vc deve declarar 
variáveis antes de usá-las.

-------------------------------------------------------------------

 O editor tem um componente JSX simples. Use o método
ReactDOM.render() para renderizar o componente para a pág. Vc pode
passar elementos JSX definidos diretamente como primeiro argumento
e usar document.getElementById() para selecionar o DOM node para
renderizar eles para. Existe um "div" com "id='challenge-node'"
disponivel para vc usar. Tenha certeza q n vai mudar a constante
JSX.

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line

ReactDOM.render(JSX, document.getElementById("challenge-node"));

------------------------------------------------------------------

                    Defina uma classe HTML em JSX

 Agr q vc está ficando confortável escrevendo JSX, vc pode está
imaginando como ele se difere do HTML.

 Até agr, pode parecer q HTML e JSX são exatamente a msm coisa.

 Uma chave diferente em JSX é q vc pode não longe usar a palavra
"class" para definir classes HTML. Isso é pq "class" é uma palavra
reservada em JS. Invés disso, JSX usa className.

------------------------------------------------------------------

 Na verdade, a convenção de nomenclatura para todos os atributos
 HTML e referências de eventos em JSX tornam-se camelCase. Por
 exemplo, um evento de clique em JSX é onClick, em vez de onclick.
 Da msm forma, onchange se torna onChange. Embora essa seja uma
 diferença sutil. É importante manter em mente no futuro.

 const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

--------------------------------------------------------------------

            Aprendendo sobre Self-closing JSX Tags
 
 Até agrm vc viu como JSX difere de HTML em uma chave forma com o
uso da "className" vs. "class" para definindo HMTL classes.

 Outra forma importante em q JSX difere do HTML é na ideia de a
se auto-fechar.

 Em HTML, quase todas as tags tem ambos um opening e closing tag:
<div></div>; a tag closing sempre tem uma barra para frente antes
do nome da tag q vc está fechando. Contudo, existe instâncias 
especiais no HTML chamados "self-closing tags" ou tag q n requerem
ambas uma opening e closing tab antes de outra tag começar.

 Por exemplo a line break tag pode ser escrito como <br> ou como
<br />, mas nunca poderar se escrito como <br></br>, desde q não 
contém qualquer conteúdo.

 Em JSX, as regras são um pouco diferentes. Qualquer elemento JSX
pode ser escrito com um self-closing tag, e qualquer elemento de 
estar fechado. O line-break tag, por exemplo, deverá sempre estar
escrito como <br /> em ordem para estar valido JSX q pode ser 
traspilado. Um <div>, em contra-mão, pode ser escrito como <div />
ou <div></div>. A diferença é q na primeira versão da sintax 
não existe uma forma incluir qualquer coisa em <div />. Vc irá ver
isso em desafios depois q essa sintax é útil quando renderizando
componentes React.

--------------------------------------------------------------------

 Conserte os error no editor para q ele é valido JSX e transpilado
com sucesso. Tenha certeza q vc n mudou qualquer do conteudo - vc
precisa somente fechar tags onde precisam.

const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

----------------------------------------------------------------------

                Crie um componente funcional sem estado

 Os componentes são o núcleo do React. Tudo no React é um componente e
aqui vc irá aprender como criar um.
 
 Existem duas formas para criar um componente React. A primeira forma
é para usar uma função JS. Definindo um componente nesta forma cria um
componente funcional sem estado. O conceito de estado em uma aplicação
irá ser coberto em desafios depois. Por enquanto, pense em um componente
sem estado como aquele que pode receber dados e processá-los, mas não 
gerencia ou rastreia alterações nesses dados.
 
 Para criar um componente com uma função, vc simplesmente escreve uma
função JS q retorne qualquer JSX ou "null". Uma coisa importante de saber
é q React requer q sua o nome da sua função comece com um Capital letter.
 Aqui um exemplo de um componente funcional sem estado q atribui uma 
classe HTML em JSX:

const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};

 Antes de começar a ser transpilado, o <div> irá ter uma class CSS de
"customClass".

 Como um componente JSX representa HTML, vc pode colocar muitos componentes
juntos para criar uma página mais complexa de HTML. Esse é uma das 
vantagens chave da arquitetura de componente que o React apresenta.

-------------------------------------------------------------------------

 O editor de código tem uma função chamada "MyComponent". Complete essa
função para q ele retorne um único elemento "div" q contenha alguma string
de text.

NOTE: O texto é considerado um filho do elemento "div", então vc não estará
permitido à usar self-closing tag.

const MyComponent = function() {
  // Change code below this line
  return (
    <div>Eu como Paçoca</div>
  );


  // Change code above this line
}

--------------------------------------------------------------------------

                  Crie um componente React

 Outra forma para definir um componente React é com a ES6 "class" syntax.
No seguinte exemplo, "Kitten" extende "React.Component":

class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}

 Isso cria um ES6 class "Kitten" extende a classe "React.Component".
Então a "Kitten" class agr tem acesso para muitas caracteristicas úteis
React, como estado local e ganchos de ciclo de vida. Não se preocupe se
vc não está familiar com esses termos ainda, eles irão ser cobertos de 
uma forma melhor detalhada em desafios a frente. Tb percebe a "Kitten"
class tem um "construtor" definido com ele q se chama "super()". Ele
usa "super()" para chamar o construtor da classe pai, nesse caso
"React.Component". O construtor é um método especial usado durante a 
inicialização dos objetocs q são criados com a "class" keyword. É 
considerado best practice chamar um componente "constructor" com "super",
e passa "props" para ambos. Isso faz com q o componente seja inicializado
devidamente. Por enquanto, saiba q a inclusão desse código é padrão.
Depois vc verá outros usos para o construtor assim como "props".

-------------------------------------------------------------------------

 "MyComponent" é definindo em um editor de códe usando class syntax.
Termine escrevendo o método "render" então ele retornará um elemento "div"
q contenha um "h1" com o texto "Hello React!".

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line

    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // Change code above this line
  }
};

-------------------------------------------------------------------------

                  Criando um compenente com composição

 Agr vamos tar uma olhada em como podemos criar multiplos componentes React
juntos. Imagine q vc está construindo um app e tem criado três componentes:
um "Navbar", "Dashboard", e "Footer".

 Para criar esses componentes juntos, vc pode criar um "App" pai componente
como filhos. Para renderizar um componente como um filho em um componente
React, vc inclue o nome escrito do componente como uma tag HTML personalizado
no JSX. Por exemplo, no método "render" vc pode escrever:

return (
  <App>
    <Navbar />
    <Dashboard />
    <Footer />
  </App>
)

 Quando React encontra uma tag HTML q referencia outro componente(um nome
de componente abraçdo no "< />" como no exemplo), ele renderiza a 
marcação para o componente q está na localização da tag. Isso deve ilustrar
o pai/filho da relação entre o componente "App" e os "Navbar", "Dashboard",
e "Footer".

-------------------------------------------------------------------------

 No code editor, tem uma componente funcional simples chamado "ChildComponent"
e uma class component chamado "ParentComponent". Crie os dois juntos por 
renderizar o "ChildComponent" com o "ParentComponent". Tenha certeza de
fechar a tag "ChildComponent" com um /.

NOTE: "ChildComponent" é definida com uma função flecha ES6 porque isso
é uma prática mt comum quando usando React. Contudo, saiba q isso é só
uma função. Se vc não está familiarizado com arrow function syntax, por
favor remeta-se para a seção JS.

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line / }

        <ChildComponent />

        { /* Change code above this line / }
      </div>
    );
  }
};

--------------------------------------------------------------------------
                      
              Use React para Renderizar Componentes Aninhados

 O último desafio mostrou uma forma simples de criar dois componentes, mas
mas tem mts formas diferentes q vc pode criar componentes com React.
 
 Criação de componentes é uma das poderosas caracteristicas do React. Quando
vc trabalha com React, é importante começar a pensar sobre seu 
user interface em termos de componentes como o exemplo App do último desafio.
Vc divide sua IU em seus blocos de construção básicos, e essas peças se
tornam os componentes. Isso ajuda a separar o código responsível para o UI
do code responsible do manuseando sua lógica de aplicação. Pode simplificar
muito o desenvolvimento e a manutenção de projetos complexos.

--------------------------------------------------------------------------

 Existem dois componentes funcionais definidos no editor de código, chamados
TypeOfFruit e Fruits. Pegue o componente TypeOfFruit e componham-o ou 
alinhe-o no componente Fruits. Em seguida pegue o componente Fruits e o 
aninhe-o no componente TypeOfFruit. O resultado deve ser um componente filho,
aninhado em um componente pai, que está aninhado em um componente pai próprio!

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line / }
    <TypesOfFruit />
      { /* Change code above this line / }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line / }
        <Fruits />
        { /* Change code above this line / }
      </div>
    );
  }
};

-------------------------------------------------------------------------

                    Crie componentes React

 Como os desafios continuam a usar composições mais complexas com 
componentes React e JSX, há um ponto importante a ser observado. Renderizar
componentes de classe de estilo ES6 dentro de outros componentes não é 
diferente de renderizar os componentes simples que vc usou nos últimos
desafios. Você pode renderizar elementos JSX, componentes funcionais sem
estado e componentes de classe ES6 dentro de outros componentes.

------------------------------------------------------------------------

 No code editor,o componente "TypeOfFood" já está renderizando um componente
chamado "Vegetables". Tb, tem um componente "Fruits" do último desafio.

 Aninhe dois componentes dentro de "Fruits" - primeiro "NonCitrus", e dps
"Citrus". Ambos esses componentes são apresentados para vc atrás das cenas.
Próximo, aninhe a classe componente "Fruits" no componente "TypesOfFood"
componente, embaixo o "h1" header e acima "Vegetables". O resultado deverá
estar uma serie de componentes aninhados, q usam dois tipos de componentes
diferentes.

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line / }
        <NonCitrus />
        <Citrus />
        { /* Change code above this line / }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line / }
        <Fruits />
        { /* Change code above this line / }
        <Vegetables />
      </div>
    );
  }
};

------------------------------------------------------------------------

            Renderize uma Class Component para o DOM

 Vc pode lembrar usando o ReactDOM API em um desafio anterior para renderizar
elementos JSX para o DOM. O processo para renderizar componentes React irá
ser mt similar. Os últimos desafios focaram em componentes e composições,
então a renderização será feita para vc atrás das cenas. Contudo, nenhum do
React code vc irá escrever renderização para o DOM sem fazer uma chamada para
o ReactDOM API.

 Aqui a syntax para refrescar a mente:
"ReactDOM.render(componentToRender, targetNode)".
 O primeiro argumento é o componente React q vc quer renderizar. O segundo
argumento é o DOM node q vc quer para renderizar com componente junto.

 Componentes React são passado em ReactDOM.render() um pouco diferente q
elementos JSX. Para elementos JSX, vc passa no nome do elemento q vc quer
para renderizar. Contudo, para componentes React, vc precisa usar a msm 
syntax como se vc estivesse renderizando um componente aninhado, por exemplo
"ReactDOM.render(<ComponentToRender />, targetNode)". Vc usa essa syntax 
para ambos ES6 class components e functional components.

-----------------------------------------------------------------------

 Ambos os componentes "Fruits" e "Vegetables" são definidos para vc por trás
das cenas. Renderizar ambos os componentes como filhos do componente
"TypesOfFood" depois renderizar "TypesOfFood" para o DOM. Tem uma "div" com
"id='challeng-node'" disponível para vc usar.

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line /}
        <Fruits />
        <Vegetables />
        {/* Change code above this line /}
      </div>
    );
  }
};

// Change code below this line

ReactDOM.render(<TypesOfFood/>, document.getElementById("challenge-node"));

----------------------------------------------------------------------

                  Escreva um componente React de um Scratch
 
 Agr que vc aprendeu o básico de JSX e React components, é hr de escrever
um componente vc msm. Componentes React são o core building blocks de
aplicações React então é importante ficar mt familiriazidado em escrevê-los..
Lemte, um componente React tipico é uma ES6 "class" extends "React.Component".
Ele tem um método renderização que retorna HTML(de um JSX) ou "null". Essa
é a forma básica de um componente React. Um vez que vc entende isso bem,
vc irá estar preparado para começar a fazer projetos React mais complexos.

------------------------------------------------------------------------

 Defina uma class "MyComponent" que extenda "React.Component". Esse método
deverá renderizar e retornar um "div" q contenha uma tag "h1" com o text:
"My First React Component!" dentro dele. Use exatamente esse texto, o case
e a pontução importam. Tenha ctz q chamou o constructor para seu componente, tb.

 Renderize esse componente para o DOM usando "ReactDOM.render()". Lá tem 
uma "div" com "id='challenge-node'" disponivel para vc usar.

// Change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="challenge-node">
        <h1>My First React Component!</h1>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));

------------------------------------------------------------------------

      Passe Props para um Componente Funcional Sem Estado

 Os desafios passados cobriram muito sobre criação e composição de elementos
JSX, componentes funcionais, e ES6 style class components em React. Com esses
fundamentos, está na hr de olharmos outra caracteristica mt comum em React:
(props). Em React, vc pode passar props, ou propriedades, para componentes
filho. Digamos q vc tem um componente "App" q renderiza um componente filho
chamado "Welcome" q é um componente funcional sem estado. Vc pode passar
"Welcome" um "user" property escrevendo:

<App>
  <Welcome user='Mark' />
</App>

 Vc pode personalizar (HTML attributes) criados por vc e suportados por 
React para ser passado para o componente. Nesse caso, a propriedade criada
"user" é passada para o componente "Welcome". Desde "Welcome" seja um 
componenete funcional sem estado, ele tem acesso para esse valor então:

const Welcome = (props) => <h1>Hello, {props.user}!</h1>

 Esse é o padão para chamar o valor "props" e quando lidando com componentes
funcionais sem estado, vc basicamente considera ele como um argumento para
uma função q retorna JSX. Vc pode acessar o valor do argumento na função
corpo. Com class components, vc irá ver q esse é um pouco diferente.

------------------------------------------------------------------------

 Tem um "Calendar" e "CurrentDate" components no code editor. Quando 
renderizando "CurrentDate" do componente "Calendar", passa na propriedade
de "date" atribuindo a corrente data do JS "Date" object. depois acessando
esse "prop" no componente "CurrentDate", mostrando o valor com a tag "p".
Note q para o valor "prop" para ser avaliada como JS, ele devem ser 
fechados em curly brackets, para instancia "date={Date()}".

const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line / }
      <p>The current date is: {props.date} </p>
      { /* Change code above this line / }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line / }
        <CurrentDate date={Date()} />
        { /* Change code above this line / }
      </div>
    );
  }
};

----------------------------------------------------------------------

                      Passe um Array como Props

 O último desafio demonstrou como passar informações de um componente pai
para um componente filho como "props" ou propriedades. Esse desafio vai
se como podem ser passados arrays como "props". Para passar um array para
um elemento JSX, ele deve ser tratado como JS e agrupado em curly braces.

<ParentComponent>
  <ChildComponent colors={['green', 'blue', red]} />
</ParentComponent>

 O componente filho depois tem acesso para a propriedade array "colors".
Métodos array coomo "join()" podem ser usados quando acessando a propriedade.

const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>

 Isso irá unir todos items do array "colors" em um comma separated string e
produzir: <p>green, blue, red</p> Depois, iremos aprender sobre outro método
comum para renderizar arrays de dados em React.

------------------------------------------------------------------------

 Tem uma "List" e "ToDo" components no code editor. Quando renderizando cada
"List" do componente "ToDo", passa em uma "task" property atribuida para um
array de to-do task, por exemplo ["walk dog", "workout"]. Depois acessa esse
array "task" no componente "List", mostrando o valor com o elemento "p".
Use "join(', ')" para mostras o array "props.task" no elmento "p" como uma
lista separada por vírgula. A lista de hj deverá ter no minimo 2 tarefas
e de amanhã deverá ter no minimo 3 tarefas.

const List = (props) => {
  { /* Change code below this line / }
  return <p>{props.tasks.join(', ')}</p>
  { /* Change code above this line / }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line / }
        <List tasks={["walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "workout", "sleep"]}/>
        { /* Change code above this line / }
      </div>
    );
  }
};

-----------------------------------------------------------------------

                      Use Props Padrão

 React tb tem uma opção para definir props padrão. Vc pode atribuir default
props para um componente como um property no componente msm e React atribui
o default prop se necessário. Isso permite vc para especificar o q um valor
prop deverá ser se nenhum valor é explicitamente apresentado. Por exemplo,
se vc declarar

MyComoponent.defaultProps = {location: 'San Francisco' }

, vc terá definido uma localização prop q será definido para a string
"San Francisco" a menos q vc especifique o contrário. React atribui default
props se props são indefinidos, mas se vc passar "null" como o valor para 
um prop, ele irá continuar sendo "null".

----------------------------------------------------------------------

 O code editor mostra um componente ShoppingCart. Defina default props nesse
componente q especifica um prop "items" com um valor de "0".

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line

ShoppingCart.defaultProps = {items: 0};

-----------------------------------------------------------------------

                      Sobrescreva Default Props

 A habilidade de definir default props é um característica útil em React.
A forma para sobrescrever um default props é explicitamente para deefinir
o valor de prop para um componente.

--------------------------------------------------------------------------

 O componente "ShoppingCart" agr renderiza um componente filho "Items".
Esse componente "Items" tem um default prop "quantity" definido com o inteiro
"0". Sobrescreva o default prop passando um valor de "10" para "quantity".

NOTE: Relembre q a syntax para add um prop para um componente parece como
vc add atributos HTML. Contudo, desde q o valor para "quantity" seja um
inteiro, ele n irá em aspas mas ele deverá ser agrupado em curly braces.
Por exemplo, {100}. Essa syntax fala JSX para interpretar o valor com o 
braces diretamente como JS.

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line / }
    return <Items quantity={10}/>
    { /* Change code above this line / }
  }
};

-----------------------------------------------------------------------

          Use PropTypes para definir o Props q vc espera

 O React fornece recursos úteis de verificação de tipo para verificar se
os componentes recebem acessórios do tipo correto. Por exemplo, seu 
aplicativo faz uma chamada de API para recuperar dados q vc espera q 
estejam em um array, q são então passados para um componente como um prop.
Vc pode definir "propTypes" no seu componente para requerir o dado para ser
do tipo "array". Isso irá lançar um aviso útil quando o dado for de qualquer
outro tipo.

 É considerado boas práticas definir "propTypes" quando vc sabe o tipo de
prop com antecedência. Vc pode definir uma propriedade "propTypes" para 
um componente da msm forma q vc definiu "defaultProps". Fazendo isso irá
checar q props de uma chave dada está presente com um dado tipo. Aqui um
exemplo para requerir o tipo "function" para a prop chamada "handleClick":

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired };

 No exemplo acima, o "PropTypes.func" verifica q "handleClick" é uma função.
Adicionando "isRequired" fala pro React q "handleClick" é uma propriedade
requerida para aquele componente. Vc irá ver um aviso se aquele prop não for
apresentado. Perceba tb q "func" representa "function". Entre os sete tipos
primitivos JS, "function" e "boolean"(escrito como "bool") são os únicos
dois q usam uma ortografia não usual. Em adição para o tipo primitivo, 
existem outros tipos disponiveis. Por exemplo, vc pode verificar q um prop
é um elemento React. Por favor veja a documententação para todos as opções.

*DOC - https://reactjs.org/docs/jsx-in-depth.html#specifying-the-react-element-type

NOTE: Como React v15.5.0, "PropTypes" é importado independentemente do 
React, dessa forma: 

import PropTypes from 'prop-types';

-----------------------------------------------------------------------

 Defina "propTypes" para o componente "Items" para requerir "quantity"
como uma prop e verifique se ele é do tipo "number".

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = { quantity: PropTypes.number.isRequired };
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

------------------------------------------------------------------------

                  Acesse props usando this.props

 Os últimos desafios cobriram as formas básicas para passar props para 
componentes filho. Mas e se o componente filho para o qual será passado
um prop para um ES6 class component, em vez de um componente funcional
sem estado? O ES6 class componente usa um pequeno diferente acordo para
acessar props.

 Qualquer hr vc refere para um componente classe junto dele msm, vc usa o
"this" keyword. Para acessar props com um componente class, vc introduz
o code q vc usa para acessar ele com "this". Por exemplo, se um ES6 class
componente tem um prop chamado "data", vc escreve {this.props.data} em
JSX.

------------------------------------------------------------------------

 Renderize uma instância do componente "ReturnTempPassword" em componente
Pai "ResetPassword". Aqui, dado "ReturnTempPassword" um prop de 
"temPassword" e atribui a ele um valor de uma string q é no mínimo de 8
caracteres. Com o filho, "ReturnTempPassword", acesse "tempPassword" com
a tag "strong" para fazer o usuario ver a senha temporária.

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line / }
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
            { /* Change code above this line / }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* Change code below this line / }
          <ReturnTempPassword tempPassword = 'xxxxxxxx' />
          { /* Change code above this line / }
        </div>
    );
  }
};

---------------------------------------------------------------------------

       Analise usando props com componentes funcionais sem estado

 Exceto pelo último desafio, vc tem estado passando props para componentes
funcionais sem estado. Esses componentes atuam como funções puras. Eles 
aceitam props como input e retornam a msm visão toda vez q são passados os 
msm props. Vc pode estar pensando q estado é, e no próximo desafio irá cobrir
isso mais detalhadamente. Antes diss, aqui é uma análise da terminologia para
comoponentes.

 Um componente funcional sem estado é qualquer função escrita q aceita props
e retornam JSX. Um componente sem estado, na outra mão, é uma class q extende
"React.Component", mas não usa estado interno(coberto no próximo desafio).
Finalmente, um componente com estado é um componente classe q faz manter seu
próprio estado interno. Vc pode ver componentes com estado referidos para 
simplesmente como componentes ou React components.

 Um common pattern é para tentar minimizar o estado e para criar componentes
funcionais sem estado onde for possível. Isto ajuda a conter a sua gestão 
estatal para uma área específica da sua candidatura. Por sua vez, isto 
melhora o desenvolvimento e a manutenção da sua aplicação, facilitando o 
acompanhamento de como as mudanças de estado afectam o seu comportamento.

---------------------------------------------------------------------------

 O code editor tem um componente "CampSite" q renderiza um componente "Camper"
como um filho. Defina o componente "Camper" e atribua esse default props de
{ name: 'CamperBot' }. Dentro do componente "Camper", renderizar qualquer code
q vc quiser, mas tenha certeza de ter um elemento <p> q inclua somente o valor
"name" q é passado como um "prop". Finalmente, defina "propTypes" no componente
"Camper" para requerir "name" apresentado como um prop e verifique q ele é do
tipo "string".

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line

const Camper = (props) => {
  return <p>{props.name}</p>
};

Camper.defaultProps = { name: 'CamperBot'};

Camper.propTypes = { name: PropTypes.string.isRequired};

----------------------------------------------------------------------------

                    Crie um componete com estado

 Um dos tópicos mais importantes em React é "state". Estado consiste de qualquer
dado sua aplicação precisa para saber sobre, oq pode mudar sobre o tempo. Vc
quer sua aplicação para responder a mudança de estado e apresenta um UI
atualizado quando necessário. React oferece uma boa solução para o gerenciamento
do estado de aplicações web modernas.

 Vc cria estado em um componente React declarando uma propriedade "state" no
componente class no seu "constructor". Isso inicialza o componente com "state"
quando ele é criado. A propriedade "state" deve ser definido para um "object"
JS. Declarando ele parece isso:

this.state = {
  
}

 Vc tem acesso ao "state" object em vida do seu componente. Vc pode atualizar,
renderizo ele no seu UI, e passa isso como props para componentes filho. O
objecto "state" pode ser tão complexo como ou  tão simples como vc precisa
q ele seja. Note q vc deve criar um componente class extendendo o
"React.Component" em ordem para criar "state" como esse.

--------------------------------------------------------------------------

 Tem um componente no editor q está tentando renderizar uma propriedade 
"name" do seu "state". Contudo, não tem "state" definido. Inicialize o
componente com "state" em "constructor" e atribua seu nome para uma propriedade
de "name".

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = { name: 'Rafael' };
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

--------------------------------------------------------------------------

              Renderize estado em User Interface

 Uma vez definido o estado inicial de um componente, é possível exibir 
qualquer parte do msm na UI q é reproduzida. Se um componente é com estado,
ele irá sempre ter acesso para o dado em "state" no método "render()". Vc
pode acessar o dado com "this.state".

 Se vc quiser acessar o state value com o "return" do render method, vc tem
q fechar os valores em curly braces.

 "state" é uma das características mais fortes dos componentes em React.
Isso permite a vc traçar dados importantes em seu aplicativo e renderizar um
UI em resposta para mudanças nesses dados. Se sua mudança de dados, seu UI
irá mudar. React usa oq é chamado DOM virtual, para manter traços da mudanças
atrás das cenas. Quando o dado estado atualiza, ele gatilha uma re-renderização
de componentes usando aquele dado - incluindo componentes filho que recebeu o
dado como um prop. React atualiza o actual DOM, mas somente onde necessário.
Isso significa q vc n tem q se preocupar sobre mudanças do DOM. Vc 
simplesmente declara oq o UI deverá parecer.

 Note q se vc tornar um componente com estado, nenhum outro componente terá
conhecimento de seu estado. Seu "state" é completamente encápsulado, ou local
para q componente, sem vc passar state dados para o componente filho como
"props". Essa noção de "state" encapsulada é mt importante por causa dela
permite vc de escrever certa lógica, depois tem aquela lógica contained e 
isolada em um lugar no seu código.

--------------------------------------------------------------------------

 No editor, "MyComponente" já está com estado. Defina uma tag <h1> no seu 
componente render method q renderiza o valor de "name" do componente state.

NOTE: O <h1> deverá renderizar o valor de "state" e nada mais. Em JSX, 
qualquer code q vc escreve com curly braces "{}" irá ser tratado como JS.
Então para acessar o valor de "state" só fechará a referência em {}.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line / }
        <h1>{ this.state.name }</h1>
        { /* Change code above this line / }
      </div>
    );
  }
};

--------------------------------------------------------------------------

        Renderize estado em User Interface de outra forma

 Tem outra forma de acessar "state" em um componente. No método render(),
antes de "retornar" a afirmação. vc pode escrever diretamente em JS. Por
exemplo, vc pode declarar funções , acessar dados de "state" ou "props",
executar computações nesses dados, e por ai em diante. Depois, vc pode 
atribuir qualquer dado para variáveis, q vc pode acessar para dentro da
afirmaçãao "return".

--------------------------------------------------------------------------

 No "MyComponent" render method, defina uma "const" chamada "name" e defina
ela igual ao valor nome no componente "state" . Porque vc pode escrever 
diretamente em JS em diferentes partes do code, vc não precisa fechar essa
referência em {}.

 Depois, na afirmação return, renderize esse valor em um <h1> usando 
a variável "name". Relembre, vc precisa usar a syntax JSX({} para JS) na
demonstração return.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
    const name = this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line / }
        <h1>{name}</h1>
        { /* Change code above this line / }
      </div>
    );
  }
};

--------------------------------------------------------------------------

                  Defina Estado com this.setState

 Os desafios anteriores cobriram o componente "state" e como inicializar o 
state no "constructor". Tem tb uma forma de mudar o componente "state".
React apresenta um método para atualizar componente "state" chamado "setState".
Vc chama o método "setState" com seu componente class como: 
this.setState(), passandoum objeto com key-value pairs. As chaves são suas
propriedades state e o valor são atualizados dados state. Para instância, se 
onde estamos guardando um "username" em state e precisando para atualiza-las,
ele irá paracer isso:

this.setState({
  username: 'Lewis'
});

 React espera q vc nunca modifique o "state" diretamente, invés disso use
sempre "this.setState()" quando uma mudança de state ocorre. Tb, vc deverá 
notar q React pode lotear multiplas atualizações state em ordem para melhorar
sua performance. Oq isso significa é q atualizações state no método "setState"
pode se não sincronizados. Tem uma syntax alternativa para o método "setState"
q apresenta uma forma em torno desse problema. Isso é raramente precisado 
mas ele é bom para manter ele em mente! Por favor consulte a documentação
React para mais detalhes.

React doc - https://facebook.github.io/react/docs/state-and-lifecycle.html

---------------------------------------------------------------------------
 
 Tem um elemento "button" no code editor q tem um manipulador onClick().
Esse manipulador é acionado quando o "button" recebe um evento click no browser,
e roda o método "handleClick" definido no "MyComponent". Com o método
"handleClick", atualize o componente "state" usando "this.setState()". Defina
a propriedade "name" no "state" igual a string "React Rocks!".

 Click o botão e veja a renderização state atualizado. Não se importe se vc 
nentender completamente como o manipulador click funciona nesse ponto. Ele
será coberto em desafios a frente.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: 'React Rocks!'
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

---------------------------------------------------------------------------
              Vincule 'this' para um método Class

 Em adição para definição e atualização "state", vc pode tb definir métodos
para seu componente class. Um método class tipicamente precisa usar a 
keyword "this" então ela pode acessar as propriedades na class(como "state"
e "props") dentro do escopo do método. Tem algumas formas para permitir seu
método class para acessar "this".
 
 Uma forma comum é para explicitamente vincular "this" no construtos então
"this" se torna limite para o método class quando o componente é inicializado.
Vc pode ter percebido o último desafio usou:

this.handleClick = this.handleClick.bind(this) para o método "handleClick"
no construtor. Depois, quando vc chama a função como "this.setState()" com
sua class method, "this" refere para a class e não ira ser "undefined".

NOTE: A keyword "this" é um com os aspectos mais confusos do JS mas ele roda
uma função importante em React. Embora seu comportamento aqui seja totalmente
normal, essas lições não são o lugar para uma revisão aprofundada disso,
portanto, consulte as lições se o acima for confuso.

--------------------------------------------------------------------------

 O code editor tem um componente com um "state" q mantém traço di  texto. Ele
tb tem um método q permite vc a definir o texto para "You clicked!". Contudo, 
o método não funciona por causa dele usar a keyword "this" q é indefinida.
Conserte isso explicitamente vinculando "this" para o método "handleClick()"
no contrutor do componente.

 Depois, adicione um manipulador click para o elemento "button" no render
method. Ele deverá acionar o método "handleClick()" quando o botão recebe um
evento click. Relembre que o método usa o pass para o manipulador "onClick"
precisa {} por que ele deverá ser interpretado diretamente como JS.

 Uma vez q vc completar os passos acima vc deverá ser capaz de ver
"You clicked!" quando clicar no botão.


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Change code below this line
    this.handleClick = this.handleClick.bind(this);
    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line / }
        <button onClick={this.handleClick}>Click Me</button>
        { /* Change code above this line / }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

-------------------------------------------------------------------------

              Use State para alternar um elemento

 As vezes vc poderia precisar saber o estado anterior quando atualizando o
state. Contudo, atualizações state pode ser não sincronica - isso significa
React pode lotear multiplas chamadas setState() em uma única atualização.
Isso significa q vc não pode depender do último valor de "this.state" ou
"this.props" quando calculando o próximo valor. Então, vc não deverá usar
code como esse:

this.setState ({
  counter: this.state.counter + this.props.increment
});

 Ao invés disso, vc deverá passar a função "setState" q permita vc acessar
state e props. Usar a funçao com "setState" garante q vc está trabalhando com
os valores mais atuais de state e props. Isso significa q o code acima pode
ser reescrito como:

this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

 Vc tb pode usar uma forma sem "props" se vc precisa somente o "state":

this.setState(state => ({
  counter: state.counter + 1
}));

Note q vc tem q agrupar o objeto literal em parenteses, Caso contrário JS
pensa nisso como um bloco de code.

--------------------------------------------------------------------------

 "MyComponent" tem uma propriedade "visibility" q é inicializada para "false".
O método render retorna uma visão se o valor de "visibility" é true, e uma
visão diferente se ele é false.

 Atualmente, não tem uma forma de atualizar a propriedade "visibility" no
componente "state". O valor deverá alternar entre verdadeiro e falso. Não é
um manipulador click no botão q aciona um método class "toggleVisibility()".
Passe uma função para "setState" para definir esse metodo então a "visibility"
do "state" alterna para o valor oposto quando o método é chamado. Se
"visibility" é "false", o médoto define ele para "true", e vice versa.

 Finalmente, clique no botão para ver a renderização condicional do componente
baseado no seu "state".

DICA: Não esqueça de vincular a keyword "this" para o método no "constructor"!

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
  this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility(){
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

-------------------------------------------------------------------------

                    Escreva um contador simples


 Vc pode planejar um componente com estado mais complexo combinando um 
conceito coberto mt longe. Isso inclui inicializando "state", escrevendo 
métodos q definem "state", e atribuindo manipuladores de click para acionar
esses métodos.

---------------------------------------------------------------------------

 O componente "Counter" mantém traço de um valor "count" no "state". Existem
dois botões q chamam métodos increment() e decrement(). Escreva esses métodos
então o botão apropriado é clicado. Tb, crie um método reset() então quando
o botão reset é clicado, o count é definido para 0.

NOTE: Certifique-se q vc não modificou a "className" dos botões. Tb, relembre
de adicionar os vinculos necessários para os métodos récem-criados no
construtor.

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
  this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
  this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }
  reset() {
    this.setState(state => ({
      count: state.count = 0
    }));
  }
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

---------------------------------------------------------------------------

                        Crie um input controlado

 Sua aplicação pode ter interações mais complexas entre "state" e o UI
renderizado. Por exemplo, elementos controladores de formulários para input
text, como "input" e "textarea", mantém seus próprios estados em DOM como o
user types. Com React, vc pode mover esse estado mutável em um componente
React "state". O user's input se torna parte do estato da aplicação, então
React controla o valor daquele campo input. Tipicamente, se vc tem um 
componente React com campos input que o user pode digitar para, isso será um
formulário com input controlado.

---------------------------------------------------------------------------

 O code editor tem o esqueleto de um componente chamado "ControlledInput" para
criar um elemento "input" controlado. O componente "state" já é inicializado
com uma propriedade "input" q segura uma string vazia. Esse valor representa 
o texto q um user digitou em um campo "input".

 Primeiro, crie um método chamado handleChange() q tem um parametro chamado
"evento". Quando o método é chamado, ele recebe um objeto "evento" que 
contém uma string de texto de um elemento "input". Vc pode acessar essa string
com o método "event.target.value" dentro. Atualizar a propriedade "input" de
um component "state" com essa nova string.

 No método "render", crie um elemento "input" acima da tag <h4>. Adicione
um atributo "value" que é igual a propriedade "input" do componente "state".
Depois adicione um evento manipulador onChange() definido para o método
handleChange().

 Quando vc digita na caixa input, aquele texto é processado pelo método 
handleChange(), definido como a propriedade "input" no local "state", e 
renderizado o valor na caixa "input" na page. O componente "state" é a única
fonte de verdade a respeito do input data.

 Por último mas n menos importante, não esqueça de adicionar os vinculos
necessários no construtor.

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
  this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event){
    this.setState({
      input: event.target.value
    });
  }
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line /}
        <input value={this.state.input} onChange={this.handleChange.bind(this)} />
        { /* Change code above this line /}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

--------------------------------------------------------------------------

                      Crie um formulario controlado

 O último desafio mostrou q o React pode controlar o estado interno para
certos elementos como "input" e "textarea", q faz esses componentes controlados.
Isso se aplica para outros elementos de formulários tb, incluindo o elemento
regular HTML "form".

-------------------------------------------------------------------------

 O componente "MyForm" é definido com um "form" vazio com um manipulador
submit. Adicione o elemento "input" no "form" e defina os atributos "value" e
onChange() como no último desafio. Em seguida, vc deve concluir o método
"handleSubmit" para q ele defina o envio da propriedade de estado do 
componente para o valor de entrada atual no estado local.

NOTE: Vc tb deve chamar "event.preventDefault()" no manipulador submit, para
previnir o comportamento do default submit q irá atualizar a web page. Para
conveniencia do camper, o comportamento default foi desabilitado aqui para
evitar q as atualizações redefinam o código de desafio.

 Finalmente, crie uma tag <h1> depois do "form" q renderiza o valor "submit"
do componente "state". Vc pode depois digitar no formulario e clicar no 
botão(ou apertar enter), e vc deve ver seu input renderizado na page.

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line
    event.preventDefault()
    this.setState({
      submit: this.state.input
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line /}
        <input
          value={this.state.input}
          onChange={this.handleChange}  />
          {/* Change code above this line /}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line /}
        <h1>{this.state.submit}</h1>
        {/* Change code above this line /}
      </div>
    );
  }
}

--------------------------------------------------------------------------

            Passe State como props para componentes Filho

 Vc viu um monte de exemplos q passaram props para elementos JSX filho e 
componentes React filho em desafios anteriores. Vc pode estar pensando de 
onde esses props vem. Um padrão é ter um componente com estado contendo o
"state" importante para seu aplicativo, isso depois renderiza componentes
filho. Vc quer esses componentes para acessar alguns pedaõs desse "state",
q são passados como props.

 Por exemplo, vc pode ter um componente "App" q renderiza um "Navbar", entre
outros componentes. No seu "App", vc tem "state" q contém um monte de user
information, mas o "Navbar" somente precisa acessar o username do user então
ele pode mostrá-lo. Vc passa aquele pedaço de "state" para o componente
"Navbar" como um prop.

 Esse padrão ilustra alguns paradigmas no React. O primeiro é unidirectional
data flow. State flows em uma direção abaixa três dos seus componentes da 
sua aplicação, do componente pai com estado para componentes filhos. O
componente filho somente recebe o state data q eles precisam. A segunda é q
aplicativos complexos com estado podem ser divididos em apenas alguns, ou
talvez em um único componente com estado. O resto do seu componente 
simplesmente recebe state do pai como props, e renderiza um UI daquele state.
Ele começa a criar uma sepraração onde o state managemente é manipulado em
uma parte do code e UI renderizando em outro. Esse principio de separating
state logic de lógica UI é uma dos principios chave do React. Quando ele é
usado corretamente, ele faz o planejamento do complexo, com estado
aplicações mais fácil de gerenciar.

--------------------------------------------------------------------------

 O componente "MyApp" é estatal e renderiza um componente "Navbar" como um
filho. Passe a propriedade "name" nesse "state" para para um componente
filho, depois mostre o "name" na tag <h1> na parte do "Navbar" render method.
"name" deverá aparacer depois do texto "Hello, my name is:".

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line /}
         <Navbar name={this.state.name}/>
         {/* Change code above this line /}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line /}
      <h1>Hello, my name is: {this.props.name}</h1>
      {/* Change code above this line /}
    </div>
    );
  }
};

--------------------------------------------------------------------------

              Passe um a props como um Callback

 Vc pode passar "state" como props para componente filho, mas vc não se 
limita a passar dados. Vc pode tb passar funções manipuladoras ou qualquer
método q foi definido num componente React para um componente filho. Isso
é como vc permite componentes filhos para interagir com seus componentes
filhos. Vc passa métodos para um filho como uma prop regular. A ele é
atribuido um nome e vc tem acesso para o método name embaixo "this.props"
no componente filho.

--------------------------------------------------------------------------

 Existem três componentes delineado no code editor. O componente "MyApp" é
o pai q irá renderizar o "GetInput" e "RenderInput" componentes filho.
Adicione o componente "GetInput" para renderizar o método em "MyApp", depois
passa ele como uma prop chamada "input" atribuida para "inputValue" do 
"MyApp" "state". Tb crie uma prop chamada "handleChange" e passe o 
manipulador input "handleChange" para isso.

 Depois, adicione o método de renderização "RenderInput" em "MyApp", depois
crie uma prop chamada "input" e passe o "inputValue" do "state". Uma vez q
vc terminou vc irá será capaz de digitar no campo "input" no componente
"GetInput", q depois chama o método manipulador na sua via props pai. Isso
atualiza o input no "state" do pai, q é passado como props para ambos filhos.
Observe como os dados fluem entre os componentes e como a única fonte de
verdade permanece o estado do componente pai. Reconhecidamente, esse 
exemplo é com pouco controverso, mas deve servir para ilustrar como dado e
callbacks podem ser passados entre componentes React.

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line / }
        <GetInput 
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput 
          input={this.state.inputValue}
        />
        { /* Change code above this line / }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

-------------------------------------------------------------------------

            Use o método Lifecycle componentWillMount

 Componentes React tem muitos métodos especiais q apresentam oportunidades
de executar ações em pontos específicos no ciclo de vida de um componente.
Esses são chamados de lifecycle methods, ou lifecycle hooks, e te permite
pegar componentes num certo ponto no tempo. Isso pode ser antes deles serem
renderizados, antes deles atualizarem, antes deles receberem props, antes
deles desmontarem, e assim em diante. Aqui é uma lista com alguns dos 
principais lifecycle methods:

- componentWillMount()
- componentDidMount()
- shouldComponentUpdate()
- componentDidUpdate()
- component WillUnmount()

As próximas muitas lições irão cobrir alguns dos casos de uso básico para
esses lifecycle methods.

NOTE: O componentWillMount Lifecycle method irá ser descontinuada na futura
versão de 16.X e removida na versão 17.

Source => https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html

-------------------------------------------------------------------------

 O método "componentWillMount()" é chamado antes do método "render()" quando
um componente está começando a ser montado para o DOM. Resgistra algo para 
o console com "componentWillMount()" - vc pode querer ter seu console do 
navegador aberto e ver o resultado.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log(MyComponent)
    // Change code above this line
  }
  render() {
    return <div />
  }
};

-------------------------------------------------------------------------

              Use o método Lifecycle componentDidMount

 Mts desenvolvedores web, em algum momento, precisa chamar um API ponto final
para recuperar dados. Se vc está trabalhando com React, é importante saber
onde executar essa ação.

 A melhor prática com React é colocar chamadas de API ou qualquer chamada
para seu servidor no método lifecycle "componentDidMount". Esse método é
chamado depois q um componente é montado para o DOM. Qualquer chamada para
setState() onde irá ficar o gatilho um re-renderizador de seu componente.
Quando vc chama um API nesse método, e define seu estado com o dado que o
API retorna, ele irá altomáticamente acionar uma atualização uma vez q vc 
recebeu o dado.

-------------------------------------------------------------------------

 Tem uma imitação chamada de API na componentDidMount(). Ele defino state
depois 2.5 segundos para simular uma chamada do server para recuperar dados.
Esse exemplo pede o atual total ativos usuarios para um site. No render
method, renderize o valor de "activeUsers" no <h1> depois o text 
"Active Users:". Veja oq acontece no preview, e sinta-se avontade para
modificar o timeout para ver diferentes efeitos.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1473
      });
    }, 255);
  }
  render() {
    return (
      <div>
        {/* Change code below this line /}
        <h1>Active Users: {this.state.activeUsers}</h1>
        {/* Change code above this line /}
      </div>
    );
  }
}

--------------------------------------------------------------------------

                        Adicione eventos Listeners

 O método "componentDidMount()" é tb o melhor lugar para anexar qualquer
eventos listeners q vc precisa para adicionar uma funcionalidade especifica.
React apresenta um sistema de evento sintetico q agrupa o evento nativo do
sistema presente em navegadores. Isso significa q esse sistema de evento
sintetico se comporta exatamente da msm forma independentemente do 
navegador do usuario - msm q os eventos nativos possam se comportar de
maneira diferente entre navegadores diferentes.

 Vc ja está usando alguns desses eventos sinteticos manipuladores como um
"onClick()". React's synthetic event system é ótimo de usar para mais 
interações vc gerencia no elemento DOM. Contudo, se vc quer anexar um evento
manipulador para o documento ou window objects, vc tem q fazer isso 
diretamente.

---------------------------------------------------------------------------

 Anexe um event listener no método componentDidMount() do evento "keydown"
e tenha esses gatilhos de eventos para o callback "handleKeyPress". Vc pode
usar "document.addEventListener()" q pega o evento(entre aspas) como o 
primeiro argumento e o callback como o segundo argumento.

 Depois, em "componentWillUnmount()", remova o msm event listener. Vc pode
passar os msm argumentos para "document.removeEventListener()". É boa prática
usar esse método lifecycle para fazer qualquer limpeza nos componentes
React antes deles serem desmontados e destruidos. Removendo event listeners
é um exemplo de uma ação de limpeza.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

--------------------------------------------------------------------------

        Otimize re-renderizadores com shouldComponentUpdate 

 Até agr, se qualquer componente recebe novo "state" ou novo "props", ele
re-renderiza ele msm e todos seus filhos. Isso é normalmente okay. Mas React
apresenta um método lifecycle q vc pode chamar quando filhos componentes
recebem novo "state" ou "props", e declara especificamente se os componentes
devem atualizar ou n. O método é "shouldComponentUpdate()", e isso recebe
"nextProps" e "nextState" como paramentros.

 Esse método é uma forma útil de otimizar performance. Por exemplo, o default
comportamento é q seu comportamento re-renderizado quando ele recebe novo
"props", msm se o "props" n tiver mudado. Vc pode usar "shouldComponentUpdate()"
para previnir isso comparando o "props". O método deve retornar um valor
booleano q fala pro React se ou n atualizar o componente. Vc pode comparar
o atual props(this.props) para o proximo props(nextProps) para determinar se
vc precisa atualizar ou n, e retorna "true" ou "falso" adequadamente.

--------------------------------------------------------------------------

 O método "shouldComponentUpdate()" é adicionado num componente chamado
OnlyEvens. Atualmente, esse método retorna "true" então "OnlyEvens" re-
renderiza todo momento ele recebe novo "props". Modifique o método então
atualize "OnlyEvens" somente se o "valor" desse novo props for par. Clique
o botão "Add" e veja a ordem dos eventos no seu console do navegador como
lifecycle hooks são acionados.

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    if (nextProps.value % 2 == 0){
      return true;
    } 
    return false;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}

-------------------------------------------------------------------------
                    Introduzindo estilos Inline

 Tem outro conceito complexo q adiciona capacidades poderosas pra seu code
React. Mas vc pode estar pesando sobre o mais simples problema de como 
estilizar esses elementos JSX q vc criou no React. Vc provavelmente sabe q
n será exatamente o msm q trabalhar com HTML por causa da maneira como vc
aplica classes a elementos JSX.

 Se seu import styles de um stylesheet, n for mt diferente de todos. Vc 
aplica uma classe para seu elemento JSX usando o atributo "className", e 
aplica styles para a classe no seu stylesheet. Outra opção é aplicar estilos
inline, q são mt comuns em desenvolvimento ReactJS.

 Vc aplica estilos inlines para elementos JSX similar como vc faz em HTML,
mas com algumas diferenças JSX. Aqui um exemplo de um estilo inline em HTML:

<div style="color: yellow; font-size:16px;">Mellow Yellow</div>

 Elementos JSX usa o atributo "style", mas por causa da forma q JSX é 
transpilado, vc n pode definir o valor para uma "string". Inveś disso, vc 
define ele igual a um objeto JS. Aqui um exemplo:

<div style={{color: "yellow", fontSize: 16px}}>Mellow Yellow</div>

 Perceba como nóis camelCase a propriedade "fontSize"? Isso é pq o React não
aceita kebab-case keys no objeto style. React irá aplica a atual propriedade
name para gente no HTML.

--------------------------------------------------------------------------

 Adicione um atributo "style" para o "div" no code editor para entregar o text
uma cor de vermelho e fonte size de 72px.

 Note q vc pode opcionalmente definir a font size para um numero, omitindo
as unidades "px", ou escrevendo ele como "72px".

class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};

-------------------------------------------------------------------------

                Adicionando Inline Styles em React

 Vc pode ter percebido nos últimos desafios q existem mts outras diferenças
de syntax do HTML inline styles na adição para o atributo "style" define para
um objeto JS. Primeiro, o nome do certo CSS style properties usam camel case.
Por exemplo, o último desafio definiu o tamanho da font com "fontSize" ao
invez de "font-size" são syntax inválida para propriedade de objeto JS, então
React usa camel case. Como uma regra, qualquer estilo propriedade style com 
hifen são escritos usando camel case no JSX.

 Todas propriedades valor tamanho unidades(como "height", "width", e
"fontSize") são assumido como "px" caso n tenha sido especificado um outro
tipo. Se vc quer usar "em", por exemplo, vc agrupa o valor em aspas, como
{fontSize: "4em"}. Outro mais o tamanho valores q o padrão é para "px", todas
outras propriedades de valor devem estar agrupados em aspas.

--------------------------------------------------------------------------
 
 Se vc tem um grande conjunto de styles, vc pode atribuir um style "object"
para uma constante para manter seu código organizado. Declare suas 
constantes styles como uma variavel global no topo do arquivo. Inicialize
"styles" constante e atribua um "object" com três propriedades de estilo e
seus valores para isso. Dê ao "div" uma cor de "purple", uma font-size de
"40", e uma borda de "2px solid purple". Depois defina o atributo "style"
igual a "styles" constante.

const styles = {
  color:"purple",
  fontSize: 40,
  border: "2px solid purple"
  }
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};

-------------------------------------------------------------------------

                Use JS avançado no método React Render

 Nos últimos desafios, vc aprendeu como injetar JS code no code JSX usando
curly braces, "{ }", para tarefas como acessar props, passando props,
acessando state, inserindo comentários em um code, e mais recentemente,
estilizar seus componentes. Esses são todos usos comuns para por JS em JSX,
mas eles não são são a única forma q vc pode utilizar JS code em seus
componentes React.

 Vc pode tb escrever JS diretamente em seu método "render", antes o "return"
statemente, <i>sem</i> inserir ele dentro de curly braces. Isso é pq ele
ainda n está com o JSX code. Quando vc quer usar uma variavel depois em JSX
code dentro o "return" statement, vc coloca o nome da variavel dentro do
curly braces.

-------------------------------------------------------------------------

 No code aprensentado, o método "render" tem um array q contém 20 frases
representando a resposta encontrada no clássico 1980's Magic Eight Ball toy.
O botão click event é limitado para o método "ask", então cada vez q o 
botão é clicado um número random será gerado e guardado como o "randomIndex"
no state. Na linha 52, delete a string "change me!" e reatribua a const
"answer" então seu code acessará randomicamente um index diferente do array
"possibleAnswers" cada vez q o componente atualiza. Finalmente, insira a 
const "answer" dentro da tag "p".

const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex]; // Change this line
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* Change code below this line /}
          {answer}
          {/* Change code above this line /}
        </p>
      </div>
    );
  }
}

--------------------------------------------------------------------------

                Renderize com uma condição If-Else

 Outra aplicação usando JS para controlar sua renderização view é ligar 
elementos q são renderizados para uma condição. Quando a condição é true,
one view renders. Quando é false, é uma outra visão. Vc pode fazer isso
com um padrão "if/else" statement no método render() de um component React.

-------------------------------------------------------------------------

 MyComponent contém um "boolean" no seu estado q traça se vc quer mostrar
algum elemento no seu UI ou n. O "button" alterna o estado do seu value.
Atualmente, ele renderiza o msm UI todo momento. Reescreva o método render()
com um if/else para q se "display" é "true", ele retorne a atual marcação.
Caso contrário, retorne a marcação sem o elemento "h1".

NOTE: Vc deve escrever um if/else para passar o test. Uso de operadores
ternários não passarão aqui.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    if(this.state.display === true){
      return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    );
    } else {
      return (
        <div>
          <button onClick={this.toogleDisplay}>Toogle Display</button>
        </div>
      )
    }
    
  }
};

------------------------------------------------------------------------

              Use && para uma condicional mais conciso

 O if/else statement funcionou no último desafio, mas tem uma forma mais 
concisa de alcançar o msm resultado. Imagine q vc está traçando mts condições
em um componente e vc quer elementos diferentes para renderizar dependendo
em cada dessas condições. Se vc escrever um monte de else/if statements 
para retornar pequenas diferenças de UIs, vc pode repetir code q deixa
espaço para erro. Invés disso, vc pode usar && logical operator para
executar lógica condicional em uma forma mais concisa. Isso é possivel pq
vc quer checar se uma condição é "true", e se ela for, retorne a msm
marcação. Aqui um exemplo:

{condition && <p>markup</p>}

 Se a "condition" é "true", a marcação irá ser retornada. Se a condição é 
"false", a operação irá imediatamente retornar "false" depois de avaliar a
"condition" e retorna nada. Vc pode incluir essas demonstrações diretamente
em seu JSX e string multiple conditions juntos escrevendo && depois de cada
um. Isso permite vc a manipular condicionais lógicas mais complexas no seu
render() method sem repetir um monte de code.

-------------------------------------------------------------------------

 Resolva o último exemplo novamente, então o "h1" somente renderizará se
"display" é "true", mas use o operador lógico && invés de um if/else.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};

------------------------------------------------------------------------

        Use expressões ternarias para renderizar condionais

 Antes de seguirmos para técnicas de renderização dinamicas, tem uma última
forma de usar condições buit-in JS para renderizar oq vc quer: o ternary
operator. O operador ternário é mt utilizado como uma abreviação para
if/else em JS. Eles não são tão robustos como os tradicionais if/else, mas
eles são mt populares entre desenvolvedores React. Uma razão para isso é 
por causa de como JSX é compulado, if/else n podem ser inseridos diretamente
no JSX code. Vc pode ter percebido isso uns desafios atrás - quando um
um if/else era requerida, era sempre fora da instrução de retorno. Expressões
ternárias podem ser uma alternativa excelente se vc quer implementar uma 
condicional lógica no seu JSX. Relembre q um operador ternário tem três partes,
mas vc pode combinar mts expressões ternárias juntas. Aqui vai a syntax
básica:

condition ? expressionIfTrue : expressionIfFalse;

  -----------------------------------------------------------------------

 O code editor tem três constantes definidas no componete "CheckUserAge"
render() method. Eles são chamado "buttonOne","buttonTwo", e "buttonThree".
Cada um desses é atribuido uma simples expressão JSX representando um 
elemento botão. Primeiro, inicialize o estado de "CheckUserAge" com "input"
e "userAge" ambos definem valores de uma string vazia.

 Uma vez q o componente está renderizando informação para a page, users
devem ter uma forma para interagir com eles. Com o componente de instrução
return, defina uma expressão ternária q implemente a seguinte lógica: quando
a primeira page carrega, renderiza o botão submit, "buttonOne", para page.
Depois, quando o user coloca sua idade e clica no botão, renderiza um botão
diferente baseado na idade. Se o user colocar um número menor q 18, render
"buttonTree". Se um user colocar um número maior ou igual a 18, render
"buttonTwo".

const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      input: '',
      userAge: ''
    }
    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line /}     
        {this.state.userAge === '' 
        ? buttonOne 
        : this.state.userAge >= 18
        ? buttonTwo
        : buttonThree}

        {/* Change code above this line /}
      </div>
    );
  }
}

-------------------------------------------------------------------------
              Renderize condicionalidade de props

 Até agr, vc viu como usa if/else, && e o operador ternário (condition ?
expressionIfTrue : exppressionIfFalse) para fazer decisões condicionais 
sobre oq renderizar e quando. Contudo, tem um último tópico importante
para falarmos q deixa vc combinar qualquer um ou todos desses conceitos com
outra poderosa caracterista do React: props. Usar props para condicionalizar
códigos de renderização é mt comum entre desenvolvedores React - isso é,
eles usam o valor de um dado prop para automaticamente fazer decisões sobre
oq é para renderizar.

 Nesse desafio, vc irá definir um componente filho para fazer decisões
renderizando baseado nos props. Vc tb pode usar operador ternário, mas vc 
pode ver como mts dos outros conceitos q foram cobertos nos últimos desafios
podem ser só como útil nesse contexto.

------------------------------------------------------------------------

 O code editor tem dois componentes q são particialmente definidos para vc:
um pai chamado "GameOfChance", e um filho chamado "Resolts". Eles são usados
para criar um simples jogo onde o user aperta um botão para ver se eles
venceram ou perderam.

 Primeiro, vc precisa de uma expressão simples q aleatóriamente retorne
valores diferentes toda vez q for rodado. Vc pode usar "Math.random()". Esse
método retorna um valor entre 0(inclusive) e 1(exclusivo) cada vez q ele é
chamado. Até agr 50/50 impares, use "Math.random() >= .5" em sua expressão.
Estatiscamente falando, essa expressão irá retornar "true" 50% das vezes, e
"false" os outros 50%. No método render, substitua "null" pela expressão
acima para completar a declaração da variável.

 Agr vc tem uma expressão q vc pode usar para criar uma decisão randômica
no code. Depois vc precisa implementar isso. Renderize o componente "Result"
como um filho de "GameOfChance", e passe em "expression" como um prop
chamado "fiftyFifty". No componente "Results", escreva uma expressão
ternária para renderizar o elemento "h1" com o texto "You Win!" ou "You Lose!"
baseado na prop "fiftyFifty" q foi passado no começo de "GameOfChance".
Finalmente, tenha certeza q o método "handleClick()" está contando 
corretamente cada turno então o user sabe quantas vezes ele jogou. Isso
tb serve para o user saber o componente q realmente atualizou no caso deles
vencer ou perder duas vezes seguidas.

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Change code below this line /}
    return <h1>
    {this.props.fiftyFifty ? "You Win!" : "You Lose!"}
    </h1>;
    {/* Change code above this line /}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    const expression = Math.random() >= .5 ? true : false; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line /}     
        <Results fiftyFifty={expression} />
        {/* Change code above this line /}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}

-------------------------------------------------------------------------

    Troque Inline CSS condicionalmente baseado no Component State

 Nesse ponte, vc já viu mts aplicações de renderização condicional e o uso
de inline styles. Aqui mais um exemplo q combina ambos desses tópicos. Vc
tb pode renderizar CSS condicionalmente baseado no estado de um componente
React. Para fazer isso, vc checa uma condição, e se essa condição existe,
vc modifica o estilo do objeto q foi atribuido o elemento JSX no método
de renderização.

 Esse paradigma é importante para entender por causa dele ser uma mudança
dramática da mais tradicional abordagem de aplicar styles modificando os
elementos DOM diretamente(q é mt comum com JQuery, por exemplo). Nessa 
abordagem, vc deve manter traço de quando elementos mudam e tb manipular a
atual manipulação diretamente. E pode se tornar dificil de manter as
mundanças, potenciamente fazendo seu UI imprevísivel. Quando vc define um 
estilo objeto basedo numa condição, vc descreve como o UI deve parecer como
uma função do estado da aplicação. Existe um fluxo claro de informação q
só se move em uma direção.Isso é o método preferido quando escrevenodo
aplicações com React.

------------------------------------------------------------------------

 O code editor tem um simples controlado componente input com uma borda
estilizada. Vc quer estilizar essa border red se o utipo user for mais q 
15 characters de text no input box. Adicione uma condição para checar por 
isso e, se a condição é válida, defina o input border style para 3px solid
red. Vc pode testar isso digitando um texto no input.

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // Change code below this line
    if(this.state.input.length > 15){
      inputStyle.border = '3px solid red'
    };
    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};

-------------------------------------------------------------------------

        Use Array.map() para renderizar elementos dinamicamente

 Renderização condicional é útil, mas vc pode precisar q seus componentes
rendirize um número desconhecido de elementos. Muitas vezes em programção
reativa, um programador n tem forma de sabar oq o estado de uma aplicação é
até a hr da execução, por que são mt dependentes na interação do user com 
aquele programa. Programadores precisam escrever seus code para correta
manipulação desse estado desconhecido afrente do tempo. Usar Array.map()
em React ilustra esse conceito.

 Por exemplo, vc cria um simples "To Do List" app. Como o programador, vc 
n tem forma de conhecimento de quantos items um user pode ter na suas listas.
Vc precisa definir seu componente mt antes de alguem usar o programa e 
decidir q  hj é dia de lavar roupas.

-------------------------------------------------------------------------

 O code editor tem mt dos componentes de "MyToDoList" definidos. Alguns desses
code deve parecer familiar se vc completou o controlled form challenge. Vc
irá perceber um "textarea" e um "button", ao longo com um casal de métodos
q traçam seus estados, mas nd é renderizado para a page ainda.

 Dentro o "constructor", cria um objeto "this.state" e define dois estados:
userInput deve ser iniciado como uma string vazia, e toDoList deve ser 
iniciado como um array vazio. Depois, delete o comentário no método render()
próximo a variável items. Nesse lugar, mapeie sobre o array toDoList guardado
no estado interior do componente e dinamicamente renderize um li de cada item.
Tente colocar a string "eat, code, sleep, repeat" dentro do "textarea", depois
click o botão e veja oq aconteceu.

NOTE: Vc pode saber q todos elemento filho irmão criado por uma operação
mapping como essa precisa de ser fornecida com um único key atributo. Não
se importe, isso é o tópico do próximo desafio.

const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput: '',
      toDoList: []
    };
    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(i => <li>{i}</li>); // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

-------------------------------------------------------------------------

              Dê a elementos irmãos um único key Atributo

 O último desafio mostrou como o método map() é usado para renderizar
dinamicamente um número de elementos baseado no user input. Contudo, tem um
pedaço importante faltando daquele exemplo. Quando vc cria um array de 
elementos, cada um precisa de um key attribute definido para um valor único.
React usa essas keys para manter traço de quais item são adicionados,
modificados ou removidos. Isso ajuda a fazer o processo de re-renderização
mais eficiente quando a lista é modificada em qualquer forma.

NOTE: Keys somente precisam ser únicas entre elementos irmãos, eles n
precisam ser globalmente únicos em sua aplicação.

------------------------------------------------------------------------

 O code editor tem um array com alguns frameworks front end e uma instrução
funcional componente nomeado Frameworks().Frameworks() precisam mapear o
array para uma lista sem ordem, como no último desafio. Termine escrevendo 
o map callback para retornar um elemento <li> para cada framework no array
frontEndFrameworks. Dessa vez, tenha certeza de dar cada <li> um key
attribute, definido um único valor. O elemento <li> deve tb conter texto de
frontEndFrameworks.

 Normalmente, vc quer fazer a key alguma coisa q unicamente indentifica o 
elemento q começou a ser renderizado. Como um último recorrer o array index
pode ser usado, mas tipicamente vc deve tentar usar um único identificador.

const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(i => <li key={i} >{i}</li>); // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};

--------------------------------------------------------------------------

        Use Array.filter() para filtrar dinamicamente um array

 O método map() array é uma ferramenta poderosa q vc irá usar mts vezes 
trabalhando com React. Outro método relacionado ao map é filter, q filtra os
conteúdos de um array baseado em uma condição, depois retorna um novo array.
Por exemplo, se vc tem um array de users q todos tem a propriedade "online"
q pode ser definido como "true" ou "false", vc pode filtrar somente aqueles
users q estão online escrevendo:

let onlineUsers = users.filter(user => user.online);

-------------------------------------------------------------------------

 No code editor, MyComponent's state é inicializado com um array de users.
Alguns user estão online e alguns n. Filtre o array então vc verá somente
aqueles users q estão online. Para fazer isso, primeiro use filter para
retornar um novo array contendo somente os user que estão com a propriedade
online como "true". Depois, na variável renderOnline, mapeie sobre o array
filtrado, e retorne um elemento <li> para cada user q contenha o texto de
seus username. Certifique-se de incluir uma chave exclusiva tb, como no 
último desafio.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(users => users.online === true); // Change this line
    const renderOnline = usersOnline.map(i => <li key={i.username}>{i.username}</li>); // Change this line
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}

--------------------------------------------------------------------------

            Renderize React no servidor com renderToString

 Até agr, vc tem renderizando componentes React no client. Normalmente, isso
é oq vc sempre irá fazer. Contudo, tem mais alguns casos de uso onde isso faz
sentido de renderizar um componente React no server. Desde q React é uma
biblioteca JS e vc pode rodar JS no server com Node, isso é possivel. De fato,
React apresenta um método renderToString() vc pode usar para esse propósito.

 Tem duas razões chave pq renderizar no server pode ser usado em um app do
mundo real. Primeiro, sem fazer isso, seu app React irá consistir de um 
arquivo HTML relativamente vazil e um grande pacote de JS quando ele
inicialmente carrega o navegador. Isso pode n ser o ideal para procurar
motores q estão testando o conteúdo index de sua page então pessoas podem
encontrar vc. Se vc renderiza a marcação inicial HTML no server e envia isso
para o client, a inicial page carrega contendo td da marcação page q pode
ser arrastado por motores de busca. Segundo, isso cria uma experiência de
carregamento da page inicial mais rápida pq HTML renderizado é menor q JS
code de um app inteiro. React irá continuar sendo capaz de reconhecer seu
app e gerencia-lo depois do carregamento inicial.

----------------------------------------------------------------------

 O método renderToStrin() é apresentado no ReactDOMServer, q é disponibilizado
aqui como um objeto global. O método recebe um argumento q é um elemento React.
Use isso para render App para uma string.

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Change code below this line

ReactDOMServer.renderToString(<App />);

--------------------------------------------------------------------------