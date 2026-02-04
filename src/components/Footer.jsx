/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-[#0f1f17] text-gray-300 px-6 md:px-20 py-16"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-12 md:grid-cols-4"
      >
        {/* BRAND */}
        <motion.div variants={item}>
          <h3 className="text-xl font-light text-white tracking-wide">
            YogaFlow
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            A mindful yoga platform designed to help you move with awareness,
            breathe with intention, and live with balance.
          </p>
        </motion.div>

        {/* EXPLORE */}
        <motion.div variants={item}>
          <h4 className="text-sm uppercase tracking-widest text-gray-400">
            Explore
          </h4>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/poses", label: "Yoga Poses" },
              { to: "/routines", label: "Routines" },
              { to: "/meditation", label: "Meditation" },
            ].map((link) => (
              <motion.li
                key={link.to}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Link to={link.to} className="hover:text-white">
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* PROGRAMS */}
        <motion.div variants={item}>
          <h4 className="text-sm uppercase tracking-widest text-gray-400">
            Programs
          </h4>
          <ul className="mt-6 space-y-3 text-sm text-gray-400">
            {[
              "Beginner Yoga",
              "Flexibility Flow",
              "Mindfulness Challenge",
              "Daily Calm Practice",
            ].map((program) => (
              <motion.li
                key={program}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="hover:text-white cursor-default"
              >
                {program}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div variants={item}>
          <h4 className="text-sm uppercase tracking-widest text-gray-400">
            Connect
          </h4>
          <ul className="mt-6 space-y-3 text-sm text-gray-400">
            {["hello@yogaflow.com", "Instagram", "YouTube", "Privacy Policy"].map(
              (itemText) => (
                <motion.li
                  key={itemText}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="hover:text-white cursor-default"
                >
                  {itemText}
                </motion.li>
              )
            )}
          </ul>
        </motion.div>
      </motion.div>

      {/* BOTTOM */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="border-t border-white/10 mt-16 pt-8 text-sm flex flex-col md:flex-row items-center justify-between"
      >
        <p className="text-gray-400">
          © 2026 YogaFlow. All rights reserved.
        </p>

        <p className="mt-4 md:mt-0 text-gray-500 text-xs">
          Flow into peace, one pose at a time.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
