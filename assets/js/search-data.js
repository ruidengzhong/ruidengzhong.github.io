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
          description: "Projects in electronics, computer architecture, embedded systems, and biomedical instrumentation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-work-experience",
          title: "Work Experience",
          description: "Engineering, research, and quality experience in automotive systems, electronics, and materials.",
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
          description: "Undergraduate teaching support in computer architecture at Duke University.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "experiences-lab-aide",
          title: 'Lab Aide',
          description: "3D-printing workflows and materials research for biomedical fabrication.",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/clemsonece/";
            },},{id: "experiences-research-intern",
          title: 'Research Intern',
          description: "Molecular dynamics research on C₆₀ fullerene structures under compression.",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/clemsonmeche/";
            },},{id: "experiences-electrical-systems-engineer",
          title: 'Electrical Systems Engineer',
          description: "Electrical systems development and integration for a student-built Formula SAE car.",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/duke-motorsports/";
            },},{id: "experiences-quality-engineering-intern",
          title: 'Quality Engineering Intern',
          description: "Quality systems, inspection, and process improvement in electronics manufacturing.",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/eeea/";
            },},{id: "projects-fpga-image-acceleration",
          title: 'FPGA Image Acceleration',
          description: "Pipelined Sobel edge detection on a Xilinx Zynq-7020 FPGA.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/FPGAAcceleration/";
            },},{id: "projects-12-v-7-v-buck-converter",
          title: '12 V–7 V Buck Converter',
          description: "A step-down converter with a smart high-side switch for an FSAE clutch servo.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/buckConverter/";
            },},{id: "projects-doppler-string-phantom",
          title: 'Doppler String Phantom',
          description: "An adjustable, low-cost platform for Doppler ultrasound experiments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dopplerStringPhantom/";
            },},{id: "projects-thermal-sensing-robot",
          title: 'Thermal-Sensing Robot',
          description: "An Arduino robot combining line following, thermal sensing, and wireless data exchange.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ece110Bot/";
            },},{id: "projects-hytera-radio-harness",
          title: 'Hytera Radio Harness',
          description: "Serviceable race-car wiring connecting the driver’s headset, radio, and steering-wheel button.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hyteraRadio/";
            },},{id: "projects-16-bit-mips-style-cpu",
          title: '16-Bit MIPS-Style CPU',
          description: "A programmable processor built from custom gate-level components in Logisim.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mipsCPU/";
            },},{id: "projects-rf-lora-module",
          title: 'RF LoRa Module',
          description: "Low-power, long-range wireless communication for a ChipSat module.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rfLora/";
            },},{id: "projects-strain-gauge-pcb",
          title: 'Strain Gauge PCB',
          description: "An instrumentation-amplifier board for conditioning small strain-gauge signals.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/strainGauge/";
            },},{id: "projects-fsae-wiring-harness",
          title: 'FSAE Wiring Harness',
          description: "Electrical harness development for the 2026–2027 Duke Motorsports car.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wireHarness2027/";
            },},{id: "teachings-ece-cs-250-computer-architecture",
          title: 'ECE/CS 250 - Computer Architecture',
          description: "Undergraduate teaching assistant for ECE/CS 250, covering how computer hardware executes software.",
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
