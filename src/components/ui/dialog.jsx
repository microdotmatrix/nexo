"use client"

import { forwardRef } from 'react';
import * as Ariakit from "@ariakit/react";

export const Dialog = forwardRef(({ open, onClose, ...props }, ref) => {
  const dialog = Ariakit.useDialogStore({
    open,
    setOpen: (open) => !open && onClose?.(),
    animated: true,
  })
  return (
    <Ariakit.Dialog
      store={dialog}
      ref={ref}
      {...props}
    />
  )
})

export { DialogHeading, DialogDismiss, useDialogStore } from '@ariakit/react';