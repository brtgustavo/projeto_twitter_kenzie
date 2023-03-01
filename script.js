
const textarea = document.querySelector('textarea'); /** pegando com o querySelect do documento html a tag textarea */
const tweetar = document.querySelector('button'); /** pegando com o querySelect do documento html a classe do botão */
const feed = document.querySelector('.lista-feed');

function pegartweet(event){ /** função que vai imprimir no console com evento que previne evento padrão da tag form */
    event.preventDefault();
    const tweetTextArea = textarea.value; /**variável const recebe o value da textarea do html */

    criarTweet(tweetTextArea);
}
tweetar.addEventListener('click', pegartweet);


function criarTweet(tweetTexto){
    console.log(tweetTexto)

    let data = new Date();   //pega a data do computador completa 
    let hora = data.getHours(); // pega apenas horas
    let minutos = data.getMinutes(); // pega os minutos
    const tweet = {                    /**Objeto tweet */
        nome: "Gustavo",
        foto: 'eu.jfif',
        usuario: "@danielKenzie",
        texto: tweetTexto,
        tempo: `${hora}: ${minutos} s`     
    } 
    listarTweet(tweet);
}


function listarTweet(tweet){

    const{nome,foto, usuario,texto,tempo} = tweet; // desestruturação do tweet, aqui voce consegue pegar as infos expecificas do objeto tweet

   // console.log(tweet)

   //CRIANDO ELEMENTOS PARA LISTAR O TEMPLATE

    let li = document.createElement('li');
    li.classList.add('itens-lista-feed');

    let img = document.createElement('img');
    img.src = foto;
    img.classList.add('feed-img');
    let div = document.createElement('div');
    div.classList.add('feed')

    let h2 = document.createElement('h2');
    h2.innerText = nome;

    let span = document.createElement('span');
    span.innerText = `${usuario} - ${tempo}`;

    let p = document.createElement('p');
    p.innerText = texto;

    
    // appendChild colocar elementos dentro de um elemento pai

    li.appendChild(img);
    li.appendChild(div); 
    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    //console.log(li)

    feed.appendChild(li);
    textarea.value =''; // vai limpar depois do comentário
}