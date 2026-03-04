'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

type ModalProps = {
  title?: string;
  children: ReactNode;
  onClose?: () => void;
};

export default function Modal({ title, children, onClose }: ModalProps) {
  const router = useRouter();

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      router.back(); // better than push("/projects")
    }
  };

  return (
    <Dialog.Root open onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]' />

        <Dialog.Content
          style={{ zIndex: 999 }}
          className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-55 bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-xl w-[90vw] max-w-lg'
        >
          <div className='flex items-center justify-between mb-4'>
            {title && (
              <Dialog.Title className='text-xl font-bold dark:text-white'>{title}</Dialog.Title>
            )}

            <Dialog.Close asChild>
              <button
                aria-label='Close'
                className='text-gray-500 dark:text-white hover:text-black dark:hover:text-white transition'
              >
                ✕
              </button>
            </Dialog.Close>
          </div>

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
