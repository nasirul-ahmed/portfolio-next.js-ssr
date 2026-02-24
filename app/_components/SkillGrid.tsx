const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
  Tools: ["Git", "Docker", "VS Code", "Figma"],
};

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Object.entries(skills).map(([category, items]) => (
        <div
          key={category}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            {category}
          </h3>
          <ul className="space-y-2">
            {items.map((skill) => (
              <li key={skill} className="text-gray-700 dark:text-gray-300">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
