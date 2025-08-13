"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import {  RocketIcon  } from "lucide-react";
import { useTranslations } from "next-intl"; 

const History = () => {
  const [expandedProduct, setExpandedProduct] = useState<string[]>([]);
  const t = useTranslations("history");

  const historyData = useMemo(() => {
    return [
      {
        product: t("product"),
        highlights: t.raw("highlights"),
        histories: t.raw("histories") 
      }
    ];
  }, [t]);

  const handleToggle = (productName: string) => {
    setExpandedProduct(prev =>
      prev.includes(productName)
        ? prev.filter(p => p !== productName) // 접기
        : [...prev, productName]             // 펼치기
    );
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
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

  return (
    <motion.div 
      className="space-y-12"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {historyData.map((product) => (
        <motion.div 
          key={product.product}
          className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 overflow-hidden"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          {/* Product Header */}
          <motion.div 
            className="flex items-center justify-between mb-8 cursor-pointer"
            onClick={() =>
              setExpandedProduct(prev =>
                prev.includes(product.product)
                  ? prev.filter(p => p !== product.product)
                  : [...prev, product.product]
              )
            }
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center shadow-md">
                <RocketIcon className="w-6 h-6 text-emerald-600" />,
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{product.product}</h3>
              </div>
            </div>
           

            <motion.div
              animate={{ rotate: expandedProduct.includes(product.product) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>

          {/* 대표 연혁은 접혀있을 때만 보여줌 */}
          {!expandedProduct.includes(product.product) && product.highlights && (
            <div className="space-y-6">
              {product.highlights.map((highlight: any, index: number) => (
                <motion.div 
                  key={index}
                  className="flex ml-12 bg-white rounded-2xl p-6 shadow-md border border-gray-100"
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="mb-3">
                    <span className="text-xl font-bold text-gray-900 mb-4 block">
                      {highlight.date}
                    </span>
                    <motion.ul 
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {highlight.items.map((item: any, itemIndex: number) => (
                        <motion.li 
                          key={itemIndex}
                          className="flex items-start space-x-3 text-gray-700"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.05 }}
                        >
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              ))}
            </div>
          )}


          {/* Timeline */}
          <motion.div 
            className="space-y-6"
            initial={false}
            animate={{ 
              height: expandedProduct.includes(product.product) ? "auto" : 0,
              opacity: expandedProduct.includes(product.product) ? 1 : 0
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {product.histories.map((history: any, historyIndex: number) => (
              <motion.div 
                key={historyIndex}
                className="relative"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: historyIndex * 0.1 }}
              >
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-emerald-600" />
                
                {/* Timeline Dot */}
                <div className="absolute left-4 top-6 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg" />
                
                {/* Content Card */}
                <motion.div 
                  className="ml-12 bg-white rounded-2xl p-6 shadow-md border border-gray-100"
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-2 md:mb-0">
                      <span className="text-xl font-semibold text-gray-800">{history.date}</span>
                    </div>
                  </div>

                  {/* Items */}
                  <motion.ul 
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {history.items.map((item: any, itemIndex: number) => (
                      <motion.li 
                        key={itemIndex}
                        className="flex items-start space-x-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.05 }}
                      >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {!expandedProduct.includes(product.product) && (
            <motion.div 
              className="text-center py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-emerald-600 text-sm font-medium">
                {t("seeMoreHint")}
              </span>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default History;