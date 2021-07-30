/*                              Começando no React Redux

 Essa série de desafios apresenta como usar Redux com React. Primeiro, aqui é uma apresentação de
algumas das chaves principais de cada tecnologia. React é uma biblioteca de visão q vc fornece com
dados, depois ele renderia a visão em um eficiente, predictable forma. Redus é um estado de 
gerenciamento framework q vc pode usar para simplificar o gerenciamento de sua aplicação state.
Normalmente, em um React Redux app, vc cria um único Redux store q gerencia o state de seu app
inteiro. Seus componentes React inscrevem para somente pedaços de dados no store q são relavantes
para suas rotas. Depois, vc dispatch ações diretamente dos componentes React, q depois acionam
store updates.

 Embora componentes React podem gerenciar seus próprios state localmente, quando vc tem um app
complexo, ele é geralmente melhor de manter o app state em uma única localização com Redux. Existem
exceções específicas somente para elas. Finalmente, por causa Redux não ser planejado para trabalhar
com React fora da caixa, vc precisa usar o react-redux package. Ele fornece uma forma para vc de
passar Redux state e dispatch para seus componentes React como props.

 Sobre os próximos muitos desafios, primeiro, vc irá criar um simples componente React q te 
permite introduzer uma nova mensagem de texto. Esses são adicionado para um array q será mostrado
na visão. Isso deve ser um bom review do q vc aprendeu nas lições React. Depois, vc irá criar
um Redux store e ações q gerenciem o state de messages array. Finalmente, vc irá usar react-redux
para conectar o Redux store com seu componente, deste modo extraindo o local state no Redux store.

------------------------------------------------  ---------------------------------------------

 Comece com um componente DisplayMessages. Adicione um constructor para esse componente e incialize
ele com um state q tem duas propriedades: input, q é definido para uma string vazia, e message,
q é definido para um array vazio.

class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props){
    super(props);
    this.state = {
      input: '',
      messages: []
    };
  }
  // Change code above this line
  render() {
    return <div />
  }
};

----------------------------------------------------------------------------------------------

                          Gerencie State Localmente Primeiro

 Aqui vc irá finalizar de criar o componente DisplayMessages.

--------------------------------------  ------------------------------------------------------

 Primeiro, no método render(), tem o componente render um elemento input, elemento button, e 
elemento ul. Quando o elemento input muda, ele deve acionar um método handleChange. Tb, o elemento
input deve renderizar o valor de input q está no estado do componente. O elemennto burron deve
acionar um método submitMessage() quando ele for clicado.

 Segundo, escreva esses dois métodos. O método handleChange() deve atualizar o input com oq o user
está digitando. O método submitMessage() deve concatenar a atual mensagem (guardada no input) para
o array messages no estado local, e limpar o valor de input.

 Por fim, use o ul para mapear sobre o array de messages e renderize isso para a tela como uma 
lista de elementos li.

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    })
  }
  submitMessage(){
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line / }
      <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
      <button onClick={this.submitMessage.bind(this)}>Submit</button>
      <ul>
        {this.state.messages.map((x,i)=> {
          return <li key={i}>{x}</li>
        })}
      </ul>
        { /* Change code above this line / }
      </div>
    );
  }
};

--------------------------------------------------------------------------------------------

                          Extraia Lógica State para Redux


 Agr q vc terminou o compenente React, vc precisa mover a lógica dele executando localmente em
seu state em Redux. Esse é o primeiro passo para conectar simples React app para Redux. A
única funcionalidade seu app tem é para adicionar novas mensagens para seu user numa lista não
ordenada. O exemplo é simples em ordem para demonstrar como React e Redux funcionam juntos.

----------------------------------------- --------------------------------------------------

 Primeiro, defina uma ação tipo ADD e defina uma constante ADD. Depois, defina a ação criadora
addMessage() q cria a ação para adicionar uma message. Vc irá precisar passar uma message para
essa ação criadora e incluir a mensagem na ação retornada.

 Depois crie um reducer chamado messageReducer() q manipule o estado para as mensagens. O estado
inicial deve ser igual a um array vazio. Esse reducer deve adicionar uma message para o array de
messages mantido no state, ou retorne o state atual. Por fim, crie seu Redux store e passe para
ele o reducer.

// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = message => {
    return {
      type: ADD,
      message
    };
};

const messageReducer = (previousState = [], action) => {
  switch (action.type) {
    case ADD:
      return [...previousState, action.message];
      break;
      default:
        return previousState;
  }
};

const store = Redux.createStore(messageReducer);

--------------------------------------------------------------------------------------------

                        Use Provider para Conectar Redux no React

 No último desafio, vc criou um Redux store para lidar com a messages array e criar uma ação para
adcionar nova messages. O próximo passo é para apresentar React access para o Redux store e a
ações q ele precisa para dispatch atualizações. React Redux apresenta seu pacote react-redux para
ajudar a concluir essas tarefas.

 React Redux fornece uma pequena API com duas caracteristicas chaves: Provider e connect. Esse
abraçador depois  te permite acessar o Redux store e dispatch funções por todo sua árvore de 
componentes. Provider recebe duas props, o Redux store e o componente filho do seu app.
Definir o Provider para um componente App pode parecer com isso:

<Provider store={store}>
  <App />
</Provider>

------------------------------------------- ---------------------------------------------

 O code editor agr mostra todos seus Redux e React code dos últimos vários desafios. Ele inclui
o Redux store, ações, e o componente DisplayMessages. O único novo pedaço é o componente 
AppWrapper no final. User esse top level component para renderizar o Provider do ReactRedux, e
passe o Redux store como um prop. Depois renderize o componente DisplayMessages como um filho.
Uma vez q vc terminou, vc deve ver seu componente React renderizado para a page.

NOTE: React Redux é disponivel como uma variavel global aqui, então vc pode acessar o Provider
com dot notation. O code no editore recebe vantagem disso e define isso para uma constante 
Provider para vc usar no AppWrapper render method.

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render(){
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    )
  }
  // Change code above this line
};

-----------------------------------------------------------------------------------------

                              Mapeie Estado para Props

 O componente Provider te permite a fornecer state e dispatch para seus componentes React, mas vc
deve especificar exatamente que state e actions vc quer. Dessa forma, vc tem certeza q cada
componente terá somente acesso para o state q precisa. Vc conclui isso criando duas funções:
mapStateToProps() e mapDispatchToProps().

 Nessas funções, vc declara o que cada pedaço de state vc quer q tenha acesso para e quais ações
vc precisa para habilitar o dispatch. Umas vez q essas funções estão no lugar, vc irá ver como
usar o método React Redux connect para conectar eles para seus componentes em outro desafio.

NOTE: Atrás das cenas, React Redux usa o método store.subscribe() para implementar
mapStateToProps().

------------------------------------------- --------------------------------------------

 Crie uma função mapStateToProps(). Essa função deve recever state como um argumento, depois 
retorne um objeto que mapeie esse state para specific property names. Essas propriedades irão
se tornar acessiveis para seu componente via props. Desde esse exemplo mantenha o estado inteiro
do app em um único array, vc pode passar o estado inteiro para seu componente. Crie uma propriedade
messages no objeto q será retornado, e defina ele para state.

const state = [];

// Change code below this line

const mapStateToProps = (state) => {
  return {
    messages: state
  }
}

----------------------------------------------------------------------------------------

                            Mapeie Dispatch para Props

 A função mapDispatchToProps() é usada para fornecer especifica ação criadora para seus 
componentes React então eles podem dispatchar ação contra o Redux store. Ele é parecido na 
estrutura com a função mapStateToProps() q vc escreveu no último desafio. Ele retorna um objeto
q mapeia ações dispatch para property names, q se torna componennte props. Contudo, invés de
retornar um pedaço do state. cada propriedade retorna uma função q chama dispatch com uma ação
criadora e qualquer ação relevante dado. Vc tem acesso para esse dispatch por que ele é passado 
no mapDispatchToProps() como um parametro quando vc define a função, como vc passou state para 
mapStateToProps(). Atrás das cenas, React Redux está usando Redux store.dispatch() para conduzir
esses dispatches com mapDispatchToProps(). Isso é similar a como ele usa o store.subscribe() 
para componentes q são mapeados para state.

 Por exemplo, vc tem uma ação criadora loginUser() q recebe um username como uma ação payload.
O objeto retornado do mapDispatchToProps() para essa ação criadora irá parecer com algo assim:

{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}

--------------------------------------  ------------------------------------------------

 O code editor fornece uma ação criadora chamada addMessage(). Escreva a função mapDispatchToProps()
q recebe dispatch como um argumento, depois retorne um objeto. O objeto deve ter uma propriedade
submitNewMessage definida para o a função dispatch, que recebe um paremetro para a nova 
message para adicionar quando ele é dispatcha addMessage().

const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
}

------------------------------------------------------------------------------------

                            Conect Redux com React

 Agr q vc está escrevendo ambos as funções mapStateToProps() e o mapDispatchToProps(), vc pode
usar eles para mapear state e dispatch para o props de um dos seus componentes React. O método
conect do React Redux pode lidar com essa tarefa. Esse método recebe dois argumentos opcionais,
mapStateToProps() e mapDispatchToProps(). Eles são opcionais porque vc pode ter um componente q
somente precisa acessar o state mas não precisa dispatchar qualquer ação, ou vice versa.

 Para usar esse método, passe na função como argumentos, e imediatamente chama o resultado com 
seu componente. Essa syntax é um pouco não comum e parece com isso:

connect(mapStateToProps, mapDispatchToProps)(MyComponent)

NOTE: Se vc quer omitir um dos seus argumentos para o método connect, vc passa null no seu lugar.

------------------------------------------  ---------------------------------------

 O code editor tem as funções mapStateToProps() e mapDispatchToProps() e um novo componente
React chamado Presentational. Conecte esse componente para Redux com o método connect do objeto
global ReactRedux, e chame ele imediatamente no componente Presentational. Atribua o resultado 
para um novo const chamado ConnectedComponent q representa o componente conectado. É isso, agr
vc está conectado com Redux! Tende muder qualquer dos argumentos de connect para null e veja o 
resultado do test.

const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// Change code below this line

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps) (Presentational);

------------------------------------------------------------------------------------

                        Conecte Redux Com o Messages App

 Agr q vc entendeu como usar connect para conectar React para Redux, vc pode aplicar oq vc 
aprendeu para seu componente React q lidam com messages.

 Na última lição, o componente q vc conectou com Redux foi chamado Presentational, e isso não
foi arbitrario. Esse termo geralmente refere para componentes React q n são diretamente conectadas
com Redux. Eles são simplesmente responsáveis pela apresentação do UI e faz isso como uma função
do props q eles recebem. Por contraste, componentes container são conectados para Redux. Esses 
são tipicamente responsaveis por ações dispatching para o store e muitas vezes passam store state
para componentes filho como props.

----------------------------------------- -----------------------------------------

 O code editor tem todos o codes q vc já escreveu nessa seção até agr. A única mudança é q o 
componente React é renomeado para Presentational. Crie um novo componente guardado em uma 
constante chamada Container q usa connect para conectar o componente Presentational para Redux.
Depois, no AppWrapper, renderize o componente React Redux Provider. Passe Provider o Redux store
como uma prop e renderize Container como um filho. Uma vez q tudo é configurado, vc irá ver a 
messages app renderizado para page novamente.

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:
const Container = connect(mapStateToProps, mapDispatchToProps) (Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
};

------------------------------------------------------------------------------------

                      Extraia Estado Local em Redux

 Vc está quase acabando! Relembre q vc escreveu todo o code Redux então esse Redux pode controlar
o gerenciamento de state do seu app React messages. Agr q Redux está conectado, vc precisa 
extrair o gerenciamento de state fora do componente Presentational e colocar em Redux. Atualmente,
vc tem Redux conectado, mas vc está lidando com o state localmente com o componente Prensetational.

------------------------------------  ----------------------------------------------

 No componente Presentational, primeiro, remova a propriedade messages no local state. Essas
messages irão ser geridas por Redux. Depois, modifique o método submitMessage() para q ele dispatches
submitNewMessage() de this.props, e passe no input de message atual do estado local como um
argumento. Por causa de vc ter removido messages do local state, remova a propriedade messages da
chamada para this.setState() aqui tb. Por fim, modifique o método render() para q ele mapeie sobre
as messages recebidas de props em vez de q state.

 Uma vez feita essas mudanças, o app irá continuar a função da msm forma, exceto Redux manages
o state. Esse exemplo tb ilustra como um componente pode ter local state: seu componente continua
traçando user input localmente em seu próprio state. Vc pode ver como Redux fornece um state
útil gerenciamente framework no topo de React. Vc arquivou o msm resultado usando somente 
React local state na primeira, e isso é possivelmente comum com apps simples. Contudo, Como seus
apps se tornal grandes e mais complexos, o msm acontece com o gerenciamento do seu state, e esse é
o problema q o Redux resolve.

------------------------------------------------------------------------------

 Parabéns! Vc finalizou as lições no React e Redux. Tem um último item que vale a pena pontuar
antes de vc seguir em frente. Tipicamente, vc não escreve React apps em um code editor como esse.
Esse desafio te da uma visão rápida do que a syntax se parece se vc está trabalhando com npm e
um file system em sua própria máquina. O code deve parecer similar, exceto pelo uso de instruções
import(esses puuxam tudo de suas dependenciasi q tem sido fornecido para vc nos desafios). O
"gereciador de pacotes com npm" section cobre npm em mais detalhes.

 Por fim, escrever React e Redux code geralmente requer algumas configurações. Isso pode ser
um pouco complicado. Se vc está interessado em experimentar em sua próprima máquina, o 
Create React App vem configurado e pronto para partir.

 Alternativmante, vc pode habilitar Babel como um JS Preprocessor no CodePen, adicionar React e
ReactDOM como external JavaScript resources, e funcionará lá tb.

--------------------------------------  -------------------------------------

 Registre a message 'Now I know React and Redux!' no console.


import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// Only change code below this line

console.log('Now I know React and Redux!')