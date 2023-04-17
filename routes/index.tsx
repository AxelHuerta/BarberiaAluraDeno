import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";
import { Banner } from "../components/Banner.tsx";
import { About } from "../components/About.tsx";
import { Location } from "../components/Location.tsx";
import { Diferenciales } from "../components/Diferenciales.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <>
      <Header />
      <Banner />
      <About />
      <Location />
      <Diferenciales />
      </> 
    </>
  );
}
