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
    <div className="ring-1 ring-zinc-900/5 bg-zinc-50 px-6 py-6 rounded-xl">
      <div className="text-3xl relative z-10 flex h-12 w-12 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">{emoji}</div>
      <h3 className="mt-6 font-bold">{name}</h3>
      <p className="text-zinc-600 mt-2">{desc}</p>
      <p className="mt-6 text-zinc-400 text-sm">{urlDisplay}</p>
    </div>
  </li>
}

export default function Projects() {
  return <div className="mt-16 px-8">
    <header>
      <h1 className="font-bold text-4xl text-zinc-800">Creative Things I Do Now</h1>
      <p className="text-base mt-6 text-zinc-600">I work on a number of small projects concurrently.</p>
    </header>
    <div className="mt-16">
      <h2 className="text-2xl">Apps</h2>
      <ul className="grid grid-cols-3 gap-x-12 gap-y-16 mt-8">
        <ProjectItem name={"TallyCoin"} desc={"An app for "} emoji={"💰"} url={"/"} urlDisplay={"gum"} />
        <ProjectItem name={"RedacApp"} desc={"An app for"} emoji={"✍️"} url={"/"} urlDisplay={""} />
      </ul>
    </div>
    <div className="mt-16">
      <h2 className="text-2xl">Books</h2>
      <ul className="grid grid-cols-3 gap-x-12 gap-y-16 mt-8">
        <ProjectItem name={"Building macOS apps with SwiftUI: A Practical Learning Guide"} desc={"I took a learning by doing approach to teach people how to building and publishing macOS apps with SwiftUI."} emoji={"💰"} url={"https://www.amazon.com/gp/product/B0BP5P9H31"} urlDisplay={"amazon.com"} />
        <ProjectItem name={"Nail A Coding Interview: Six-Step Mental Framework"} desc={"A mental framework created for coding interviews, based on my hundreds of interviews at big tech and startups."} emoji={"✍️"} url={"https://gracehuang.gumroad.com/l/coding-interview"} urlDisplay={"gracehuang.gumroad.com"} />
        <ProjectItem name={"A Practical Guide to Writing a Software Technical Design Document"} desc={"This tiny book will guide you through the writing process of a Technical Design Doc. It also comes with a real-life example of a Technical Design Document."} emoji={"💰"} url={"https://gracehuang.gumroad.com/l/mqmUt"} urlDisplay={"gracehuang.gumroad.com"} />
        <ProjectItem name={"Code Reviews in Tech: The Missing Guide"} desc={"This tiny book outlines intentions and etiquettes that have been tested in my whole engineering career, along with examples. "} emoji={"✍️"} url={"https://gracehuang.gumroad.com/l/codereviews"} urlDisplay={"gracehuang.gumroad.com"} />
      </ul>
    </div>
    <div className="mt-16">
      <h2 className="text-2xl">Writing</h2>
      <ul className="grid grid-cols-3 gap-x-12 gap-y-16 mt-8">
        <ProjectItem name={"Building macOS apps with SwiftUI: A Practical Learning Guide"} desc={"A Practical Learning Guide for building macOS"} emoji={"💰"} url={"https://www.amazon.com/gp/product/B0BP5P9H31"} urlDisplay={"amazon.com"} />
        <ProjectItem name={"Nail A Coding Interview: Six-Step Mental Framework"} desc={"A mental framework created for coding interviews, based on my hundreds of interviews at big tech and startups"} emoji={"✍️"} url={"https://gracehuang.gumroad.com/l/coding-interview"} urlDisplay={"gracehuang.gumroad.com"} />
      </ul>
    </div>
  </div>
}
