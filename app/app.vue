<template>
  <div>
    <!-- topbar -->
    <header id="topbar" class="topbar container-fluid">
      <div class="container">
        <h1 class="logo">Dra. Natasha Grey</h1>
        <nav class="nav">
          <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#clinic">Clínica</a></li>
            <li><a href="#specialties">Especialidades</a></li>
            <li><a href="#team">Equipe</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="#contact">Artigos</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <!-- /topbar -->

    <!-- main content -->
    <main class="container-fluid">
      <!-- hero -->
      <section id="hero" class="hero container-fluid full-height">
        hero
      </section>
      <!-- /hero -->

      <!-- section clinic -->
      <section id="clinic" class="clinic container-fluid">
        <div class="container">
          <h2>Nossa Clínica, Seu Sorriso</h2>
          <p>Somos uma Clínica Odontológica Multidisciplinar em São Paulo com mais de 20 anos de experiência. Nosso
            compromisso é trabalhar harmoniosamente com o seu sorriso e rosto, objetivando a reabilitação orofacial em
            sua totalidade, ou seja, promovendo saúde, função e estética de forma satisfatória. Para isso, contamos com
            uma equipe especializada, capacitada e experiente nas mais diversas áreas da prática odontológica.</p>
          <div class="container">
            <div class="clinic-card">
              <h3>Recepção</h3>
              <NuxtImg src="/images/clinica1.jpg" alt="recepção" width="380" />
              <h4>Um sorriso para receber você</h4>
              <p>Nossa equipe está pronta para oferecer um atendimento rápido e atencioso desde o primeiro momento.</p>
            </div>

            <div class="clinic-card">
              <h3>Sala de espera</h3>
              <NuxtImg src="/images/clinica3.jpg" alt="sala espera" width="380" />
              <h4>Conforto enquanto aguarda</h4>
              <p>Um ambiente tranquilo, climatizado e preparado para que seu tempo aqui seja agradável.</p>
            </div>

            <div class="clinic-card">
              <h3>Consultório</h3>
              <NuxtImg src="/images/clinica2.jpg" alt="consultório" width="380" />
              <h4>Cuidado e atenção nos detalhes</h4>
              <p>Espaço moderno e equipado para garantir um atendimento seguro e de qualidade.</p>
            </div>
          </div>
        </div>
      </section>
      <!-- /section clinic -->

      <!-- section specialties -->
      <section id="specialties" class="specialties container-fluid">
        <div class="container">
          <h2>Especialidades para Cada Etapa do Seu Sorriso</h2>
          <div class="container">
            <div class="specialty-card">
              <NuxtImg src="/images/icon_gingivitis.png" alt="periodontia" width="48" />
              <h3>Periodontia</h3>
              <p>A Periodontia é responsável por prevenir e tratar as doenças e processos inflamatórios dos tecidos de
                proteção e sustentação do dente: gengiva, ossos e ligamentos que circundam os dentes.</p>
            </div>

            <div class="specialty-card">
              <NuxtImg src="/images/icon_orthodontic.png" alt="ortodontia" width="48" />
              <h3>Ortodontia</h3>
              <p>Especialidade da Odontologia que trata das irregularidades tanto dentais quanto faciais, proporcionando
                um equilíbrio facial adequado e harmônico.</p>
            </div>

            <div class="specialty-card">
              <NuxtImg src="/images/icon_implant.png" alt="implantodontia" width="48" />
              <h3>Implantodontia</h3>
              <p>A Implantodontia restabelece a função de mastigação, bem como a estética da pessoa que tem um ou mais
                dentes ausentes através da introdução de um parafuso que substitui a raiz do dente.</p>
            </div>

            <div class="specialty-card">
              <NuxtImg src="/images/icon_gingivitis.png" alt="periodontia" width="48" />
              <h3>Periodontia</h3>
              <p>A Periodontia é responsável por prevenir e tratar as doenças e processos inflamatórios dos tecidos de
                proteção e sustentação do dente: gengiva, ossos e ligamentos que circundam os dentes.</p>
            </div>

            <div class="specialty-card">
              <NuxtImg src="/images/icon_orthodontic.png" alt="ortodontia" width="48" />
              <h3>Ortodontia</h3>
              <p>Especialidade da Odontologia que trata das irregularidades tanto dentais quanto faciais, proporcionando
                um equilíbrio facial adequado e harmônico.</p>
            </div>

            <div class="specialty-card">
              <NuxtImg src="/images/icon_implant.png" alt="implantodontia" width="48" />
              <h3>Implantodontia</h3>
              <p>A Implantodontia restabelece a função de mastigação, bem como a estética da pessoa que tem um ou mais
                dentes ausentes através da introdução de um parafuso que substitui a raiz do dente.</p>
            </div>
          </div>
        </div>
      </section>
      <!-- /section specialties -->

      <!-- section team -->
      <section id="team" class="team container-fluid">
        <div class="container">
          <h2>Sorria com confiança: conheça nossa equipe de especialistas</h2>
          <p>
            Nossa equipe de dentistas reúne profissionais altamente qualificados e apaixonados por transformar sorrisos.
            Cada membro combina experiência, cuidado e tecnologia de ponta para oferecer um atendimento personalizado,
            seguro e acolhedor. Aqui, você não encontra apenas dentistas — encontra parceiros dedicados à saúde e à
            estética do seu sorriso.
          </p>
          <div class="container">
            <div class="team-member-card">
              <h3>Dr. Rafael Costa</h3>
              <NuxtImg src="/images/team-member-1.jpg" alt="Dr. Rafael Costa" width="380" />
              <h4>Cirurgião Dentista</h4>
              <span>CROSP 12345</span>
              <p>
                Especialista em odontologia estética, o Dr. Rafael é apaixonado por transformar sorrisos de forma
                natural e harmoniosa. Com mais de 10 anos de experiência, alia técnicas modernas a um atendimento
                acolhedor, garantindo resultados que elevam a autoestima dos pacientes.
              </p>
            </div>

            <div class="team-member-card">
              <h3>Dra. Camila Martins</h3>
              <NuxtImg src="/images/team-member-2.jpg" alt="Dra. Camila Martins" width="380" />
              <h4>Cirurgiã Dentista</h4>
              <span>CROSP 12345</span>
              <p>
                Focado em implantodontia e reabilitação oral, o Dr. Rafael é reconhecido pela precisão e atenção aos
                detalhes. Sua abordagem cuidadosa e o uso de tecnologia de ponta asseguram tratamentos confortáveis e
                eficazes, sempre priorizando a saúde bucal a longo prazo.
              </p>
            </div>

            <div class="team-member-card">
              <h3>Dr. Mario Alves</h3>
              <NuxtImg src="/images/team-member-3.jpg" alt="Dr. Mario Alves" width="380" />
              <h4>Cirurgião Dentista</h4>
              <span>CROSP 12345</span>
              <p>
                Especialista em ortodontia, a Dra. Camila se dedica a proporcionar sorrisos alinhados e funcionais para
                todas as idades. Com um atendimento humanizado, explica cada etapa do tratamento de forma clara,
                garantindo tranquilidade e confiança a seus pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- /section team -->

      <!-- section contact -->
      <section id="contact" class="contact container-fluid">
        <div class="container">
          <h2>Sorria com confiança: entre em contato conosco</h2>
          <div class="container">
            <div class="contact-buttons container">
              <button>WhatsApp</button>
              <button>Telefone</button>
            </div>
            <div>Se preferir, deixe sua mensagem e nós entramos em contato com você.</div>
            <div class="contact-form container">
              <form>
                <input type="text" placeholder="Nome">
                <input type="text" placeholder="WhatsApp">
                <textarea placeholder="Mensagem"></textarea>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>


        </div>
      </section>
      <!-- /section contact -->
    </main>
    <!-- /main content -->
  </div>
