'use client';

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

// Define feelings with emojis
const feelings = [
  { name: 'Happy', emoji: '😊' },
  { name: 'Sad', emoji: '😢' },
  { name: 'Excited', emoji: '🤩' },
  { name: 'Angry', emoji: '😡' },
  { name: 'Loved', emoji: '🥰' },
  { name: 'Blessed', emoji: '🙏' },
  { name: 'Thankful', emoji: '😇' },
  { name: 'Tired', emoji: '😴' },
  { name: 'Sick', emoji: '🤒' },
  { name: 'Worried', emoji: '😟' },
  { name: 'Confused', emoji: '😕' },
  { name: 'Hopeful', emoji: '🤞' },
  { name: 'Motivated', emoji: '💪' },
  { name: 'Relaxed', emoji: '😌' },
  { name: 'Hungry', emoji: '🍔' },
  { name: 'Bored', emoji: '😒' },
  { name: 'Silly', emoji: '🤪' },
  { name: 'Surprised', emoji: '😮' },
  { name: 'Proud', emoji: '🥲' },
  { name: 'Grateful', emoji: '🙌' },
];

interface FeelingProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (feeling: string, emoji: string) => void;
}

export default function FeelingSelector({ isOpen, onClose, onSelect }: FeelingProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                >
                  How are you feeling?
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </Dialog.Title>
                
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {feelings.map((feeling) => (
                    <button
                      key={feeling.name}
                      className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100"
                      onClick={() => {
                        onSelect(feeling.name, feeling.emoji);
                        onClose();
                      }}
                    >
                      <span className="text-2xl">{feeling.emoji}</span>
                      <span className="text-sm mt-1">{feeling.name}</span>
                    </button>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
