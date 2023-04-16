import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <>
      <Header />
      </> 
    </>
  );
}
