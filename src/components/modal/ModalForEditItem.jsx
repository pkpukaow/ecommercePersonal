import { Dialog, Transition } from "@headlessui/react";
import axios from "../../config/axios";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

function ModalForEditItem() {
  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [brand, setBrand] = useState("");
  const [animeName, setAnimeName] = useState("");
  const [charactorName, setCharactorName] = useState("");
  const [copyRight, setCopyRight] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [status, setStatus] = useState("");

  function closeModal() {
    setIsOpen(false);
    setBrand("");
    setAnimeName("");
    setCharactorName("");
    setCopyRight("");
    setDetail("");
    setPrice("");
    setReleaseDate("");
    setStatus("");
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.patch("/items/" + id, {
        brand,
        animeName,
        charactorName,
        copyRight,
        price,
        detail,
        releaseDate,
        status,
      });
      setBrand("");
      setAnimeName("");
      setCharactorName("");
      setCopyRight("");
      setDetail("");
      setPrice("");
      setReleaseDate("");
      setStatus("");
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-lg font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Edit this Item
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
                    className="text-2xl font-semibold pb-6 text-center leading-6 text-gray-900"
                  >
                    Edit this Item
                  </Dialog.Title>

                  {/*----------------- Edit INPUT -----------------*/}
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-rows-8 gap-4 font-semibold text-lg">
                      <div className="grid grid-cols-12">
                        <label className="col-span-4 self-center">Brand</label>
                        <input
                          value={brand}
                          onChange={(e) => setBrand(e.target.value)}
                          className="rounded col-span-8"
                          type="text"
                        />
                      </div>
                      <div className="grid grid-cols-12">
                        <label className="col-span-4 self-center">
                          Anime Title
                        </label>
                        <input
                          value={animeName}
                          onChange={(e) => setAnimeName(e.target.value)}
                          className="rounded col-span-8"
                          type="text"
                        />
                      </div>
                      <div className="grid grid-cols-12">
                        <label className="col-span-4 self-center">
                          Charactor
                        </label>
                        <input
                          value={charactorName}
                          onChange={(e) => setCharactorName(e.target.value)}
                          className="rounded col-span-8"
                          type="text"
                        />
                      </div>
                      <div className="grid grid-cols-12">
                        <label className="col-span-4 self-center">Price</label>
                        <input
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          className="rounded col-span-8"
                          type="text"
                        />
                      </div>
                      <div className="grid grid-cols-12">
                        <label className="col-span-4 self-center">
                          Copyright
                        </label>
                        <input
                          value={copyRight}
                          onChange={(e) => setCopyRight(e.target.value)}
                          className="rounded col-span-8"
                          type="text"
                        />
                      </div>
                      <div className="grid grid-cols-12">
                        <label className="col-span-4 self-center">Detail</label>
                        <input
                          value={detail}
                          onChange={(e) => setDetail(e.target.value)}
                          className="rounded col-span-8"
                          type="text"
                        />
                      </div>
                      <div className="grid grid-cols-12">
                        <label className="col-span-4 self-center">
                          Release Date
                        </label>
                        <input
                          value={releaseDate}
                          onChange={(e) => setReleaseDate(e.target.value)}
                          className="rounded col-span-8"
                          type="date"
                        />
                      </div>
                      <div className="grid grid-cols-12">
                        <label className="col-span-4 self-center">Status</label>
                        <select
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                          className="rounded col-span-8"
                        >
                          <option value="">Select Status</option>
                          <option value="preorder">Pre-Order</option>
                          <option value="instock">In-stock</option>
                          <option value="soldout">Sold-Out</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-around">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Submit Edit
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

export default ModalForEditItem;
