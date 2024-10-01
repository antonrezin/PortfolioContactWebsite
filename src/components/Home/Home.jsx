import { Stack, Typography } from "@mui/material";
import "./Home.css";
import profilePicture from "../../assets/ProfilePicture.jpg";

function Home() {
  return (
    <Stack className="homePage">
      <img
        src={profilePicture}
        alt="Anton Rezin Junior Software Developer Portfolio Website."
        className="profilePic"
      />
      <Typography
        fontFamily={"monospace"}
        className="homeDesc"
        textAlign={"center"}
      >
        <b>
          Hi, I'm Anton Rezin!
          <br /> <br />
          I’m a Junior Full Stack Developer from the
          <br />
          Helsinki Metropolitan Area
          <br />
          with a passion for creating seamless digital experiences.
          <br />
          Whether it’s building intuitive user interfaces or developing robust
          backend systems, I enjoy bringing ideas to life through clean,
          efficient code. My expertise spans both backend and frontend
          development, allowing me to create well-rounded applications that
          deliver exceptional user experiences.
          <br />
          Currently finishing my degree in Full Stack Development, I’m eager to
          apply my skills in real-world projects and collaborate with teams that
          value innovation and quality.
          <br /> <br />
          Let’s create something extraordinary together!
        </b>
      </Typography>
    </Stack>
  );
}

export default Home;
