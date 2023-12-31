"use client"

import { Dialog, DialogHeading, useDialogStore } from '@/components/ui';
import { useRouter } from 'next/navigation';
import { useIsMounted } from 'usehooks-ts';
import { AnimatePresence, motion } from 'framer-motion';

// import css from './modal.module.css';


import { CloseDialog } from '@/components/functions';

const PhotoModal = ({ children }) => {
  const dialog = useDialogStore({
    open: true,
    animated: true,
    setOpen: (open) => !open && close(),
  });
  const router = useRouter();
  const isMounted = useIsMounted();

  const close = () => router.back();

  return (
    <AnimatePresence init="false" mode="wait">
      {isMounted && (
        <Dialog
          store={dialog}
          alwaysVisible
          className="dialog"
          backdrop={
            <motion.div
              className="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          }
          autoFocusOnHide={(element) => {
            if (!element) {
              const selector = `[href="${pathname}"]`;
              const finalFocus = document.querySelector(selector);
              finalFocus?.focus();
            }
            return true;
          }}
          render={
            <motion.div
              initial={{ opacity: 0, x: '-50%', y: '-50%', scale: 0.8, transition: { duration: '100ms' } }}
              animate={{ opacity: 1, x: '-50%', y: '-50%', scale: 1 }}
              exit={{ opacity: 0, x: '-50%', y: '-50%', scale: 0.95 }}
            />
          }
        >
          <DialogHeading className="absolute top-0 right-0 z-10">
            <CloseDialog />
          </DialogHeading>
          
          {children}
        </Dialog>
      )}
    </AnimatePresence>
  )
}

export default PhotoModal;