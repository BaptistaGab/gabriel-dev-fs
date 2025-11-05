import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import AppStore from "../assets/img/apple.png";
import PlayStore from "../assets/img/android.png";

export default function Home() {
  const projects = [
    {
      title: "Análise de Fluxo de Clientes",
      stack: "Python · YOLO · OpenCV · Power BI",
      desc: "Aplicação para detecção de clientes e análise de tempo de fila; dados exportados para dashboards no Power BI.",
    },
    {
      title: "App TESC - Terminal Portuário",
      stack: "React Native · Expo · API REST",
      desc: "Aplicativo mobile para monitoramento da via de entrada com notificações e interface dinâmica.",
    },
    {
      title: "Conversão PDF → XML JATS",
      stack: "Python · PyMuPDF · lxml",
      desc: "Ferramenta para extrair metadados e converter artigos científicos em XML JATS para publicação.",
    },
    {
      title: "Validador de Cédulas (ID003)",
      stack: "Node.js · Electron · React",
      desc: "Aplicação desktop integrada com validador JCM, com emissão de comprovantes e registro de depósitos.",
    },
    {
      title: "Armário Automatizado — MJ Ferramentas",
      stack: "APIs REST · JS · Hardware",
      desc: "Sistema web para controle de armário automatizado e gestão de ferramentas.",
    },
    {
      title: "Dashboards Power BI",
      stack: "Power BI · PostgreSQL · DAX",
      desc: "Dashboards e integrações para RH, vendas e atendimento com automações ETL.",
    },
  ];

  return (
    <>
      <Global />
      <Page>
        <Container>
          <Header>
            <Brand>
              <Logo
                src="https://github.com/baptistagab.png"
                alt="Gabriel"
              />
              <Name>Gabriel</Name>
              <Subtitle>Desenvolvedor Full Stack • Automação & Dados</Subtitle>
            </Brand>

            <Nav>
              <a href="#projects">Projetos</a>
              <a href="#contact">Contato</a>
              <a
                href="https://github.com/baptistagab"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Nav>
          </Header>

          <Hero>
            <HeroContent>
              <Headline>
                Construindo soluções que unem tecnologia, automação e propósito.
              </Headline>
              <Lead>
                Desenvolvedor Full Stack com experiência em aplicações desktop,
                web e mobile — com foco em automação, análise de dados e
                integração com hardware. Trabalho do backend até a interface,
                com atenção a usabilidade e performance.
              </Lead>

              <CTAGroup>
                <ButtonPrimary href="#projects">Ver projetos</ButtonPrimary>
                <ButtonGhost href="mailto:gabrielbaptista096@gmail.com">
                  Contato
                </ButtonGhost>
              </CTAGroup>

              <TechRow>
                <Badge
                  src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
                  alt="Python"
                />
                <Badge
                  src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
                  alt="Node"
                />
                <Badge
                  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                  alt="React"
                />
                <Badge
                  src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white"
                  alt="Postgres"
                />
              </TechRow>
            </HeroContent>

            <Card>
              <div
                style={{
                  height: 120,
                  borderRadius: 10,
                  backgroundImage: `linear-gradient(120deg, ${PALETTE.DEEP}, ${PALETTE.TEAL})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: PALETTE.OFFWHITE,
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, opacity: 0.9 }}>Portfólio</div>
                  <div style={{ fontWeight: 700, marginTop: 6 }}>
                    Gabriel-dev-fs
                  </div>
                </div>
              </div>

              <h3 style={{ marginTop: 14, marginBottom: 6 }}>
                Portfólio — Gabriel-dev-fs
              </h3>
              <p style={{ color: "rgba(255,241,208,0.8)", fontSize: 13 }}>
                Full Stack · Automação · Dashboards
              </p>

              <ul
                style={{
                  marginTop: 12,
                  color: "rgba(241,245,249,0.85)",
                  fontSize: 14,
                }}
              >
                <li>📌 APIs, interfaces e integrações</li>
                <li>⚙️ Automação com hardware</li>
                <li>📈 Dados & Dashboards</li>
              </ul>

              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <a
                  href="https://github.com/baptistagab/gabriel-dev-fs"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "10px 8px",
                    borderRadius: 10,
                    background: "transparent",
                    border: "1px solid rgba(255,241,208,0.06)",
                    color: PALETTE.OFFWHITE,
                    textDecoration: "none",
                  }}
                >
                  Ver código
                </a>
                <a
                  href="#contact"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "10px 8px",
                    borderRadius: 10,
                    background: PALETTE.ACCENT,
                    color: "#07121a",
                    textDecoration: "none",
                  }}
                >
                  Me contratar
                </a>
              </div>
            </Card>
          </Hero>

          <ProjectGrid id="projects">
            <h3 style={{ margin: 0, fontSize: 20 }}>Projetos principais</h3>
            <p style={{ color: "rgba(255,241,208,0.75)", marginTop: 8 }}>
              Alguns projetos selecionados — foco em automação, dados e
              aplicações full stack.
            </p>

            <Grid>
              {projects.map((p) => (
                <ProjectCard key={p.title}>
                  <ProjectTitle>{p.title}</ProjectTitle>
                  <ProjectStack>{p.stack}</ProjectStack>
                  <ProjectDesc>{p.desc}</ProjectDesc>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 14,
                      alignItems: "center",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        color: PALETTE.TEAL,
                        textDecoration: "none",
                        fontSize: 13,
                      }}
                    >
                      Detalhes
                    </a>
                    <span
                      style={{ color: "rgba(255,241,208,0.6)", fontSize: 12 }}
                    >
                      2024
                    </span>
                  </div>
                </ProjectCard>
              ))}
            </Grid>
          </ProjectGrid>

          <Contact id="contact">
            <ContactCard>
              <p style={{ margin: 0, fontWeight: 600 }}>Email</p>
              <a
                href="mailto:gabrielbaptista096@gmail.com"
                style={{ color: PALETTE.OFFWHITE, textDecoration: "none" }}
              >
                gabrielbaptista096@gmail.com
              </a>

              <div style={{ marginTop: 12 }}></div>
              <p style={{ margin: 0, fontWeight: 600 }}>WhatsApp</p>
              <a
                href="http://api.whatsapp.com/send?phone=41997526613"
                style={{ color: PALETTE.OFFWHITE, textDecoration: "none" }}
              >
                (41) 9 9752-6613
              </a>

              <div style={{ marginTop: 12 }}>
                <p style={{ margin: 0, fontWeight: 600 }}>LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/gabriel-baptista-110aa922b/"
                  style={{ color: PALETTE.OFFWHITE }}
                >
                  linkedin.com/in/gabriel-baptista-110aa922b
                </a>
              </div>
            </ContactCard>

            <ContactCard>
              <p style={{ margin: 0, fontWeight: 600 }}>TESC App</p>
              <p style={{ marginTop: 8, color: "rgba(255,241,208,0.75)" }}>
                Baixe o app nas lojas
              </p>
              <StoreLinks>
                <StoreButton
                  href="https://apps.apple.com/br/app/tesc/id6737557214"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={AppStore} alt="App Store" />
                  App Store
                </StoreButton>

                <StoreButton
                  href="https://play.google.com/store/apps/details?id=com.gabe.bap.TESC&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={PlayStore} alt="Google Play" />
                  Google Play
                </StoreButton>
              </StoreLinks>
            </ContactCard>
          </Contact>

          <Footer>
            © {new Date().getFullYear()} Gabriel — Construindo soluções
            que unem tecnologia, automação e propósito.
          </Footer>
        </Container>
      </Page>
    </>
  );
}

const PALETTE = {
  DEEP: "#086788",
  TEAL: "#07A0C3",
  ACCENT: "#F0C808",
  OFFWHITE: "#fff5ddff",
  RED: "#DD1C1A",
};

const Logo = styled.img`
  width: 5rem;
  border-radius: 50%;
  align-self: center;
`;

const Global = createGlobalStyle`
  html { scroll-behavior: smooth; }
  body { margin:0; font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; background: linear-gradient(180deg, rgba(8,23,30,1) 0%, rgba(5,14,20,1) 100%); }
  a { color: inherit; }
`;

const appear = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
  min-height: 100vh;
  color: ${PALETTE.OFFWHITE};
`;

const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  margin: 0;
  font-size: 20px;
  letter-spacing: -0.2px;
  color: ${PALETTE.OFFWHITE};
  text-align: center;
`;

const Subtitle = styled.span`
  margin-top: 6px;
  font-size: 13px;
  color: rgba(255, 249, 236, 0.7);
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  a {
    color: rgba(255, 241, 208, 0.75);
    text-decoration: none;
    font-size: 14px;
  }
  a:hover {
    color: ${PALETTE.TEAL};
  }
`;

const Hero = styled.section`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 28px;
  align-items: center;
  margin-top: 36px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const HeroContent = styled.div`
  animation: ${appear} 420ms ease both;
`;

const Headline = styled.h2`
  font-size: 34px;
  line-height: 1.03;
  margin: 0;
  color: ${PALETTE.OFFWHITE};
`;

const Lead = styled.p`
  color: rgba(255, 241, 208, 0.8);
  margin-top: 18px;
  max-width: 62ch;
`;

const CTAGroup = styled.div`
  margin-top: 22px;
  display: flex;
  gap: 12px;
`;

const ButtonPrimary = styled.a`
  background: linear-gradient(90deg, ${PALETTE.ACCENT}, #ffd964);
  color: #07121a;
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(240, 200, 8, 0.12);
`;

const ButtonGhost = styled.a`
  color: ${PALETTE.OFFWHITE};
  border: 1px solid rgba(255, 241, 208, 0.06);
  padding: 10px 14px;
  border-radius: 10px;
  text-decoration: none;
`;

const TechRow = styled.div`
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Badge = styled.img`
  height: 34px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);
  padding: 2px;
`;

const Card = styled.aside`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.01)
  );
  border: 1px solid rgba(255, 255, 255, 0.03);
  padding: 18px;
  border-radius: 14px;
  box-shadow: 0 8px 30px rgba(2, 6, 23, 0.45);
`;

const ProjectGrid = styled.section`
  margin-top: 46px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 18px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  background: rgba(10, 20, 24, 0.6);
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 48px rgba(2, 6, 23, 0.6);
  }
