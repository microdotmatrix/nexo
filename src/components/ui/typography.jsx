"use client"

import clsx from 'clsx';
import Balancer from 'react-wrap-balancer';

const Heading = ({
  as: Component = 'h2',
  children,
  className = '',
  format,
  size = 'heading',
  width = 'default',
  ...props
}) => {
  const sizes = {
    giant: 'font-bold uppercase tracking-widest text-4xl md:text-5xl lg:text-7xl leading-loose text-goth-500',
    heading: 'font-bold uppercase tracking-tight lg:tracking-wider leading-9 lg:leading-tight text-goth-400',
    sub: 'font-semibold md:text-xl lg:text-2xl tracking-wide leading-normal text-goth-300'
  }
  const widths = {
    default: 'max-w-2xl',
    narrow: 'max-w-lg',
    wide: 'max-w-full'
  }
  const styles = clsx(
    sizes[size],
    widths[width],
    className
  )
  return (
    <Component {...props} className={styles}>
      <Balancer>{children}</Balancer>
    </Component>
  )
}

const Quote = ({
  as: Component = 'blockquote',
  children,
  className = '',
  format,
  size = 'quote',
  width = 'default',
  ...props
}) => {
  const sizes = {
    quote: 'font-normal leading-relaxed tracking-wide text-lg text-goth-400 italic',
    callout: 'font-semibold leading-loose tracking-wider text-2xl text-goth-600',
    testimonial: 'font-normal leading-relaxed tracking-wide text-lg text-goth-400 indent-4',
  }
  const widths = {
    default: 'max-w-xl',
    narrow: 'max-w-md',
    wide: 'max-w-2xl'
  }
  const styles = clsx(
    sizes[size],
    widths[width],
    className
  )
  return (
    <Component {...props} className={styles}>
      <Balancer>{children}</Balancer>
    </Component>
  )
}

export { Heading, Quote }
