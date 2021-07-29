/* --------------------------------------------------------------------------------------------
                                  Crie um Redux Store

 Redux é um estado gerenciador framework q pode ser usado com um número diferente de web técnologias,
incluindo React.

 Em Redux, tem um único estado oject q é reponsável pelo estado inteiro de sua aplicação. Isso
significa se vc tem um app React com dez componentes, e cada componente tem seu próprio estado
local, o estado inteiro do seu app será definido um único estado object abrigado no Redux store.
Esse é o primeiro principio importante para entender quando aprendendo Redux: o Redux store é a
única fonte de verdade qunado ele vem para estado de aplicação.

 Isso tb significa q qualquer hr qualquer pedaço de seu app quer ser atualizar estado, ele deve
fazer então atráves do Redux Store. O unidirecional data flow faz isso ser fácil de traçar state
gerernciamanento no seu app.

------------------------------------------------  ---------------------------------------------

 O Redux store é um objeto q segura e gerencia aplicação state. Tem um método chamado createStore()
no Redux object, q vc usa para criar o Redux store. Esse método recebe uma reducer function como
um argumento requerido. A função reducer é coberta em desafios a frente, e já está definida para
vc no editor. Ele simplesmente recebe state como um argumento e retorna state.

 Declare um variável store e atribua a ele o método createStore(), passando no reducer como um
argumento.

const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

const store = Redux.createStore(reducer);

--------------------------------------------------------------------------------------------

                            Pegue State do Redux Store

 O objeto Redux store apresenta mts métodos q te permitem interagir com ele. Por exemplo, vc pode
recuperar o atual estado guardado no Redux store object com o método getState().

------------------------------------------------  ------------------------------------------

 O code dos últimos desafios é re-escrito mais concisamente no code editor. Use store.getState()
para recuperar o state do store, e atribua isso para uma nova variável currentState.

const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line

const currentState = store.getState();

--------------------------------------------------------------------------------------------

                                    Defina uma Ação Redux

 Desde q Redux é um framework de gerenciamento de state, atualizar estado é um de seus núcleos de
tarefas. No Redux, todas atualizações state são acionadas por ações despachantes. Uma ação é 
simplesmente um objeto JS q contém informação sobre uma ação evento q ocorreu. O Redux store
recebe esses objetos ações, depois atualiza esse estado precisamente. Algumas vezes uma ação
Redux tb carrega algum dado. Por exemplo, a ação carrega um username depois um user logs dentro.
Enquanto o dado é opcional, ações devem carregar uma propriedade type q específica o 'tipo' da
ação q ocorreu.

 Pense de Redux actions como menssageiros q enviam informação sobre eventos acontecidos em seu
app para o Redux store. O store depois conduz os négocios de atualização state baseado em q ação
q ocorreu.

----------------------------------------- --------------------------------------------------

 Escrever uma ação Redux é simples como declarar um objeto com um tipo propriedade. Declare um
objeto action e dê a ele uma propriedade type definido para string 'LOGIN'.

// Define an action here:
let action = {
  type: 'LOGIN'
}

--------------------------------------------------------------------------------------------

                          Defina uma Ação Criadora

 Depois de criar uma ação, o próximo passo é enviar a ação para o Redux store então ele pode 
atualizar seu estado. No Redux, vc define ação criadora para concluir isso. Uma ação criadora é
simplesmente uma função JS q retorna uma ação. Em outras palavras, ação criadora cria objetos q
representa ações eventos.

------------------------------------------  -----------------------------------------------

 Defina uma função nomeada actionCreator() q retorne o objeto action quando chamado.

 const action = {
  type: 'LOGIN'
}
// Define an action creator here

function actionCreator() {
  return action;
}

--------------------------------------------------------------------------------------------

                                Despache um evento ação

 dispatch method é oq vc usa para dispatch ações para o Redux store. Chamando store.dispatch() e
passando o valor retornado de uma ação criadora envia uma ação de volta para o store.

 Relembre q ação criadora retorna um objeto com um tipo propriedade q especifica a ação q
ocorreu. Depois o método dispatches uma ação objeto para o Redux store. Baseado no último desafio
exemplo, a seguinte linhas são equivalentes, e ambas dispatches a ação de tipo LOGIN:

store.dispatch(actionCreator());
store.dispatch({type: 'LOGIN'});

--------------------------------------------- ---------------------------------------------

 O Redux store no code editor tem um estado inicializado q um objeto contendo um login property
atualmente definido como false. Tem tb uma ação criadora chamado loginAction() q retorna uma 
ação de tipo LOGIN. Dispatch o LOGIN action para o Redux store chamando o método dispatch, e 
passando dentro a ação criada por loginAction().

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:

store.dispatch(loginAction());
store.dispatch({ type: 'LOGIN' });

-------------------------------------------------------------------------------------------

                              Manipule uma ação no Store

 Depois uma ação é criada e dispatched, o Redux store precisa saber como responder aquela ação.
Isso é trabalho de uma função reducer. Reducers em Redux são responsáveis por modificações no
state q toma lugar em respota para ações. Um reducer recebe state e action como argumentos, e 
ele sempre retorna um novo state. Ele é importante de ver q esso é a única rota do reducer. Ele
n tem efeitos colaterais - Ele nunca chama um API final e ele nunca tem qualquer supresas 
escondidas. O reducer é simplesmente uma função pura q recebe state e action, depois retorna um 
novo state.

 Outro principio chave no Redux é q state é read-only. Em outras palavras, a função reducer deve
sempre retornar uma nova copia de state e nunca modificar state diretamente. Redux n faz impor
state imutavél, contudo, vc é responsável por impor isso no code de sua função reducer. Vc irá
práticar isso em desafios futuros.

------------------------------------------  ------------------------------------------------

 O code editor tem o desafio anterior como começo de uma função reducer para vc. Preencha o 
corpo da função reducer então se ele receber uma ação do tipo 'LOGIN' ele retorna um objeto state
com login definido para true. Caso contrário, ele retorna o atual state. Preceba q o state atual
e a ação dispatched são passados para o reducer, então vc pode acessar o tipo de ação diretamente
com action.type.

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if(action.type === 'LOGIN') {
    return {
      login: true
    };
  } else {
    return state;
  }
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

------------------------------------------------------------------------------------------

            Use uma instrução switch para manipular multiplas ações

 Vc pode falar pro Redux store como manipular multiplas ações tipos. Digamos vc está gerenciando
user authentication em seu Redux store. Vc quer ter uma representação de state para quando users
estão logados e quando eles estão deslogados. Vc representa isso com um simples objeto estado com
a propriedade authenticated. Vc tb precisa action creators q crie ações correspondendo para o user
login e user logout, ao longo com objetos ações deles msm.

------------------------------------------- -----------------------------------------------

 O code editor tem um store, actions, e action creators definidos para vc. Preencha a função
reducer para manipular multiplas ações authentication. Use uma instrução JS switch no reducer
para responder a diferentes ações eventos. Isso é o padrão superior escrevendo Redux reducers.
A instrução switch deve trocar sobre action.type e retornar a authentication apropriada.

NOTE: Nesse ponto, n se preocupe sobre imutabilidade de estado, desde q ele é pequeno e simples
nesse exemplo. Para cada uma ação vc pode retornar um novo objeto - por exemplo, 
{authenticated: true}. Tb, n esqueça de escrever um default case em sua instrução switch q retorne
o state atual. Isso é importante pq uma vez q seu app tem multiplos reducers, eles são todos 
executados qualquer hr uma ação dispatch é feita, até quando a ação não é relatada para aquele
reducer. Em um caso, vc quer certificar q seu return atual state.

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch(action.type) {
    case 'LOGIN':
      return {
        authenticated: true
      };

    case 'LOGOUT':
      return {
        authenticated: false
      };

    default:
      return defaultState;
  }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};

--------------------------------------------------------------------------------------------

                          Use const para Action types

 Uma prática comum quando trabalhando com Redux é para atribuir action types como constantes 
read-only, depois referencia essas constantes onde elas serão usadas. Vc pode refatorar o code q
vc está trabalhando para escrever action types como desclarações const.

----------------------------------------------  --------------------------------------------

 Declare LOGIN e LOGOUT como valores de const e atribua a eles a string 'LOGIN' e 'LOGOUT'. Depois,
edite o authReducer() e o action creators para referenciar essas constantes invés dos string values.

NOTE: Ele é normalmente convertido para constantes escritas todo uppercase, e isso é prática 
padrão em Redux.

const LOGIN = 'LOGIN';

const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

--------------------------------------------------------------------------------------------

                            Registre um Store Listener

 Outro método q vc tem q acessar num Redux store object é store.subscribe(). Isso te permite 
inscrever funções listener para store, q são chamada sempre q uma ação é despachada contra o
store. Um uso simples para esse método é de inscrever a função para seu store q simplesmente 
registra uma mensagem toda vez q uma ação é recebida e o store é atualizado.

--------------------------------------------- ----------------------------------------------

 Escreva uma função callback q incremente a variável global count toda vez q store receber uma
ação, e passe essa função dentro do método store.subscribe(). Vc verá q store.dispatch() é
chamado três vezes seguidas, cada vez passando diretamente em um objeto ação. Veja o resultado
do console entre a ação dispatches para ver as atualizações tomando lugar.

const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
const addOne = () => (count += 1);
store.subscribe(addOne);
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

------------------------------------------------- ------------------------------------------

                                  Problem Explanation

 Let’s break the instructions down to figure exactly what it’s asking.

Write a callback function that increments the global variable count every time the store receives an action, and pass this function in to the store.subscribe() method.

We can summarize these steps into small chunks:

write a callback function
increment the global variable count
pass function to store.subscribe() method.
Awesome! Now let’s review some of the basics again.

What is a “callback function” in plain English?
A callback function is simply a function that gets called after another function is done being executed. In the real-world, it might be something like this:

// You drop your car off at the mechanic and you want the shop to 'call you back' when your car is fixed.
let carIsBroken = true;
const callCarOwner = () => console.log("Hello your car is done!");
const fixCar = (carIsBroken, callCarOwner) => {
  if (carIsBroken === true) {
    carIsBroken = false;
  }
  console.log(carIsBroken);
  // After the car is fixed, the last thing we do is call the car owner - that's our 'callback function'.
  callCarOwner();
};
fixCar(carIsBroken, callCarOwner);
How do you increase a number variable?
We can do this by using the “+=” operator.

let count = 1;
const addOne = () => (count += 1);
How do you pass a function to a method?
We can pass a function to a method the same way we might pass a variable to a method. Just pass it in as an argument!

function sayHi() {
  console.log("Hi!");
}
store.subscribe(sayHi);

----------------------------------------------------------------------------------------------

                                Combine Múltiplos Reducers

 Quando o state do seu app começa a ficar maior e mais complexo, ele pode ser tentado a dividir
state em múltiplos pedaços. Invés, relembre o primeiro principio do Redux: todos app state é 
guardado em único state object no store. Portanto, Redux apresenta composição reducer como uma 
solução para um state model complexo. Vc define múltiplos reducers para manipular diferentes
pedaços de state para sua aplicação, depois compõe esses reducers juntos em um reducer raiz. O
root reducer é depois passado em um método Redux createStore().

 Em ordem para combinarmos múltiplos reducers juntos, Redux apresenta o método combineReducers().
Esse método aceita um objeto como argumento em q vc define propriedades q associam chaves para
funções específicas de reducer. O nome q vc da as chaves será usado pelo Redux como o nome para 
ser parte associado do state.

 Normalmente, é boa prática criar um reducer para cada pedaço do state da aplicação quando eles
são distintos ou únicos em alguma forma. Por exemplo, em um note-taking app com user authentication,
um reducer pode manipular autenticação enquanto outros manipulam o texto e as notas q o user 
está enviando. Para tal aplicação, nóis podemos escrever o método combineReducers() dessa forma:

const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});

 Agr, a chave "notes" irá conter todos do state associado com nossas notas e manipulado pelo
nosso notesReducer. Isso é como múltiplos reducers podem ser composto para gerenciar aplicações
mais de state complexo. Nesse exemplo, o state portanto no Redux store irá depois ser um objeto
único contendo propriedades auth e notes.

----------------------------------------------  ----------------------------------------------

 Existem as funções counterReducer() e authReducer() apresentadas no code editor, ao longo com
um Redux store. Termine escrevendo o rootReducer() function usando o método Redux.combineReducers().
Atribua counterReducer para a chave chamada count e authReducer para a chave chamada auth.

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  auth: authReducer,
  count: counterReducer
}); // Define the root reducer here

const store = Redux.createStore(rootReducer);

-------------------------------------------------------------------------------------------

                                Envie Action Data para o Store

 Até agr vc aprendeu como despachar ações para o Redux store, mas até agr ações n conteram qualquer
informação de outro tipo. Vc pode tb enviar dados especificos ao longo com suas açãos. De fato,
isso é mt comum pq ações normalmente são originadas de alguma outra interação de user e tendem
a carregar algum dado junto deles. O Redux store mts vezes precisa saber sobre esse dado.

------------------------------------------  -----------------------------------------------

 Tem um básico notesReducer() e um addNoteText() action creator definidos no code editor. Termine
o corpo da função addNoteText() então ela retornará um action object. O objeto deve incluir uma
propriedade tipo com um valor de ADD_NOTE, e tb uma propriedade text definido para dado note q
é passado dentro de uma ação criadora. Quando vc chama a action criator, vc passará em specific
note information q vc pode acessar para o objeto.

 Depois, finalize escrevendo a instrução switch no notesReducer(). Vc precisa para adicionar um
caso q manipule as ações addNoteText(). Esse caso deve ser acionado sempre q é uma ação do tipo
ADD_NOTE e ele deve retornar a propriedade text na sua entrada action como o novo state.

 A ação é dispatched nno fim do seu code. Uma vez terminado, rode o code e veja o console. Isso
é td q ele recebe para enviar action-specific data para o store e usa-lo quando vc atualiza
o store state.

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note
  };
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

------------------------------------------------------------------------------------------

                  Use Middleware para manipular ações asynchronous

 Até agr esses desafios tem evitado falar sobre ações asynchronous, mas eles são uma parte
inevitada de desenvolvimento web. Em algum ponto vc irá precisar chamar algum ponto final 
asynchronous em seu app Redux, então como vc vai manipular esses tipos de  requisitos? Redux
apresenta middleware planejado especificamente para esse propósito, chamado Redux Thunk middleware.
Aqui é uma apresentação de como usar isso com Redux.

 Para incluir Redux Thunk middleware, vc passa isso como um argumento para Redux.appyMiddleware().
Essa instrução é depois apresentada como um segundo parametro opcional para a função createStore().
Dê uma ollhada para o code no fim do editor para ver isso. Depois, para criar uma ação
asynchronous, vc retorna uma função na ação criadora q recebe dispatch como um argumento. Com
essa função, vc pode despachar ações e executar asynchronous requests.

 Nesse exemplo, um requisito asincrônico é simulado com uma chamada setTimeout(). É comum 
despachar uma ação antes de iniciar qualquer comportamento asincrônico então seu estato da 
aplicação sabe q algum dado é começado requested(esse state pode mostrar um icone de carregamento,
para instância). Depois, uma vez q vc recebeu o dado, vc despacha outra ação q carrega o dado como
um payload ao longo com informação q a ação é completada.

 Lembre q vc está passando dispatch como um parâmetro para esse especial action creator. Isso é
pq vc irá usar para despachar suas ações, vc simplesmente passa a ação diretamente para dispatch
e o middleware recebe atenção do resto.

------------------------------------------- ----------------------------------------------

 Escreva ambos dispatches na ação criadora handleAsync(). Despache requestingData() antes do
setTimeout()(the simulated API call). Depois, depois de vc receber o (pretendido) dado, dispatch
o receivedData() action, passando nesse dado. Agr vc sabe como manipular ações asincrônicas no
Redux. Todo o restante continua a se comportar como antes.

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
      dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

--------------------------------------------------------------------------------------------

                              Escreva um Counter com Redux

 Agr vc aprendeu todos os principais núcleos do Redux! Vc irá ver com criar ações e ações criadoras,
cria um Redux store, dispatch suas ações contra o store, e planeja atualizações de state com 
reducers puros. Vc tem visto como gerenciar complex state com composição reducer e manipular
ações asincrônicas. Esses exemplos são simplisticos, mas esses conceitos são o núcleos principais
de Redux. Se vc entender eles bem, vc estará pronto para começar a construir seu próprio app
Redux. O pŕoximo desafio cobre alguns dos destalhes a respeito da imutabilidade de state, mas
primeiro, aqui um review de td q vc aprendeu até agr.

------------------------------------------- ------------------------------------------------

 Nessa lição, vc irá implementar um simples contador com Redux do rascunho. Os básicos são 
apresentados no code editor, mas vc irá ter de preencher nos detalhes! Use os nomes q são 
aprensentados e defina incAction e decAction action creators, q counterReducer(), INCREMENT e 
DECREMENT action types, e finalmente o Redux store. Uma vez q vc terminou vc deve está apto a
despachar INCREMENT e DECREMENT actions para incrimentar ou decrementar o state guardado no store.
Boa sorte construindo seu primeiro app Redux!

const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
     return state + 1;
    case DECREMENT:
     return state - 1;
    default:
     return state;
  }

}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
  return {type: INCREMENT};
}; // Define an action creator for incrementing

const decAction = () => {
  return {type: DECREMENT};
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers

--------------------------------------------------------------------------------------------

                                  Never mutate state

 Esse último desafio descreve mts métodos de aplicar o principio chave de imutabilidade de state
em Redux. Immutable state significa q vc nunca modifica state diretamente, em vez disso, vc 
retorna uma nova copia do state.

 Se vc tirou um instantâneo do state de um app Redux sobre tempo, vc irá ver alguma coisa como 
state 1, state 2, state 3, state 4, ... e assim por diante onde cada state pode ser similar ao
último, mas cada um é um pedaço distinto de dado. Essa imutábilidade, de fato, é oq apresenta 
essas caractéristicas como time-travel debugging q vc pode ter ouvido falar sobre.

 Redux n faz ativamente aplicação state imutábilidade no seu store ou reducers, essa 
responsabilidade cai no programador. Felizmente, JS(especialmente ES6) apresenta mts ferramentas
úteis vc pode usar para aplicar a imútabilidade do seu state, se ele é uma string, number, array,
ou object. Perceba q strings e numbers são valores primitivos e são imútaveis por natureza. Em
outras palavras, 3 é sempre 3. Vc n pode mudar o valor do número 3. Um array ou object, contudo,
é mútavel. Na prática, seu state irá provavelmente consistir de um array ou object, como esses são
useful data structures para representar mts tipos de informação.

------------------------------------------------  -----------------------------------------

 Tem um store e reducer no code editor para gerenciar to-do items. Terminie de escrever o caso
ADD_TO_DO no reducer para acrescentar um novo do-to para o state. Tem algumas formas para concluir
isso com JS padrão ou ES6. Veja se vc pode encontrar uma forma de retornar um novo array com o
item do action.todo acrescentado para o fim.

const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return state.concat(action.todo)
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);

------------------------------------------------------------------------------------------

                        Use o Spread Operator nos Arrays

 Uma solução do ES6 q ajuda a aplicar state immutability em Redus é o spread operatos: '...'.
O spread operator tem uma variedade de aplicações, uma q é bem adequado para o último desafio de
produzir um novo array de um array existente. Isso é relativamente novo, mas comumente usado syntax.
Por exemplo, se vc tem um array myArray e escreve:

let newArray = [...myArray];

 newArray é agr um clone de myArray. Ambos arrays continuam existindo separadamente na memória.
Se vc executa uma mutação como newArray.push(5), myArray não muda. O "..." efetivamente espalha
os valores em myArray em um novo array. Para clonar um array mas adicionar valores adicionais em
novo array, vc pode escrever [...myArray, 'new value']. Isso irá retornar um novo array composto
de valores em myArray e a string new value como o último valor. A syntax spread pode ser usada
múltiplas vezes na composição array desse jeito, mas é importante notar q ele somente fará uma
cópia superfícial do array. Quer dizer q, isso somente apresenta immutable array operations para
one-dimensional arrays.

--------------------------------------------- --------------------------------------------

 Use o spread operator para retornar uma nova copia de state quando um to-do é adicionado.

 const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      let arr = [...state, action.todo];
      return arr; 
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);

------------------------------------------------------------------------------------------

                            Remova um Item de um Array

 Hora de práticar remover items de um array. O spread operator pode ser usado aqui da msm forma.
Outro método JS usavel inclui slice() e concat().

--------------------------------------  --------------------------------------------------

 O reducer e ação criadora foram modificadas para remover um item de um array baseado no index
do item. Termine de escrever o reducer então um novo array é retornado com o item no especifico
index removido.

const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);

----------------------------------------------------------------------------------------

                            Copie um objeto com Object.assign

 Os últimos desafios trabalharam com arrays, mas tb tem formas de ajudar a aplicar imutabilidade ao
state quando state é um object, tb. Uma ferramenta usável para manipular objects é o 
Object.assign() utility. Object.assign() pega um objeto alvo e objeto núcleo e mapea propriedades
do source objects para o objeto alvo. Qualquer propriedade combinada são sobrescrias por
propriedades no source objects. Esse comportamento pe comumente usado para fazer copias rasas de
objects passando um object vazio como primeiro argumento seguido pelo object vc quer copiar. 
Aqui um exemplo:

const newObject = Object.assign({}, obj1, obj2);

 Isso cria newObject como um novo object, q contém as propriedades q atualmente existem em obj1
e obj2.

--------------------------------------- ---------------------------------------------

 O Redux state e ações foram modificadas para manipular um object para o state. Edite o code para
retornar um novo state object para actions com tipo ONLINE, q define o status property para string
online. Tente usar Object.assign() para completar o desafio.

const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return Object.assign({}, state, {status: "online"});
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);

---------------------------------------------------------------------------------------

