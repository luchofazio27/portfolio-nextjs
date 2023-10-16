import Layout from "@/components/layout"
import Project from "@/components/project";

export default function Projects({projects}) {
    console.log(projects)
  return (
    <Layout title={'Mis Proyectos'} description="Proyectos trabajados">
      {projects.map(project => (
        <Project key={project.id} project={project.attributes}/>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
    const answer = await fetch(`${process.env.API_URL}/projects?populate=*`);
    const { data: projects } = await answer.json();
    
    return {
      props: {
        projects
      },
    };
  }
