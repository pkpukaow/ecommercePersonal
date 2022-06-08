function BotDetail({ data }) {
  return (
    <div className="bg-pink-300">
      <div className="px-[250px] pb-6">
        <h1 className="font-bold py-5 text-4xl">About this item</h1>
        <div className="grid grid-4 gap-2">
          <div className="grid grid-cols-5">
            <h1 className="font-semibold">Item Code</h1>
            <h1 className="text-gray-500 font-medium col-span-2">{data?.id}</h1>
          </div>
          <div className="grid grid-cols-5">
            <h1 className="font-semibold">Release Date</h1>
            <h1 className="text-gray-500 font-medium col-span-2">
              {data?.releaseDate}
            </h1>
          </div>
          <div className="grid grid-cols-5">
            <h1 className="font-semibold">Brand</h1>
            <h1 className="text-gray-500 font-medium col-span-2">
              {data?.brand}
            </h1>
          </div>
          <div className="grid grid-cols-5">
            <h1 className="font-semibold">Anime Title</h1>
            <h1 className="text-gray-500 font-medium col-span-2">
              {data?.animeName}
            </h1>
          </div>
          <div className="grid grid-cols-5">
            <h1 className="font-semibold">Charactor Name</h1>
            <h1 className="text-gray-500 font-medium col-span-2">
              {data?.charactorName}
            </h1>
          </div>
          <div className="grid grid-cols-5">
            <h1 className="font-semibold">Copyright</h1>
            <h1 className="text-gray-500 font-medium col-span-2">
              {data?.copyRight}
            </h1>
          </div>
          <div className="grid grid-cols-5">
            <h1 className="font-semibold">Detail</h1>
            <h1 className="text-gray-500 font-medium col-span-2">
              {data?.detail}
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
