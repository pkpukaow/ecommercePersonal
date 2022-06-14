import CommentBoxforMap from "./CommentBoxforMap";

function CommentItem() {
  return (
    <div className="bg-pink-300">
      <div className="px-[250px] pb-6">
        <h1 className="font-bold py-5 text-4xl">Comment</h1>
        <div className=" grid grid-rows-3">
          <CommentBoxforMap />
          <CommentBoxforMap />
          <CommentBoxforMap />
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
