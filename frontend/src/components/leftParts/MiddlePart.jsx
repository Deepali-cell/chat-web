import User from "./User";

function MiddlePart() {
  return (
    <>
      <div className="w-full">
        <h1 className="">Messages</h1>
        <div
          className="scroll-container pt-2"
          style={{ maxHeight: "calc(84vh - 10vh)" }}
        >
          <User />
        </div>
      </div>
    </>
  );
}

export default MiddlePart;
