import User from "./User";

const MiddlePart = () => {
  return (
    <div className="w-full h-full overflow-y-auto mt-2">
      <h1 className="text-lg font-semibold px-1">Messages</h1>
      <div className="pt-2 pb-4">
        <User />
      </div>
    </div>
  );
};

export default MiddlePart;
