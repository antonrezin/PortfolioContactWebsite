import { Stack, Box, Typography, List, ListItem, Link } from "@mui/material";
import profilePicture from "/assets/ProfilePicture.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
  return (
    <Stack
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        paddingX: 5,
        paddingY: 10,
      }}
    >
      <Typography
        fontFamily={"monospace"}
        variant="h3"
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Aspiring Full Stack Developer
      </Typography>

      <img
        src={profilePicture}
        alt="Anton Rezin Junior Software Developer Portfolio Website."
        style={{
          width: "100%",
          maxWidth: "200px",
          maxHeight: "200px",
          borderRadius: "50%",
          border: "5px solid #000000",
        }}
      />

      <Typography
        fontFamily={"monospace"}
        variant="h3"
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Anton Rezin
      </Typography>

      <Stack direction="row" spacing={2}>
        <a href="https://www.linkedin.com/in/antonrezin/" target="_blank">
          <LinkedInIcon sx={{ fontSize: "6rem", color: "primary.main" }} />
        </a>

        <a href="https://github.com/antonrezin" target="_blank">
          <GitHubIcon sx={{ fontSize: "6rem", color: "black" }} />
        </a>
      </Stack>

      <Typography
        fontFamily={"monospace"}
        variant="h4"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"800px"}
      >
        Hi, I’m Anton Rezin!
      </Typography>
      <br />
      <Typography
        fontFamily={"monospace"}
        variant="h5"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"800px"}
      >
        I’m an aspiring Full Stack Developer based in the Helsinki Metropolitan
        Area, passionate about crafting seamless digital experiences. My current
        role as a Full Stack Developer Intern at Innate AI through Herizon has
        further solidified my dedication to software development. I enjoy
        working in innovative and dynamic environments where I can contribute
        and grow professionally.
        <br />
        <br />
        Over the course of my studies at Haaga-Helia University of Applied
        Sciences and through hands-on project experience, I have developed
        comprehensive skills in both front-end and back-end technologies. My
        programming skills include HTML, CSS, JavaScript, Java, Python, and
        TypeScript. Additionally, I have experience with various other
        technologies such as React + Vite, Spring Boot, Node.js, SQL, Docker,
        RESTful APIs, Jest, JUnit, Git, GitHub Actions, and Amazon Web Services
        (AWS).
        <br />
        <br />
      </Typography>
      <Typography
        fontFamily={"monospace"}
        variant="h5"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"800px"}
      >
        Some of the notable projects I have worked on include:
      </Typography>
      <List>
        <Typography
          fontFamily={"monospace"}
          variant="h5"
          fontWeight={"bold"}
          textAlign={"center"}
          maxWidth={"800px"}
        >
          <Link
            href="https://github.com/orgs/EkaTiimi/repositories"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "none", color: "primary.main" }}
          >
            Query Service
          </Link>
          <br />
          Developed using Java Spring Boot, React, Vite, REST, and Material-UI.
        </Typography>
        <br />
        <Typography
          fontFamily={"monospace"}
          variant="h5"
          fontWeight={"bold"}
          textAlign={"center"}
          maxWidth={"800px"}
        >
          <Link
            href="https://github.com/TeamRed-Ohjelmistoprojekti2/TimeManagement"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "none", color: "primary.main" }}
          >
            Time Management Application
          </Link>
          <br />
          Built with Java Spring Boot, JWT, React, Vite, REST, and Material-UI.
        </Typography>
        <br />
        <Typography
          fontFamily={"monospace"}
          variant="h5"
          fontWeight={"bold"}
          textAlign={"center"}
          maxWidth={"800px"}
        >
          <Link
            href="https://kalustebottifrontend-arvolaskuri-demo.2.rahtiapp.fi/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "none", color: "primary.main" }}
          >
            Image Recognition Application
          </Link>
          <br />
          Created with Node.js, Express.js, React, Vite, REST, TypeScript, Gemini AI,
          ChatGPT API, and Material-UI.
        </Typography>
      </List>
      <Typography
        fontFamily={"monospace"}
        variant="h5"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"800px"}
      >
        <br />
        These projects have equipped me with practical experience in version
        control, API design, and agile methodologies, ensuring that I can
        deliver value quickly in real-world projects.
        <br />
        <br />
        My colleagues often describe me as analytical, eager to learn, and
        solution-oriented. I am a team player who brings positive energy and
        takes responsibility in both individual and group settings. Challenges
        are opportunities for me to grow, and this mindset has been instrumental
        in my academic and professional success.
        <br />
        <br />I have completed all my coursework at Haaga-Helia University of
        Applied Sciences and have only my thesis left to complete before
        graduation.
      </Typography>
      <Typography
        fontFamily={"monospace"}
        variant="h4"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"1400px"}
      >
        <br />
        Let’s create something extraordinary together!
      </Typography>
    </Stack>
  );
}

export default Home;
