let card = `
<div class="cards">
    <div class="dexplain1">
        <h2 class="title1">---</h2>
        <p class="pexplain">
            +++
        </p>
    </div>
</div>
`
let cardTitles = ['Nossa Missão', 'Nossa Visão', 'Nossos Valores']
let cardContent = ['Nosso objetivo é desenvolver soluções tecnológicas de alto nível, impulsionando o crescimento e a competitividade das empresas. Através da qualidade, inovação digital e um compromisso constante com a excelência, capacitamos negócios a prosperar em um mercado cada vez mais dinâmico e exigente.', 'Alcançar reconhecimento global pela excelência, desenvolvendo soluções inovadoras que impulsionam a transformação dos negócios, otimizam processos e geram valor sustentável para empresas e sociedade.', 'Promovemos a inovação com base em princípios sólidos, como ética, colaboração, transparência e segurança, garantindo soluções sustentáveis e de alta qualidade que geram impacto positivo para empresas e sociedade.']

const MVV = document.querySelector("#MVV")

for(let i = 0; i < 3; i++){
    MVV.innerHTML += card.replace('---', cardTitles[i]).replace('+++', cardContent[i])
}
/*-------------------------------------------------------------------------------------------------------------------------------------------*/
const allPerfil = document.querySelectorAll('.divPerfil1')

let perfil = `
<div class="perfil">
    <img src="img/Daniel.jpg" alt="---" class="imgPerfil">
</div>
<h3 class="nomeMembro">+++</h3>
`

const PersonsList = [
    ['Juliana', 'da Silva Oliveira'],
    ['Isaque', 'Sérgio da Silva'],
    ['Giovani', 'Amorim de Sousa'],
    ['Daniel', 'Dias Bueno'],
    ['Rafael', 'Henrique Oliveira Rocha']
]

for(let i = 0; i < 5; i++){
    allPerfil[i].innerHTML += perfil.replace('+++', `${PersonsList[i][0]} ${PersonsList[i][1]}`).replaceAll('---', PersonsList[i][0])
}