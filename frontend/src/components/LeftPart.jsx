import BottomPart from "./leftParts/BottomPart";
import MiddlePart from "./leftParts/MiddlePart";
import TopPart from "./leftParts/TopPart";

function LeftPart() {
  return (
    <div className="px-4 py-6 text-white w-[30%] bg-black">
      <TopPart />
      <MiddlePart />
      <BottomPart />
    </div>
  );
}

export default LeftPart;
