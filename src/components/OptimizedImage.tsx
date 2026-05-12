import { memo } from 'react'
import { motion } from 'framer-motion'

interface OptimizedImageProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
  containerClassName?: string
  animationDelay?: number
}

export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  priority = false,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  animationDelay = 0,
}: OptimizedImageProps) {
  return (
    <motion.div
      className={containerClassName}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      viewport={{ once: true, margin: '50px' }}
    >
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
    </motion.div>
  )
})

OptimizedImage.displayName = 'OptimizedImage'
