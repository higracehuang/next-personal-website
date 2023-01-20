export async function getStaticProps() {
  return {
    props: {
      pageId: "essays"
    }
  }
} 

export default function Essays() {
  return <div>Essays</div>
}