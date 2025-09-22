import {Skill} from "../data/skills";

export function formatTitle(key: string)  {
    return key
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

export const proficiencyColors: Record<string, string> = {
    Proficient: 'bg-green-500',      // green
    Knowledgeable: 'bg-yellow-400',   // yellow
    Familiar: 'bg-orange-500',    // orange
}

export const proficiencyOrder: Record<Skill['proficiency'], number> = {
    Proficient: 3,
    Knowledgeable: 2,
    Familiar: 1,
};