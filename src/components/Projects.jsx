import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div style = {{backgroundColor: "#E65E34"}}>
    <h1 className="overview-title" style={{marginLeft:"75px"}}>Projects.</h1>
    <div className="projects-container">
      <ProjectCard
        title="GxCapture - Tech Refresh Program"
        description="GxCapture-TechRefresh creates standardized processes and a platform that can be used to execute current and future lifecycle management program for any technologies."
        skills={["Java", "Spring Boot", "JavaScript", "React", "MS-SQL", "Nginx"]}
      />
      <ProjectCard
        title="GxCapture"
        description="GxCapture is an intent management tool that captures data and runs it through automated workflows for financial processing or summarized outcomes."
        skills={["Java", "Spring Boot", "JavaScript", "React", "MS-SQL", "Nginx"]}
      />
    </div>
      <div className="projects-container">
        <ProjectCard
        title="GxWorkflow"
        description="GxWorkflow is a workflow automation tool inspired by BPMN, enabling custom workflows using SendTask, UserTask, ScriptTask, and ServiceTask to streamline process execution and integrate system and user actions."
        skills={["Java", "Spring Boot", "JavaScript", "React", "MS-SQL", "PostgresSQL", "Git"]}
      />
      <ProjectCard
        title="GxClaims"
        description="GxClaims is a validation tool that performs automated claim-to-claim comparison between legacy and modernized systems, ensuring business rules and financial outcomes match during migration."
        skills={["Java", "Spring Boot", "JavaScript", "React", "MS-SQL", "PostgresSQL"]}
      />
    </div>
    <div className="projects-container"></div>
    </div>
  );
}

export default Projects;
