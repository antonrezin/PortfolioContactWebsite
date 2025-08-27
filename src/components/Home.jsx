import { Stack, Typography, List, ListItem, Link, Paper } from "@mui/material";
import profilePicture from "/assets/ProfilePicture.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";

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
        Junior Software Developer
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
        Cover Letter
      </Typography>

      <Paper>
        <Typography
          fontFamily={"monospace"}
          variant="h6"
          fontWeight={"bold"}
          textAlign={"center"}
          maxWidth={"800px"}
        >
          Dear Hiring Manager,
        </Typography>
        <br />
        <Typography
          fontFamily={"monospace"}
          variant="h6"
          textAlign={"center"}
          maxWidth={"800px"}
        >
          I am writing to express my interest in a Junior Software Developer
          role. With a soon-to-be-completed Bachelor of Business Administration
          in Business Information Technology from Haaga-Helia University of
          Applied Sciences, hands-on experience in full-stack development, and a
          strong foundation in cloud technologies, I am eager to contribute to
          impactful projects as part of a development team.
          <br />
          <br />
          Through my independent and team software projects at Haaga-Helia, I
          gained practical experience building CRUD applications with React,
          JavaScript/TypeScript, and Java (Spring Boot), integrating REST APIs,
          and working with SQL databases. I have also applied modern front-end
          tooling such as Vite to deliver clean, testable solutions.
          <br />
          <br />
          Additionally, during my time at Digia, Innate AI, and Routa Digital, I
          strengthened my skills in professional development workflows,
          Agile/Scrum collaboration, and version control with Git, while gaining
          experience with modern software practices. I completed the Google
          Cloud Platform (GCP) Associate Cloud Engineer training, developing
          skills in Identity and Access Management (IAM), Virtual Private Cloud
          (VPC), Compute Engine, Google Kubernetes Engine (GKE), Cloud SQL,
          Cloud Monitoring, and Load Balancing; I also hold AWS Academy Cloud
          Foundations.
          <br />
          <br />
          I am motivated to grow as a developer, apply my skills in modern web
          technologies, and help build software that makes a real impact. I
          bring a combination of technical knowledge, cloud expertise, and
          eagerness to learn, and I am confident these qualities will allow me
          to adapt quickly and provide value in a professional software
          development role.
          <br />
          <br />
          I am available to start immediately in the Helsinki Metropolitan Area
          or remotely. I would welcome the opportunity to discuss how my
          background aligns with your team’s needs.
          <br />
          <br />
          Thank you for your time and consideration.
          <br />
          <br />
          Sincerely,
          <br />
          Anton Rezin
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

      <Paper sx={{ p: 3, maxWidth: "900px", margin: "auto" }}>
        <Grid container spacing={3}>
          {/* Frontend + Testing */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography>
              <strong>Frontend:</strong>
            </Typography>
            <Typography>
              • JavaScript (ES6+), TypeScript, React, HTML, CSS, Material-UI,
              Bootstrap
            </Typography>
            <br />
            <Typography>
              <strong>Testing:</strong>
            </Typography>
            <Typography>• JUnit, Jest</Typography>
          </Grid>

          {/* Backend + Tools */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography>
              <strong>Backend:</strong>
            </Typography>
            <Typography>
              • Java, Spring Boot, Spring Framework, Python
            </Typography>
            <br />
            <Typography>
              <strong>Tools:</strong>
            </Typography>
            <Typography>• Git, Docker, Bash, Maven</Typography>
          </Grid>

          {/* APIs & Databases + Methods + Cloud */}
          <Grid item xs={12} sm={12} md={4}>
            <Typography>
              <strong>APIs & Databases:</strong>
            </Typography>
            <Typography>• REST APIs, SQL, H2 Database, Axios/fetch</Typography>
            <br />
            <Typography>
              <strong>Methods:</strong>
            </Typography>
            <Typography>• Agile, Scrum</Typography>
            <br />
            <Typography>
              <strong>Cloud:</strong>
            </Typography>
            <Typography>
              • Google Cloud Platform (GCP) — Identity and Access Management
              (IAM), Virtual Private Cloud (VPC), Compute Engine, Google
              Kubernetes Engine (GKE), Cloud SQL, Monitoring, Load Balancing
              <br />• Amazon Web Services (AWS) — Academy Cloud Foundations
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <br />

      <Typography
        fontFamily={"monospace"}
        variant="h4"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"800px"}
      >
        Certifications <br /> (Click to view)
      </Typography>
      <Paper>
        <Typography
          fontFamily={"monospace"}
          variant="h6"
          textAlign={"center"}
          maxWidth={"800px"}
        >
          <Link
            href="https://www.credly.com/users/antonrezin/skills"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textAlign: "center",
              textDecoration: "none",
              color: "blue",
            }}
          >
            • Google Cloud Associate Cloud Engineer (Google Cloud Platform, GCP)
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
            href="https://www.credly.com/users/antonrezin/skills"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textAlign: "center",
              textDecoration: "none",
              color: "blue",
            }}
          >
            • Amazon Web Services (AWS) Academy Cloud Foundations
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
              color: "blue",
            }}
          >
            • Furniture Image Recognition Project Certificate
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
        Team Software Development Projects <br /> (Click to view)
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
                sx={{ textDecoration: "none", color: "blue" }}
              >
                Furniture Image Recognition Application
              </Link>
              <br />
              • Built an AI-powered application to classify furniture condition
              & attributes and integrated a chatbot for user help, improving
              usability.
              <br />• Tech: React (Vite), TypeScript, Node.js, Express.js, REST
              APIs, Material-UI, Google Gemini AI, ChatGPT API.
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
                sx={{ textDecoration: "none", color: "blue" }}
              >
                Time Management Application
              </Link>
              <br />
              • Developed a full-stack CRUD application with React frontend and
              Spring Boot backend.
              <br />
              • Built and consumed REST APIs for data operations. •Used SQL (H2
              Database) for persistence.
              <br />• Tech: Java, Spring Boot, React (Vite), REST APIs, Git,
              Material-UI.
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
                sx={{ textDecoration: "none", color: "blue" }}
              >
                Query Service
              </Link>
              <br />
              • Created a CRUD-based query management system, enabling
              creation/deletion of surveys, questions, and answers, streamlining
              survey data collection.
              <br />
              • Implemented a RESTful (Representational State Transfer) API for
              frontendbackend communication.
              <br />• Tech: Java, Spring Boot, React (Vite), REST APIs, Git,
              Material-UI..
            </Typography>
          </ListItem>
        </List>
      </Paper>

      <Typography
        fontFamily={"monospace"}
        variant="h4"
        fontWeight={"bold"}
        textAlign={"center"}
        maxWidth={"1400px"}
      >
        Thank you for your time and consideration.
      </Typography>
    </Stack>
  );
}

export default Home;
