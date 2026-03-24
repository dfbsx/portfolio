import { AboutSection } from "@/components/home/sections/AboutSection";
import { AchievementsSection } from "@/components/home/sections/AchievementsSection";
import { ContactCtaSection } from "@/components/home/sections/ContactCtaSection";
import { EducationSection } from "@/components/home/sections/EducationSection";
import { ExperienceSection } from "@/components/home/sections/ExperienceSection";
import { ProjectsSection } from "@/components/home/sections/ProjectsSection";
import { SkillsSection } from "@/components/home/sections/SkillsSection";

export function HomeBelowHero() {
  return (
    <div className="relative overflow-x-hidden">
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <AchievementsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactCtaSection />
    </div>
  );
}
