import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
    <Head>
      <title>danielcliem.com</title>
    </Head>
    
    <main className={styles.main}>
      <div className={styles.description}>
    
        <div>

          {/* thx for checking out my code! i know it's embarassingly suboptimal (a static page hosted on github is like forcing a square peg in a round hole..),
          but my intent was to learn Next and how github actions can build deploy. prob should've used Vercel. like i said, I helplessly build things as a hobby */}

          hey, world. i&apos;m <u><a href="https://www.linkedin.com/in/dcliem/" target="_blank">Daniel</a></u>. i&apos;m <u><a href="https://twitter.com/damndanielliem/status/1536403331714756609" target="_blank">happily married</a></u>, 
          a tech enthusiast, an active investor, 
          an <u><a href="https://strava.com/athletes/damndan" target="_blank">addicted athlete</a></u> & 
          dog lover (<u><a href="https://www.instagram.com/damndanielliem/" target="_blank">my favicon</a></u>). i helplessly build things as a hobby.
        </div>
        <br />
        <ul className={styles.ul}>
          <li>
            co-founding <u><a href="https://gentrace.ai/" target="_blank">Gentrace.ai</a></u> – an observability / evaluation platform for LLMs,
            with <u><a href="https://www.linkedin.com/in/dsafreno/" target="_blank">Doug Safreno</a></u> & <u><a href="https://www.linkedin.com/in/vnair611/" target="_blank">Vivek Nair</a></u>. we have $3.5M seed; we believe AI is going to change everything
          </li>
          <br />
          <li>
            early stage investing in future of work and SaaS: productivity tools, infra / devOps, AI, vertical SaaS.
            both personally and as a scout @ <u><a href="https://www.craftventures.com/" target="_blank">Craft ventures</a></u> (David Sack&apos;s fund):
          </li>
          <br />

          • <u><a href="https://www.linear.app" target="_blank">Linear.app</a></u> – pre-seed (personal)
          <br />
          • <u><a href="https://n8n.io/" target="_blank">n8n.io</a></u> – pre-seed (personal)
          <br />
          • <u><a href="https://www.playbook.com/" target="_blank">Playbook.com</a></u> – series A (personal)
          <br />
          • <u><a href="https://sironamedical.com/" target="_blank">Sirona Medical</a></u> – pre-seed (personal)
          <br />
          • <u><a href="https://launchnotes.com/" target="_blank">Launchnotes.com</a></u> – series A (craft)
          <br />
          • <u><a href="https://oslash.com/" target="_blank">Oslash.com</a></u> – seed (personal)
          <br />
          • <u><a href="https://nango.dev/" target="_blank">Nango.dev</a></u> – seed (craft)
          <br />
          • <u><a href="https://dromo.io/" target="_blank">Dromo.io</a></u> – seed (personal)
          <br />
          • <u><a href="https://www.askviable.com/" target="_blank">Viable</a></u> – seed (personal)
          <br />
          • <u><a href="https://headsup.ai/" target="_blank">Headsup.ai</a></u> – seed (personal)
          <br />
          • <u><a href="https://cooby.co/" target="_blank">Cooby.co</a></u> – series A (craft)
          <br />
          • <u><a href="https://highlight.run/" target="_blank">Highlight.run</a></u> – seed (personal)

          <br /><br />

          others not particularly SaaS but i&apos;ve worked with / believe in the founder:

          <br /><br />

          • <u><a href="https://www.nitra.com/" target="_blank">Nitra.com</a></u> – seed (craft)
          <br />
          • <u><a href="https://livekindred.com/" target="_blank">Kindred</a></u> – series A (personal)
          <br />
          • <u><a href="https://www.melioratherapeutics.com/" target="_blank">Meliora Therapeutics</a></u> – seed (personal)
          <br />
          • <u><a href="https://www.bonfire.xyz/" target="_blank">Bonfire.xyz</a></u> – seed (craft)
          <br />
          • <u><a href="https://www.raincards.xyz/" target="_blank">Rain.xyz</a></u> – seed (personal)
          <br />

          <br />
          <li>
            prev did my tour around SV:
            investor @ Obvious ventures (Ev William&apos;s fund), product @ Uber, Dropbox & FiscalNote (all three of which have since gone public),
            specializing in devOps, mobile & SaaS products
          </li>
          <br />
          <li>
            graduated CS @ Stanford; dropped out of Masters in BMI
          </li>
          <br />
          <li>
            own a home in Sunset, SF for 5+ yrs, living in Bay Area 12+; Arcadia, LA native (went to AHS) w one slightly smarter brother. Thought I was going to be a doctor!
          </li>
          <br />
          <li>
            addicted to cycling;
            own an Ultra Stealth <u><a href="https://www.canyon.com/en-us/road-bikes/aero-bikes/aeroad/cfr/" target="_blank">Canyon Aeroad CFR disc Di2</a></u> (wedding gift)
          </li>
          <br />
          <li>
            co-own (w in-laws) a 7yr 90lb lab named <u><a href="https://twitter.com/damndanielliem/status/1624888220180951043?s=46&t=tI02mzs0UEAg-jdhLJ5cEA" target="_blank">Max</a></u>
          </li>
          <br />
          <li>
            occassionally on <u><a href="https://twitter.com/damndanielliem" target="_blank">Twitter</a></u>, even though it&apos;s largely a distraction..
          </li>
          <br />
          <li>
            proud 2nd gen Chinese-Indonesian 🇮🇩
          </li>
        </ul>

        <br />
        <a href="mailto:hi@danielcliem.com?Subject=cool%20site,%20I'm%20{name}%20–%20let's%20chat">hi@danielcliem.com</a>

      </div>
    </main>
  </>
  )
}
