import { BlogPosts } from 'app/components/posts'
import MainHeading from "./components/main-heading";

export default function Page() {
  return (
    <section>
        <MainHeading title={'My Portfolio'}/>
      <p className="mb-4">
        {`I am Juan Miguel Recondo, a 3rd-year BSIT student at the University of the Cordilleras.
        My work focuses on software development, primarily with Spring, Next.js, and Jetpack Compose.
        I also do a bit of data analysis and system administration with Python, Bash, and R.`}

        {/*  {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in*/}
        {/*Vim's keystroke commands and tabs' flexibility for personal viewing*/}
        {/*preferences. This extends to my support for static typing, where its*/}
        {/*early error detection ensures cleaner code, and my preference for dark*/}
        {/*mode, which eases long coding sessions by reducing eye strain.`}*/}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
