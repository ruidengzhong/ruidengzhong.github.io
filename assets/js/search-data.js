// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About Me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of my engineering projects, experiments, and technical explorations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-work-experience",
          title: "Work Experience",
          description: "A collection of my professional, technical, and extracurricular experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "experiences-lab-aide",
          title: 'Lab Aide',
          description: "Assisted in lab operations at the Advanced Materials Research Laboratory",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/clemsonece/";
            },},{id: "experiences-research-intern",
          title: 'Research Intern',
          description: "Researched molecular behavior of C₆₀ fullerene using LAAMPS",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/clemsonmeche/";
            },},{id: "experiences-electrical-systems-engineer",
          title: 'Electrical Systems Engineer',
          description: "Designing, testing, and improving electrical systems for a student-built FSAE race car.",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/duke-motorsports/";
            },},{id: "experiences-quality-engineering-intern",
          title: 'Quality Engineering Intern',
          description: "Supported the quality engineering department at EEEA Inc.",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/eeea/";
            },},{id: "projects-hardware-acceleration-on-a-xilinx-zynq-7020-fpga",
          title: 'Hardware Acceleration on a Xilinx Zynq-7020 FPGA',
          description: "FPGA, Vivado, Verilog",
          section: "Projects",handler: () => {
              window.location.href = "/projects/FPGAAcceleration/";
            },},{id: "projects-12v-7v-buck-converter-with-smart-high-side-switch",
          title: '12V-7V Buck Converter with Smart High Side Switch',
          description: "Altium, PCB Assembly, Soldering",
          section: "Projects",handler: () => {
              window.location.href = "/projects/buckConverter/";
            },},{id: "projects-doppler-string-phantom",
          title: 'Doppler String Phantom',
          description: "Python, Arduino, OnShape, 3D Printing, Ultrasound, Digital Multimeter",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dopplerStringPhantom/";
            },},{id: "projects-line-tracking-bot-with-thermal-sensor",
          title: 'Line-Tracking Bot with Thermal Sensor',
          description: "Arduino Mega, IR Sensor, QTI Sensor, LCD, Breadboarding",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ece110Bot/";
            },},{id: "projects-custom-hytera-radio-harness",
          title: 'Custom Hytera Radio Harness',
          description: "KiCAD, Digital Multimeter, Crimping, Splicing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hyteraRadio/";
            },},{id: "projects-gate-level-16-bit-mips-style-cpu",
          title: 'Gate-Level 16-Bit MIPS-Style CPU',
          description: "Logisim, Digital Logic Design, Computer Architecture",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mipsCPU/";
            },},{id: "projects-strain-gauge-pcb",
          title: 'Strain Gauge PCB',
          description: "Altium, PCB Assembly, Soldering, MoTeC M1 Tune",
          section: "Projects",handler: () => {
              window.location.href = "/projects/strainGauge/";
            },},{id: "teachings-ece-cs-250-computer-architecture",
          title: 'ECE/CS 250 - Computer Architecture',
          description: "The objective of this course is to learn how computers work, focusing on how the computer hardware executes the software. - Daniel J. Sorin",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/computer-architecture/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/resume_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%75%69%64%65%6E%67.%7A%68%6F%6E%67@%64%75%6B%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ruideng-zhong", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ruidengzhong", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
