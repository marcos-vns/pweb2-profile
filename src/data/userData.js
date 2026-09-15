const data = {
  "id": 101,
  "profile": {
    "name": "Lucas Almeida da Silva",
    "username": "lucasalmeida",
    "avatar": "https://placehold.co/150x150/png?text=User", // https://placehold.co/150x150/png?text=User
    "bio": "Desenvolvedor Full Stack apaixonado por JavaScript, interfaces e arquitetura de software.",
    "location": {
      "city": "São Paulo",
      "state": "SP",
      "country": "Brasil"
    }
  },
  "contact": {
    "email": "lucas.almeida@example.com",
    "phone": "+55 11 99999-8888",
    "website": "https://lucasalmeida.dev",
    "social": {
      "github": "lucasalmeida",
      "linkedin": "lucas-almeida-dev",
      "twitter": "@lucasalmeida"
    }
  },
  "professional": {
    "role": "Full Stack Developer",
    "level": "Senior",
    "yearsOfExperience": 6,
    "availableForWork": true,
    "remote": true,
    "company": {
      "name": "TechNova",
      "position": "Senior Software Engineer",
      "since": "2023-04-10"
    }
  },
  "skills": {
    "languages": [
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL"
    ],
    "frontend": [
      "React",
      "Next.js",
      "Tailwind CSS"
    ],
    "backend": [
      "Node.js",
      "NestJS"
    ],
    "databases": [
      "PostgreSQL",
      "MongoDB"
    ]
  },
  "projects": [
    {
      "id": 1,
      "name": "DevBoard",
      "description": "Dashboard para gerenciamento de projetos e tarefas.",
      "status": "completed",
      "featured": true,
      "technologies": ["React", "Node.js", "PostgreSQL"],
      "repository": "https://github.com/lucasalmeida/devboard",
      "stats": {
        "stars": 342,
        "forks": 48,
        "contributors": 6
      }
    },
    {
      "id": 2,
      "name": "Finance API",
      "description": "API REST para controle financeiro pessoal.",
      "status": "in-progress",
      "featured": false,
      "technologies": ["TypeScript", "NestJS", "MongoDB"],
      "repository": "https://github.com/lucasalmeida/finance-api",
      "stats": {
        "stars": 127,
        "forks": 19,
        "contributors": 3
      }
    }
  ],
  "preferences": {
    "theme": "dark",
    "language": "pt-BR",
    "notifications": {
      "email": true,
      "push": false,
      "newsletter": true
    }
  },
  "stats": {
    "repositories": 48,
    "followers": 1250,
    "following": 184,
    "commitsThisYear": 487,
    "contributions": {
      "2024": 823,
      "2025": 1042,
      "2026": 687
    }
  },
  "status": {
    "online": true,
    "lastSeen": null,
    "currentlyWorkingOn": {
      "project": "Finance API",
      "task": "Implementando autenticação com JWT",
      "progress": 72
    }
  }
}

export default data;