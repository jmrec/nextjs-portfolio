import MainHeading from "../components/main-heading";
import { SkillsData, skillsData } from "../data/skills";
import { formatTitle, proficiencyColors, proficiencyOrder } from "./utils";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Skills'
}

export default function Page() {
    const categories = Object.keys(skillsData) as Array<keyof SkillsData>;

    return (
        <section>
            <MainHeading title={'My Skills'} />
            <p className="mb-8">
                My technical toolkit, sorted by proficiency (green, yellow, and orange). I'm always eager to learn and adapt to new technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {categories.map((category) => (
                    <div key={category}>
                        <h2 className="font-semibold text-xl mb-4">
                            {formatTitle(category)}
                        </h2>
                        <ul className="space-y-3">
                            {skillsData[category]
                                .slice()
                                .sort((a, b) => proficiencyOrder[b.proficiency] - proficiencyOrder[a.proficiency])
                                .map((skill) => (
                                    <li key={skill.name} className="flex items-center gap-3">
                    <span
                        className={`h-2 w-2 rounded-full ${
                            proficiencyColors[skill.proficiency]
                        }`}
                    ></span>
                                        <span>{skill.name}</span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}