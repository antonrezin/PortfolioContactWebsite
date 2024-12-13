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
        paddingX: 1,
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
        I’m an aspiring Full Stack Developer from the Helsinki Metropolitan Area
        with a passion for crafting seamless digital experiences. I specialize
        in building intuitive user interfaces and robust backend systems,
        focusing on scalable, efficient solutions.
        <br />
        <br />
        At Haaga-Helia University of Applied Sciences, I completed three
        software development projects, working with Java Spring Boot, REST APIs,
        React, and cutting-edge AI technologies. In one project, my team
        developed an AI-powered image recognition application under contract
        with an organization, leveraging Gemini AI, ChatGPT API, Node.js,
        Express.js, TypeScript, React, and Vite.
        <br />
        <br />I recently started a 10–12 week internship at Innate AI as a
        Software Developer Intern through Herizon. Having completed my
        coursework, I am currently focused on my internship and thesis before
        graduation. After my internship, I will be open to full-time
        opportunities starting approximately from March 3rd.
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
