import SkillBadge from "./SkillBadge";

function SkillsList({ skills }) {
  return (
    <div>
      <h3>Skills</h3>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsList;