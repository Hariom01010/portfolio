import { FaMusic, FaGamepad, FaBook, FaFilm, FaPhoneAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmojiFoodBeverage, MdOutlineMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const info = [
    {
        id:1,
        title:"NAME: ",
        content: "Hariom Vashista"
    },
    {
        id:2,
        title:"DATE OF BIRTH: ",
        content: "04-05-2004"
    },
    {
        id:3,
        title:"NATIONALITY: ",
        content: "India"
    },
    {
        id:4,
        title:"ADDRESS: ",
        content: "2-A, 150, Vaishali, Ghaziabad"
    },
    {
        id:5,
        title:"PHONE: ",
        content: "(91) 85951 25137"
    },
    {
        id:6,
        title:"E-MAIL: ",
        content: "rishivashista4@gmail.com"
    },
]


const icons = [
    <FaBook className="border border-[#cf9c0f] px-3 text-[#cf9c0f] rounded-full" size={50}/>, 
    <FaGamepad className="border border-[#cf9c0f] px-3 text-[#cf9c0f] rounded-full" size={50}/>, 
    <FaMusic className="border border-[#cf9c0f] px-3 text-[#cf9c0f] rounded-full" size={50}/>, 
    <MdEmojiFoodBeverage className="border border-[#cf9c0f] px-3 text-[#cf9c0f] rounded-full" size={50}/>, 
    <FaFilm className="border border-[#cf9c0f] px-3 text-[#cf9c0f] rounded-full" size={50}/>
]

const projects = [
    {
        id:1,
        imgSrc: "./blogapp.png",
        title: "BlogApp",
        content: `In the age of digital connectivity and information sharing, "BlogNow"
        emerges as a powerful and versatile platform designed to cater to the
        dynamic needs of content creators, writers, and bloggers. This
        innovative mobile app serves as a user-friendly haven, empowering
        individuals from all walks of life to share their thoughts, ideas,
        experiences, and expertise with the world...`,
        tags: ["HTML", "CSS", "JS", "React", "Redux", "Tailwind", "Appwrite"],
        link: "https://blog-fzfaifyhe-hariom01010.vercel.app/"
    },
    {
        id:2,
        imgSrc:"./gpt3.png",
        title: "GPT-3",
        content:`Immerse yourself in a dynamic and personalized experience as our platform, driven by OpenAI's cutting-edge language model, engages visitors in natural conversations, making every interaction feel uniquely human. From interactive storytelling to seamless customer support, our GPT-3-powered landing page opens doors to a new era of versatile and engaging online communication. Join us at the forefront of innovation, where technology meets intuition, and explore the limitless possibilities of a more interactive and memorable digital presence.`,
        tags: ["HTML", "CSS", "JS", "React", "Tailwind"],
        link: "https://hariom01010.github.io/gpt-3/"
    },
    {
        id:3,
        imgSrc:"./keeper.png",
        title: "Keeper",
        content: `Welcome to Keeper, your ultimate solution for seamless note-taking! With an intuitive interface, NoteHub simplifies the process of adding, editing, and deleting notes, catering to both tech-savvy users and beginners alike. Enjoy real-time updates, ensuring your thoughts are securely saved as you work.`,
        tags: ["HTML", "CSS", "JS"],
        link: "https://hariom01010.github.io/keeper/"
    }
]

const skills = [
    {
        id: 1,
        skillName: "HTML5",
        expertise: "96%"
    },
    {
        id:2,
        skillName: "CSS3",
        expertise: "92%"
    },
    {
        id:3,
        skillName: "JavaScript",
        expertise: "92%"
    },
    {
        id:4,
        skillName: "React & Redux",
        expertise: "88%"
    }
]

const contacts=[
    {
        id:1,
        contact: "rishivashista4@gmail.com",
        icon: <MdOutlineMail size={23} />,
        link: "mailto:rishivashista4@gmail.com"
    },
    {
        id:2,
        contact: "+91 85951 25137",
        icon: <FaPhoneAlt size={23} />,
        link: "https://api.whatsapp.com/send/?phone=%2B918595125137&text&type=phone_number&app_absent=0"
    },
    {
        id:3,
        contact: "@HariomVashista",
        icon: <FaXTwitter size={25} />,
        link: "https://twitter.com/HariomVashista"
    },
    {
        id:4,
        contact: "@hariom_vashista",
        icon: <FaInstagram size={25} />,
        link: "https://www.instagram.com/hariom_vashista/"
    },
    {
        id:5,
        contact: "@Hariom Vashista",
        icon: <FaLinkedin size={25} />,
        link: "https://www.linkedin.com/in/hariom-vashista-603436226/"
    }
]

export {info, icons, projects, skills, contacts}