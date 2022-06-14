function CommentBoxforMap() {
  return (
    <div className="border border-black my-3">
      <div className="flex gap-3 p-2 justify-around">
        <div className="flex flex-col pr-10 gap-1 justify-center">
          <h1 className="text-2xl font-bold">Username</h1>
          <h2 className="text-xl font-medium">2022-10-6</h2>
          <h3 className="text-lg text-gray-600">This grill is so cutie :3</h3>
        </div>
        <div className="rounded-full w-28 h-28 bg-white"></div>
      </div>
    </div>
  );
}

export default CommentBoxforMap;
