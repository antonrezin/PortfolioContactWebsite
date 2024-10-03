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
        Junior Software Engineer
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
        variant="h4"
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
      >
        Hi,I'm Anton Rezin!
      </Typography>

      <Typography
        fontFamily={"monospace"}
        variant="h5"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"1600px"}
      >
        I’m a Junior Full Stack Developer from the Helsinki Metropolitan Area
        with a passion for creating seamless digital experiences.
        <br />
        Whether it’s building intuitive user interfaces or developing robust
        backend systems, I enjoy bringing ideas to life through clean, efficient
        code.
        <br />
        My expertise spans both backend and frontend development, allowing me to
        create well-rounded applications that deliver exceptional user
        experiences.
        <br />
        Currently finishing my degree in Full Stack Development, I’m eager to
        apply my skills in real-world projects and collaborate with teams that
        value innovation and quality.
      </Typography>

      <Typography
        fontFamily={"monospace"}
        variant="h4"
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Let’s create something extraordinary together!
      </Typography>
    </Stack>
  );
}

export default Home;
