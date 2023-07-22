"use client"

import { Suspense } from 'react';
import { asModal, Modal, ModalContainer } from '@faceless-ui/modal';
import { useRouter } from 'next/navigation';
import { useIsMounted } from 'usehooks-ts';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
// import { BlurImage } from '@/components/elements';
import { Icon } from '@iconify/react';
import './style.css';

import { css, cx } from '~/styled-system/css';
import { container } from '~/styled-system/patterns';

import { Button } from '@/components/ui';

const PhotoModal = asModal((props, { mediaItem }) => {
  const { modal } = props;
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
              const finalFocus = document.querySelector < HTMLElement > (selector);
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
          <DialogHeading className={css({ position: 'absolute', top: 0, right: 0, zIndex: 10 })}>
            <Button onClick={close} style="ghost" className={css({ zIndex: 10, position: 'relative' })}>
              <Icon icon="mdi:close" width="2rem" />
            </Button>
          </DialogHeading>
          <Suspense fallback={
            <div className={css({ w: '400px', h: '400px', bg: 'gray.500', display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
              <Icon icon="svg-spinners:pulse-multiple" width="4rem" />
            </div>
          }>
            <figure>
              <Image
                src={mediaItem.baseUrl || null}
                alt="Album 1"
                width={900}
                height={900}
                quality={100}
                className="photo"
              />
            </figure>
          </Suspense>
        </Dialog>
      )}
    </AnimatePresence>
  )
}, {slug: mediaItem.filename})

export default PhotoModal;