import "./App.css";

import diggingArt from "./assets/Heaney.jpg";

const tracks = [
  { title: "Digging", artist: "Ciarán Byrne", href: "https://soundcloud.com/ciaranburn/digging", art:diggingArt },
  { title: "Track Title Two", artist: "Artist Name", role: "Mix", href: "#"},
  { title: "Track Title Three", artist: "Artist Name", role: "Master", href: "#"},
  { title: "Track Title Four", artist: "Artist Name", role: "Mix & Master", href: "#"},
  { title: "Track Title Five", artist: "Artist Name", role: "Mix", href: "#"},
];

const rates = [
  { label: "Mix, per track", price: "$150" },
  { label: "Mix, EP/album (5+ tracks)", price: "$120 / track" },
  { label: "Mastering, per track", price: "$80" },
];

function App() {
  return (
    <div className="page">
      <header className="nav">
        <span className="nav-name">Ciaran Byrne</span>
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
            I mix and master records for artists and producers who want their song to
            translate everywhere — car stereo, club system, cheap earbuds. Every project
            gets a mix built around what the song needs, not a preset chain.
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
            <li><a href="#">https://www.instagram.com/ciaran_byrne_music/</a></li>
            <li><a href="#">https://soundcloud.com/ciaranburn</a></li>
            <li><a href="#">https://www.youtube.com/@ciaran_byrne_music</a></li>
          </ul>
        </section>
      </main>

      <footer>
        <span>Ciaran Byrne — Mixing &amp; Mastering</span>
      </footer>
    </div>
  );
}

export default App;
