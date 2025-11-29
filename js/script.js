//Missão, Visão e Valores
//adicionando uma string com as tags html em uma variavel com os dados manipulaveis indicados com "---", "+++" e "###".
let card = `
<div class="cards">
    <div class="dexplain1">
        <h2 class="title3">---</h2>
        <b class="pexplainCard defaultMarginText">
            ###
        </b>
        <p class="pexplainCard">
            +++
        </p>
    </div>
</div>
`

//Definindo Títulos e conteúdos dos Cards Missão, Visão e Valores.
let cardTitles = ['Missão', 'Visão', 'Valores']
let cardContent = ['soluções tecnológicas de alto nível, capacitando empresas a prosperar por meio da qualidade e inovação digital.',
'reconhecimento global pela excelência, criando soluções transformando negócios e gerando valor.', 
'pela ética, colaboração, transparência, segurança, sustentabilidade e qualidade.']
let KeyWordsCard = ['Desenvolver', 'Ter', 'Inovação']

//Capturando div do Missão, Visão e Valores do Html para manipulação.
const MVV = document.querySelector("#MVV")

//Adicionando na div capturada anteriormente as tags adicionadas na variável "card" e substituindo dados manipuláveis pelos dados reais.
for(let i = 0; i < cardTitles.length; i++){
    MVV.innerHTML += card.replace('---', cardTitles[i]).replace('+++', cardContent[i]).replace('###', KeyWordsCard[i])
}

/*-------------------------------------------------------------------------------------------------------------------------------------------*/
//Cards Extras

//adicionando uma string com as tags html em uma variavel com os dados manipulaveis indicados com "---" e "+++".
card = `
<div class="cards1">
    <div class="dexplain1">
        <h2 class="title2">---</h2>
        <p class="pexplainCard">
            +++
        </p>
    </div>
</div>
`

//Definindo Títulos e conteúdos dos Cards Extras.
let ExtraCardTitles = [['Hospedagem e Manutenção', 'Desenvolvimento de sites', 'Aplicativos Móveis'],
['Outsourcing Team','Serviços de design UX-UI','Inception']]
let ExtraCardContent = [['Hospedagem segura e suporte técnico especializado.',
'Desenvolvimento Customizado e suporte pós lançamento', 
'Aplicativos personalizados, Design intuitivo, Para celulares e tablets e Multiplataforma para iOS e Android.'],
['Nossos profissionais experientes e alinhados às suas necessidades, nosso time externo se integra perfeitamente ao seu projeto',
'Experiências digitais intuitivas, funcionais e visualmente atraentes',
'Conectar os objetivos de negócio com as reais necessidades do usuário']]

//Capturando todas as divs dos cards Extras do Html para manipulação.
const ExtraCards = document.querySelectorAll("#ExtraCards")

//Adicionando nas divs capturadas anteriormente as tags adicionadas na variável "card" e substituindo dados manipuláveis pelos dados reais.
for(let i = 0; i < ExtraCards.length; i++){
        for(let j = 0; j < ExtraCardTitles[i].length; j++){
        ExtraCards[i].innerHTML += card.replace('---', ExtraCardTitles[i][j]).replace('+++', ExtraCardContent[i][j])
    }
}



/*-------------------------------------------------------------------------------------------------------------------------------------------*/
//Equipe

//Capturando div do Perfil do Html para manipulação.
const allPerfil = document.querySelector('.divPerfil')

//adicionando uma string com as tags html em uma variavel com os dados manipulaveis indicados com "---" e "+++".
let perfil = `
<div class="divPerfil1">
    <div class="perfil">
        <img src="img/---.jpg" alt="---" class="imgPerfil">
    </div>
    <h3 class="nomeMembro">+++</h3>
</div>
`

//Criando um vetor bidimensional com os nomes e sobrenomes dos integrantes.
const PersonsList = [
    ['Daniel', 'Dias Bueno'],
    ['Giovani', 'A. de Sousa'],
    ['Isaque', 'Sérgio da Silva'],
    ['Juliana', 'da Silva Oliveira'],
    ['Rafael', 'H. O. Rocha']
]    

//Adicionando na div capturada anteriormente as tags adicionadas na variável "perfil" e substituindo dados manipuláveis pelos dados reais.
for(let i = 0; i < 5; i++){
    allPerfil.innerHTML += perfil.replace('+++', `${PersonsList[i][0]} ${PersonsList[i][1]}`).replaceAll('---', PersonsList[i][0])
}    


