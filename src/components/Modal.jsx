import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Plus from "../assets/add.svg";
import { AnimatePresence, motion } from "framer-motion";
import Input from "./Input";

function Modal({
  form,
  setForm,
  addNote,
  loading,
  isOpen,
  setIsOpen,
  editNote,
  formType,
  setFormType,
}) {
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
            onClose={() => {
              setFormType("Create");
              setIsOpen(false);
            }}
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
                className="max-w-lg space-y-4 bg-white min-w-[90vw] lg:min-w-[400px] p-7 rounded-xl"
              >
                <DialogTitle className="text-lg font-bold">
                  {formType === "Create" ? "Create A New Note" : "Edit Note"}
                </DialogTitle>
                <Input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Note Title"
                  className="p-4"
                />
                <textarea
                  value={form.content}
                  onChange={(e) =>
                    setForm({ ...form, content: e.target.value })
                  }
                  placeholder="Note Description"
                  className="border border-neutral-300 p-4 min-h-[100px] min-w-full focus:outline-none rounded-lg focus:ring-1 focus:ring-blue-500"
                />

                <div className="mt-5">
                  <button
                    className="bg-blue-500 w-full h-11 rounded-lg text-white font-medium"
                    onClick={formType === "Create" ? addNote : editNote}
                  >
                    {formType === "Create"
                      ? loading
                        ? "Creating"
                        : "Create"
                      : loading
                      ? "Editing"
                      : "Edit"}{" "}
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

export default Modal;
