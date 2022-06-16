import { useRef, useState } from "react";
import qrPicture from "../assets/picforbg/287404145_590870416078084_4552991120922644602_n.jpg";
import ModalForEditAddress from "../components/modal/ModalForEditAddress";

function PurchasePage() {
  const fileRef = useRef(null);
  const [address, setAddress] = useState("");
  const [qrSlip, setQrSlip] = useState(null);
  const [qrSlipSrc, setQrSlipSrc] = useState(false);

  const handleSubmitSlip = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-pink-300 p-5">
      {/* TOP DIV */}
      <div className="mx-auto border border-black w-[60vw] h-40">
        <div className="text-center text-3xl font-semibold py-2">
          Delivery Address
        </div>
        <div className="flex justify-between p-7">
          <div className="flex flex-col items-center font-medium text-lg">
            <h1>Customer Name</h1>
            <h1>Telephone Number</h1>
          </div>
          <div className="flex flex-col items-center font-medium text-lg">
            <h1>Address</h1>
            <h1>123 Mint Tower</h1>
          </div>
          <div className="flex flex-col items-center">
            <ModalForEditAddress address={address} setAddress={setAddress} />
          </div>
        </div>
      </div>
      {/* BOTTOM DIV */}
      <div className="mx-auto border border-black w-[60vw] mt-10 h-76 flex justify-between">
        <div className="w-[300px]">
          <img src={qrPicture} />
        </div>
        <form onSubmit={handleSubmitSlip} className="mr-36 mt-5">
          <div className="gap-3 flex flex-col items-center">
            <h1 className="text-3xl font-semibold">QR for Purchase</h1>
            <h3 className="text-xl font-medium">Ratchapon Lovitayanon</h3>
            <h3 className="text-xl font-medium">฿66666</h3>
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
              type="submit"
              className="font-semibold text-white bg-sky-300 hover:bg-blue-800 rounded my-5 py-2 px-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PurchasePage;
