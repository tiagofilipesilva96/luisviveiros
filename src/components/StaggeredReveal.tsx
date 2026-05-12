import { motion } from 'framer-motion'
import React from 'react'

interface StaggeredRevealProps {
  children: React.ReactNode[]
  delay?: number
  stagger?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

export function StaggeredReveal({
  children,
  delay = 0,
  stagger = 0.1,
  direction = 'up',
  duration = 0.5,
}: StaggeredRevealProps) {
  const directionVariants = {
    up: { initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    down: { initial: { y: -40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    left: { initial: { x: 40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: -40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  }

  const variants = directionVariants[direction]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: variants.initial,
    visible: {
      ...variants.animate,
      transition: { duration },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '50px' }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
