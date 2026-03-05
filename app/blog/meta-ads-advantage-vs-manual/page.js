"use client"
import dynamic from "next/dynamic"

const PxlGrowSite = dynamic(() => import("../../PxlGrowSite"), { ssr: false })

export default function Page() {
  return <PxlGrowSite initialPage="blog-post" initialBlogPost={2} />
}
