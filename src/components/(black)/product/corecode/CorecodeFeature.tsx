"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const SolutionFeature = () => {
  const t = useTranslations("SolutionFeature");
  const features = t.raw("features") as { icon: string; title: string; description: string; color: string }[];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="space-y-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div 
        className="text-center"
        variants={fadeInUp}
      >
        <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
          <span className="text-[#78b237]">Key Features</span>
        </h2>
      </motion.div>

      {/* 특징 카드들 */}
      <motion.div 
        className="space-y-8"
        variants={staggerContainer}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.color} p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 text-5xl">{feature.icon}</div>
              <div className="flex-1">
                <h3 className="mb-4 text-2xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#78b237]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SolutionFeature;