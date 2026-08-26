import "./App.css";

import RidgeArt from "./assets/Ridge.jpeg";
import SpeakUpArt from "./assets/DJ Speak Up.png"; 
import Murphy from "./assets/Murphy.png"; 


const tracks = [
  
  
  { title: "Murphy", artist: "Ciarán Byrne", href: "https://www.youtube.com/watch?v=XbuJ4aNAdj4", art: Murphy },
  { title: "Speak Up", artist: "Dylon Jack", href: "https://open.spotify.com/track/2DeF78oQSfMJe9emhrsEtl?si=b59b3f61b11842a9", art: SpeakUpArt },
  { title: "Flow", artist: "KAZMS", href: "https://open.spotify.com/album/4wxzY9dnYvxXJLgUFusiIn?si=M3mD28FSRUqk-LIplwVCEg", art: RidgeArt },

];

const rates = [

  { label: "Mix: Per track", price: "€150" },
  { label: "Mix: EP/album (5+ tracks)", price: "€120 / track" },
  
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
          <h1>Mixing &amp; mastering for independent artists.</h1>
          <p>
            Slower Sounds in an online based mixing service for artists.
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
            Starting points — every project is quoted after hearing the material.
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
