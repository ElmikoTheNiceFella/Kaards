'use client'
import { motion } from 'framer-motion';
import Card from './Card';
import Articles from '../assets/Articles.png'
import { useState, useRef, useEffect } from 'react';

function Carousel() {

  const carousel = useRef(null);
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    if (carousel.current !== null) {
      const valDomNode:HTMLElement = carousel.current;
      setValue(valDomNode.scrollWidth - valDomNode.offsetWidth);
    }
  }, [])
  

  return (
    <motion.div ref={carousel} className="overflow-hidden mt-16 flex">
      <motion.div drag="x" dragConstraints={{
        right: 0,
        left: -value!
      }} className="flex gap-8">
        {Array.from({ length: 4 }).map((_) => (
          <Card
            author="Developer"
            image={Articles}
            title="The Beauty Of Articles"
            description="Articles, the building blocks of written communication, possess a unique allure that captivates both readers and writers alike. With each carefully chosen word, articles weave a tapestry of thoughts, ideas, and stories, drawing readers into a world of imagination. Their ability to inform, entertain, and enlighten is a testament to their beauty, as they bridge the gap between knowledge and curiosity. Articles empower writers to express their creativity and expertise, molding language into a symphony of meaning that resonates with readers across the globe. In a world inundated with information, the beauty of articles lies in their power to inspire, educate, and spark a lasting connection through the art of written expression."
          />
        ))}
      </motion.div>
      <div style={{
        background: "linear-gradient(-90deg, rgba(255,255,255,0.5), transparent)"
      }} className='absolute h-full w-12 right-24'></div>
    </motion.div>
  );
}

export default Carousel