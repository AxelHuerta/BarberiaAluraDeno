import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";
import { Banner } from "../components/Banner.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <>
      <Header />
      <Banner />
      </> 
    </>
  );
}
