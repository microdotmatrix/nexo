"use client"

import { Icon as Iconify } from '@iconify/react';

const Icon = ({ icon, ...props }) => {
  return <Iconify icon={icon} {...props} />;
}

export default Icon;