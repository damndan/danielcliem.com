import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <head>
        <title>danielcliem.com</title>
      </head>

      <div className={styles.description}> 
        <div>
        hey, world. i&apos;m <u><a href="https://www.linkedin.com/in/dcliem/" target="_blank">Daniel</a></u>. i&apos;m happily married, a tech enthusiast, a prolific investor, an addicted athlete & a dog lover. i helplessly build things in my spare time.
        </div>
        <br/>
        <ul className={styles.ul}>
          <li>
            currently co-founding <u><a href="https://gentrace.ai/" target="_blank">Gentrace.ai</a></u> – an observability platform for LLMs / gen AI companies, 
            with <u><a href="https://www.linkedin.com/in/dsafreno/" target="_blank">Doug Safreno</a></u> & <u><a href="https://www.linkedin.com/in/vnair611/" target="_blank">Vivek Nair</a></u>. we have $3.5M seed. we believe AI is going to change the world
          </li>   
          <br/>
          <li>
            actively investing in future of work and SaaS: productivity tools, infra / devOps, AI, remote work, vertical SaaS, mobile. 
            both personally and as a scout @ <u><a href="https://www.craftventures.com/" target="_blank">Craft ventures</a></u> (David Sack&apos;s fund):
          </li>
          <br/>
          <a>

              • <u><a href="https://www.linear.app" target="_blank">Linear.app</a></u> – pre-seed (personal)
              <br/>
              • <u><a href="https://n8n.io/" target="_blank">n8n.io</a></u> – pre-seed (personal)
              <br/>
              • <u><a href="https://www.playbook.com/" target="_blank">Playbook.com</a></u> – series A (personal)
              <br/>
              • <u><a href="https://sironamedical.com/" target="_blank">Sirona Medical</a></u> – pre-seed (personal)
              <br/>
              • <u><a href="https://launchnotes.com/" target="_blank">Launchnotes.com</a></u> – series A (Craft)
              <br/>
              • <u><a href="https://oslash.com/" target="_blank">Oslash.com</a></u> – seed (personal)
              <br/>
              • <u><a href="https://nango.dev/" target="_blank">Nango.dev</a></u> – seed (Craft)
              <br/>
              • <u><a href="https://dromo.io/" target="_blank">Dromo.io</a></u> – seed (personal)
              <br/>
              • <u><a href="https://www.askviable.com/" target="_blank">Viable</a></u> – seed (personal)
              <br/>
              • <u><a href="https://headsup.ai/" target="_blank">Headsup.ai</a></u> – seed (personal)
              <br/>
              • <u><a href="https://cooby.co/" target="_blank">Cooby.co</a></u> – series A (Craft)
              <br/>
              • <u><a href="https://highlight.run/" target="_blank">Highlight.run</a></u> – seed (personal)
              
              <br/><br/>

              others not particularly SaaS but i personally know / believe in the founder:

              <br/><br/>

              • <u><a href="https://www.nitra.com/" target="_blank">Nitra.com</a></u> – seed (Craft)
              <br/>
              • <u><a href="https://livekindred.com/" target="_blank">Kindred Homes</a></u> – seed (personal)
              <br/>
              • <u><a href="https://www.melioratherapeutics.com/" target="_blank">Meliora Therapeutics</a></u> – seed (personal)
              <br/>
              • <u><a href="https://www.bonfire.xyz/" target="_blank">Bonfire.xyz</a></u> – seed (Craft)
              <br/>
              • <u><a href="https://www.raincards.xyz/" target="_blank">Rain.xyz</a></u> – seed (personal)
              <br/>
              
              <br/>
          </a>
          <li>
            previously did my tour around SV, including: 
            investor @ Obvious ventures (Ev William&apos;s fund), product @ Uber (platform), Dropbox & FiscalNote (all three of which have since gone public), 
            specializing in devOps, mobile & SaaS products
          </li>
          <br/>   
          <li>
            graduated Stanford in CS; dropped out of Masters in BMI
          </li>   
          <br/>   
          <li>
            passionate about <u><a href="https://strava.com/athletes/damndanielliem" target="_blank">cycling</a></u>; 
            own a stealth black <u><a href="https://www.canyon.com/en-us/road-bikes/aero-bikes/aeroad/cfr/" target="_blank">Canyon Aeroad CFR Disc Di2</a></u> (wedding gift)
          </li>   
          <br/>   
          <li>
            own a home in Sunset, SF for 5+ yrs
          </li>   
          <br/>     
          <li>
            co-own (w/ parents-in-law) a labrador retriever named Max (see my favicon)
          </li>   
          <br/>   
          <li>
            occassionally on <u><a href="https://twitter.com/dcliem" target="_blank">Twitter</a></u>, even though I think it&apos;s largely a distraction..
          </li>     
        </ul>    
        
        <br/>     
        <a href="mailto:hi@danielcliem.com">hi@danielcliem.com</a>

      </div>
    </main>
  )
}
