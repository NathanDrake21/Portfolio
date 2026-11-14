import { mockups } from "@/components/Mockups";
import TypeLine from "@/components/TypeLine";
import { Fragment } from "react";
import {
  profile,
  about,
  experience,
  projects,
  alsoWorkedOn,
  skills,
  education,
  highlights,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <div className="loader" aria-hidden="true">
        <span className="loader-mark">FS</span>
        <span className="loader-bar" />
      </div>
      <a href="#main" className="skip">Skip to content</a>

      <header className="top">
        <a href="#" className="mark" aria-label="Back to top">FS</a>
        <nav aria-label="Sections">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero">
          <p className="status"><TypeLine text={profile.role} /></p>
          <h1 aria-label={profile.name}>
            {profile.name.split(" ").map((word, w, words) => {
              const before = words.slice(0, w).join("").length;
              return (
                <Fragment key={word}>
                  <span className="word" aria-hidden="true">
                    {word.split("").map((ch, c) => (
                      <span key={c} className="char" style={{ ["--i" as string]: before + c }}>
                        {ch}
                      </span>
                    ))}
                  </span>
                  {w < words.length - 1 ? " " : null}
                </Fragment>
              );
            })}
          </h1>
          <div className="hero-row">
            <p className="intro">{profile.intro}</p>
            <div className="actions">
              <a className="btn btn-solid" href="#projects">See my work</a>
              <a className="btn" href={profile.resume} download>Download résumé</a>
            </div>
          </div>
          <ul className="facts">
            {highlights.map((h) => (
              <li key={h.label}>
                <span className="fact-value">{h.value}</span>
                <span className="fact-label">{h.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="work" id="projects" aria-labelledby="projects-h">
          <div className="work-head">
            <h2 id="projects-h">Selected projects</h2>
            <p className="muted">
              Production apps built for clients in the UAE. Illustrations show the kind of screens I built, with sample data.
            </p>
          </div>

          {projects.map((p, i) => {
            const Mock = p.mockup ? mockups[p.mockup] : null;
            const cls = !Mock ? "case case-plain" : i % 2 ? "case case-flip" : "case";
            return (
              <article key={p.name} className={cls}>
                {Mock ? (
                  <div className="case-visual">
                    <Mock />
                  </div>
                ) : null}
                <div className="case-text">
                  <p className="case-kind">{p.kind}</p>
                  <h3>{p.name}</h3>
                  <p className="case-client">{p.client}</p>
                  <p className="case-summary">{p.summary}</p>
                </div>
                <div className="case-more">
                  <ul className="points">
                    {p.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <ul className="tags" aria-label="Built with">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}

          <p className="also">
            Also worked on {alsoWorkedOn.slice(0, -1).join(", ")} and {alsoWorkedOn.at(-1)}.
          </p>
        </section>

        <section className="block" id="about" aria-labelledby="about-h">
          <h2 id="about-h">About</h2>
          <div className="block-body">
            <div className="prose">
              {about.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>

            <ol className="timeline" aria-label="Experience and education">
              {experience.map((job) => (
                <li key={job.company}>
                  <span className="tl-period">{job.period}</span>
                  <div>
                    <p className="tl-title">{job.title}</p>
                    <p className="muted">{job.company}</p>
                    <ul className="points">
                      {job.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
              <li>
                <span className="tl-period">{education.period}</span>
                <div>
                  <p className="tl-title">{education.degree}</p>
                  <p className="muted">{education.school}</p>
                  <p className="certs">{education.certs.join(" · ")}</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="block" id="skills" aria-labelledby="skills-h">
          <h2 id="skills-h">Skills</h2>
          <dl className="block-body skills">
            {skills.map((g) => (
              <div key={g.group} className="skill-row">
                <dt>{g.group}</dt>
                <dd>
                  <ul className="tags">
                    {g.items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-h">
          <h2 id="contact-h">Let’s talk</h2>
          <p>Reach me by email, or by phone or WhatsApp on either number.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <ul className="phones">
            {profile.phones.map((ph) => (
              <li key={ph.number}>
                <span className="phone-label">{ph.label}</span>
                <a href={`tel:+${ph.number}`}>{ph.display}</a>
                <a className="wa" href={`https://wa.me/${ph.number}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            ))}
          </ul>
          <div className="actions">
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn" href={profile.resume} download>Download résumé</a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with Next.js</span>
      </footer>
    </>
  );
}
