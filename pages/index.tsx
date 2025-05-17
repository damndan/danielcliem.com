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

          {/* thanks for checking out my code! i know it's embarassingly suboptimal (a static page hosted on github is like forcing a square peg in a round hole..),
          but my intent was to learn Next and how github actions can build deploy. prob should've used Vercel. like i said, I helplessly build things as a hobby */}

          hey, world. i&apos;m <u><a href="https://www.linkedin.com/in/dcliem/" target="_blank">Daniel</a></u>. i&apos;m <u><a href="https://twitter.com/damndanielliem/status/1536403331714756609" target="_blank">happily married</a></u>, 
          a tech/AI maximalist, proactive investor, <u><a href="https://strava.com/athletes/damndan" target="_blank">growing athlete</a></u> &&nbsp;
          <u><a href="https://twitter.com/damndanielliem/status/1624888220180951043?s=46&t=tI02mzs0UEAg-jdhLJ5cEA" target="_blank">dog enthusiast</a></u>.
          i helplessly <u><a href="https://tankbattle.vercel.app/" target="_blank">build</a></u> on wkends to combat boredom.
        </div>
        <br />
        <ul className={styles.ul}>
          <li>
            co-founder @ <u><a href="https://gentrace.ai/" target="_blank">Gentrace</a></u> – AI evals,
            with <u><a href="https://www.linkedin.com/in/dsafreno/" target="_blank">Doug</a></u> & <u><a href="https://www.linkedin.com/in/vnair611/" target="_blank">Vivek</a></u>; 
            customers include Walmart, <u><a href="https://gentrace.ai/customers/quizlet" target="_blank">Quizlet</a></u>, Asana +more.

            <br /><br />

            <u><a href="https://www.fastcompany.com/91243257/gentrace-makes-it-easier-for-businesses-to-test-ai-powered-software" target="_blank">raised $14M</a></u> (A led by Matrix) + 
            founders x leaders at Figma, Webflow, Linear, Asana, Faire, Ironclad, Handshake, Instawork, Carta, Sentry, Chronosphere, Big Eye, Gem, Lightstep, Motive, OpenTelemetry, etc.
          </li>
          <br />
          <li>
            startup investing both personally x scout @ a16z (ex-<u><a href="https://www.craftventures.com/" target="_blank">craft</a></u> - Sack&apos;s fund; $3B+ AUM):
          </li>
          <br />

          • <u><a href="https://www.linear.app" target="_blank">linear</a></u> – pre-seed (personal)
          <br />
          • <u><a href="https://n8n.io/" target="_blank">n8n</a></u> – pre-seed (personal)
          <br />
          • <u><a href="https://gitar.co/" target="_blank">gitar</a></u> – seed (personal)
          <br />
          • <u><a href="https://livekindred.com/" target="_blank">kindred</a></u> – series a (personal)
          <br />
          • <u><a href="https://www.raincards.xyz/" target="_blank">rain</a></u> – seed (personal)
          <br />
          • <u><a href="https://www.playbook.com/" target="_blank">playbook</a></u> – series a (personal)
          <br />
          • <u><a href="https://ac1.ai/" target="_blank">adaptive</a></u> – seed (personal)
          <br />
          • <u><a href="https://codegen.com/" target="_blank">codegen</a></u> – series a (craft)
          <br />
          • <u><a href="https://sironamedical.com/" target="_blank">sirona</a></u> – pre-seed (personal)
          <br />
          • <u><a href="https://launchnotes.com/" target="_blank">launchnotes</a></u> – series a (craft)
          <br />
          • <u><a href="https://nango.dev/" target="_blank">nango</a></u> – seed (craft)
          <br />
          • <u><a href="https://dromo.io/" target="_blank">dromo</a></u> – seed (personal)
          <br />
          • <u><a href="https://headsup.ai/" target="_blank">headsup</a></u> (acq <u><a href="https://hightouch.io/" target="_blank">hightouch</a></u>) – seed (personal)
          <br />
          • <u><a href="https://sonoma.dev/" target="_blank">sonoma</a></u> – pre-seed (craft)
          <br />
          • <u><a href="https://highlight.run/" target="_blank">highlight</a></u> (acq <u><a href="https://launchdarkly.com/" target="_blank">launchdarkly</a></u>) – seed (personal)
          <br />
          • <u><a href="https://www.jerichosecurity.com/" target="_blank">jericho</a></u> – seed (craft)
          <br />
          • <u><a href="http://theresidesk.com/" target="_blank">residesk</a></u> – seed (personal)
          <br />
          • <u><a href="https://www.melioratherapeutics.com/" target="_blank">meliora</a></u> – seed (personal)
          <br />
          • <u><a href="https://www.nitra.com/" target="_blank">nitra</a></u> – seed (craft)
          <br />

          <br />
          <li>
            prev did my tour in SV:
            investor @ obvious (Ev William&apos;s fund; $1B+ AUM), PM @ Uber (platform), Dropbox (mobile platform) & FiscalNote – all three of which have since gone public;
            scaled Uber x Dropbox&apos;s test, release and CI/CD infrastructures
          </li>
          <br />
          <li>
            graduated CS (HCI) @ Stanford; dropped out of BMI masters
          </li>
          <br />
          <li>
            own a home in Sunset, SF for 7+ yrs, Bay Area 14+; Arcadia, LA native (went to AHS) w one slightly smarter brother. Thought I was going to be a doctor
          </li>
          <br />
          <li>
            addicted to cycling;
            own an Ultra Stealth <u><a href="https://www.canyon.com/en-us/road-bikes/aero-bikes/aeroad/cfr/aeroad-cfr-etap/3950.html?dwvar_3950_pv_rahmenfarbe=R065_P12" target="_blank">Canyon Aeroad CFR disc Di2</a></u>
          </li>
          <br />
          <li>
            have 9yr 90lb lab named <u><a href="https://twitter.com/damndanielliem/status/1624888220180951043?s=46&t=tI02mzs0UEAg-jdhLJ5cEA" target="_blank">Max</a></u>
          </li>
          <br />
          <li>
          currently playing IRL Catan
          </li>
          <br />
          <li>
            occassionally on <u><a href="https://twitter.com/damndanielliem" target="_blank">X</a></u>, even though it&apos;s largely a distraction..
          </li>
          <br />
          <li>
            made in 🇺🇸; proud 2nd gen Chinese-Indonesian 🇮🇩
          </li>
        </ul>

        <br />
        hi at danielcliem.com

      </div>
    </main>
  </>
  )
}
