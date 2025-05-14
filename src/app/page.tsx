import { Heading } from "@/components/heading"
import { Text } from "@/components/text"
import Link from "next/link"
import { Motion } from "@/components/motion"
import { LinkedInCard } from "@/components/cards/linkedin"
import { GmailCard } from "@/components/cards/gmail"
import Image from "next/image"
import avatar from "@/lib/memoji.png"
import { GitHubCard } from "@/components/cards/github"
import { LocationCard } from "@/components/cards/location"
import { TimeCard } from "@/components/cards/time"
import { ChaseCard } from "@/components/cards/chase"
import { ShcoCard } from "@/components/cards/shco"
import { OuternCard } from "@/components/cards/outern"

export default function Home() {
   return (
      <section>
         <Heading className="flex items-center justify-center gap-4">
            <span>Hello world, I&apos;m Tyler</span>  
            <Image
               src={avatar}
               alt="Gmail logo"
               className="h-20 w-16 mix-blend-screen"
            />
         </Heading>
         <Motion
            asChild
            animate="visible"
            variants={{
            visible: {
                  transition: { delayChildren: 0.25, staggerChildren: 0.1 },
            },
            }}
         >
            <section className="mt-8 grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-1">
               <LinkedInCard />
               <GitHubCard />
               <GmailCard />
            </section>
         </Motion>
         <section className="prose mt-8 max-w-full prose-invert">
            <Text>
               I&apos;m a front end developer with a passion for building
               web applications using cutting edge web development frameworks
               and technologies. I currently work
               as a Software Engineer at{" "}
               <a href="https://www.linkedin.com/company/jpmorganchase" className="text-[#f6ac00] underline">JPMorgan Chase</a> on the main account dashboard page,
               helping scale React based solutions for millions of users.
            </Text>
         </section>
         <Motion
            asChild
            animate="visible"
            variants={{
            visible: {
                  transition: { delayChildren: 0.25, staggerChildren: 0.1 },
            },
            }}
         >
            <section className="mt-8 grid grid-cols-8 grid-rows-4 gap-4 md:grid-cols-7 md:grid-rows-6">
               <LocationCard />
               <TimeCard />
               <ChaseCard />
               <ShcoCard />
               <OuternCard />
               {/* <ImagesCard /> */}
            </section>
         </Motion>
      </section>
   )
}

export const revalidate = 3600