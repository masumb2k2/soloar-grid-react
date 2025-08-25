import React from 'react'
export default function Button({ children, variant='primary', className='', ...props }) {
  const base = 'btn h-11 px-5 rounded-xl'
  const styles = variant === 'primary' ? 'btn-primary' : 'btn-outline'
  return <button className={`${base} ${styles} ${className}`} {...props}>{children}</button>
}
