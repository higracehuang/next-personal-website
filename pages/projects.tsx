export async function getStaticProps() {
  return {
    props: {
      pageId: "projects"
    }
  }
}

type ProjectItemProps = {
  emoji: string
  name: string
  desc: string
  url: string
  urlDisplay: string
}


function ProjectItem(props: ProjectItemProps) {
  let {name, desc, emoji, url, urlDisplay} = props
  return <li>
    <div className="text-3xl relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">{emoji}</div>
    <h3 className="mt-6 font-bold">{name}</h3>
    <p className="text-zinc-600 mt-2">{desc}</p>
    <p className="mt-6 text-zinc-400 text-sm">{urlDisplay}</p>
  </li>
}

export default function Projects() {
  return <div className="mt-16 px-8">
    <header>
      <h1 className="font-bold text-4xl text-zinc-800">A list of creative projects</h1>
      <p className="text-base mt-6 text-zinc-600">(TODO add more description here)</p>
    </header>
    <div className="mt-16">
      <h2 className="text-2xl">Apps</h2>
      <ul className="grid grid-cols-3 gap-x-12 grap-y-16 mt-8">
        <ProjectItem name={"TallyCoin"} desc={"An app for "} emoji={"💰"} url={"/"} urlDisplay={"gum"} />
        <ProjectItem name={"RedacApp"} desc={"An app for"} emoji={"✍️"} url={"/"} urlDisplay={""} />
      </ul>
    </div>
    <div className="mt-16">
      <h2 className="text-2xl">Books</h2>
      <ul className="grid grid-cols-3 gap-x-12 grap-y-16 mt-8">
        <ProjectItem name={"TallyCoin"} desc={"An app for "} emoji={"💰"} url={"/"} urlDisplay={"amazon.com"} />
        <ProjectItem name={"RedacApp"} desc={"An app for"} emoji={"✍️"} url={"/"} urlDisplay={"gumroad.com"} />
        <ProjectItem name={"TallyCoin"} desc={"An app for "} emoji={"💰"} url={"/"} urlDisplay={"amazon.com"} />
        <ProjectItem name={"RedacApp"} desc={"An app for"} emoji={"✍️"} url={"/"} urlDisplay={"gumroad.com"} />
      </ul>
    </div>
  </div>
}
