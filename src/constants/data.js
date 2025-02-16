export const navLinks = [
  { id: 1, name: "About", href: "#bentogrid" },
  { id: 2, name: "Projects", href: "#projects" },
  { id: 3, name: "Experience", href: "#experience" },
  { id: 4, name: "Connect", href: "#connect" },
];

 
  export const myProjects = [
    {
      title: 'BrowSync - Making Browsing Productive',
      desc: 'BrowSync is a collection of browser extensions that provides a user-friendly interface for managing and accessing a wide range of productivity tools.',
      href: 'https://chromewebstore.google.com/detail/addem/alohjgkaidedebkcmeiloojlnlgicmml',
      texture: '/new/ssss.jpeg',
      logo: '/new/icon.png',
      techused: ['html5','css3','javascript','chrome'],
      link: 'https://chromewebstore.google.com/detail/addem/alohjgkaidedebkcmeiloojlnlgicmml'
    },
    {
      title: 'Web Portfolio',
      desc: 'A personal web portfolio showcasing various projects and skills, including 3D designs, interactive user interfaces, and more.',
      href: 'https://www.instagram.com/sam_champ_ion/',
      texture: '/new/sss.jpeg',
      logo: '/new/s.png',
      techused: ['react','css3','javascript','three'],
      link: 'https://www.instagram.com/sam_champ_ion/'
    }
 
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Technology Club',
      pos: 'Core Member',
      duration: 'September 2023 - Present',
      title: "At Technology Club, I actively contribute as a core member by working on innovative projects, facilitating knowledge sharing, and organizing tech-related events to enhance technical skills among peers.",
      icon: 'public/new/technology_club_nit_srinagar_logo.jpeg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Techvaganza',
      pos: 'Hosting and Content Team Lead',
      duration: 'August 2024 - August 2024',
      title: "Led the Hosting and Content Team for Techvaganza 2024, ensuring smooth event execution, coordinating with speakers, and curating content that resonated with the audience.",
      icon: '/new/Tech.jpeg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Rang-e-chinar',
      pos: 'Master of Ceremonies',
      duration: 'November 2023 - November 2023',
      title: "Served as the Master of Ceremonies at Rang-e-chinar, a cultural event, where I was responsible for hosting the event, engaging the audience, and ensuring the smooth flow of the program.",
      icon: '/new/Rang.jpeg',
      animation: 'salute',
    },
  ];