import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <div home>
      <Head>
        <title>Trabalho de História kk</title>
      </Head>
      <section id="hero" className={utilStyles.fadeInContainer}>
        <h1 className={utilStyles.heading2Xl}>Economia da 2ª Guerra Mundial</h1>
        <a href="#text">Começar</a>
      </section>
      <main>
        <section id="text" className={utilStyles.textContainer}>
          <section id="death-container">
            <h1 className={utilStyles.heading2Xl}>Dados Gerais 📝</h1>A guerra
            mais abrangente da história, com mais de 100 milhões de militares
            mobilizados <strong>(30 milhões EIXO, 80 milhões ALIADOS)</strong>.
            <p>
              Soldados aliados em submarinos{" "}
              <strong>
                (Combate - 25 mil | Forças Auxiliares - 30 mil | Marinha
                Mercante - 50 mil | Outros - 90 mil)
              </strong>
            </p>
            <h2 className={utilStyles.headingLg}>
              Principais unidades armadas
            </h2>
            <p>
              Tanques, artilharia autopropulsada e veículos blindados e de
              transporte <strong>(Aliados 4.3 milhões | Eixo 670 mil)</strong>
            </p>
            <p>
              Artilharia, morteiros e armas pesadas{" "}
              <strong>(Aliados 6.8 milhões | Eixo 1.3 milhões)</strong>
            </p>
            <p>
              Caças, bombardeiros e outras aeronaves militares{" "}
              <strong>(Aliados 630 mil | Eixo 230 mil)</strong>
            </p>
            <p>
              Mísseis (de todos os tipos){" "}
              <strong>(Aliados - Desconhecido | Eixo 45 mil)</strong>
            </p>
            <p>
              Embarcações <strong>(Aliados 55 mil | Eixo 1.6 mil)</strong>
            </p>
            <h2 className={utilStyles.headingLg}>Forças Terrestres 🪖</h2>
            <p>
              Aliados - 270 mil tanques, 47 mil veículos blindados, 4 milhões de
              veículos de transporte, 1 milhão em artilharia, 540 mil morteiros,
              5 milhões de metralhadoras e 80 milhões de soldados.
            </p>
            <p>
              Eixo - 76 mil tanques, 50 mil veículos blindados, 408 mil veículos
              de transporte, 97 mil em artilharia, 725 mil morteiros, 1.4
              milhões de metralhadoras e 30 milhões de soldados.{" "}
            </p>
            <h2 className={utilStyles.headingLg}>Forças Aéreas 🛩️</h2>
            <p>
              Aliados - 222 mil aeronaves, 98 mil aviões de combate, 18 mil
              caças, 44 mil bombardeiros, 11 mil aviões de reconhecimento, 14
              mil aviões de transporte, 23 mil aviões de treino, 12 mil outros e
              5 milhões de soldados.
            </p>
            <p>
              Eixo - 608 mil aeronaves, 160 mil aviões de combate, 71 mil caças,
              150 mil bombardeiros, 11 mil aviões de reconhecimento, 53 mil
              aviões de transporte, 108 mil aviões de treino, 47 mil outros e 6
              milhões de soldados.
            </p>
            <h2 className={utilStyles.headingLg}>Forças Navais 🚢</h2>
            <p>
              Aliados - 2 mil Navios de grande porte, 165 cargueiros, 45 navios
              de batalha, 175 cruzadores, 863 destroiers, 649 Fragatas & Navios
              de escolta, 387 corvetas, 33 sloops, 4.2 mil navios de patrulha,
              568 submarinos, 1.2 mil navios de guerra de minas, 44 mil navios
              de desembarque e 1.2 milhões de soldados.
            </p>
            <p>
              Eixo - Desconhecido navios de grande porte, 20 cargueiros, 7
              navios de batalha, 15 cruzadores, 86 destroiers, 0 Fragatas &
              Navios de escolta, 0 corvetas, 0 sloops, 8 mil navios de patrulha,
              1.4 mil submarinos, 5 mil navios de guerra de minas, 540 navios de
              desembarque e 2 milhões de soldados.
            </p>
            <h2 className={utilStyles.headingLg}>Comércio</h2>
            <p>
              Navios cargueiros <strong>(Aliados 47 mil | Eixo 12 mil)</strong>
            </p>
            <p>
              Carga (em toneladas){" "}
              <strong>(Aliados 46 milhões | Eixo 5.6 milhões)</strong>
            </p>
            <p>
              Carváo <strong>(Aliados 4.5 milhões | Eixo 2.6 milhões)</strong>
            </p>
            <p>
              Petróleo Cru <strong>(Aliados 1 milhão | Eixo 66 milhões)</strong>
            </p>
            <p>
              Aço <strong>(Aliados 733 mil | Eixo - )</strong>
            </p>
            <p>
              Alumínio <strong>(Aliados 5 mil | Eixo 1 mil )</strong>
            </p>
            <p>
              Amíanto <strong>(Aliados 4 mil | Eixo - )</strong>
            </p>
          </section>
          <section id="death-container">
            <h1 className={utilStyles.heading2Xl}>Mortos 💀</h1>
            <p>
              A maioria dos historiadores pressupõe hoje que 55 milhões de
              pessoas tenham morrido na Europa e na Ásia. Dos 26 países
              envolvidos no conflito, a União Soviética sofreu as maiores
              perdas, com 26 milhões a 27 milhões de mortos. Polônia registrou
              até seis milhões de mortes, o que corresponde a 17% de sua
              população na época. De acordo com estudo do historiador Dieter
              Pohl, especialista em Holocausto e professor da Universidade de
              Klagenfurt, foram executados durante a Segunda Guerra entre 5,4
              milhões e 5,8 milhões de judeus. Destes, 2,6 milhões foram
              assassinados em campos de concentração e extermínio.
            </p>
          </section>
          <section id="destruction-loss">
            <h1 className={utilStyles.heading2Xl}>
              Valor da destruição causada 🔥
            </h1>
            <p>
              O professor de Economia sueco Karl Gunnar Silverstolpe abordou
              esta questão em 1947. Ele calculou os danos materiais de todos os
              países envolvidos na guerra em 100 bilhões a 200 bilhões de
              dólares (incluindo Alemanha e Japão). Já para a época, era uma
              soma inimaginável. Mais recentemente, dois historiadores alemães
              calcularam que os danos de guerra causados pela Alemanha chegam a
              7,5 trilhões de euros em valor atual.
              <br />
              <br />
              No Protocolo Final de Ialta, os países vitoriosos haviam
              contabilizado uma perda relativamente moderada, de 20 bilhões de
              dólares. A União Soviética não só teve a maior taxa de
              derramamento de sangue, como também registrou os maiores prejuízos
              com a guerra, com quase 13 bilhões de dólares. No Tribunal de
              Crimes de Guerra de Nurembergue, a União Soviética alegou que os
              alemães destruíram 71 mil cidades e lugarejos e 32 mil empresas.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}
