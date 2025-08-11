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
        <NuxtImg src="/images/hero-bg.webp" fetchpriority="high" alt="Dra. Natasha Grey" />
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
              <NuxtImg src="/images/clinica1.webp" alt="recepção" width="380" />
              <h4>Um sorriso para receber você</h4>
              <p>Nossa equipe está pronta para oferecer um atendimento rápido e atencioso desde o primeiro momento.</p>
            </div>

            <div class="clinic-card">
              <h3>Sala de espera</h3>
              <NuxtImg src="/images/clinica3.webp" alt="sala espera" width="380" />
              <h4>Conforto enquanto aguarda</h4>
              <p>Um ambiente tranquilo, climatizado e preparado para que seu tempo aqui seja agradável.</p>
            </div>

            <div class="clinic-card">
              <h3>Consultório</h3>
              <NuxtImg src="/images/clinica2.webp" alt="consultório" width="380" />
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
              <NuxtImg src="/images/icon_gingivitis.webp" alt="periodontia" width="48" />
              <h3>Periodontia</h3>
              <p>A Periodontia é responsável por prevenir e tratar as doenças e processos inflamatórios dos tecidos de
                proteção e sustentação do dente: gengiva, ossos e ligamentos que circundam os dentes.</p>
            </div>

            <div class="specialty-card">
              <NuxtImg src="/images/icon_orthodontic.webp" alt="ortodontia" width="48" />
              <h3>Ortodontia</h3>
              <p>Especialidade da Odontologia que trata das irregularidades tanto dentais quanto faciais, proporcionando
                um equilíbrio facial adequado e harmônico.</p>
            </div>

            <div class="specialty-card">
              <NuxtImg src="/images/icon_implant.webp" alt="implantodontia" width="48" />
              <h3>Implantodontia</h3>
              <p>A Implantodontia restabelece a função de mastigação, bem como a estética da pessoa que tem um ou mais
                dentes ausentes através da introdução de um parafuso que substitui a raiz do dente.</p>
            </div>

            <div class="specialty-card">
              <NuxtImg src="/images/icon_gingivitis.webp" alt="periodontia" width="48" />
              <h3>Periodontia</h3>
              <p>A Periodontia é responsável por prevenir e tratar as doenças e processos inflamatórios dos tecidos de
                proteção e sustentação do dente: gengiva, ossos e ligamentos que circundam os dentes.</p>
            </div>

            <div class="specialty-card">
              <NuxtImg src="/images/icon_orthodontic.webp" alt="ortodontia" width="48" />
              <h3>Ortodontia</h3>
              <p>Especialidade da Odontologia que trata das irregularidades tanto dentais quanto faciais, proporcionando
                um equilíbrio facial adequado e harmônico.</p>
            </div>

            <div class="specialty-card">
              <NuxtImg src="/images/icon_implant.webp" alt="implantodontia" width="48" />
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
              <NuxtImg src="/images/team-member-1.webp" alt="Dr. Rafael Costa" width="380" />
              <div>
                <h3>Dr. Rafael Costa</h3>
                <h4>Cirurgião Dentista</h4>
                <span>CROSP 12345</span>
              </div>

              <!-- <p>
                Especialista em odontologia estética, o Dr. Rafael é apaixonado por transformar sorrisos de forma
                natural e harmoniosa. Com mais de 10 anos de experiência, alia técnicas modernas a um atendimento
                acolhedor, garantindo resultados que elevam a autoestima dos pacientes.
              </p> -->
            </div>

            <div class="team-member-card">

              <NuxtImg src="/images/team-member-2.webp" alt="Dra. Camila Martins" width="380" />
              <div>
                <h3>Dra. Camila Martins</h3>
                <h4>Cirurgiã Dentista</h4>
                <span>CROSP 12345</span>
              </div>
              <!-- <p>
                Focado em implantodontia e reabilitação oral, o Dr. Rafael é reconhecido pela precisão e atenção aos
                detalhes. Sua abordagem cuidadosa e o uso de tecnologia de ponta asseguram tratamentos confortáveis e
                eficazes, sempre priorizando a saúde bucal a longo prazo.
              </p> -->
            </div>

            <div class="team-member-card">

              <NuxtImg src="/images/team-member-3.webp" alt="Dr. Mario Alves" width="380" />
              <div>
                <h3>Dr. Mario Alves</h3>
                <h4>Cirurgião Dentista</h4>
                <span>CROSP 12345</span>
              </div>
              <!-- <p>
                Especialista em ortodontia, a Dra. Camila se dedica a proporcionar sorrisos alinhados e funcionais para
                todas as idades. Com um atendimento humanizado, explica cada etapa do tratamento de forma clara,
                garantindo tranquilidade e confiança a seus pacientes.
              </p> -->
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