'use strict';

// Les textes français restent dans le HTML pour fonctionner sans JavaScript.
const english = {
  skip: 'Skip to content',
  subtitle: 'Third-year computer science student',
  navAbout: 'About', navProjects: 'Projects', navSkills: 'Skills', navContact: 'Contact',
  aboutTitle: 'About me',
  intro: 'Hi, I’m Marwane. I’m a third-year computer science student at the University of Poitiers and I’m looking for an end-of-degree internship.',
  interests: 'I’m interested in cybersecurity, web development and databases. I enjoy coding and learning new things. Outside computing, I like anime, video games and sport.',
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
  top: 'Back to top'
};
const french = {};
document.querySelectorAll('[data-text]').forEach(element => {
  french[element.dataset.text] = element.textContent;
});
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
let savedLanguage = 'fr';
try { savedLanguage = localStorage.getItem('portfolio-language') || 'fr'; } catch {}
changeLanguage(savedLanguage);

