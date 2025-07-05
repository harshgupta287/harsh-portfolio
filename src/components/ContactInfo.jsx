import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

const ContactCard = ({ index, title, icon, value }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.3, 0.75)}
    initial="hidden"
    animate="show"
    className="w-full xs:w-[250px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div className="bg-tertiary rounded-[20px] py-8 px-6 min-h-[200px] flex flex-col items-center justify-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-white text-[18px] font-bold">{title}</h3>
      <p className="text-secondary text-[14px] mt-2">{value}</p>
    </div>
  </motion.div>
);

const ContactInfo = () => {
  const infoItems = [
    {
      icon: <FaPhoneAlt size={30} className="text-red-500 mb-2" />,
      title: "Call Me On",
      value: "+91 9554828612",
    },
    {
      icon: <FaMapMarkerAlt size={30} className="text-red-500 mb-2" />,
      title: "Place",
      value: "Surat",
    },
    {
      icon: <FaEnvelope size={30} className="text-red-500 mb-2" />,
      title: "E-Mail",
      value: "harshgupta274402@gmail.com",
    },
    {
      icon: <FaGlobe size={30} className="text-red-500 mb-2" />,
      title: "Website",
      value: "www.wellnest.com",
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
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
      </motion.div>

      <div className="m-20 flex flex-wrap gap-10 justify-center">
        {infoItems.map((item, index) => (
          <ContactCard
            key={index}
            index={index}
            title={item.title}
            icon={item.icon}
            value={item.value}
          />
        ))}
      </div>
    </>
  );
};

export default ContactInfo;
