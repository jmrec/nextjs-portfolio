import { BlogPosts } from 'app/components/posts'
import {Metadata} from "next";
import MainHeading from "../components/main-heading";

export const metadata: Metadata = {
  title: 'Blog'
}

export default function Page() {
  return (
    <section>
        <MainHeading title={'My Blog'}/>
        <BlogPosts />
    </section>
  )
}
