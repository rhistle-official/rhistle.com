"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface SimpleServiceCardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  color?: string;
}

const SimpleServiceCard = ({ title, description, features, link, color = "from-blue-500 to-cyan-500" }: SimpleServiceCardProps) => {
  const { ref, inView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView && { opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group"
      whileHover={{ y: -5 }}
    >
      <Link href={link}>
        <div className="h-full rounded-xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-cyan-500/50 relative overflow-hidden">
          {/* 배경 그라데이션 효과 */}
          <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
          
          <div className="relative space-y-4">
            <div className="space-y-2">
              <h3 className={`text-xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                {title}
              </h3>
              <p className="text-gray-300">
                {description}
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-200">주요 기능</h4>
              <ul className="space-y-1">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center text-sm text-gray-400"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView && { opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className={`mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${color}`}></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="pt-2">
              <span className={`text-sm font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent group-hover:underline`}>
                자세히 보기 →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SimpleServiceCard; 