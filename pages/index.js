import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-screen h-screen bg-gray-300 justify-center items-center p-5">
        <Layout />
      </div>
    </div>
  );
}
