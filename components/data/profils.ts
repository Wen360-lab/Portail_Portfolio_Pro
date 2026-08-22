export type Categorie = "Front-end" | "Back-end" | "Full-stack"

export interface Profil {
    id: number
    nom: string
    poste: string
    categorie: Categorie
    photo: string
    description: string
}
export const profils: Profil[] = [
    {
        id: 1,
        nom: "Jean-Marc Obiang",
        poste: "Développeur Front-end",
        categorie: "Front-end",
        photo: "/profil-1.jpg",
        description: "Passionné par la création d’interfaces \n web modernes et intuitives."
    },
    {
        id: 2,
        nom: "Marie Nzue",
        poste: "Développeuse Back-end",
        categorie: "Back-end",
        photo: "/profil-8.jpg",
        description: "Spécialisée dans la conception d’API et \n la gestion des bases de données."
    },
    {
        id: 3,
        nom: "Sarah Ella",
        poste: "Développeuse Full-stack",
        categorie: "Full-stack",
        photo: "/profil-10.jpg",
        description: "Aime transformer des idées en  applications \n web complètes et fonctionnelles."
    },
    {
        id: 4,
        nom: "Kevin Mba",
        poste: "Développeur Front-end",
        categorie: "Front-end",
        photo: "/profil-4.jpg",
        description: "Créatif et attentif aux détails , avec un \n intérêt particulier pour l’expérience utilisateur."
    },
    {
        id: 5,
        nom: "Grace Oyono",
        poste: "Développeuse Full-stack",
        categorie: "Full-stack",
        photo: "/profil-11.jpg",
        description: "Apprécie autant la conception d’interfaces \n que le développement de la logique métier."
    },
    {
        id: 6,
        nom: "David Essono",
        poste: "Développeur Back-end",
        categorie: "Back-end",
        photo: "/profil-5.jpg",
        description: "Passionné par les architectures serveur,\n les API et l’optimisation des performances."
    },
    {
        id: 7,
        nom: "Nadia Biyoghe",
        poste: "Développeuse Front-end",
        categorie: "Front-end",
        photo: "/u.jpg",
        description: "Passionnée par React et la création \n d’expériences web fluides et responsives."
    },
    {
        id: 8,
        nom: "Loïc Ndong",
        poste: "Développeur Full-stack",
        categorie: "Full-stack",
        photo: "/profil-3.jpg",
        description: "Curieux et polyvalent, il aime travailler \n sur toutes les étapes d’un projet web."
    },
    {
        id: 9,
        nom: "Estelle Moussavou",
        poste: "Développeuse Back-end",
        categorie: "Back-end",
        photo: "/profil-9.jpg",
        description: "S’intéresse particulièrement aux bases de \n données, aux API et à la sécurité des applications."
    },
    {
        id: 10,
        nom: "Arnaud Abessolo",
        poste: "Développeur Front-end",
        categorie: "Front-end",
        photo: "/profil-2.jpg",
        description: "Aime concevoir des interfaces modernes \n et donner vie aux maquettes avec du code."
    },
    {
        id: 11,
        nom: "Diane Ekomie",
        poste: "Développeuse Full-stack",
        categorie: "Full-stack",
        photo: "/t.jpg",
        description: "Passionnée par le développement web et la \n création de solutions utiles et accessibles."
    },
    {
        id: 12,
        nom: "Mickaël Mounguengui",
        poste: "Développeur Back-end",
        categorie: "Back-end",
        photo: "/profil-12.jpg",
        description: "Aime concevoir des systèmes fiables, \n performants et faciles à maintenir."
    },
];