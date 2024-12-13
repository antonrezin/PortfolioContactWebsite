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
        maxWidth={"1200px"}
      >
        Hi, I’m Anton Rezin!
      </Typography>
      <br />
      <Typography
        fontFamily={"monospace"}
        variant="h5"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"1200px"}
      >
        I’m an aspiring Full Stack Developer from the Helsinki Metropolitan
        Area, passionate about crafting seamless digital experiences. I
        specialize in building intuitive user interfaces and robust backend
        systems, focusing on scalable and efficient solutions.
        <br />
        <br />
        At Haaga-Helia University of Applied Sciences, I’ve built personal
        software development projects and completed three team-based agile
        software development projects, where I gained hands-on experience with
        Java Spring Boot, REST APIs, React, Vite, and cutting-edge AI
        technologies. In one project, my team developed an AI-powered Image
        Recognition Application under contract with an organization, leveraging
        Gemini AI, ChatGPT API, Node.js, Express.js, TypeScript, React, and
        Vite.
        <br />
        <br />
        I’m currently a Full Stack Developer Intern at Innate AI through
        Herizon, completing a 10–12 week internship. Having finished my
        coursework, I am now focused on my internship and thesis, and I will be
        open to full-time Full Stack Developer opportunities starting March 3rd.
      </Typography>
      <br />
      <Typography
        fontFamily={"monospace"}
        variant="h4"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"1200px"}
      >
        Let’s create something extraordinary together!
      </Typography>
    </Stack>
  );
}

export default Home;
