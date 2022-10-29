import Card from "./Card";
import projects from "../utils/Projects";

const CardList = () => {
  return (
    <section className="w-full h-auto px-2 py-4">
      <h1 className="font-bold text-center text-gray-800 text-xl">PROJECTS</h1>
      <div className="bg-rickMorty"></div>
      <div className="w-auto flex flex-col items-center my-3">
        {projects.map((project, i) => (
          <Card
            title={project.title}
            description={project.description}
            URL={project.URL}
            image={project.image}
            github={project.github}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default CardList;
