import { Dialog, Transition } from "@headlessui/react";
import { useRef } from "react";
import { Fragment, useState } from "react";
import ModalForEditAddress from "./ModalForEditAddress";

import defaultPic from "../../assets/picforbg/287404145_590870416078084_4552991120922644602_n.jpg";

function ModalForPurchase({
  currentAddress,
  setCurrentAddress,
  userData,
  qrSlip,
  setQrSlip,
  qrSlipSrc,
  setQrSlipSrc,
  totalPrice,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");

  const fileRef = useRef(null);

  const handleSubmitSlip = (e) => {
    e.preventDefault();
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="font-semibold text-white bg-sky-300 hover:bg-blue-800 rounded py-2 px-3"
        >
          Add Slip
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
                <Dialog.Panel className="min-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold pb-6 text-center leading-6 text-gray-900"
                  >
                    <div className="mx-auto border border-black w-[60vw] h-40">
                      <div className="text-center text-3xl font-semibold py-2">
                        Delivery Address
                      </div>
                      <div className="flex justify-between p-7">
                        <div className="flex flex-col items-center font-medium text-lg">
                          <h1>
                            {userData?.firstName} {userData?.lastName}
                          </h1>
                          <h1>{userData?.phoneNumber}</h1>
                        </div>
                        <div className="flex flex-col items-center font-medium text-lg">
                          <h1>Address</h1>
                          <h1>{currentAddress}</h1>
                        </div>
                        <div className="flex flex-col items-center">
                          <ModalForEditAddress
                            setCurrentAddress={setCurrentAddress}
                            address={address}
                            setAddress={setAddress}
                          />
                        </div>
                      </div>
                    </div>
                  </Dialog.Title>

                  {/*----------------- Button -----------------*/}
                  <div className="mx-auto border border-black w-[60vw] mt-10 h-76 flex justify-between">
                    <div className="w-[300px]">
                      <img src={defaultPic} />
                    </div>
                    <div onSubmit={handleSubmitSlip} className="mr-36 mt-5">
                      <div className="gap-3 flex flex-col items-center">
                        <h1 className="text-3xl font-semibold">
                          QR for Purchase
                        </h1>
                        <h3 className="text-xl font-medium">
                          Ratchapon Lovitayanon
                        </h3>
                        <h3 className="text-xl font-medium">฿{totalPrice}</h3>
                        <input
                          onChange={(e) => {
                            setQrSlip(e.target.files);
                            setQrSlipSrc(true);
                          }}
                          type="file"
                          className="hidden"
                          ref={fileRef}
                        />
                        <button
                          onClick={() => fileRef.current.click()}
                          className="font-semibold text-white bg-sky-300 hover:bg-blue-800 rounded py-2 px-3"
                        >
                          {qrSlipSrc ? "Slip Ready!" : "Choose Slip"}
                        </button>
                        <button
                          onClick={closeModal}
                          type="button"
                          className="font-semibold text-white bg-sky-300 hover:bg-blue-800 rounded my-5 py-2 px-3"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ModalForPurchase;