/*-------------------------------------------------------------------------------------------------------------------------------------------*/
//Linguagens

//armazenando o nome de todas as linguagens em um array
let languages = ['html','js','css', 'c', 'C-Sharp', 'c++', 'java', 'python']

//Capturando div das linguagens do Html para manipulação.
const Language = document.querySelector('#Languages')

//Adicionando na div capturada anteriormente as imagens contidas no vetor "languages" a partir de seu nome.
for (let i = 0; i < languages.length; i++) {
    l = languages[i]
    Language.innerHTML += `<img src="img/${l}.png" alt="${l}" class="Language">`  
}

/*-------------------------------------------------------------------------------------------------------------------------------------------*/
//Contatos

//Criando um vetor bidimensional com os nomes das imagens, textos das formas de contato e sobrenomes links.
let contatos = [
    ['email', 'localizacao', 'Instagram'],
    ['cloudcodexx@gmail.com', 'Av. Brig. Faria Lima, 8152 - Itaim Bibi', '@cloudcodexx'],
    ['mailto:cloudcodexx@gmail.com',
        'https://www.google.com/maps/place/Av.+Brig.+Faria+Lima,+8152+-+Itaim+Bibi,+S%C3%A3o+Paulo+-+SP,+04538-133/@-23.5890257,-46.68386,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce574496c8b241:0x11f49cdc2643de13!8m2!3d-23.5890257!4d-46.6812851?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D',
        'https://www.instagram.com/cloudcodexx/'
    ]
]

//Capturando div do Contato do Html para manipulação.
const TxtContato = document.querySelector('#TxtContato')

//Adicionando formas de contato com imagem e texto e hiperlinks.
for (let i = 0; i < contatos[0].length; i++) {
    TxtContato.innerHTML += `
    <div id="contatoConj"><a href="${contatos[2][i]}"><img src="img/${contatos[0][i]}.png" alt="${contatos[0][i]}" class="imgRede"></a>
    <a href="${contatos[2][i]}"><p class="pContato">${contatos[1][i]}</p></a></div>`
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
//efeito de aparição

//Capturando div dos cards para aparição do Html para manipulação.
const cards = document.querySelectorAll('.cards');
const cards1 = document.querySelectorAll('.cards1');
const dLanguages = document.querySelectorAll('#dLanguages');

//criando o observador para identificar quando o elemento entrar em tela
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        
        //verificando quando a tela entra e adiciona nova classe ao elemento capturado
        if (entry.isIntersecting) {
                entry.target.classList.add('show')
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    //executam o observador passando o elemento desejado como parametro para que ele possa tratar como "entry"
    cards.forEach(card => observer.observe(card));
    cards1.forEach(card => observer.observe(card));
    dLanguages.forEach(card => observer.observe(card));

    
    /*------------------------------------------------------------------------------------------------*/
    //Carrossel Portifólio
    
    //adicionando uma string com as tags html em uma variavel com os dados manipulaveis indicados com "---" e "+++".
    let Client = `
    <div id="clientSite">
        <img src="img/+++.png" alt="SITE ---" class="imgSiteClient"/>
        <div id="nameClient"><b id="pNameClient">---</b></div>
    </div>
    `
    
    //Capturando div do Portifólio do Html para manipulação.
    const DivClient = document.querySelector('#cardPort')
    
    //armazenando o nome de todos os clientes
    let nameClient = ['ballerflix', 'cineclipse', 'tysche'];
    
    //inicializando variavel contadora e variavel com a definição do tempo.
    let cont = 0;
    let time = 5000;
    
    //Declarando a função do carrossel
    function slideShow() {
    
        //Manipulando div do cliente para adicionar a tag "Client" substituindo os dados manipuláveis pelos valores do vetor "nameClient". 
        DivClient.innerHTML = Client.replaceAll('---', nameClient[cont].toUpperCase()).replace('+++', nameClient[cont])
    
        //Acrescentando 1 ao contador.
        cont++;
        
        //Verificando a posição do contador, caso seja a última imagem, este retornará para o início da contagem.
         if (cont == nameClient.length) {
        cont = 0;
      }
    
      //define o tempo para reexecução da função e passa o tempo definido na váriavel "time" anteriormente.
      setTimeout('slideShow()', time);
    }
    
    //Inicialização da função de carrossel.
    slideShow();