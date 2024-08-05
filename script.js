document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            name: "To-Do List", 
            link: "./to-do-list",
            description: "Une application simple pour ajouter, supprimer et cocher des tâches.",
            verification: true
        },
        {
            name: "Calculatrice", 
            link: "./calculatrice",
            description: "Une calculatrice de base avec les quatre opérations arithmétiques.",
            verification: false
        },
        {
            name: "Horloge numérique", 
            link: "./horloge-numerique",
            description: "Une horloge en temps réel affichant l'heure actuelle.",
            verification: false
        },
        {
            name: "Jeu de devinettes", 
            link: "./jeu-de-devinettes",
            description: "Un jeu où l'utilisateur doit deviner un nombre entre 1 et 100.",
            verification: false
        },
        {
            name: "Générateur de citations aléatoires", 
            link: "./generateur-de-citations-aleatoires",
            description: "Afficher une citation aléatoire à chaque rechargement de la page.",
            verification: false
        },
        {
            name: "Galerie d'images", 
            link: "./galerie-d-images",
            description: "Un site pour afficher une galerie d'images avec possibilité de naviguer entre les images.",
            verification: false
        },
        {
            name: "Quiz interactif", 
            link: "./quiz-interactif",
            description: "Un quiz avec des questions à choix multiple et un score à la fin.",
            verification: false
        },
        {
            name: "Formulaire de contact", 
            link: "./formulaire-de-contact",
            description: "Un formulaire pour envoyer des messages, avec validation des champs.",
            verification: false
        },
        {
            name: "Jeu du pendu", 
            link: "./jeu-du-pendu",
            description: "Un jeu où l'utilisateur doit deviner un mot en choisissant des lettres.",
            verification: false
        },
        {
            name: "Minuteur", 
            link: "./minuteur",
            description: "Un compte à rebours que l'utilisateur peut configurer.",
            verification: false
        },
        {
            name: "Jeu de mémoire", 
            link: "./jeu-de-memoire",
            description: "Un jeu où l'utilisateur doit trouver des paires de cartes identiques.",
            verification: false
        },
        {
            name: "Slider/carrousel d'images", 
            link: "./slider-carrousel-d-images",
            description: "Un carrousel d'images avec des flèches pour naviguer.",
            verification: false
        },
        {
            name: "Générateur de mots de passe", 
            link: "./generateur-de-mots-de-passe",
            description: "Générer des mots de passe sécurisés.",
            verification: false
        },
        {
            name: "Convertisseur de devises", 
            link: "./convertisseur-de-devises",
            description: "Convertir des montants d'une devise à une autre.",
            verification: false
        },
        {
            name: "Tic-tac-toe", 
            link: "./tic-tac-toe",
            description: "Un jeu de morpion jouable à deux.",
            verification: false
        },
        {
            name: "Toile de dessin", 
            link: "./toile-de-dessin",
            description: "Une application pour dessiner sur une toile (canvas).",
            verification: false
        },
        {
            name: "Journal intime numérique", 
            link: "./journal-intime-numerique",
            description: "Une application pour ajouter, éditer et supprimer des entrées de journal.",
            verification: false
        },
        {
            name: "Tableau de bord météo", 
            link: "./tableau-de-bord-meteo",
            description: "Afficher la météo actuelle en fonction de la localisation de l'utilisateur.",
            verification: false
        },
        {
            name: "Jeu de la vie de Conway", 
            link: "./jeu-de-la-vie-de-conway",
            description: "Une simulation du célèbre automate cellulaire.",
            verification: false
        },
        {
            name: "Suivi des dépenses", 
            link: "./suivi-des-depenses",
            description: "Une application pour ajouter et suivre les dépenses mensuelles.",
            verification: false
        },
        {
            name: "Système de notation", 
            link: "./systeme-de-notation",
            description: "Noter et afficher des éléments avec des étoiles.",
            verification: false
        },
        {
            name: "Application de chronomètre", 
            link: "./application-de-chronometre",
            description: "Un chronomètre avec des fonctionnalités de démarrage, pause et réinitialisation.",
            verification: false
        },
        {
            name: "Moteur de recherche", 
            link: "./moteur-de-recherche",
            description: "Un champ de recherche pour filtrer et afficher des résultats à partir d'une liste donnée.",
            verification: false
        },
        {
            name: "Calculateur de BMI", 
            link: "./calculateur-de-bmi",
            description: "Calculer l'indice de masse corporelle en fonction de la taille et du poids.",
            verification: false
        },
        {
            name: "Jeu de Pierre-Papier-Ciseaux", 
            link: "./jeu-de-pierre-papier-ciseaux",
            description: "Un jeu de pierre-papier-ciseaux contre l'ordinateur.",
            verification: false
        },
        {
            name: "Lecteur audio", 
            link: "./lecteur-audio",
            description: "Un lecteur audio avec des contrôles pour jouer, mettre en pause et changer de piste.",
            verification: false
        },
        {
            name: "Générateur de formes SVG", 
            link: "./generateur-de-formes-svg",
            description: "Créer et manipuler des formes SVG avec des contrôles d'entrée.",
            verification: false
        },
        {
            name: "Application de prise de notes", 
            link: "./application-de-prise-de-notes",
            description: "Ajouter, éditer et supprimer des notes.",
            verification: false
        },
        {
            name: "Page de biographie interactive", 
            link: "./page-de-biographie-interactive",
            description: "Une page biographique avec des sections dépliables pour afficher plus de contenu.",
            verification: false
        },
        {
            name: "Simulation de tirage au sort", 
            link: "./simulation-de-tirage-au-sort",
            description: "Simuler un tirage au sort aléatoire parmi une liste de participants.",
            verification: false
        }
    ];
    
   
    const projectContainer = document.querySelector('#projects');
    projects.forEach(project => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = project.link + "/index.html";
        li.appendChild(a);
        if (project.verification) {
            li.classList.add('project-verified');
        } else {
            li.classList.add('project-unverified');
        }
        a.innerHTML = '<h2 class="project-title">' + project.name + '</h2>';
        a.innerHTML += '<p class="project-description">' + project.description + '</p>';
        projectContainer.appendChild(li);
    })
    
});