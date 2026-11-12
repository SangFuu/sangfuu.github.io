'use strict';

// English is the default, including when JavaScript is unavailable.
const english = {
  skip: 'Skip to content',
  subtitle: 'Third-year computer science student',
  navAbout: 'About', navProjects: 'Projects', navSkills: 'Skills', navContact: 'Contact',
  aboutTitle: 'About me',
  intro: 'Hi, I’m Marwane. I’m a third-year computer science student at the University of Poitiers and I’m looking for an end-of-degree internship.',
  interests: 'I’m interested in cybersecurity, AI and databases. I enjoy coding and learning new things. Outside computing, I like anime, video games and sport.',
  purpose: 'I created this portfolio to share some university projects and a personal project.',
  projectsTitle: 'My projects',
  projectsIntro: 'The university projects below were completed in a pair with Adnane Serrai. The code and explanations are available on GitHub.',
  dbTitle: 'Real estate agency database',
  dbText: 'We designed a database for a real estate agency, including tables, relationships and SQL queries. This project helped me practise data modelling.',
  logoTitle: 'Logo interpreter',
  logoText: 'We developed an interpreter for a drawing language. The project covers parsing instructions, variables, loops and conditions. The assembled version runs without a graphical interface.',
  santaTitle: 'Santa’s workshop',
  santaText: 'We created a gift production and delivery simulation. I practised object-oriented programming by working with employees, gifts and sleighs.',
  neonText: 'This is a personal project made with the help of an AI assistant: a terminal game with four waves of enemies. It uses keyboard controls and includes shooting, a dash and a special attack.',
  source: 'View the project on GitHub',
  allProjects: 'View my other GitHub repositories',
  skillsTitle: 'Skills',
  skillsIntro: 'Here are the languages and tools I use in my degree and projects:',
  programming: 'Programming:', web: 'Web and data:', tools: 'Tools:',
  foundations: 'Foundations:', foundationsText: 'data structures, graphs, logic',
  languages: 'Languages:', languagesText: 'French (native), English (B2)',
  contactTitle: 'Contact',
  contactIntro: 'For an internship opportunity or a question about my projects, you can contact me:',
  navCv: 'CV', cvButton: 'Download my CV (PDF)', cvLink: 'CV_Marwane_EL_FADILY.pdf',
  top: 'Back to top'
};
const french = {
  "skip": "Aller au contenu",
  "subtitle": "Étudiant en L3 informatique",
  "navAbout": "À propos",
  "navProjects": "Projets",
  "navSkills": "Compétences",
  "navContact": "Contact",
  "aboutTitle": "À propos de moi",
  "intro": "Bonjour, je m’appelle Marwane. Je suis en troisième année de licence informatique à l’Université de Poitiers et je recherche un stage de fin de licence.",
  "interests": "Je m’intéresse à la cybersécurité, à l’IA et aux bases de données. J’aime coder et apprendre de nouvelles choses. En dehors de l’informatique, j’aime les animés, les jeux vidéo et le sport.",
  "purpose": "J’ai créé ce portfolio pour présenter quelques projets de licence et un projet personnel.",
  "projectsTitle": "Mes projets",
  "projectsIntro": "Les projets de licence ci-dessous ont été réalisés en binôme avec Adnane Serrai. Le code et les explications sont disponibles sur GitHub.",
  "dbTitle": "Base de données pour une agence immobilière",
  "dbText": "Nous avons conçu une base de données pour une agence immobilière, avec des tables, des relations et des requêtes SQL. Ce projet m’a permis de travailler la modélisation des données.",
  "source": "Voir le projet sur GitHub",
  "logoTitle": "Interpréteur Logo",
  "logoText": "Nous avons développé un interpréteur pour un langage de dessin. Le projet porte sur l’analyse des instructions, les variables, les répétitions et les conditions. La version assemblée fonctionne sans interface graphique.",
  "santaTitle": "Au pays du Père Noël",
  "santaText": "Nous avons créé une simulation de fabrication et de livraison de cadeaux. Ce projet m’a permis de pratiquer la programmation orientée objet, en travaillant sur les employés, les cadeaux et les traîneaux.",
  "neonText": "C’est un projet personnel réalisé avec l’aide d’un assistant IA : un jeu dans le terminal avec quatre vagues d’ennemis. Il se joue au clavier et comporte des tirs, une esquive et une attaque spéciale.",
  "allProjects": "Voir mes autres dépôts GitHub",
  "skillsTitle": "Compétences",
  "skillsIntro": "Voici les langages et outils que j’utilise dans ma formation et mes projets :",
  "programming": "Programmation :",
  "web": "Web et données :",
  "tools": "Outils :",
  "foundations": "Fondements :",
  "foundationsText": "structures de données, graphes, logique",
  "languages": "Langues :",
  "languagesText": "français (langue maternelle), anglais (B2)",
  "contactTitle": "Contact",
  "contactIntro": "Pour une proposition de stage ou une question sur mes projets, vous pouvez me contacter :",
  "navCv": "CV",
  "cvButton": "Télécharger mon CV (PDF)",
  "cvLink": "CV_Marwane_EL_FADILY.pdf",
  "top": "Retour en haut"
};
function changeLanguage(language) {
  if (language !== 'fr' && language !== 'en') return;
  const texts = language === 'en' ? english : french;
  document.querySelectorAll('[data-text]').forEach(element => {
    element.textContent = texts[element.dataset.text];
  });
  document.documentElement.lang = language;
  document.title = 'Marwane El Fadily — Portfolio';
  document.querySelector('meta[name="description"]').content = language === 'fr'
    ? 'Portfolio de Marwane El Fadily, étudiant en L3 informatique : projets, compétences et contact.'
    : 'Marwane El Fadily, third-year computer science student: projects, skills and contact.';
  document.querySelectorAll('[data-lang]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  });
  try { localStorage.setItem('portfolio-language', language); } catch {}
}
document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', () => changeLanguage(button.dataset.lang));
});
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('portfolio-language') || 'en'; } catch {}
changeLanguage(savedLanguage === 'fr' ? 'fr' : 'en');

