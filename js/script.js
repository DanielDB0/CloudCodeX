//Missão, Visão e Valores

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
let cardTitles = ['Missão', 'Visão', 'Valores']
let cardContent = ['soluções tecnológicas de alto nível, capacitando empresas a prosperar por meio da qualidade e inovação digital.',
'reconhecimento global pela excelência, criando soluções transformando negócios e gerando valor.', 
'pela ética, colaboração, transparência, segurança, sustentabilidade e qualidade.']
let KeyWordsCard = ['Desenvolver', 'Ter', 'Inovação']

const MVV = document.querySelector("#MVV")

for(let i = 0; i < 3; i++){
    MVV.innerHTML += card.replace('---', cardTitles[i]).replace('+++', cardContent[i]).replace('###', KeyWordsCard[i])
}
/*-------------------------------------------------------------------------------------------------------------------------------------------*/
//Cards Extras

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
let ExtraCardTitles = [['Hospedagem e Manutenção', 'Desenvolvimento de sites', 'Aplicativos Móveis'],
['Outsourcing Team','Serviços de design UX-UI','Inception']]
let ExtraCardContent = [['Hospedagem segura e suporte técnico especializado.',
'Desenvolvimento Customizado e suporte pós lançamento', 
'Aplicativos personalizados, Design intuitivo, Para celulares e tablets e Multiplataforma para iOS e Android.'],
['Nossos profissionais experientes e alinhados às suas necessidades, nosso time externo se integra perfeitamente ao seu projeto',
'Experiências digitais intuitivas, funcionais e visualmente atraentes',
'Conectar os objetivos de negócio com as reais necessidades do usuário']]


const BothMoreCards = document.querySelectorAll("#MoreCards")


for(let i = 0; i < BothMoreCards.length; i++){
        for(let j = 0; j < ExtraCardTitles[i].length; j++){
        BothMoreCards[i].innerHTML += card.replace('---', ExtraCardTitles[i][j]).replace('+++', ExtraCardContent[i][j])
    }
}


/*-------------------------------------------------------------------------------------------------------------------------------------------*/
//Equipe

const allPerfil = document.querySelector('.divPerfil')

let perfil = `
<div class="divPerfil1">
<div class="perfil">
<img src="img/---.jpg" alt="---" class="imgPerfil">
</div>
<h3 class="nomeMembro">+++</h3>
</div>
`

const PersonsList = [
    ['Daniel', 'Dias Bueno'],
    ['Giovani', 'A. de Sousa'],
    ['Isaque', 'Sérgio da Silva'],
    ['Juliana', 'da Silva Oliveira'],
    ['Rafael', 'H. O. Rocha']
]

for(let i = 0; i < 5; i++){
    allPerfil.innerHTML += perfil.replace('+++', `${PersonsList[i][0]} ${PersonsList[i][1]}`).replaceAll('---', PersonsList[i][0])
}


/*-------------------------------------------------------------------------------------------------------------------------------------------*/
//Linguagens

let languages = ['html','js','css', 'c', 'C-Sharp', 'c++', 'java', 'python']
const Language = document.querySelector('#Languages')

for (let i = 0; i < languages.length; i++) {
    l = languages[i]
    //Language.innerHTML += `<div class="linguagem"><img src="img/${l}.png" alt="${l}" class="Language"><p>${l}</p></div>`  
    Language.innerHTML += `<img src="img/${l}.png" alt="${l}" class="Language">`  
}


/*-------------------------------------------------------------------------------------------------------------------------------------------*/
//Contatos

let contatos = [
    ['email', 'localizacao', 'instagram'],
    ['cloudcodexx@gmail.com', 'Av. Brig. Faria Lima, 8152 - Itaim Bibi', '@cloudcodexx'],
    ['mailto:cloudcodexx@gmail.com',
    'https://www.google.com/maps/place/Av.+Brig.+Faria+Lima,+8152+-+Itaim+Bibi,+S%C3%A3o+Paulo+-+SP,+04538-133/@-23.5890257,-46.68386,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce574496c8b241:0x11f49cdc2643de13!8m2!3d-23.5890257!4d-46.6812851?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D',
    'https://www.instagram.com/cloudcodexx/'
    ]
]
const TxtContato = document.querySelector('#TxtContato')

for (let i = 0; i < contatos[0].length; i++) {
    TxtContato.innerHTML += `
    <div id="contatoConj"><a href="${contatos[2][i]}"><img src="img/${contatos[0][i]}.png" alt="${contatos[0][i]}" class="imgRede"></a>
    <a href="${contatos[2][i]}"><p class="pContato">${contatos[1][i]}</p></a></div>`
}




const cards = document.querySelectorAll('.cards');
const cards1 = document.querySelectorAll('.cards1');
const clients = document.querySelectorAll('#clients');
const dLanguages = document.querySelectorAll('#dLanguages');
const clientSite = document.querySelectorAll('#clientSite');

    // Create Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Reveal card
                observer.unobserve(entry.target); // Stop observing once shown
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% visible

    // Observe each card
    cards.forEach(card => observer.observe(card));
    cards1.forEach(card => observer.observe(card));
    dLanguages.forEach(card => observer.observe(card));

/*------------------------------------------------------------------------------------------------*/
//Carrossel Portifólio

let Client = `
<div id="clientSite">
    <img src="img/+++.png" alt="SITE ---" class="imgSiteClient"/>
    <div id="nameClient"><b id="pNameClient">---</b></div>
</div>
`

const DivClient = document.querySelector('#cardPortRight')



let img = ['ballerflix', 'cineclipse', 'tysche'];
let i = 0;
let time = 5000;

function slideShow() {

    DivClient.innerHTML = Client.replaceAll('---', img[i].toUpperCase()).replace('+++', img[i])

    i++;

     if (i == img.length) {
    i = 0;
  }

  setTimeout('slideShow()', time);
}

slideShow();