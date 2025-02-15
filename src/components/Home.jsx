import { Stack, Typography, List, ListItem, Link, Paper } from "@mui/material";
import profilePicture from "/assets/ProfilePicture.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
  return (
    <Stack
      spacing={4}
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
        alt="Anton Rezin Junior Software Developer Portfolio"
        style={{
          width: "100%",
          maxWidth: "300px",
          maxHeight: "300px",
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

      <Stack direction="row" spacing={3}>
        <Link
          href="https://www.linkedin.com/in/antonrezin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={{ fontSize: "10rem", color: "primary.main" }} />
        </Link>
        <Link
          href="https://github.com/antonrezin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ fontSize: "10rem", color: "black" }} />
        </Link>
      </Stack>

      <Typography
        fontFamily={"monospace"}
        variant="h4"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"800px"}
      >
        About
      </Typography>

      <Paper>
        <Typography
          fontFamily={"monospace"}
          variant="h6"
          fontWeight={"bold"}
          textAlign={"center"}
          maxWidth={"800px"}
        >
          Hi, I’m Anton Rezin!
        </Typography>
        <br />
        <Typography
          fontFamily={"monospace"}
          variant="h6"
          textAlign={"center"}
          maxWidth={"800px"}
        >
          I am an aspiring Full Stack Developer based in the Helsinki
          Metropolitan Area, focused on creating high-quality digital solutions
          that blend creativity and functionality.
          <br />
          <br />
          With a solid foundation in front-end and back-end technologies, I
          strive to build intuitive, user-friendly applications that solve
          real-world challenges.
          <br />
          <br />
          After completing the Herizon bootcamp, I am currently gaining hands-on
          experience as a Full Stack Developer Intern at Innate AI, expanding my
          expertise in modern software development.
          <br />
          <br />
          I am eager to continue growing professionally, tackle new challenges,
          and contribute to impactful projects.
          <br />
          <br />I am immediately available for full-time opportunities where I
          can apply my skills and continue to develop as a developer.
        </Typography>
      </Paper>

      <br />

      <Typography
        fontFamily={"monospace"}
        variant="h4"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"800px"}
      >
        Technical Skills
      </Typography>

      <Paper>
        <Typography
          fontFamily={"monospace"}
          variant="h6"
          textAlign={"center"}
          maxWidth={"800px"}
        >
          Java, Spring Framework, Spring Boot, Maven, React, React Native, Vite,
          NodeJS, Express.js, TypeScript, npm, DevOps, Linux, Ubuntu, Docker,
          SQL, Git, Bash, CI/CD, GitHub Actions, JUnit, Jest, Jenkins, REST,
          Python, HTML, CSS, JavaScript, Material-UI, Bootstrap, Agile, Scrum,
          Kanban, and Amazon Web Services (AWS).
        </Typography>
      </Paper>

      <br />

      <Typography
        fontFamily={"monospace"}
        variant="h4"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"800px"}
      >
        Certifications
      </Typography>
      <Paper>
        <Typography
          fontFamily={"monospace"}
          variant="h6"
          textAlign={"center"}
          maxWidth={"800px"}
        >
          <Link
            href="https://www.credly.com/go/nuNjdbA3"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textAlign: "center",
              textDecoration: "none",
              color: "primary.main",
            }}
          >
            AWS Academy Cloud Foundations
          </Link>
        </Typography>
        <br />
        <Typography
          fontFamily={"monospace"}
          variant="h6"
          textAlign={"center"}
          maxWidth={"800px"}
        >
          <Link
            href="https://drive.google.com/file/d/1qzUB64oJix9TukqWtRzGbI_Y1kaxQhiO/view"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textAlign: "center",
              textDecoration: "none",
              color: "primary.main",
            }}
          >
            Furniture Image Recognition Project
          </Link>
        </Typography>
      </Paper>

      <br />

      <Typography
        fontFamily={"monospace"}
        variant="h4"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"800px"}
      >
        Team Software Development Projects
      </Typography>
      <Paper>
        <List>
          <ListItem>
            <Typography
              fontFamily={"monospace"}
              variant="h6"
              textAlign={"center"}
              maxWidth={"800px"}
            >
              <Link
                href="https://arvolaskuri-alyakokeilut.2.rahtiapp.fi"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none", color: "primary.main" }}
              >
                Furniture Image Recognition Application
              </Link>
              <br />
              Developed with NodeJS with Express.js, React with Vite,
              TypeScript, REST APIs, Git, npm, Google Gemini AI, ChatGPT API,
              Material-UI
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              fontFamily={"monospace"}
              variant="h6"
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
              Developed with Java, Spring Framework, Spring Boot, React with
              Vite, REST APIs, Git, npm, Material-UI.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              fontFamily={"monospace"}
              variant="h6"
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
              Developed using Java, Spring Framework, Spring Boot, React with
              Vite, REST APIs, Git, npm, Material-UI.
            </Typography>
          </ListItem>
        </List>
        <br />
        <Typography
          fontFamily={"monospace"}
          variant="h6"
          textAlign={"center"}
          maxWidth={"800px"}
        >
          These projects have equipped me with practical experience in version
          control, API design, and agile methodologies. I am confident in
          delivering value in real-world projects while continuously enhancing
          my skills.
        </Typography>
      </Paper>

      <br />

      <Typography
        fontFamily={"monospace"}
        variant="h4"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"800px"}
      >
        Additional Information
      </Typography>
      <Paper>
        <Typography
          fontFamily={"monospace"}
          variant="h6"
          textAlign={"center"}
          maxWidth={"800px"}
        >
          My colleagues describe me as analytical, eager to learn, and
          solution-oriented. I take responsibility and bring a positive attitude
          in both individual and group settings. Challenges are opportunities
          for growth, and I approach them with curiosity and determination.
        </Typography>
        <br />
        <Typography
          fontFamily={"monospace"}
          variant="h6"
          textAlign={"center"}
          maxWidth={"800px"}
        >
          I have completed all coursework at Haaga-Helia University of Applied
          Sciences and am currently finalizing my thesis to complete my degree.
        </Typography>
      </Paper>

      <br />
      <br />

      <Typography
        fontFamily={"monospace"}
        variant="h4"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"1400px"}
      >
        Let’s create something extraordinary together!
      </Typography>
    </Stack>
  );
}

export default Home;
