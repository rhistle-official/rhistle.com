"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const VisionContent = () => {
  const t = useTranslations("Vision");

  const coreValues = [
    {
      title: t("coreValues.0.title"),
      subtitle: t("coreValues.0.subtitle"),
      description: t("coreValues.0.description"),
      icon: "⚡",
      color: "from-blue-500 to-cyan-500",
      gradient: "from-blue-50 to-cyan-50"
    },
    {
      title: t("coreValues.1.title"),
      subtitle: t("coreValues.1.subtitle"),
      description: t("coreValues.1.description"),
      icon: "🎯",
      color: "from-purple-500 to-pink-500",
      gradient: "from-purple-50 to-pink-50"
    },
    {
      title: t("coreValues.2.title"),
      subtitle: t("coreValues.2.subtitle"),
      description: t("coreValues.2.description"),
      icon: "📈",
      color: "from-emerald-500 to-teal-500",
      gradient: "from-emerald-50 to-teal-50"
    }
  ];
  
  const techFeatures = [
    {
      icon: "🔗",
      title: t("techFeatures.0.title"),
      description: t("techFeatures.0.description")
    },
    {
      icon: "🤖",
      title: t("techFeatures.1.title"),
      description: t("techFeatures.1.description")
    },
    {
      icon: "☁️",
      title: t("techFeatures.2.title"),
      description: t("techFeatures.2.description")
    },
    {
      icon: "🔒",
      title: t("techFeatures.3.title"),
      description: t("techFeatures.3.description")
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    hover: { 
      scale: 1.02, 
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  const glitchVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/image/com_1.png"
          alt="비전 & 미션"
          fill
          className="object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        
        {/* Digital Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="text-center space-y-8">
            <motion.div
              variants={glitchVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {t("heroTitle")}
              </h1>
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="whitespace-pre-line">
                {t("heroDesc")}
              </p>
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="relative -mt-20 lg:px-8 xl:px-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Vision & Mission Section */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl border border-gray-800 overflow-hidden"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 px-8 py-12 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 animate-pulse" style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,255,255,0.3) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 20%, rgba(147,51,234,0.3) 0%, transparent 50%)`
                }} />
              </div>
              
              <motion.div 
                className="text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  {t("vm.title")}
                </h2>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Vision */}
                <motion.div
                  className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-2xl p-8 border border-blue-800/50"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white">{t("vm.vision.label")}</h3>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {t("vm.vision.text")}
                  </p>
                </motion.div>

                {/* Mission */}
                <motion.div
                  className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-800/50"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white">{t("vm.mission.label")}</h3>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {t("vm.mission.text")}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Core Values Section */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl border border-gray-800 overflow-hidden"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t("core.title")}
                </h2>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                  {t("core.subtitle")}
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
              >
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-br ${value.gradient} rounded-2xl p-8 shadow-lg border border-gray-700`}
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <span className="text-2xl">{value.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 text-center font-medium">
                      {value.subtitle}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed text-center">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Technology Features */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl border border-gray-800 overflow-hidden"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-orange-600 to-red-600 px-8 py-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t("tech.title")}
                </h2>
                <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                  {t("tech.subtitle")}
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
              >
                {techFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 text-center"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div 
        className="py-20 px-8 lg:px-16"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              {t("cta.title")}
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              {t("cta.subtitle")}
            </p>
            <motion.button 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("cta.button")}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default VisionContent;
