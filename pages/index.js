import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <div home>
      <Head>
        <title>Trabalho de Quimica</title>
      </Head>
      <section id="hero" className={utilStyles.fadeInContainer}>
        <h1 className={utilStyles.heading2Xl}>Proteínas</h1>
        <a href="#text">Começar</a>
      </section>
      <main>
        <section id="text" className={utilStyles.textContainer}>
          <section id="what-are-protein">
            <h1 className={utilStyles.heading2Xl}>O que são proteínas?</h1>
            As proteínas são uma substância formada por um grupo de aminoácidos
            unidos por ligações peptídicas. Os aminoácidos são moléculas
            formadas a partir de carbono, hidrogênio, oxigênio e nitrogênio, nas
            quais se encontram os grupos amino (-NH2) e carboxila (-COOH).
            Existem apenas 20 aminoácidos e eles se combinam de maneiras
            diferentes para formar proteínas diferentes. Chamamos polipeptídeos
            de longas cadeias de aminoácidos. Toda proteína consiste em uma ou
            mais cadeias polipeptídicas.
            <br />
            <br />
            As formas das proteínas são divididas em dois tipos principais:
            fibrosas e globulares. As fibrosas possuem as cadeias polipeptídicas
            enroladas entre si. Já nas proteínas globulares, as cadeias
            polipeptídicas se dobram em uma espécie de esfera.
          </section>
          <section id="organic-functions">
            <h1 className={utilStyles.heading2Xl}>
              Exemplos e Funções Orgânicas
            </h1>
            - Miosina e Actina, duas proteínas responsáveis pela contração
            muscular
            <br />
            - Hemoglobina, proteína responsável pelo transporte do sangue
            <br />
            - Insulina, proteína responsável por regular o nível da glicose no
            sangue
            <br />
            - Enzimas, em sua maioria são proteínas, as quais são responsáveis
            pela regulação do metabolismo
            <br />
            - Anticorpos, proteínas responsáveis pelo sistema de defesa do corpo
            <br />- Queratina, proteína responsável pelos cabelos e unhas do
            corpo.
          </section>
          <section id="health-importance">
            <h1 className={utilStyles.heading2Xl}>Importância para a Saúde</h1>
            <p>
              Como citado anteriormente, as proteínas têm grande importância em
              nosso corpo, pois nos ajudam em diversos fatores, como na
              regulação de hormônios, transporte de sangue, nutrientes e
              oxigênio, anticorpos, além da criação de inúmeros tecidos como
              músculos e ossos.
            </p>
          </section>
          <section id="main-sources">
            <h1 className={utilStyles.heading2Xl}>Principais Fontes</h1>
            <p>
              - Carne de boi
              <br />
              - Ervilha
              <br />
              - Frango
              <br />
              - Peixe
              <br />
              - Leite
              <br />
              - Ovos
              <br />
              - Queijos
              <br />
              - Legumes
              <br />
              - Feijão
              <br />- Lentilha
            </p>
          </section>
          <section id="excess-intake">
            <h1 className={utilStyles.heading2Xl}>
              Problemas por ingestão excessiva
            </h1>
            <p>
              O consumo em excesso de proteínas pode desencadear muitos
              problemas para o corpo, sendo os principais deles:
              <br />
              - Sobrecarga nos rins, o que pode levar a pedra nos rins,
              <br />
              - Problemas no fígado por aumento de gordura acumulada
              <br />
              - Aumento da gordura corporal
              <br />
              - Interferência na absorção de minerais, podendo diminuir a
              densidade dos ossos e aumentar o risco de osteoporose
              <br />- Inflamações no intestino - Maior tendência a problemas
              cardiovasculares
            </p>
          </section>
          <section id="sources">
            <h1 className={utilStyles.heading2Xl}>Fontes</h1>
            <p>
              - Pró Rim
              <br />
              - Danone Nutricia
              <br />
              - Brasil Escola
              <br />
              - Manual da Química
              <br />
              - Toda Matéria
              <br />
              - Hcor
              <br />- Tuasaude
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}
