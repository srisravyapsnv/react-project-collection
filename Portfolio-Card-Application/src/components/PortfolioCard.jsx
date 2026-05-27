import { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import SkillsList from "./SkillsList";
import Controls from "./Controls";
import LikeSection from "./LikeSection";

const allProfiles = [
  {
    image: "https://i.pravatar.cc/150?img=12",
    name: "Alex Johnson",
    role: "Full Stack Developer",
    bio: "Passionate full-stack developer focused on building scalable and user-friendly web applications.",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    likes: 0
  },

  {
    image: "https://i.pravatar.cc/150?img=32",
    name: "Sophia Miller",
    role: "Frontend Developer",
    bio: "Creative frontend developer who loves crafting modern and responsive user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    likes: 0
  },

  {
    image: "https://i.pravatar.cc/150?img=45",
    name: "Daniel Lee",
    role: "Backend Developer",
    bio: "Backend engineer experienced in designing APIs and optimizing server-side performance.",
    skills: ["Node.js", "PostgreSQL", "Docker", "REST API"],
    likes: 0
  },

  {
    image: "https://i.pravatar.cc/150?img=56",
    name: "Emma Wilson",
    role: "UI/UX Designer",
    bio: "UI/UX designer passionate about creating intuitive and visually engaging digital experiences.",
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
    likes: 0
  },

  {
    image: "https://i.pravatar.cc/150?img=68",
    name: "Michael Brown",
    role: "Software Engineer",
    bio: "Software engineer focused on clean architecture, problem solving, and scalable applications.",
    skills: ["Java", "Spring Boot", "React", "MySQL"],
    likes: 0
  }
];

function PortfolioCard() {
  const [darkMode, setDarkMode] = useState(false);
  const [profiles, setProfiles] = useState(allProfiles);
  const [currentProfile, setCurrentProfile] = useState(0);

  const profile = allProfiles[currentProfile];

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const nextProfile = () => {
    setCurrentProfile((prev) => (prev + 1) % allProfiles.length);
  };

  const previousProfile = () => {
    setCurrentProfile((prev) =>
      prev === 0 ? allProfiles.length - 1 : prev - 1
    );
  };

  const showAlert = () => {
    alert(`Contacting ${allProfiles.name}`);
  };

  const handleLike = () => {

    const updatedProfiles = [...profiles];

    updatedProfiles[currentProfile].likes += 1;

    setProfiles(updatedProfiles);
    };

  return (
    <div className={darkMode ? "card dark" : "card"}>
      <button className="theme-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>

      <ProfileInfo
        image={profile.image}
        name={profile.name}
        role={profile.role}
        bio={profile.bio}
      />

      <SkillsList skills={profile.skills} />

      <Controls
        nextProfile={nextProfile}
        previousProfile={previousProfile}
        showAlert={showAlert}
      />

      <LikeSection likes={profiles[currentProfile].likes} handleLike={handleLike} profileLikes = {profile.likes}/>
    </div>
  );
}

export default PortfolioCard;