export type Skill = {
    name: string;
    proficiency: 'Proficient' | 'Knowledgeable' | 'Familiar';
};

export type SkillsData = {
    language: Skill[];
    frontend: Skill[];
    backend: Skill[];
    data_analysis: Skill[];
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
        { name: 'Phoenix LiveView', proficiency: 'Familiar' },
    ],
    backend: [
        { name: 'PostgreSQL', proficiency: "Proficient" },
        { name: 'REST APIs', proficiency: "Proficient" },
        { name: 'GraphQL APIs', proficiency: "Familiar"},
        { name: 'Spring Framework', proficiency: 'Knowledgeable' },
        { name: 'SQLite', proficiency: "Knowledgeable" },
    ],
    data_analysis: [
        { name: 'NumPy', proficiency: "Proficient" },
        { name: 'Pandas', proficiency: "Proficient" },
        { name: 'Polars', proficiency: "Knowledgeable" },
        { name: 'Matplotlib', proficiency: "Knowledgeable" },
        { name: 'Seaborn', proficiency: "Knowledgeable" },
        { name: 'SciPy', proficiency: "Knowledgeable" },
        { name: 'Scikit-learn', proficiency: "Knowledgeable" },
    ],
    tools: [
        { name: 'Git & GitHub', proficiency: "Knowledgeable"},
        { name: 'Docker', proficiency: "Knowledgeable"},
        { name: 'Figma', proficiency: "Knowledgeable" },
        { name: 'Vercel', proficiency: "Familiar"},
        { name: 'Ansible', proficiency: "Knowledgeable" },
        { name: 'Markdown', proficiency: "Proficient" },
        { name: 'Typst', proficiency: "Proficient" },
        { name: 'Latex', proficiency: "Knowledgeable" },
        { name: 'UML', proficiency: "Proficient" },
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