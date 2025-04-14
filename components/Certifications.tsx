export default function Certifications() {
    return (
      <section id="certifications">
        <h2>Certifications & Courses</h2>
        <div className="certificate-row">
          <img src="/images/certificate-gfg.png" alt="GFG Certificate" className="certificate-img" />
          <p>Data Structures and Algorithms (Self Paced) - GFG</p>
        </div>
        <div className="certificate-row">
          <img src="/images/certificate-cpp.png" alt="C++ Certificate" className="certificate-img" />
          <p>Programming in C++ - Codio</p>
        </div>
        <div className="certificate-row">
          <img src="/images/certificate-testing.png" alt="Testing Certificate" className="certificate-img" />
          <p>Web and Mobile Testing using Selenium - University Of Minnesota</p>
        </div>
      </section>
    );
  }