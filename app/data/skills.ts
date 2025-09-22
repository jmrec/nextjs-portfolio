export type Skill = {
    name: string;
    proficiency: 'Proficient' | 'Knowledgeable' | 'Familiar';
};

export type SkillsData = {
    language: Skill[];
    frontend: Skill[];
    backend: Skill[];
    tools: Skill[];
    paradigms_and_concepts: Skill[];
};

export const skillsData: SkillsData = {
    language: [
        { name: "Python", proficiency: "Proficient" },
        { name: "Java/Kotlin", proficiency: "Proficient" },
        { name: "JavaScript/TypeScript", proficiency: "Knowledgeable" },
        { name: "R", proficiency: "Knowledgeable" },
        { name: "Rust", proficiency: "Knowledgeable" },
        { name: "Go", proficiency: "Familiar" },
        { name: "Elixir", proficiency: "Familiar" },
        { name: 'C', proficiency: 'Familiar' },
        { name: 'C++', proficiency: 'Familiar' },
        { name: 'Clojure', proficiency: 'Familiar' },
        { name: 'SQL', proficiency: 'Proficient' },
        { name: 'Bash', proficiency: 'Knowledgeable'},
        { name: 'Haskell', proficiency: 'Familiar'},
        { name: 'Lua', proficiency: 'Familiar'},
        { name: 'Ocaml', proficiency: 'Familiar'},
    ],
    frontend: [
        { name: 'HTML5 & CSS', proficiency: 'Proficient' },
        { name: 'React & Next.js', proficiency: "Knowledgeable" },
        { name: 'Tailwind CSS', proficiency: "Knowledgeable" },
        { name: 'Svelte/SvelteKit', proficiency: "Familiar" },
        { name: 'Jetpack Compose', proficiency: "Knowledgeable" },
    ],
    backend: [
        { name: 'PostgreSQL', proficiency: "Proficient" },
        { name: 'REST APIs', proficiency: "Proficient" },
        { name: 'GraphQL APIs', proficiency: "Familiar"},
        { name: 'Phoenix LiveView', proficiency: 'Familiar' },
        { name: 'Spring Framework', proficiency: 'Knowledgeable' },
    ],
    tools: [
        { name: 'Git & GitHub', proficiency: "Knowledgeable"},
        { name: 'Docker', proficiency: "Knowledgeable"},
        { name: 'Figma', proficiency: "Knowledgeable" },
        { name: 'Vercel', proficiency: "Familiar"},
        { name: 'Ansible', proficiency: "Knowledgeable" },
    ],
    paradigms_and_concepts: [
        { name: 'Functional Programming', proficiency: 'Proficient' },
        { name: 'Object-Oriented Programming', proficiency: 'Proficient' },
        { name: 'Test-Driven Development', proficiency: 'Familiar' },
        { name: 'Abstract Algebra', proficiency: 'Familiar' },
        { name: 'Lambda Calculus', proficiency: 'Familiar' },
        { name: 'Property-Based Testing', proficiency: 'Knowledgeable' },
        { name: 'SOLID Principles', proficiency: 'Proficient' },
    ],
};