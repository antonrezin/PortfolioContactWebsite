import { Stack, Box, Typography } from "@mui/material";
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
        maxWidth={"1000px"}
      >
        Hi, I’m Anton Rezin!
      </Typography>
      <br />
      <Typography
        fontFamily={"monospace"}
        variant="h5"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"1000px"}
      >
        A Full Stack Developer from the Helsinki Metropolitan Area, specializing
        in creating seamless digital experiences from intuitive UIs to scalable
        backend systems.
        <br />
        <br />
        Currently completing my degree in Full Stack Development at Haaga-Helia
        University of Applied Sciences, I’ve worked on projects such as a Query
        Service and Time Management Application (using Java Spring Boot, REST,
        React, Vite), and an AI-powered Image Recognition Application with
        Gemini AI, ChatGPT API, Node.js, Express.js, TypeScript, React, and
        Vite.
        <br />
        <br />I am also a Full Stack Developer Intern at Innate AI through
        Herizon. Upon finishing my internship and thesis, I’ll be available for
        full-time positions starting March 3rd.
      </Typography>
      <br />
      <Typography
        fontFamily={"monospace"}
        variant="h4"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"1000px"}
      >
        Let’s create something extraordinary together!
      </Typography>
    </Stack>
  );
}

export default Home;
