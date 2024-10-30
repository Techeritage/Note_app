import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Plus from "../assets/add.svg";
import { AnimatePresence, motion } from "framer-motion";

function DeleteModal({ loading, isOpen, setIsOpen, deleteNote }) {
  return (
    <>
      <button
        className="fixed bottom-10 right-[3%] md:right-[10%] text-white w-14 flex items-center justify-center shadow-md transition-transform duration-150 ease-out hover:translate-y-[-10px] text-4xl h-14 bg-blue-500 rounded-full"
        onClick={() => setIsOpen(true)}
      >
        <img src={Plus} alt="plus icon" className="w-7 h-7" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30"
            />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-lg bg-white min-w-[90vw] lg:min-w-[400px] p-7 rounded-xl"
              >
                <DialogTitle className="text-lg font-bold mb-1">
                  Delete Note
                </DialogTitle>
                <Description>Are you sure you want to delete note?</Description>

                <div className="grid grid-cols-2 gap-3 mt-10">
                  <button onClick={() => setIsOpen(false)}>Cancel</button>
                  <button
                    className="bg-red-500 w-full h-11 rounded-lg text-white font-medium"
                    onClick={deleteNote}
                  >
                    {loading ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}

export default DeleteModal;
