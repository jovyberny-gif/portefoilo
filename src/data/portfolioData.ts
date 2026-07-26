export const portfolioData = {
  profile: {
    name: "Patrick Jovani KAMGAING DOMEGNE",
    title: "Développeur Full-Stack & Profil Data/IA",
    tagline: "À la recherche d'une alternance de 24 mois",
    location: "Paris, France",
    availability: "Septembre 2026",
    rhythm: "3 semaines en entreprise / 1 semaine à l'école",
    email: "jovyberny@gmail.com",
    phone: "07 51 46 25 03",
    github: "https://github.com/jovyberny-gif",
    linkedin: "https://linkedin.com/in/patrick-kamgaing", // [DONNÉE À COMPLÉTER]
    about: "Étudiant en Master à INGETIS Paris. Je suis passionné par la création d'applications utiles, l'analyse de données et l'intelligence artificielle. Fort de ma double compétence, je développe des interfaces web performantes tout en intégrant des solutions basées sur la data pour résoudre des problèmes complexes. Je recherche une alternance pour mettre mes compétences au service d'une entreprise innovante.",
    languages: [
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "Technique" },
      { name: "Italien", level: "Intermédiaire" }
    ]
  },
  skills: {
    development: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", "Express", "PHP", "Java", "C#"],
    dataAI: ["Python", "SQL", "MySQL", "PostgreSQL", "Excel", "Power BI", "pandas", "NumPy", "Snowflake"],
    devopsTools: ["Git", "GitHub", "Jest", "GitHub Actions", "CI/CD"],
    projectManagement: ["Méthodes Agile", "Scrum"]
  },
  experiences: [
    {
      id: "exp-1",
      role: "Développeur Python, Data & Web",
      company: "DataScale",
      location: "Paris, France",
      startDate: "Sep 2025",
      endDate: "Aoû 2026",
      description: "Fiabilisation des données via Python/Pandas et développement d'interfaces React pour accélérer la détection d'anomalies de production.",
      achievements: [
        "Fiabilisation des pipelines de données (Python/Pandas).",
        "Développement d'interfaces de monitoring avec React."
      ]
    },
    {
      id: "exp-2",
      role: "Assistant Data & Développeur Web",
      company: "Ogooué Tech",
      location: "Libreville, Gabon",
      startDate: "Jan 2024",
      endDate: "Déc 2024",
      description: "Automatisation de la collecte de données via API et amélioration de la qualité logicielle par refactoring.",
      achievements: [
        "Création de scripts Python pour la collecte de données via API REST.",
        "Refactoring du code legacy pour une meilleure maintenabilité."
      ]
    },
    {
      id: "exp-3",
      role: "Développeur Front-End (Freelance)",
      company: "TechSolutions",
      location: "Télétravail",
      startDate: "Fév 2023",
      endDate: "Nov 2023",
      description: "Conception et développement de sites vitrines interactifs pour des PME locales en utilisant React et Tailwind CSS.",
      achievements: [
        "Déploiement de 3 sites web responsives pour des PME.",
        "Amélioration de la visibilité numérique des clients."
      ]
    },
    {
      id: "exp-4",
      role: "Intégrateur Web & Tech Support",
      company: "GabonWeb",
      location: "Libreville, Gabon",
      startDate: "Juin 2021",
      endDate: "Aoû 2022",
      description: "Intégration de maquettes HTML/CSS, maintenance de sites WordPress et assistance technique de premier niveau.",
      achievements: [
        "Intégration pixel-perfect de maquettes web.",
        "Support technique niveau 1 pour plus de 50 clients."
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Mastère Data / AI Engineer",
      school: "INGETIS",
      location: "Paris, France",
      startDate: "Sept 2026",
      endDate: "Présent",
      description: "Spécialisation en Machine Learning, Big Data et Modélisation avancée."
    },
    {
      id: "edu-2",
      degree: "Bachelor en DEV / DATA",
      school: "INGETIS",
      location: "Paris, France",
      startDate: "2025",
      endDate: "2026",
      description: "Algorithmique, Bases de données, Dev full-stack et analyse de données."
    },
    {
      id: "edu-3",
      degree: "Classes Préparatoires MPSI / MP",
      school: "Sup'Management",
      location: "Libreville, Gabon",
      startDate: "2023",
      endDate: "2025",
      description: "Fondations mathématiques et scientifiques poussées, algorithmique fondamentale."
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Application de gestion de tâches",
      category: "Développement",
      image: "/projects/task-app.jpg", // [DONNÉE À COMPLÉTER]
      problem: "Besoin d'un outil simple et intuitif pour gérer les tâches quotidiennes.",
      role: "Développeur Front-End",
      technologies: ["React", "JavaScript", "CSS"],
      features: ["Création, modification, suppression de tâches", "Filtrage par statut"],
      challenges: "Gestion d'état complexe avec React Hooks.",
      solution: "Utilisation de l'API Context pour centraliser l'état.",
      results: "Interface fluide et réactive.",
      github: "https://github.com/jovyberny-gif/task-app", // [DONNÉE À COMPLÉTER]
      demo: ""
    },
    {
      id: "proj-2",
      title: "Page de connexion sécurisée",
      category: "Développement",
      image: "/projects/login.jpg", // [DONNÉE À COMPLÉTER]
      problem: "Création d'une interface d'authentification esthétique et accessible.",
      role: "Développeur UI",
      technologies: ["React", "Tailwind CSS"],
      features: ["Validation de formulaire", "Feedback visuel"],
      challenges: "Assurer la compatibilité avec les lecteurs d'écran.",
      solution: "Utilisation d'attributs ARIA et contrastes élevés.",
      results: "Composant réutilisable conforme WCAG.",
      github: "https://github.com/jovyberny-gif/login-page", // [DONNÉE À COMPLÉTER]
      demo: ""
    },
    {
      id: "proj-3",
      title: "Générateur de citations",
      category: "Développement",
      image: "/projects/quotes.jpg", // [DONNÉE À COMPLÉTER]
      problem: "Besoin d'une API pour fournir des citations aléatoires.",
      role: "Développeur Back-End",
      technologies: ["Node.js", "Jest", "GitHub Actions"],
      features: ["Endpoint REST", "Tests unitaires"],
      challenges: "Mise en place d'une pipeline d'intégration continue.",
      solution: "Configuration de workflows GitHub Actions pour lancer Jest à chaque push.",
      results: "Couverture de test à 95% et déploiement fiable.",
      github: "https://github.com/jovyberny-gif/quote-generator", // [DONNÉE À COMPLÉTER]
      demo: ""
    }
    // [DONNÉE À COMPLÉTER]: Ajouter les projets Data/IA (Python API, Power BI, SQL) depuis le dépôt
  ]
};
