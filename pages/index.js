import React from "react";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>

    <Head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Biswajit's Portfolio</title>
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
  />
  <link rel="stylesheet" href="./css/style.css" />


    </Head>

    <div className="site-main-wrapper">
  <button className="hamberger">
    <img src="./images/hamberger.svg" alt="" />
  </button>
  <div className="mobile-nav">
    <button className="times">
      <img src="./images/times.svg" alt="" />
    </button>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
  <header>
    <div className="container">
      <nav id="main-nav" className="flex items-center justify-between">
        <div className="left flex items-center">
          <div className="branding">
            <img src="./images/logo.svg" alt="" />
          </div>
          <div>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#blog">Projects</a>
          </div>
        </div>
        <div className="right">
          <a href="#contact">
            <button className="btn btn-primary">Contact</button>
          </a>
        </div>
      </nav>
      <div className="hero flex items-center justify-between">
        
        <div className="prof">
          <img src="./images/prof.png" alt="" />
        </div>
        <div className="right flex-1">
          <h6>Biswajit Mahapatra</h6>
          <h1>
            I’m an Undergraduate <span>Student</span>
          </h1>
          <p>
            A dedicated and motivated undergraduate student pursuing B-Tech in
            Computer Science &amp; Engineering with a specialization in
            Artificial Intelligence and Machine Learning. Skilled in Python
            development, FrontEnd development, and UI/UX design, with hands-on
            experience in using tools like Figma.
          </p>
          <div>
            <a href="myResume.pdf" download="">
              <button className="btn btn-secondary">DOWNLOAD CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section id="about" className="about">
    <div className="container flex items-center about-inner-wrap">
      <div className="flex-1">
        <img className="about-me-img" src="./images/myphoto2.jpg" alt="" />
      </div>
      <div className="flex-1 right">
        <h1>
          About <span>Me</span>
        </h1>
        <h3>Hello! i’m Biswajit Mahapatra.</h3>
        <p>
          I'm an enthusiastic and driven Computer Science &amp; Engineering
          student specializing in Artificial Intelligence and Machine Learning
          at GITA Autonomous College. With a strong foundation in Python
          development, Frontend development, and UI/UX design. <br /> I’m
          passionate about leveraging my technical skills to create efficient
          and user-friendly digital solutions. I'm eager to work in a dynamic
          environment that encourages growth, continuous learning, and
          innovation.
        </p>
        <div className="social">
          <a href="https://www.instagram.com/invites/contact/?igsh=1ruo66b53hel7&utm_content=7jtc431">
            <img src="./images/insta.svg" alt="" />
          </a>
          <a href="https://x.com/021Biswajit?t=cLInuwMg0VJeriH1Y0t7Lw&s=09">
            <img src="./images/twitter.svg" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/biswajit-mahapatra-6231a8293">
            {" "}
            <img src="./images/linkedin.svg" alt="" />
          </a>
          <a href="https://github.com/itz-biswajit021">
            {" "}
            <img src="./images/git.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>
  <section id="blog" className="blog">
    <div className="container">
      <h1 className="section-heading">
        <span>My</span> Projects
      </h1>
      <p>
        Explore my projects showcasing expertise in Frontend, Python
        programming, and UI/UX design
      </p>
      <div className="card-wrapper">
        <div className="card">
          <div className="img-wrapper">
            <img src="./images/cms.png" alt="" />
          </div>
          <div className="card-content">
            <h1>FrontEnd Development</h1>
            <p>
              Focuses on building the user-facing side of websites and
              applications, using languages like HTML, CSS, and JavaScript to
              create responsive, visually appealing interfaces.
            </p>
            <a href="./FendProjects.html">Explore</a>
          </div>
        </div>
        <div className="card">
          <div className="img-wrapper">
            <img src="./images/python-2.png" alt="" />
          </div>
          <div className="card-content">
            <h1>Python Development</h1>
            <p>
              Involves using Python to build web applications, automate tasks,
              analyze data, and work on back-end services and use of strong
              libraries.
            </p>
            <a href="./PyProjects.html">Explore</a>
          </div>
        </div>
        <div className="card">
          <div className="img-wrapper">
            <img src="./images/skills-development.png" alt="" />
          </div>
          <div className="card-content">
            <h1>UI/UX Design</h1>
            <p>
              Creating user-centered interfaces that are both functional and
              enjoyable, balancing aesthetics with usability to ensure a
              seamless experience across all interactions.
            </p>
            <a href="./UIdesign.html">Explore</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" className="contact">
    <div className="container">
      <h1 className="section-heading">
        Contact <span>Us</span>
      </h1>
      <p>
        Feel free to reach out for collaboration, inquiries, or just to connect!
      </p>
      <div className="card-wrapper">
        <div className="card">
          <img src="./images/phone-2.svg" alt="" />
          <h1>Call Us On</h1>
          <h6>+91 8917210456</h6>
        </div>
        <div className="card">
          <img src="./images/msg.svg" alt="" />
          <h1>Email Us At</h1>
          <h6>021biswajit@gmail.com</h6>
        </div>
        <div className="card">
          <img src="./images/map.svg" alt="" />
          <h1>Connect in Person</h1>
          <h6>Bhubaneswar, Odisha</h6>
        </div>
      </div>
      <form id="contact-form" action="https://formspree.io/f/xzzzkzew" method="POST">
        <div className="input-wrap">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required=""
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            required=""
          />
        </div>
        <div className="input-wrap-2">
          <input type="text" name="subject" placeholder="Your Subject" />
          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder="Your Message..."
            required=""
            defaultValue={""}
          />
        </div>
        <div className="btn-wrapper">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
  <footer>
    <img className="footer-logo" src="./images/logo.svg" alt="" />
    <div className="footer-socials">
      <a href="https://www.instagram.com/invites/contact/?igsh=1ruo66b53hel7&utm_content=7jtc431">
        <img src="./images/insta.svg" alt="" />
      </a>
      <a href="https://www.linkedin.com/in/biswajit-mahapatra-6231a8293">
        <img src="./images/linkedin.svg" alt="" />
      </a>
      <a href="https://x.com/021Biswajit?t=cLInuwMg0VJeriH1Y0t7Lw&s=09">
        {" "}
        <img src="./images/twitter.svg" alt="" />
      </a>
      <a href="https://github.com/itz-biswajit021">
        {" "}
        <img src="./images/git.svg" alt="" />
      </a>
    </div>
    <div className="copyright">Copyright 2020 © All Rights Reserved</div>
  </footer>
</div>
<Script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></Script>
    <Script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></Script>
    <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></Script>
    <Script src="./js/app.js"></Script>

    
    
    <Script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></Script>
    
</>

  );
}
