let card = 
`
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

for(i=0; i++; i<3){
    MVV.innerHTML += card.replace('---', cardTitles[i]).replace('+++', cardContent[i])
}