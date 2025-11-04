import BottomPart from "./leftParts/BottomPart";
import MiddlePart from "./leftParts/MiddlePart";
import TopPart from "./leftParts/TopPart";

function LeftPart() {
  return (
    <div className="h-full flex flex-col px-4 py-4">
      <TopPart />
      <div className="flex-1 overflow-y-auto">
        <MiddlePart />
      </div>
      <BottomPart />
    </div>
  );
}

export default LeftPart;
