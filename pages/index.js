import Link from "next/link";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Portfolio Luciano Fazio, proyectos y demas"}
      >
        <h1>HOLA</h1>

        <Link href="/studies">Estudios</Link>
      </Layout>
    </>
  );
}
