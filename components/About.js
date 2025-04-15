export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Hi, I'm Amritesh Singh, a B.Tech Computer Science student at Lovely
        Professional University, specializing in Full-Stack Development,
        Software Testing, and Cloud Computing.
      </p>
      <p>📞 +91 63914 68628 | 📧 amritesh6767@gmail.com</p>
      <div className="social-links">
        <a
          href="https://linkedin.com/in/ammriteshh"
          target="_blank"
          className="social-icon"
          rel="noopener noreferrer" // Added rel for security
        >
          <i className="devicon-linkedin-plain colored"></i>
        </a>
        <a
          href="https://github.com/ammriteshh"
          target="_blank"
          className="social-icon"
          rel="noopener noreferrer" // Added rel for security
        >
          <i className="devicon-github-original"></i>
        </a>
      </div>
      <a className="btn" href="/resume.pdf" download>
        📥 Download Resume
      </a>
    </section>
  );
}
