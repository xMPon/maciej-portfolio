/* ============================================================
   CV / Portfolio Website — JavaScript
   Features: Progress bar, Navbar scroll, Search, Language toggle,
             Portfolio filter, Skill bars, Contact form, AOS, Back-to-top
   ============================================================ */

'use strict';

/* ── Translations ─────────────────────────────────────────────
   Add more keys as needed. Keys must match data-translate attrs.
   ─────────────────────────────────────────────────────────── */
const translations = {
    en: {
        nav_home: 'Home', nav_skills: 'Skills', nav_achievements: 'Achievements',
        nav_education: 'Education', nav_experience: 'Experience',
        nav_portfolio: 'Portfolio', nav_hobbies: 'Hobbies', nav_contact: 'Contact',

        hero_greeting: "Hello, I'm",
        hero_name: 'Maciej Poniewierski',
        hero_title: 'Senior Financial Data Analyst · Data & Machine Learning',
        hero_bio: 'Senior financial data analyst in UK wealth management, building financial models and data pipelines with Excel, Python, SQL and Snowflake. I work end to end — from regulatory change and forecasting through to shipping production software on Azure, Power BI and modern web stacks — and I am now focused on machine learning and AI-assisted engineering.',
        hero_cta: '<i class="fas fa-envelope me-2"></i>Get In Touch',
        hero_download: '<i class="fas fa-file-lines me-2"></i>View CV',

        stat_years: 'Years Experience', stat_companies: 'Companies', stat_certs: 'Certifications',

        skills_tag: 'What I Do', skills_title: 'Technical Skills',
        skill_analytics: 'Analytics & Modelling', skill_cloud: 'Cloud & Data',
        skill_dev: 'Development', skill_tools: 'Delivery & Methods',

        ach_tag: 'Credentials', ach_title: 'Certifications & Achievements',
        badge1: 'Bilingual: English & Polish', badge2: 'Scrum Master', badge3: 'Driving Licence', badge4: 'CII Level 3 Certified',

        edu_tag: 'Learning Path', edu_title: 'Education',
        edu1_degree: 'MSc Financial Technology with Data Science',
        edu2_degree: 'Level 3 Certificate in Financial Services',
        edu3_degree: 'BSc Information Technology Management for Business',
        edu4_degree: 'Level 3 Extended Diploma in Computing',

        exp_tag: 'Career', exp_title: 'Work Experience',
        exp1_role: 'Financial Modelling Analyst',
        exp2_role: 'Graduate Data Consultant',
        exp3_role: 'Customer Assistant',
        exp4_role: 'IT & E-Commerce Intern',
        exp5_role: 'Chalet Host (Chef)',
        exp6_role: 'Help Desk Support',

        port_tag: 'Projects', port_title: 'Portfolio',
        filter_all: 'All', filter_fintech: 'FinTech', filter_data: 'Data', filter_dev: 'Dev',

        proj1_title: 'Financial Planning Platform Modelling',
        proj4_title: 'Power BI Walkthrough',
        proj6_title: 'SAS Base Programming',
        proj7_title: 'Mortgage Repayment Calculator',
        proj8_title: 'Blockchain Supply Chain Dissertation',
        proj9_title: 'FinNerd Blog',

        hob_tag: 'Outside Work', hob_title: 'Hobbies & Interests',
        hob1: 'AI & Automation', hob2: 'Boxing', hob10: 'Cooking', hob3: 'Data & Finance',
        hob4: 'Investing', hob5: 'Running', hob6: 'Snowboarding',
        hob7: 'Tennis', hob8: 'Travel', hob9: 'Trekking',

        con_tag: 'Say Hello', con_title: 'Get In Touch',
        con_sub: 'Open to new opportunities, collaborations, or just a chat about data, finance and technology.',
        ci_loc: 'Location', ci_email: 'Email',

        form_name: 'Name', form_email: 'Email', form_subject: 'Subject', form_message: 'Message',
        form_name_err: 'Please enter your name.',
        form_email_err: 'Please enter a valid email.',
        form_subject_err: 'Please enter a subject.',
        form_msg_err: 'Please enter your message.',
        form_send: '<i class="fas fa-paper-plane me-2"></i>Send Message',

        footer_tag: 'Finance · Data · Technology',
        footer_bottom: 'Designed &amp; developed with <i class="fas fa-heart text-danger"></i> by Maciej Poniewierski.',
    },
    fr: {
        nav_home: 'Accueil', nav_skills: 'Compétences', nav_achievements: 'Réalisations',
        nav_education: 'Éducation', nav_experience: 'Expérience',
        nav_portfolio: 'Portfolio', nav_hobbies: 'Loisirs', nav_contact: 'Contact',

        hero_greeting: 'Bonjour, je suis',
        hero_name: 'Maciej Poniewierski',
        hero_title: 'Analyste Senior de Données Financières · Data & Machine Learning',
        hero_bio: "Analyste senior de données financières dans la gestion de patrimoine au Royaume-Uni : modèles financiers et pipelines de données en Excel, Python, SQL et Snowflake. Je couvre toute la chaîne, du changement réglementaire et des prévisions jusqu'à la mise en production de logiciels sur Azure et Power BI, avec un focus actuel sur le machine learning et l'ingénierie assistée par IA.",
        hero_cta: '<i class="fas fa-envelope me-2"></i>Me Contacter',
        hero_download: '<i class="fas fa-file-lines me-2"></i>Voir le CV',

        stat_years: "Ans d'Expérience", stat_companies: 'Entreprises', stat_certs: 'Certifications',

        skills_tag: 'Ce que je fais', skills_title: 'Compétences Techniques',
        skill_analytics: 'Analyse & Modélisation', skill_cloud: 'Cloud & Données',
        skill_dev: 'Développement', skill_tools: 'Méthodes & Livraison',

        ach_tag: 'Accréditations', ach_title: 'Certifications & Réalisations',
        badge1: 'Bilingue : Anglais & Polonais', badge2: 'Scrum Master', badge3: 'Permis de conduire', badge4: 'Certifié CII Niveau 3',

        edu_tag: 'Parcours', edu_title: 'Éducation',
        edu1_degree: 'MSc Technologie Financière avec Science des Données',
        edu2_degree: 'Certificat Niveau 3 en Services Financiers',
        edu3_degree: 'BSc Management des Technologies de l\'Information pour les Entreprises',
        edu4_degree: 'Diplôme Étendu Niveau 3 en Informatique',

        exp_tag: 'Carrière', exp_title: 'Expérience Professionnelle',
        exp1_role: 'Analyste en Modélisation Financière',
        exp2_role: 'Consultante Data Diplômée',
        exp3_role: 'Assistante Clientèle',
        exp4_role: 'Stagiaire IT & E-Commerce',
        exp5_role: 'Hôte de Chalet (Chef)',
        exp6_role: 'Support Helpdesk',

        port_tag: 'Projets', port_title: 'Portfolio',
        filter_all: 'Tout', filter_fintech: 'FinTech', filter_data: 'Données', filter_dev: 'Dev',

        proj1_title: 'Modélisation de Plateforme de Planification Financière',
        proj4_title: 'Power BI Walkthrough',
        proj6_title: 'Programmation de Base SAS',
        proj7_title: 'Calculatrice de Remboursement Hypothécaire',
        proj8_title: 'Dissertation Blockchain sur la Chaîne d\'Approvisionnement',
        proj9_title: 'Blog FinNerd',

        hob_tag: 'Hors Travail', hob_title: 'Loisirs & Intérêts',
        hob1: 'IA & Automatisation', hob2: 'Boxe', hob10: 'Cuisine', hob3: 'Données & Finance',
        hob4: 'Investissement', hob5: 'Course à pied', hob6: 'Snowboard',
        hob7: 'Tennis', hob8: 'Voyages', hob9: 'Randonnée',

        con_tag: 'Dire Bonjour', con_title: 'Contactez-moi',
        con_sub: 'Ouvert aux nouvelles opportunités, collaborations ou simplement à une conversation sur les données, la finance et la technologie.',
        ci_loc: 'Localisation', ci_email: 'Courriel',

        form_name: 'Nom', form_email: 'Courriel', form_subject: 'Sujet', form_message: 'Message',
        form_name_err: 'Veuillez entrer votre nom.',
        form_email_err: 'Veuillez entrer un courriel valide.',
        form_subject_err: 'Veuillez entrer un sujet.',
        form_msg_err: 'Veuillez entrer votre message.',
        form_send: '<i class="fas fa-paper-plane me-2"></i>Envoyer le Message',

        footer_tag: 'Finance · Données · Technologie',
        footer_bottom: 'Conçu &amp; développé avec <i class="fas fa-heart text-danger"></i> par Maciej Poniewierski.',
    },
    pl: {
        nav_home: 'Strona główna', nav_skills: 'Umiejętności', nav_achievements: 'Osiągnięcia',
        nav_education: 'Edukacja', nav_experience: 'Doświadczenie',
        nav_portfolio: 'Portfolio', nav_hobbies: 'Zainteresowania', nav_contact: 'Kontakt',

        hero_greeting: 'Cześć, jestem',
        hero_name: 'Maciej Poniewierski',
        hero_title: 'Starszy Analityk Danych Finansowych · Dane i Uczenie Maszynowe',
        hero_bio: 'Starszy analityk danych finansowych w brytyjskim sektorze zarządzania majątkiem — buduję modele finansowe i procesy danych w Excelu, Pythonie, SQL i Snowflake. Pracuję od zmian regulacyjnych i prognozowania po wdrażanie oprogramowania produkcyjnego w Azure i Power BI, a obecnie skupiam się na uczeniu maszynowym i inżynierii wspieranej przez AI.',
        hero_cta: '<i class="fas fa-envelope me-2"></i>Skontaktuj się',
        hero_download: '<i class="fas fa-file-lines me-2"></i>Zobacz CV',

        stat_years: 'Lata Doświadczenia', stat_companies: 'Firmy', stat_certs: 'Certyfikaty',

        skills_tag: 'Co robię', skills_title: 'Umiejętności Techniczne',
        skill_analytics: 'Analityka i Modelowanie', skill_cloud: 'Chmura i Dane',
        skill_dev: 'Programowanie', skill_tools: 'Metodyki i Dostarczanie',

        ach_tag: 'Poświadczenia', ach_title: 'Certyfikaty i Osiągnięcia',
        badge1: 'Dwujęzyczny: Angielski i Polski', badge2: 'Scrum Master', badge3: 'Prawo jazdy', badge4: 'Certyfikat CII Poziom 3',

        edu_tag: 'Ścieżka nauki', edu_title: 'Edukacja',
        edu1_degree: 'MSc Technologia Finansowa z Nauką o Danych',
        edu2_degree: 'Certyfikat Poziomu 3 w Usługach Finansowych',
        edu3_degree: 'BSc Zarządzanie Technologiami Informacyjnymi dla Biznesu',
        edu4_degree: 'Rozszerzony Dyplom Poziomu 3 z Informatyki',

        exp_tag: 'Kariera', exp_title: 'Doświadczenie Zawodowe',
        exp1_role: 'Analityk Modelowania Finansowego',
        exp2_role: 'Konsultant Danych – Absolwent',
        exp3_role: 'Pracownik Obsługi Klienta',
        exp4_role: 'Stażysta IT i E-Commerce',
        exp5_role: 'Gospodarz Chatki (Szef Kuchni)',
        exp6_role: 'Wsparcie Help Desk',

        port_tag: 'Projekty', port_title: 'Portfolio',
        filter_all: 'Wszystkie', filter_fintech: 'FinTech', filter_data: 'Dane', filter_dev: 'Dev',

        proj1_title: 'Modelowanie Platformy Planowania Finansowego',
        proj4_title: 'Power BI Walkthrough',
        proj6_title: 'Programowanie Podstawowe SAS',
        proj7_title: 'Kalkulator Spłaty Kredytu Hipotecznego',
        proj8_title: 'Praca Dyplomowa: Blockchain w Łańcuchu Dostaw',
        proj9_title: 'Blog FinNerd',

        hob_tag: 'Poza pracą', hob_title: 'Hobby i Zainteresowania',
        hob1: 'AI i Automatyzacja', hob2: 'Boks', hob10: 'Gotowanie', hob3: 'Dane i Finanse',
        hob4: 'Inwestowanie', hob5: 'Bieganie', hob6: 'Snowboard',
        hob7: 'Tenis', hob8: 'Podróże', hob9: 'Trekking',

        con_tag: 'Napisz', con_title: 'Skontaktuj się',
        con_sub: 'Otwarty na nowe możliwości, współpracę lub rozmowę o danych, finansach i technologii.',
        ci_loc: 'Lokalizacja', ci_email: 'Email',

        form_name: 'Imię', form_email: 'Email', form_subject: 'Temat', form_message: 'Wiadomość',
        form_name_err: 'Proszę podać imię.',
        form_email_err: 'Proszę podać prawidłowy adres email.',
        form_subject_err: 'Proszę podać temat.',
        form_msg_err: 'Proszę wpisać wiadomość.',
        form_send: '<i class="fas fa-paper-plane me-2"></i>Wyślij Wiadomość',

        footer_tag: 'Finanse · Dane · Technologia',
        footer_bottom: 'Zaprojektowane &amp; stworzone z <i class="fas fa-heart text-danger"></i> przez Maciej Poniewierski.',
    },
    de: {
        nav_home: 'Startseite', nav_skills: 'Fähigkeiten', nav_achievements: 'Leistungen',
        nav_education: 'Ausbildung', nav_experience: 'Erfahrung',
        nav_portfolio: 'Portfolio', nav_hobbies: 'Hobbys', nav_contact: 'Kontakt',

        hero_greeting: 'Hallo, ich bin',
        hero_name: 'Maciej Poniewierski',
        hero_title: 'Senior Financial Data Analyst · Daten & Machine Learning',
        hero_bio: 'Senior Financial Data Analyst in der britischen Vermögensverwaltung — ich baue Finanzmodelle und Datenpipelines mit Excel, Python, SQL und Snowflake. Von regulatorischen Änderungen und Forecasting bis zum Ausliefern produktiver Software auf Azure und Power BI, mit aktuellem Fokus auf Machine Learning und KI-gestützte Entwicklung.',
        hero_cta: '<i class="fas fa-envelope me-2"></i>Kontakt aufnehmen',
        hero_download: '<i class="fas fa-file-lines me-2"></i>Lebenslauf ansehen',

        stat_years: 'Jahre Erfahrung', stat_companies: 'Unternehmen', stat_certs: 'Zertifikate',

        skills_tag: 'Was ich tue', skills_title: 'Technische Fähigkeiten',
        skill_analytics: 'Analyse & Modellierung', skill_cloud: 'Cloud & Daten',
        skill_dev: 'Entwicklung', skill_tools: 'Methoden & Lieferung',

        ach_tag: 'Nachweise', ach_title: 'Zertifikate & Leistungen',
        badge1: 'Zweisprachig: Englisch & Polnisch', badge2: 'Scrum Master', badge3: 'Führerschein', badge4: 'CII Stufe 3 Zertifiziert',

        edu_tag: 'Bildungsweg', edu_title: 'Ausbildung',
        edu1_degree: 'MSc Finanztechnologie mit Datenwissenschaft',
        edu2_degree: 'Zertifikat Stufe 3 in Finanzdienstleistungen',
        edu3_degree: 'BSc IT-Management für Unternehmen',
        edu4_degree: 'Erweitertes Diplom Stufe 3 in Informatik',

        exp_tag: 'Karriere', exp_title: 'Berufserfahrung',
        exp1_role: 'Financial Modelling Analyst',
        exp2_role: 'Graduate Data Consultant',
        exp3_role: 'Kundenassistent',
        exp4_role: 'IT & E-Commerce Praktikant',
        exp5_role: 'Chalet-Gastgeber (Koch)',
        exp6_role: 'Helpdesk-Support',

        port_tag: 'Projekte', port_title: 'Portfolio',
        filter_all: 'Alle', filter_fintech: 'FinTech', filter_data: 'Daten', filter_dev: 'Dev',

        proj1_title: 'Modellierung einer Finanzplanungsplattform',
        proj4_title: 'Power BI Walkthrough',
        proj6_title: 'SAS Basisprogrammierung',
        proj7_title: 'Hypothekenrechner',
        proj8_title: 'Blockchain Lieferketten-Dissertation',
        proj9_title: 'FinNerd Blog',

        hob_tag: 'Freizeit', hob_title: 'Hobbys & Interessen',
        hob1: 'KI & Automatisierung', hob2: 'Boxen', hob10: 'Kochen', hob3: 'Daten & Finanzen',
        hob4: 'Investieren', hob5: 'Laufen', hob6: 'Snowboard',
        hob7: 'Tennis', hob8: 'Reisen', hob9: 'Trekking',

        con_tag: 'Hallo sagen', con_title: 'Kontakt aufnehmen',
        con_sub: 'Offen für neue Möglichkeiten, Kooperationen oder ein Gespräch über Daten, Finanzen und Technologie.',
        ci_loc: 'Standort', ci_email: 'E-Mail',

        form_name: 'Name', form_email: 'E-Mail', form_subject: 'Betreff', form_message: 'Nachricht',
        form_name_err: 'Bitte geben Sie Ihren Namen ein.',
        form_email_err: 'Bitte geben Sie eine gültige E-Mail ein.',
        form_subject_err: 'Bitte geben Sie einen Betreff ein.',
        form_msg_err: 'Bitte geben Sie Ihre Nachricht ein.',
        form_send: '<i class="fas fa-paper-plane me-2"></i>Nachricht senden',

        footer_tag: 'Finanzen · Daten · Technologie',
        footer_bottom: 'Gestaltet &amp; entwickelt mit <i class="fas fa-heart text-danger"></i> von Maciej Poniewierski.',
    },
    es: {
        nav_home: 'Inicio', nav_skills: 'Habilidades', nav_achievements: 'Logros',
        nav_education: 'Educación', nav_experience: 'Experiencia',
        nav_portfolio: 'Portfolio', nav_hobbies: 'Aficiones', nav_contact: 'Contacto',

        hero_greeting: 'Hola, soy',
        hero_name: 'Maciej Poniewierski',
        hero_title: 'Analista Senior de Datos Financieros · Datos y Machine Learning',
        hero_bio: 'Analista senior de datos financieros en la gestión patrimonial del Reino Unido: construyo modelos financieros y pipelines de datos con Excel, Python, SQL y Snowflake. Trabajo de principio a fin, desde el cambio regulatorio y la previsión hasta desplegar software en producción con Azure y Power BI, y ahora me centro en machine learning e ingeniería asistida por IA.',
        hero_cta: '<i class="fas fa-envelope me-2"></i>Contactar',
        hero_download: '<i class="fas fa-file-lines me-2"></i>Ver CV',

        stat_years: 'Años de Experiencia', stat_companies: 'Empresas', stat_certs: 'Certificaciones',

        skills_tag: 'Lo que hago', skills_title: 'Habilidades Técnicas',
        skill_analytics: 'Análisis y Modelización', skill_cloud: 'Nube y Datos',
        skill_dev: 'Desarrollo', skill_tools: 'Métodos y Entrega',

        ach_tag: 'Credenciales', ach_title: 'Certificaciones y Logros',
        badge1: 'Bilingüe: Inglés y Polaco', badge2: 'Scrum Master', badge3: 'Carnet de conducir', badge4: 'Certificado CII Nivel 3',

        edu_tag: 'Formación', edu_title: 'Educación',
        edu1_degree: 'MSc Tecnología Financiera con Ciencia de Datos',
        edu2_degree: 'Certificado Nivel 3 en Servicios Financieros',
        edu3_degree: 'BSc Gestión de Tecnologías de la Información para Empresas',
        edu4_degree: 'Diploma Ampliado Nivel 3 en Informática',

        exp_tag: 'Carrera', exp_title: 'Experiencia Laboral',
        exp1_role: 'Analista de Modelización Financiera',
        exp2_role: 'Consultora de Datos Graduada',
        exp3_role: 'Asistente de Atención al Cliente',
        exp4_role: 'Becario de IT y E-Commerce',
        exp5_role: 'Anfitrión de Chalet (Chef)',
        exp6_role: 'Soporte de Help Desk',

        port_tag: 'Proyectos', port_title: 'Portfolio',
        filter_all: 'Todos', filter_fintech: 'FinTech', filter_data: 'Datos', filter_dev: 'Dev',

        proj1_title: 'Modelización de Plataforma de Planificación Financiera',
        proj4_title: 'Power BI Walkthrough',
        proj6_title: 'Programación Base SAS',
        proj7_title: 'Calculadora de Amortización Hipotecaria',
        proj8_title: 'Disertación Blockchain sobre Cadena de Suministro',
        proj9_title: 'Blog FinNerd',

        hob_tag: 'Fuera del trabajo', hob_title: 'Aficiones e Intereses',
        hob1: 'IA y Automatización', hob2: 'Boxeo', hob10: 'Cocina', hob3: 'Datos y Finanzas',
        hob4: 'Inversión', hob5: 'Carrera', hob6: 'Snowboard',
        hob7: 'Tenis', hob8: 'Viajes', hob9: 'Senderismo',

        con_tag: 'Di hola', con_title: 'Ponte en contacto',
        con_sub: 'Abierto a nuevas oportunidades, colaboraciones o simplemente a charlar sobre datos, finanzas y tecnología.',
        ci_loc: 'Ubicación', ci_email: 'Correo electrónico',

        form_name: 'Nombre', form_email: 'Correo', form_subject: 'Asunto', form_message: 'Mensaje',
        form_name_err: 'Por favor, introduce tu nombre.',
        form_email_err: 'Por favor, introduce un correo válido.',
        form_subject_err: 'Por favor, introduce un asunto.',
        form_msg_err: 'Por favor, introduce tu mensaje.',
        form_send: '<i class="fas fa-paper-plane me-2"></i>Enviar Mensaje',

        footer_tag: 'Finanzas · Datos · Tecnología',
        footer_bottom: 'Diseñado &amp; desarrollado con <i class="fas fa-heart text-danger"></i> por Maciej Poniewierski.',
    }
};

