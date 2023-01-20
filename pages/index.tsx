export async function getStaticProps() {
  return {
    props: {
      pageId: "about_me"
    }
  }
}

export default function Home() {
  return <div>About Me</div>
}
