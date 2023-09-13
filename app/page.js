import ArticleCard from './components/ArticleCard'

import Daniel from './images/image-daniel.jpg'
import Jonathan from './images/image-jonathan.jpg'
import Jeanette from './images/image-jeanette.jpg'
import Patrick from './images/image-patrick.jpg'
import Kira from './images/image-kira.jpg'

export default function Home() {
  return (
    <main className="flex h-min flex-col items-center gap-8 px-5 py-14 duration-300 sm:px-32 xl:grid xl:grid-flow-row xl:grid-cols-4 xl:grid-rows-2 xl:p-36">
      <ArticleCard
        breakpoints="xl:col-span-2"
        icon
        border
        cardColor="bg-violet"
        photo={Daniel}
        name="Daniel Clifford"
        title="I received a job offer mid-course, and the subjects I learned were
        current, if not more so, in the company I joined. I honestly feel I
        got every penny’s worth."
        textColor="text-light-grayish"
        paragraph="I was an EMT for many years before I joined the bootcamp. I’ve been
        looking to make a transition and have heard some people who had an
        amazing experience here. I signed up for the free intro course and
        found it incredibly fun! I enrolled shortly thereafter. The next 12
        weeks was the best - and most grueling - time of my life. Since
        completing the course, I’ve successfully switched careers, working as
        a Software Engineer at a VR startup."
      />
      <ArticleCard
        breakpoints="xl:col-span-1"
        cardColor="bg-gray"
        photo={Jonathan}
        name="Jonathan Walters"
        title="The team was very supportive and kept me motivated"
        textColor="text-light-grayish"
        paragraph="I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
        for a big company. This was one of the best investments I’ve made in myself."
      />
      <ArticleCard
        breakpoints="xl:col-span-1"
        cardColor="bg-white"
        photo={Jeanette}
        name="Jeanette Harmon"
        title="An overall wonderful and rewarding experience"
        textColor="text-gray"
        paragraph="Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."
      />
      <ArticleCard
        breakpoints="xl:col-span-2"
        border
        cardColor="bg-dark-gray"
        photo={Patrick}
        name="Patrick Abrams"
        title="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
        textColor="text-light-grayish"
        paragraph="The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."
      />
      <ArticleCard
        breakpoints="xl:col-end-5 xl:row-span-full xl:h-full"
        cardColor="bg-white"
        photo={Kira}
        name="Kira Whittle"
        title="Such a life-changing experience. Highly recommended!"
        textColor="text-gray"
        paragraph="Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
        professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
        student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"
      />
    </main>
  )
}
