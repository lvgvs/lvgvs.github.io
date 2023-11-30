import Clients from "@/layouts/ClientsLayout";
import Hero from "@/layouts/HeroLayout";
import Team from "@/layouts/TeamLayout";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return <>
    <Head><title>Portfólio - Lucas Camargo</title></Head>
    <main>
      <Hero />
      <Clients />
      <Team />
    </main>
    </>
};

export default Home;