import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFileAlt,
} from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const ProfileCard = ({ index, title, icon, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn("left", "spring", index * 0.3, 0.75)}
    initial="hidden"
    animate="show"
    className="w-full xs:w-[250px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div className="bg-tertiary rounded-[20px] py-8 px-6 min-h-[200px] flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300">
      <div className="mb-4 text-white">{icon}</div>
      <h3 className="text-white text-[18px] font-bold">{title}</h3>
    </div>
  </motion.a>
);

const MyProfile = () => {
  const profileItems = [
    {
      icon: <FaLinkedin size={30} className="text-blue-500" />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/harsh-gupta-220722257/",
    },
    {
      icon: <FaGithub size={30} className="text-white" />,
      title: "GitHub",
      link: "https://github.com/harshgupta287",
    },
    {
      icon: <FaFileAlt size={30} className="text-yellow-400" />,
      title: "Resume",
      link: "https://drive.google.com/file/d/1qHfdeS0JlmWJ5LWT0TG0T1VszWoLk3EE/view?usp=drivesdk",
    },
    {
      icon: <SiLeetcode size={30} className="text-orange-400" />,
      title: "LeetCode",
      link: "https://leetcode.com/u/harshgupta_274402/",
    },
    {
      icon: <SiGeeksforgeeks size={30} className="text-green-500" />,
      title: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/user/harshguptb9cr/",
    },
    {
      icon: <SiCodeforces size={30} className="text-blue-400" />,
      title: "Codeforces",
      link: "https://codeforces.com/profile/harshgupta287",
    },
    {
      icon: <FaInstagram size={30} className="text-pink-500" />,
      title: "Instagram",
      link: "https://www.instagram.com/harshgupta.287/",
    },
    {
      icon: <FaTwitter size={30} className="text-blue-400" />,
      title: "Twitter",
      link: "https://x.com/HarshGu81321060",
    },
  ];

  return (
    <>
      <motion.div
        variants={textVariant(0)}
        initial="hidden"
        animate="show"
        className="text-center"
      >
        <h2 className={`${styles.sectionHeadText}`}>My Profile</h2>
      </motion.div>

      <div className="m-20 flex flex-wrap gap-10 justify-center">
        {profileItems.map((item, index) => (
          <ProfileCard
            key={index}
            index={index}
            title={item.title}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
};

export default MyProfile;
