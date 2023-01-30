import Head from "next/head"

export async function getStaticProps() {
  return {
    props: {
      pageId: "about_me"
    }
  }
}

export default function Home() {
  return <div className="mt-16 px-8">
    <Head>
      <title>Grace Huang</title>
      <meta name="description" content="Discover the work of Grace Huang on her personal website. Here you will find a curated collection of her essays and projects, including her thoughts on various topics and the details of her completed and ongoing projects." />
    </Head>
    <header>
      <h1 className="font-bold text-4xl text-zinc-800">I&apos;m Grace</h1>
    </header>
  </div>
}
