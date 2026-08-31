import "./App.css";

import RidgeArt from "./assets/Ridge.avif";
import SpeakUpArt from "./assets/DJ Speak Up.avif"; 
import Murphy from "./assets/Murphy.avif"; 
import milk from "./assets/Milk.avif";
import troy from "./assets/Troy.avif";
import displaced from "./assets/Displaced.avif";


const tracks = [
  
  
  { title: "Murphy", artist: "Ciarán Byrne", href: "https://www.youtube.com/watch?v=XbuJ4aNAdj4", art: Murphy },
  { title: "Speak Up", artist: "Dylon Jack", href: "https://open.spotify.com/track/2DeF78oQSfMJe9emhrsEtl?si=b59b3f61b11842a9", art: SpeakUpArt },
  { title: "Flow", artist: "KAZMS", href: "https://open.spotify.com/album/4wxzY9dnYvxXJLgUFusiIn?si=M3mD28FSRUqk-LIplwVCEg", art: RidgeArt },
  { title: "I Hate the Way You're Looking at Me (lately)", artist: "Milk.", href: "https://open.spotify.com/track/41twsLN7mBObtriZrlNM6y?si=c1a96b48ac724096", art: milk },
  { title: "Troy", artist: "KAZMS", href: "https://open.spotify.com/track/62OSzdBHIzLhndWn3Slv5N?si=18822bd655e44914", art: troy },
  { title: "Displaced", artist: "Ignatious", href: "https://open.spotify.com/track/6hGn1NxbDvbLuBgGotnSMw?si=7229d1a32212489a", art: displaced }
];
const about = {
  title: "Who is Slower Sounds?",
  text: "Slower Sounds is operated by Ciarán Byrne. Raised in Dublin, Ireland, Ciarán has a wide variety of musical experiences spanning 15+ Years. From early days rock shows to experimental collaborations in a filled out auditorium, with productions that have featured on Spotify's Viral Hits and New Music Friday UK, Ciarán is on a quest for finding the sounds that inspire and ignite us.",
  title2: "Why Slower Sounds?",
  text2: "“My first musical memory was listening to Voodoo Child by Jimi Hendrix in the back of my dad’s car. My dad told me that Jimi Hendrix once set his guitar on fire on stage before he died. This imagery paired with the sounds of Hendrix completely blew my young mind open and stuck with me ever since. Inspired by long music filled road trips I chose the name Slower Sounds.”-Ciarán Byrne"
}




const rates = [

  { label: "Mix: Per track", price: "€150" },
  { label: "Mix: EP/album (3+ tracks)", price: "€120 / track" },
  { label: "Any other Projects", price: "please contact for a quote" }
];

function App() {
  return (
    <div className="page">
      <header className="nav">
        <span className="nav-name">Slower Sounds</span>
        <nav>
          <a href="#work">Work</a>
          <a href="#rates">Rates</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Providing artist and labels with release-ready mixes; working alongside you with a focus on high quality sonics, patience and on-schedule deliverables. </h1>
          <p>
      
          </p>
        </section>

        <section id="work">
          <h2>Selected work</h2>
          <ul className="track-list">
            {tracks.map((t) => (
              <li key={t.title}>
                <a href={t.href} target="_blank" rel="noopener noreferrer">
                {t.art ? (
                    <img src={t.art} alt={`${t.title} cover art`} className="track-art" />
                ) : (
                    <div className="track-art placeholder">{t.title.charAt(0)}</div>
                )}
                <div className="track-info">
                    <span className="track-title">{t.title}</span>
                    <span className="track-artist">{t.artist}</span>
                </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="about">
          <h2>{about.title}</h2>
          <p>{about.text}</p>
          <h3>{about.title2}</h3>
          <p>{about.text2}</p>
        </section>

        <section id="rates">
          <h2>Rates</h2>
          <ul className="rate-list">
            {rates.map((r) => (
              <li key={r.label}>
                <span>{r.label}</span>
                <span className="price">{r.price}</span>
              </li>
            ))}
          </ul>
          <p className="rates-note">
            
          </p>
        </section>

        <section id="contact">
          <h2>Get in touch</h2>
          <ul className="contact-list">
            <li><a href="mailto:hello@ciaranbyrne.example">hello@ciaranbyrne.example</a></li>
            
          </ul>
        </section>
      </main>

      <footer>
        <span>Slower Sounds - 2026</span>
      </footer>
    </div>
  );
}

export default App;