`;

const ProjectTitle = styled.h4`
  margin: 0;
  font-size: 16px;
  color: ${PALETTE.OFFWHITE};
`;
const ProjectStack = styled.div`
  margin-top: 6px;
  color: rgba(255, 241, 208, 0.65);
  font-size: 12px;
`;
const ProjectDesc = styled.p`
  margin-top: 10px;
  color: rgba(241, 245, 249, 0.85);
  font-size: 14px;
`;

const Contact = styled.section`
  margin-top: 46px;
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
`;

const ContactCard = styled.div`
  background: linear-gradient(
    180deg,
    rgba(6, 18, 22, 0.45),
    rgba(8, 25, 30, 0.35)
  );
  padding: 18px;
  border-radius: 12px;
  flex: 1;
  min-width: 260px;
`;

const Footer = styled.footer`
  margin-top: 64px;
  padding: 28px 0;
  text-align: center;
  color: rgba(255, 241, 208, 0.6);
  font-size: 13px;
`;

const StoreLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const StoreButton = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(255, 241, 208, 0.06);
  border-radius: 8px;
  padding: 8px 10px;
  color: ${PALETTE.OFFWHITE};
  text-decoration: none;
  font-size: 13px;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }

  img {
    width: 20px;
    height: auto;
  }
`;
