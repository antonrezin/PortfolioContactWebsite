import { Box, Stack, Typography } from "@mui/material";
import profilePicture from "/assets/ProfilePicture.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
  return (
    <Stack
      className="homePage"
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        padding: { xs: "20px", md: "40px" },
        textAlign: "center",
        overflowY: "auto",
      }}
    >
      <Typography
        fontFamily={"monospace"}
        className="homeDesc"
        variant="h3"
        sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
      >
        <b>Junior Software Engineer</b>
      </Typography>

      <img
        src={profilePicture}
        alt="Anton Rezin Junior Software Developer Portfolio Website."
        className="profilePic"
        style={{
          width: "100%",
          maxWidth: "250px",
          maxHeight: "250px",
          height: "auto",
          borderRadius: "50%",
          border: "5px solid #ffffff",
          margin: "20px 0",
        }}
      />

      <Typography fontFamily={"monospace"} className="homeDesc" variant="h3">
        <b>Anton Rezin</b>
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, md: 3 },
          flexDirection: "row",
        }}
      >
        <a
          href="https://www.linkedin.com/in/antonrezin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={{ fontSize: "5rem", color: "primary.main" }} />
        </a>
        <a
          href="https://github.com/antonrezin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ fontSize: "5rem", color: "action.active" }} />
        </a>
      </Box>

      <Typography
        fontFamily={"monospace"}
        className="homeDesc"
        textAlign={"center"}
        variant="h6"
        sx={{ fontSize: { xs: "1.25rem", md: "1.25rem" }, marginTop: "20px" }}
      >
        <b>Hi, I'm Anton Rezin!</b>
      </Typography>

      <Typography
        fontFamily={"monospace"}
        className="homeDesc"
        textAlign={"center"}
        variant="body1"
        sx={{
          fontSize: { xs: "1rem", md: "1rem" },
          margin: "10px 0",
          maxWidth: "700px",
        }}
      >
        I’m a Junior Full Stack Developer from the Helsinki Metropolitan Area
        with a passion for creating seamless digital experiences. Skilled in
        both backend and frontend development, I build efficient, user-friendly
        applications. As I finish my Full Stack Development degree, I’m excited
        to apply my skills in real-world projects.
      </Typography>

      <Typography
        fontFamily={"monospace"}
        className="homeDesc"
        textAlign={"center"}
        variant="h6"
        sx={{ fontSize: { xs: "1.25rem", md: "1.25rem" } }}
      >
        <b>Let’s create something extraordinary together!</b>
      </Typography>
    </Stack>
  );
}

export default Home;
