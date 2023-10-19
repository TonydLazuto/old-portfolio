export default [
	{
		title: "Acenstream est une application de diffusion de flux de médias vers des écrans connectés à des Raspberry destinés à l’affichage d'évènements au sein des locaux de l'entreprise.",
		imgUrl: "https://via.placeholder.com/150",
		stack: ["React", "Node", "Fastify", "Sequelize", "Socket.io", "Mui", "Electron.Js", "pgAdmin4", "PostgreSQL"],
		details: ["Il existe une médiathèque qui permet d'ajouter des images, des vidéos ou des URL. Il suffit de les ajouter à une playlist personnalisable pour les diffuser en temps réel.", "On peut également décider de planifier des diffusions via un calendrier où sont lister les événements de diffusion à venir.", "Une interface est disponible pour les admnistrateurs qui souhaiteraient inspecter l'état de chaque raspberry disponible à l'application."]
	},
	{
		title: "Syneryx est un outil de gestion de parcs (licences, utilisateurs, appareils, boites mails, sms).",
		imgUrl: "https://via.placeholder.com/150",
		stack: ["React", "Node", "Fastify", "Sequelize", "Socket.io", "Mui", "pgAdmin4", "PostgreSQL", "Redis"],
		details: ["Permet de visualiser l'état des différentes licences. Les fonctionnalités incluent l'allocation, la suppression et la modification des informations liées aux licences.", "Répertorier les utilisateurs en fonction de critères spécifiques. Ceci donne la possibilité de modifier les mots de passe, d'ajouter ou de supprimer des groupes, etc.", "Syneryx est une plateforme de gestion des différentes machines, serveurs internes et externes. L'objectif principal est de simplifier la gestion des actifs."]
	},
	{
		title: "Transcendence: Création d’un site web permettant de jouer contre d'autres utilisateurs sur le célèbre jeu PONG.",
		imgUrl: "/assets/Transcendence-project.jpeg",
		stack: ["React", "Typescript", "Nest", "Express", "PostgreSQL", "TypeORM", "Websockets", "API REST"],
		details: ["Connexion avec le système OAuth2 de l'Api42. Implémentation de l’authentification à deux facteurs avec Google Authenticator.", "Un système de MatchMaking permet à l'utilisateur de rejoindre une file d’attente, jusqu’à être matché automatiquement avec un autre utilisateur.", "Création d'un chat avec des channels (privés/public) et des rôles pour les utilisateurs."]
	},
	{
		title: "Inception: Mise en place d'une mini-infrastructure de services orchestrés par docker-compose.",
		imgUrl: "/assets/inception.png",
		stack: ["Docker", "Docker-compose", "Nginx", "Wordpress", "Mariadb"],
		details: ["Toutes les images Docker ont été build à partir de Dockerfile, sans DockerHub :", "Liste des Containers Docker configurés => NGINX, MariaDB et WordPress (installés et configurés).", "Liste des Volumes associés => Database Mariadb et fichiers du site WordPress.", "Un network établit la connexion entre tous ces services."]
	},
	{
		title: "Irc: Développement d'un serveur IRC (Internet Relay Chat) servant à la communication instantanée par des channels ou par messages directs.",
		imgUrl: "/assets/irssi.png",
		stack: ["C++"],
		details: ["L'objectif ici est de gérer la connexion TCP/IP entre le client et le serveur.", "Gestion des opérations entrées/sorties non bloquantes (utilisation de poll ou select).", "L’utilisation du client de référence (Irssi) pour ce serveur est similaire à l’utilisation d’un serveur IRC officiel en reprenant les principales fonctionnalités."]
	},
	{
		title: "Containers: Implémentation d'un arbre binaire de recherche automatiquement équilibré.",
		imgUrl: "https://via.placeholder.com/150",
		stack: ["C++"],
		details: ["Dans ce projet on a ré-implémenter les containers vector stack et map de la STL (Standard Template Library) en C++", "Ce projet a pour but de nous donner une approche ludique sur le système de stockage des données de la librairie STL", "On a surtout eu l'occasion d'implémenter un arbre binaire automatiquement équilibré"]
	},
	{
		title: "Portfolio",
		imgUrl: "https://via.placeholder.com/150",
		stack: ["React", "Typescript", "Tailwind", "Vite"],
		details: []
	}
]