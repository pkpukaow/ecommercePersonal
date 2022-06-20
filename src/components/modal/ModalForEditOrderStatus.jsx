import { Dialog, Transition } from "@headlessui/react";
import axios from "../../config/axios";
import { Fragment, useState } from "react";

function ModalForEditOrderStatus({ status, setOrder, idx, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSelector, setCurrentSelector] = useState(status);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSaveStatus = async (e) => {
    e.preventDefault();
    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      newOrder[idx].status = e.target.value;
      return newOrder;
    });
    console.log(id);
    await axios.patch("/carts", { status: currentSelector, id });
  };

  const handleSelectInput = (e) => {
    setCurrentSelector(e.target.value);
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-1 text-lg font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Status : {status}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                {/*----------------- TOP HEADER -----------------*/}
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold pb-1 text-center leading-6 text-gray-900"
                  ></Dialog.Title>

                  {/*----------------- Button -----------------*/}
                  <form onSubmit={handleSaveStatus} className="mt-8">
                    <div className="text-center pb-6">
                      <label className="mr-4 font-semibold text-lg">
                        Select Status
                      </label>
                      <select onChange={handleSelectInput} className="rounded">
                        <option value="">Choose One</option>
                        <option value="pending">Pending</option>
                        <option value="success">Completed</option>
                        <option value="failed">Failed</option>
                      </select>
                    </div>
                    <div className="flex justify-around items-center">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ModalForEditOrderStatus;
