export async function getStaticProps() {
  return {
    props: {
      pageId: "about_me"
    }
  }
}

export default function Home() {
  return <div className="mt-16 px-8">
     <header>
      <h1 className="font-bold text-4xl text-zinc-800">I&apos;m Grace</h1>
      <p className="text-base mt-6 text-zinc-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis nibh, laoreet tempus sapien. Fusce facilisis nisi felis, id posuere sem mattis quis. Etiam dignissim, felis posuere sodales bibendum, ligula lorem tincidunt eros, vitae luctus lectus augue varius lectus. Ut quis purus felis. Quisque quis dolor sed dui sodales dapibus. Fusce sagittis dui elementum, cursus magna quis, malesuada ligula. Maecenas et semper est. Praesent elementum mi a velit facilisis, a porta arcu imperdiet. Integer auctor libero a pretium ultricies. Ut ex est, molestie in ipsum id, congue commodo purus. Morbi viverra gravida lectus, vel faucibus felis.</p>
    </header>
    <div className="pl-20">hello</div>
    <div className="pl-20">image</div>
  </div>
}
