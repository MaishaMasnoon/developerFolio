import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // File name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per the animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Maisha's Porfolio",
  title: "Hi all, I'm Maisha",
  subTitle: emoji(
    "A passionate Frontend Software Developer 🚀 with hands on experience in building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MaishaMasnoon",
  linkedin: "https://www.linkedin.com/in/maishamasnoon",
  gmail: "maishamasnoon502@gmail.com",
  facebook: "https://www.facebook.com/maisha.masnoon",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Develop data-driven, responsive web solutions with expertise in modern JavaScript frameworks",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Integration of third party services such as AWS")
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "BootStrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pace University",
      logo: require("./assets/images/logo-Pace University.webp"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2020 - December 2021",
      desc: "Completed M.S. in Computer Science with a focus on advanced software engineering and data analysis.",
      descBullets: [
        "Gained hands-on experience in algorithms, data structures, and system design",
        "Developed projects in full-stack development, performance optimization, and accessibility"
      ]
    },
    {
      schoolName: "American International University Bangladesh",
      logo: require("./assets/images/logo-AIUB.png"),
      subHeader: "Bachelor of Science in Computer Science & Engineering",
      duration: "January 2015 - May 2019",
      desc: "Earned B.S. in Computer Science with coursework in programming, databases, and applied research.",
      descBullets: [
        "Built academic projects in web and mobile application development",
        "Collaborated on research initiatives combining machine learning and data science"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design", //Stack or technology 
      progressPercentage: "90%" //Relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Software Engineer",
      company: "Yahoo",
      companylogo: require("./assets/images/yahoo-logo.png"),
      date: "May 2022 – Dec 2024",
      desc: "Built scalable, accessible, and performant React web applications.",
      descBullets: [
        "Optimized CI/CD build times by 35%",
        "Implemented real-time translation feature for 75+ markets",
        "Built analytics features with GraphQL and Chart.js"
      ]
    },
    {
      role: "Web Development Intern",
      company: "NYC Department of Youth & Community Development",
      companylogo: require("./assets/images/dycd-logo.png"),
      date: "June 2021 - Sept 2021",
      desc: "Modernized legacy web pages into accessible, responsive interfaces.",
      descBullets: [
        "Improved accessibility scores by 40%",
        "Optimized front-end performance and asynchronous data handling"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "TWG Companies",
      companylogo: require("./assets/images/twg-logo.webp"),
      date: "Dec 2020 - May 2021",
      desc: "Developed and debugged React modules for client applications."
    }
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects

const bigProjects = {
  title: "Professional Projects",
  subtitle: "SOME COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/yahoo-search.png"),
      projectName: "Yahoo Search",
      projectDesc:
        "Built accessible and scalable user-facing solutions across multiple domains",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://search.yahoo.com/search?p=yahoo"
        }
        //  Can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/NYC_DYCD.png"),
      projectName: "NYC DYCD",
      projectDesc:
        "Developed accessible UI modules to improve community engagement and program usability",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.nyc.gov/site/dycd/index.page"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, awards etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications and Award Letters !",

  achievementsCards: [
    {
      title: "Dream Team Award",
      subtitle:
        "Recognized with Yahoo’s Dream Team Award for exceptional cross-domain performance and project impact.",
      image: require("./assets/images/dream-team-award.jpg"),
      imageAlt: "Yahoo Dream Team Award",
      footerLink: []
    },
    {
      title: "Coursera Certificate",
      subtitle:
        "Earned Coursera Front-End Development Certificate, building strong foundations in modern web technologies.",
      image: require("./assets/images/coursera_cert.png"),
      imageAlt: "Coursera Frontend Certificate Logo",
      footerLink: [
        {
          name: "View Coursera Certificate",
          url: "https://coursera.org/share/3c316470e0f47812d7b454ea49273021"
        }
      ]
    },

    {
      title: "Master's Degree",
      subtitle: "Completed Master's of Science in Computer Science",
      image: require("./assets/images/pace-uni-cert.png"),
      imageAlt: "Master's Degree",
      footerLink: [
        {
          name: "Final Project",
          url: "https://github.com/MaishaMasnoon/carriage.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Got an idea, opportunity, or feedback? I’d love to hear from you—reach out anytime!",
  number: "+1-240-342-0037",
  email_address: "maishamasnoon502@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
