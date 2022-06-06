function BotDetail() {
  return (
    <div className="bg-pink-300">
      <div className="px-[250px] pb-6">
        <h1 className="font-bold py-5 text-4xl">About this item</h1>
        <div className="grid grid-4 gap-2">
          <div className="grid grid-cols-5">
            <h1 className="font-semibold">Item Code</h1>
            <h1 className="text-gray-500 font-medium col-span-2">11223344</h1>
          </div>
          <div className="grid grid-cols-5">
            <h1 className="font-semibold">Release Date</h1>
            <h1 className="text-gray-500 font-medium col-span-2">FEB-2023</h1>
          </div>
          <div className="grid grid-cols-5">
            <h1 className="font-semibold">Brand</h1>
            <h1 className="text-gray-500 font-medium col-span-2">Apex</h1>
          </div>
          <div className="grid grid-cols-5">
            <h1 className="font-semibold">Anime Title</h1>
            <h1 className="text-gray-500 font-medium col-span-2">
              Genshin impact
            </h1>
          </div>
          <div className="grid grid-cols-5">
            <h1 className="font-semibold">Charactor Name</h1>
            <h1 className="text-gray-500 font-medium col-span-2">Ganyu</h1>
          </div>
          <div className="grid grid-cols-5">
            <h1 className="font-semibold">Copyright</h1>
            <h1 className="text-gray-500 font-medium col-span-2">
              miHoYo All Rights Reserved
            </h1>
          </div>
          <div className="grid grid-cols-5">
            <h1 className="font-semibold">Detail</h1>
            <h1 className="text-gray-500 font-medium col-span-2">
              Pre-painted Complete Figure Scale: 1/7 Size: H22cm (including the
              base), Approx. W13cm Material: PVC & ABS
            </h1>
          </div>
        </div>
      </div>
      <div className="py-5">
        <hr className="border border-black mx-[180px]" />
      </div>
    </div>
  );
}

export default BotDetail;
