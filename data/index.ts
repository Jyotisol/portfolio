import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#Skills" },
  { name: "Other", link: "#Achivements"},
  // { name: 'Resume', link: "#Resume"}
  { name: 'Resume', link: "https://drive.google.com/uc?export=download&id=1jPHiUxaudxcYli5ZFq3KW0VRJc4_DATr" }

];
const downloadResume = () => {
  const resumeLink = "https://drive.google.com/uc?export=download&id=1jPHiUxaudxcYli5ZFq3KW0VRJc4_DATr";
  const link = document.createElement('a');
  link.href = resumeLink;
  link.download = 'Jyoti_Solanki_resume.zip'; // Optional: Set the default filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-fit",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.png",
    spareImg: "/b4.png",
  },

  {
    id: 5,
    title: "Currently learning Spring Security and building bank application",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.png",
    spareImg: "/grid.png",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const MySkills = [
  {
    id: 1,
    title: 'web',
    img: "/materialUi.png",
    className:"",
},
  {
    id: 2,
    title: 'Js',
    img: "/javascript.png",
    className:"",
},
  {
    id: 3,
    title: 'react',
    img: "/reactjs.png",
    className:"",
},
  {
    id: 4,
    title: 'redux',
    img: "/redux.png",
    className:"",
},
  {
    id: 5,
    title: 'api',
    img: "/api.png",
    className:"",
},
  {
    id: 6,
    title: 'mysql',
    img: "/mysql.png",
    className:"",
},
  {
    id: 7,
    title: 'nodejs',
    img: "/node-js.png",
    className:"",
},
  {
    id: 8,
    title: 'github-desktop',
    img: "/github-desktop.png",
    className:"",
},
  {
    id: 9,
    title: 'intellij',
    img: "/intellij.png",
    className:"",
},
  {
    id: 11,
    title: 'tailwind',
    img: "/tailwind-css.png",
    className:"",
},
  {
    id: 12,
    title: 'redux',
    img: "/redux.png",
    className:"",
},
  {
    id: 13,
    title: 'bootstap',
    img: "/bootstrap.avif",
    className:"",
},
  {
    id: 14,
    title: 'html',
    img: "/html-5.png",
    className:"",
},
  {
    id: 15,
    title: 'nextjs',
    img: "/next.png",
    className:"",
},
  {
    id: 16,
    title: 'Sass',
    img: "/exp2.png",
    className:"",
},
  {
    id: 17,
    title: 'redis',
    img: "/exp3.png",
    className:"",
},
  {
    id: 18,
    title: 'css-3',
    img: "/css-3.png",
    className:"",
},


];

export const projects = [
  {
    id: 1,
    title: "ToDo List to add your task",
    des: "Organize your tasks effortlessly with this to-do list app. Keep track of your priorities and boost your productivity.",
    img: "/todo.png",
    iconLists: ["/reactjs.png", "/redux.png", "/materialUi.png", "/css-3.png"],
    link: "todo-redux-app-rho.vercel.app",
  },
  {
    id: 2,
    title: "Video Conferencing App",
    des: "Stream your favorite videos seamlessly with this YouTube clone, built using the latest technologies for a smooth and engaging user experience",
    img: "/youtube.png",
    iconLists: ["/html-5.png", "/css-3.png", "/javascript.png", "/api.png"],
    link: "you-tube-clone-three-drab.vercel.app",
  },
  {
    id: 3,
    title: "Podcast service for AI world",
    des:  "A REAL Podcast-as-a-Service app with AI-driven recommendations and a seamless subscription system, built using the latest tech stack.",
    img: "/podcast.png",
    iconLists: ["/reactjs.png", "/redux.png", "/materialui.png", "/api.png"],
    link: "/ui.aiimg.com",
  },
  // {
  //   id: 4,
  //   title: "Podcast service for AI world",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.png",
  //   iconLists: ["/next.png", "/tail.png", "/ts.png", "/three.png", "/gsap.png"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  // {
  //   img:"/MERN STACK.png",
  //   name: "MERN STACK",
  //   title: "AccioJob",
  // },
  {
    img:"/certification.png",
    name: "Prodigi ",
    title: "Certification",
  },
  // {
  //   img:"./web development.jpg",
  //   name: "Web Development",
  //   title: "Udemy",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.png",
    nameImg: "/cloudName.png",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.png",
    nameImg: "/appName.png",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.png",
    nameImg: "/hostName.png",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.png",
    nameImg: "/streamName.png",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.png",
    nameImg: "/dockerName.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.png",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.png",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.png",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.png",
  },
];

export const socialMedia = [
  // {
  //   id: 1,
  //   img: "/discord.png",
  //   link:"https://discord.gg/DQw9NrawEh",
  // },
  {
    id: 1,
    img: "/git.png",
    link:"https://github.com/Jyotisol",
  },
  {
    id: 2,
    img: "/link.png",
   link: "https://www.linkedin.com/in/jyoti-solanki-a62036294"
  },
];

export const Contact = [
  {
    id: 1,
    link:"#Connect",
  },
]