/* ── Current Language ─────────────────────────────────────── */
function detectBrowserLang() {
    const supported = Object.keys(translations); // ['en','fr','pl','de','es']
    for (const lang of navigator.languages || [navigator.language]) {
        const code = lang.split('-')[0].toLowerCase();
        if (supported.includes(code)) return code;
    }
    return 'en';
}
let currentLang = localStorage.getItem('cv-lang') || detectBrowserLang();

/* ── DOM Ready ─────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    initAOS();
    initProgressBar();
    initNavbar();
    initSmoothScroll();
    initSkillBars();
    initPortfolioFilter();
    initSearch();
    initLanguageToggle();
    initContactForm();
    initEmailLink();
    initBackToTop();
    initFooterYear();
    initCertModal();
    initYtThumbs();

    // Apply saved language on load
    applyLanguage(currentLang);
    document.getElementById('langSelect').value = currentLang;
});

/* ── AOS (Animate on Scroll) ─────────────────────────────── */
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out-cubic' });
    }
}

/* ── Progress Bar ─────────────────────────────────────────── */
function initProgressBar() {
    const fill = document.getElementById('progressFill');
    if (!fill) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        fill.style.width = Math.min(pct, 100) + '%';
    }, { passive: true });
}

/* ── Navbar Scroll Effect ─────────────────────────────────── */
function initNavbar() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    const onScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);

        // Highlight active section in nav
        const sections = document.querySelectorAll('section[id]');
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 100) current = s.id;
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${current}`);
        });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ── Smooth Scroll ────────────────────────────────────────── */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;
            e.preventDefault();

            // Close mobile navbar if open
            const collapse = document.getElementById('navbarNav');
            if (collapse && collapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(collapse);
                if (bsCollapse) bsCollapse.hide();
            }

            const navH = document.getElementById('mainNav')?.offsetHeight || 64;
            const top = target.getBoundingClientRect().top + window.scrollY - navH;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

/* ── Skill Bars Animation ─────────────────────────────────── */
function initSkillBars() {
    const bars = document.querySelectorAll('.bar-fill');
    if (!bars.length) return;

    const animateBars = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.dataset.width || '0';
                bar.style.width = width + '%';
                observer.unobserve(bar);
            }
        });
    };

    const observer = new IntersectionObserver(animateBars, { threshold: 0.3 });
    bars.forEach(bar => observer.observe(bar));
}

/* ── Portfolio Filter ─────────────────────────────────────── */
function initPortfolioFilter() {
    const btns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            items.forEach(item => {
                const cats = (item.dataset.category || '').split(/\s+/);
                const show = filter === 'all' || cats.includes(filter);
                item.classList.toggle('hidden', !show);
            });
        });
    });
}

/* ── Search ───────────────────────────────────────────────── */
function initSearch() {
    const input = document.getElementById('searchInput');
    const overlay = document.getElementById('searchResults');
    if (!input || !overlay) return;

    // Build searchable index from sections
    const buildIndex = () => {
        const index = [];
        document.querySelectorAll('section[id]').forEach(sec => {
            const id = sec.id;
            const title = sec.querySelector('h2')?.textContent?.trim() || id;
            const textNodes = [];
            sec.querySelectorAll('h3, h4, h5, h6, p, li, .timeline-org, .project-cat').forEach(el => {
                textNodes.push(el.textContent.trim());
            });
            index.push({ id, title, text: textNodes.join(' ').toLowerCase() });
        });
        return index;
    };

    let idx = null;

    input.addEventListener('input', () => {
        const term = input.value.trim().toLowerCase();

        if (!term) {
            overlay.innerHTML = '';
            overlay.classList.add('d-none');
            return;
        }

        if (!idx) idx = buildIndex();

        const matches = idx.filter(s => s.text.includes(term) || s.title.toLowerCase().includes(term));

        if (!matches.length) {
            overlay.innerHTML = '<p class="search-no-results">No results found.</p>';
        } else {
            overlay.innerHTML = matches.map(m => `
                <div class="search-result-item" data-target="#${m.id}" role="button" tabindex="0">
                    <h6>${m.title}</h6>
                    <p>${getSnippet(m.text, term)}</p>
                </div>
            `).join('');

            overlay.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const target = document.querySelector(item.dataset.target);
                    if (target) {
                        const navH = document.getElementById('mainNav')?.offsetHeight || 64;
                        window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
                    }
                    input.value = '';
                    overlay.classList.add('d-none');
                });
                item.addEventListener('keydown', e => {
                    if (e.key === 'Enter') item.click();
                });
            });
        }

        overlay.classList.remove('d-none');
    });

    // Close on outside click
    document.addEventListener('click', e => {
        if (!input.contains(e.target) && !overlay.contains(e.target)) {
            overlay.classList.add('d-none');
        }
    });

    // Close on Escape
    input.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            input.value = '';
            overlay.classList.add('d-none');
        }
    });
}

function getSnippet(text, term) {
    const idx = text.indexOf(term);
    if (idx < 0) return text.slice(0, 80) + '…';
    const start = Math.max(0, idx - 30);
    const end = Math.min(text.length, idx + 70);
    let snippet = (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
    // Highlight the term
    const re = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return snippet.replace(re, '<mark>$1</mark>');
}

/* ── Language Toggle ──────────────────────────────────────── */
function initLanguageToggle() {
    const select = document.getElementById('langSelect');
    if (!select) return;

    select.addEventListener('change', () => {
        currentLang = select.value;
        localStorage.setItem('cv-lang', currentLang);
        applyLanguage(currentLang);
    });
}

function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;
}

/* ── Contact Form ─────────────────────────────────────────── */
function getWeb3FormsAccessKey() {
    const accessKeyMeta = document.querySelector('meta[name="web3forms-access-key"]');
    const value = accessKeyMeta?.content?.trim() || '';
    if (!value || value.startsWith('REPLACE_WITH_')) return '';
    return value;
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    const alert = document.getElementById('formAlert');
    const botcheck = document.getElementById('contactBotcheck');
    if (!form || !alert) return;

    const accessKey = getWeb3FormsAccessKey();
    const formOpenedAt = Date.now();
    const MIN_FILL_TIME_MS = 3000;
    const MIN_SUBMIT_INTERVAL_MS = 60000;

    form.addEventListener('submit', e => {
        e.preventDefault();

        const email = document.getElementById('contactEmail');
        const subject = document.getElementById('contactSubject');
        const message = document.getElementById('contactMessage');

        // Reset validation
        [email, subject, message].forEach(f => f.classList.remove('is-invalid'));

        let valid = true;
        if (!isValidEmail(email.value)) { email.classList.add('is-invalid'); valid = false; }
        if (!subject.value.trim()) { subject.classList.add('is-invalid'); valid = false; }
        if (!message.value.trim()) { message.classList.add('is-invalid'); valid = false; }

        if (!valid) return;

        if (!accessKey) {
            showFormAlert(alert, 'danger',
                '<i class="fas fa-exclamation-circle me-2"></i>Contact form is not configured. Please email me directly.');
            return;
        }

        if (botcheck && botcheck.value.trim()) {
            showFormAlert(alert, 'danger',
                '<i class="fas fa-shield-alt me-2"></i>Submission blocked.');
            return;
        }

        if (Date.now() - formOpenedAt < MIN_FILL_TIME_MS) {
            showFormAlert(alert, 'danger',
                '<i class="fas fa-hourglass-half me-2"></i>Please wait a few seconds before sending.');
            return;
        }

        let lastSubmitTs = 0;
        try {
            lastSubmitTs = Number(localStorage.getItem('contact-last-submit-ts') || '0');
        } catch (_) {
            lastSubmitTs = 0;
        }

        const elapsedSinceLast = Date.now() - lastSubmitTs;
        if (elapsedSinceLast < MIN_SUBMIT_INTERVAL_MS) {
            const waitSeconds = Math.ceil((MIN_SUBMIT_INTERVAL_MS - elapsedSinceLast) / 1000);
            showFormAlert(alert, 'danger',
                `<i class="fas fa-clock me-2"></i>Please wait ${waitSeconds}s before sending another message.`);
            return;
        }

        const btn = form.querySelector('button[type="submit"]');
        btn.disabled = true;

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                access_key: accessKey,
                email: email.value.trim(),
                subject: subject.value.trim(),
                message: message.value.trim(),
                botcheck: ''
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                try {
                    localStorage.setItem('contact-last-submit-ts', String(Date.now()));
                } catch (_) {
                    // Ignore localStorage errors in restrictive browsing modes.
                }
                showFormAlert(alert, 'success',
                    '<i class="fas fa-check-circle me-2"></i>Message sent! I\'ll get back to you soon.');
                form.reset();
                if (botcheck) botcheck.value = '';
            } else {
                showFormAlert(alert, 'danger',
                    '<i class="fas fa-exclamation-circle me-2"></i>Something went wrong. Please try again.');
            }
        })
        .catch(() => {
            showFormAlert(alert, 'danger',
                '<i class="fas fa-exclamation-circle me-2"></i>Something went wrong. Please try again.');
        })
        .finally(() => { btn.disabled = false; });
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormAlert(el, type, msg) {
    el.className = `mt-3 alert alert-${type}`;
    el.innerHTML = msg;
    el.classList.remove('d-none');
    setTimeout(() => { el.classList.add('d-none'); }, 6000);
}

/* ── Back to Top Button ───────────────────────────────────── */
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ── Email Assembly (anti-harvesting) ─────────────────────── */
function initEmailLink() {
    const link = document.getElementById('contactEmailLink');
    if (!link) return;
    const addr = ['maciej.poniewierski', 'outlook.com'].join('@');
    link.href = 'mailto:' + addr;
    link.textContent = addr;
}

/* ── Footer Year ──────────────────────────────────────────── */
function initFooterYear() {
    const el = document.getElementById('footerYear');
    if (el) el.textContent = new Date().getFullYear();
}

/* ── YouTube Thumbnail Fallback ──────────────────────────── */
function initYtThumbs() {
    // maxresdefault.jpg is the primary source (1280×720, true 16:9).
    // If unavailable (private/unlisted video or no HD upload), fall back to
    // hqdefault.jpg, then to the local project placeholder.
    document.querySelectorAll('.yt-thumb-link img').forEach(img => {
        img.addEventListener('error', function onErr() {
            img.removeEventListener('error', onErr);
            const src = img.src;
            if (src.includes('maxresdefault')) {
                img.src = src.replace('maxresdefault', 'hqdefault');
            } else {
                img.src = 'assets/img/project-placeholder.svg';
            }
        });
    });
}

/* ── Certificate Viewer Modal ─────────────────────────────── */
function initCertModal() {
    const modal = document.getElementById('certViewModal');
    if (!modal) return;
    modal.addEventListener('show.bs.modal', function (e) {
        const trigger = e.relatedTarget;
        if (!trigger) return;
        const src   = trigger.getAttribute('data-cert-src')   || '';
        const title = trigger.getAttribute('data-cert-title') || 'Certificate';
        document.getElementById('certViewModalLabel').textContent = title;
        const frame = document.getElementById('certViewFrame');
        if (window.matchMedia('(max-width: 767.98px)').matches) {
            const base = 'https://xmpon.github.io/maciej-portfolio/';
            frame.src = 'https://docs.google.com/viewer?url=' + encodeURIComponent(base + src) + '&embedded=true';
        } else {
            frame.src = src + '#toolbar=0&navpanes=0&scrollbar=0&view=FitH';
        }
    });
    modal.addEventListener('hide.bs.modal', function () {
        document.getElementById('certViewFrame').src = '';
    });
}
