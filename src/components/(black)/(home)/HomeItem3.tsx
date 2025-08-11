"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BusinessCarousel from "./BusinessCarousel";
import SimpleServiceCard from "./SimpleServiceCard";
import { useTranslations } from "next-intl";

const HomeItem3 = () => {
  const { ref, inView } = useInView();
  const t = useTranslations("HomeItem3");
  const services = [
    {
      titleKey: "services.corecode.title",
      descriptionKey: "services.corecode.description",
      featuresKey: "services.corecode.features",
      link: "/product/corecode",
      color: "from-blue-500 to-cyan-500"
    },
    {
      titleKey: "services.vexi.title",
      descriptionKey: "services.vexi.description",
      featuresKey: "services.vexi.features",
      link: "/product/vexi",
      color: "from-emerald-500 to-teal-500"
    },
    {
      titleKey: "services.mexi.title",
      descriptionKey: "services.mexi.description",
      featuresKey: "services.mexi.features",
      link: "/product/mexi",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div ref={ref} className="space-y-12 text-center">
      <motion.div 
        className="text-2xl font-extrabold lg:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={inView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        BUSINESS
      </motion.div>
      <div className="space-y-6 lg:space-y-12">
        <motion.div 
          className="text-lg font-semibold md:text-3xl lg:text-5xl text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t("headline")}
        </motion.div>
        <motion.p 
          className="text-base text-gray-300 md:text-lg lg:text-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t("description")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href={"/"}
            className="inline-block rounded-4xl border border-gray-600 px-3 py-2 text-sm transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-3 md:text-lg lg:p-[1rem] lg:text-xl"
          >
            {t("moreButton")}
          </Link>
        </motion.div>
      </div>
      
      {/* 서비스 카드 섹션 */}
      <div className="space-y-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-xl font-bold md:text-2xl lg:text-3xl mb-4 text-white">
            {t("solutionsTitle")}
          </h3>
          <p className="text-gray-300 md:text-lg">
            {t("solutionsDescription")}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView && { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <SimpleServiceCard
                title={t(service.titleKey)}
                description={t(service.descriptionKey)}
                features={t.raw(service.featuresKey)}
                link={service.link}
                color={service.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <BusinessCarousel />
      </motion.div>
    </div>
  );
};

export default HomeItem3;