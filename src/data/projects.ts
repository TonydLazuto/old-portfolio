export default [
  {
    title: "Acenstream",
    description:
      "Application de diffusion de flux de médias, vers des écrans connectés à des Raspberry.",
    imgUrl: "raspberry.webp",
    stack: [
      "React",
      "Node",
      "Electron.Js",
      "Fastify",
      "Sequelize",
      "Socket.io",
      "PostgreSQL",
    ],
    details: [
      "Il existe une médiathèque qui permet d'ajouter des images, des vidéos ou des URL. Il suffit de les ajouter à une playlist personnalisable pour les diffuser en temps réel.",
      "On peut également décider de planifier des diffusions via un calendrier où sont lister les événements de diffusion à venir.",
      "Une interface est disponible pour les admnistrateurs qui souhaiteraient inspecter l'état de chaque raspberry disponible à l'application.",
    ],
    link: "https://www.acensi.fr/",
    logoUrl: "acensi_logo.webp",
    linkName: "acensi.fr",
    bgLazy: 'bg-small-raspberry'
  },
  {
    title: "Syneryx",
    description:
      "Outil de gestion de parcs (licences, utilisateurs, appareils, boites mails, sms).",
    imgUrl: "syneryx.webp",
    stack: [
      "React",
      "Node",
      "Fastify",
      "Sequelize",
      "Socket.io",
      "PostgreSQL"
    ],
    details: [
      "Permet de visualiser l'état des différentes licences. Les fonctionnalités incluent l'allocation, la suppression et la modification des informations liées aux licences.",
      "Répertorier les utilisateurs en fonction de critères spécifiques. Ceci donne la possibilité de modifier les mots de passe, d'ajouter ou de supprimer des groupes, etc.",
      "Syneryx est une plateforme de gestion des différentes machines, serveurs internes et externes. L'objectif principal est de simplifier la gestion des actifs.",
    ],
    link: "https://www.acensi.fr/",
    logoUrl: "acensi_logo.webp",
    linkName: "acensi.fr",
    bgLazy: 'bg-small-syneryx'
  },
  {
    title: "Transcendence",
    description:
      "Jeu PONG revisité intégrant un système de MatchMaking pour défier d'autres utilisateurs et un chat en temps réel.",
    imgUrl: "Transcendence-project.webp",
    stack: [
      "React",
      "Nest",
      "Typescript",
      "Express",
      "TypeORM",
      "PostgreSQL",
      "WebSockets"
    ],
    details: [
      "Connexion par le système OAuth2 de l'Api42. Implémentation de l'authentification à deux facteurs via Google Authenticator.",
      "Un système de MatchMaking permet à l'utilisateur de rejoindre une file d'attente, jusqu'à être matché automatiquement avec un autre utilisateur.",
      "Création d'un chat avec des channels (privés/public) et des rôles pour les utilisateurs.",
    ],
    link: "https://github.com/TonydLazuto/ft_transcendence",
    logoUrl: "42_logo.webp",
    linkName: "code source",
    bgLazy: 'bg-small-Transcendence-project'
  },
  {
    title: "Inception",
    description:
      "Mise en place d'une mini-infrastructure de services orchestrés par docker-compose.",
    imgUrl: "inception.webp",
    stack: ["Docker", "Docker-compose", "Nginx", "Wordpress", "Mariadb"],
    details: [
      "Toutes les images Docker ont été build à partir de Dockerfile, sans DockerHub :",
      "Liste des Containers Docker configurés => NGINX, MariaDB et WordPress (installés et configurés).",
      "Liste des Volumes associés => Database Mariadb et fichiers du site WordPress.",
      "Un network établit la connexion entre tous ces services.",
    ],
    link: "https://github.com/TonydLazuto/inception",
    logoUrl: "42_logo.webp",
    linkName: "code source",
    bgLazy: 'bg-small-inception'
  },
  {
    title: "Irc",
    description:
      "Développement d'un serveur IRC (Internet Relay Chat) incluant la communication instantanée par des channels ou par messages privés.",
    imgUrl: "irc_irssi.webp",
    stack: ["C++"],
    details: [
      "L'objectif ici est de gérer la connexion TCP/IP entre le client et le serveur.",
      "Gestion des opérations entrées/sorties non bloquantes (utilisation de poll ou select).",
      "L'utilisation du client de référence (Irssi) pour ce serveur est similaire à l'utilisation d'un serveur IRC officiel en reprenant les principales fonctionnalités.",
    ],
    link: "https://github.com/TonydLazuto/ft_irc",
    logoUrl: "42_logo.webp",
    linkName: "code source",
    bgLazy: 'bg-small-irc_irssi'
  },
  {
    title: "Containers",
    description:
      "Implémentation de 3 bibliothèques de la STL dont un arbre binaire de recherche automatiquement équilibré.",
    imgUrl: "bst.webp",
    stack: ["C++"],
    details: [
      "Dans ce projet on a ré-implémenter les containers vector stack et map de la STL (Standard Template Library) en C++",
      "Ce projet a pour but de nous donner une approche ludique sur le système de stockage des données de la librairie STL",
      "On a surtout eu l'occasion de mettre en place un arbre binaire automatiquement équilibré",
    ],
    link: "https://github.com/TonydLazuto/ft_containers",
    logoUrl: "42_logo.webp",
    linkName: "code source",
    bgLazy: 'bg-small-bst'
  }
];