</template>

<style>
:root {
  --topbar-height: 60px;
}

.topbar {
  background-color: #5e6150;
  color: #F6F2EC;
  height: var(--topbar-height);
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.topbar>.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.topbar>.container>.logo {
  font-family: "Great Vibes", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
}

.topbar>.container>.nav>ul {
  list-style: none;
  display: flex;
}

.topbar>.container>.nav>ul>li>a {
  text-decoration: none;
  padding: 1rem;
  display: block;
  color: #F6F2EC;
}

.hero {
  margin-top: var(--topbar-height);
  background: url('/images/hero-bg.jpg') no-repeat center center;
  background-size: cover;
}

.clinic {
  background-color: transparent;
  padding: 4rem 0;
}

.clinic>.container>.container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
}

.clinic>.container>h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.clinic>.container>p {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.5;
  margin-bottom: 3rem;
}

.clinic-card {
  max-width: 380px;
}

.clinic-card>h3 {
  margin-bottom: 2rem;
  text-align: center;
}

.clinic-card>img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.clinic-card>h4 {
  color: #8B8F7A;
  margin-bottom: 1rem;
  text-align: center;
}

.clinic-card>p {
  color: #666;
  text-align: center;
}

.specialties {
  background-color: #fdfcfb;
  padding: 4rem 0;
}

.specialties>.container>h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.specialties>.container>.container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
}

.specialty-card {
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.specialty-card>img {
  width: 48px;
  height: auto;
  display: block;
  margin-bottom: 1rem;
}

.specialty-card>h3 {
  margin-bottom: 1rem;
  text-align: center;
}

.specialty-card>p {
  text-align: center;
}

.team {
  background-color: transparent;
  padding: 4rem 0;
}

.team>.container>.container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
}

.team>.container>h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.team>.container>p {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.5;
  margin-bottom: 3rem;
}

.clinic-card {
  max-width: 380px;
}

.team-member-card {
  max-width: 380px;
}

.team-member-card>h3 {
  margin-bottom: 1rem;
  text-align: center;
}

.team-member-card>img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.team-member-card>h4 {
  margin-bottom: 1rem;
  text-align: center;
}

.team-member-card>span {
  text-align: center;
  display: block;
  margin-bottom: 1rem;
}

.team-member-card>p {
  text-align: center;
}

.contact {
  background-color: #fdfcfb;
  padding: 4rem 0;
}

.contact>.container>h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.contact .contact-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.contact>.container>.container {
  text-align: center;
}

.contact .contact-buttons>button {
  background-color: #5e6150;
  color: #F6F2EC;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  cursor: pointer;
}

.contact>.container>.container>div {
  margin-bottom: 2rem;
}

.contact .contact-form {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.contact .contact-form input {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.contact .contact-form textarea {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 1rem;
  min-height: 100px;
}

.contact .contact-form button {
  background-color: #5e6150;
  color: #F6F2EC;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  cursor: pointer;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--topbar-height);
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  background-color: #f8f5f0;
  color: #5e6150;
  font-family: Tahoma, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.125rem;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.8rem;
  color: #8a623d;
}

h3 {
  font-size: 1.5rem;
  color: #8a623d;
}

h4 {
  font-size: 1.2rem;
}

h5 {
  font-size: 1.2rem;
}

.container-fluid {
  width: 100%;
}

.container {
  max-width: 1380px;
  width: 100%;
  margin: 0 auto;
}

.full-height {
  height: calc(100vh - var(--topbar-height));
}
</style>