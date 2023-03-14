import React, { useState } from "react";
import Stpes from "./Steps";
import { MdDone } from "react-icons/md";

function Steps() {
  const steps = ["Step One", "Step Two", "Step Three"];
  const [currentItem, setCurrentItem] = useState<number>(1);
  const [complete, setComplete] = useState(false);

  return (
    <>
      <div className="flex  justify-between py-6">
        {steps.map((item, i) => (
          <div
            key={i}
            className={`steps relative  flex flex-col  items-center w-36 ${
              currentItem === i + 1 && "active"
            } ${(i + 1 < currentItem || complete) && "complete"}`}
          >
            <div className="item w-10 h-10 flex justify-center text-white z-20 relative  bg-slate-700 rounded-full items-center">
              {i + 1 < currentItem || complete ? <MdDone size={20} /> : i + 1}
            </div>
            <p className="p-2 py-3 text-gray-300">{item}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <button
          onClick={() =>
            currentItem === steps.length
              ? setComplete(true)
              : setCurrentItem(currentItem + 1)
          }
          className="text-gray-200"
        >
          {currentItem === steps.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
}

export default Steps;
