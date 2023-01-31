export async function getStaticProps() {
  return {
    props: {
      pageId: "essays",
      metadata: {
        title: "Essays | Grace Huang",
        description: "Write the essays by Grace Huang",
        openGraph: {
          image: "https://example.com/image.jpg",
          url: "https://example.com"
        }
      }
    }
  }
} 

export default function Essays() {
  return <div>Essays</div>
}