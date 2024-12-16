import React, { useState } from "react";

const TimeBar = () => {
  const hours = [
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];
  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(100);
  const [tooltip, setTooltip] = useState({ visible: false, time: "", left: 0 });

  // Calculate the width per hour in percentage based on total hours
  const stepWidth = 100 / (hours.length - 1);

  // Get time based on position
  const calculateTime = (position) => hours[Math.round(position / stepWidth)];

  const handleDrag = (e, type) => {
    const bar = e.target.parentNode;
    const barRect = bar.getBoundingClientRect();
    const newPosition = ((e.clientX - barRect.left) / barRect.width) * 100;

    // Snap to nearest hour position
    const snappedPosition = Math.round(newPosition / stepWidth) * stepWidth;

    // Set position based on type (start or end) and prevent overlap
    if (
      type === "start" &&
      snappedPosition >= 0 &&
      snappedPosition < endPosition
    ) {
      setStartPosition(snappedPosition);
    } else if (
      type === "end" &&
      snappedPosition <= 100 &&
      snappedPosition > startPosition
    ) {
      setEndPosition(snappedPosition);
    }
  };

  const handleMarkerClick = (index) => {
    const clickedPosition = index * stepWidth;

    // Determine which handle (start or end) to move based on proximity to clicked position
    const startDistance = Math.abs(clickedPosition - startPosition);
    const endDistance = Math.abs(clickedPosition - endPosition);

    if (startDistance < endDistance && clickedPosition < endPosition) {
      setStartPosition(clickedPosition);
    } else if (clickedPosition > startPosition) {
      setEndPosition(clickedPosition);
    }
  };

  const showTooltip = (time, left) => {
    setTooltip({ visible: true, time, left });
  };

  const hideTooltip = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div>
      <div className="text-[14px] flex mb-[25px]  font-[400] text-[#6A7683] ">
        <span className="block"> Delivery time </span>
        <span className="text-[#0E3281] block">(Between 12 pm & 06 pm)</span>
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full cursor-pointer">
        {/* Green filled portion of the bar between start and end points */}
        <div
          className="absolute top-0 h-2 bg-[#B1DFB9B2] rounded-full"
          style={{
            left: `${startPosition}%`,
            width: `${endPosition - startPosition}%`,
          }}
        ></div>

        {/* Hour markers as black or red dots based on position */}
        {hours.map((hour, index) => {
          const position = index * stepWidth;
          const isWithinRange =
            position >= startPosition && position <= endPosition;

          return (
            <div
              key={hour}
              className={`absolute top-1/2 transform -translate-y-1/2 w-[5px] h-[5px] rounded-full cursor-pointer ${
                isWithinRange ? "bg-[#48AE50]" : "bg-[#C4C4C4]"
              }`}
              style={{ left: `${position}%` }}
              onClick={() => handleMarkerClick(index)}
            ></div>
          );
        })}

        {/* Start point (movable) */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#48AE50] rounded-full border-2 border-white cursor-pointer"
          style={{ left: `${startPosition}%` }}
          onMouseDown={(e) => e.preventDefault()}
          onMouseMove={(e) => e.buttons === 1 && handleDrag(e, "start")}
          onMouseEnter={() =>
            showTooltip(calculateTime(startPosition), startPosition)
          }
          onMouseLeave={hideTooltip}
        ></div>

        {/* End point (movable) */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#48AE50] rounded-full border-2 border-white cursor-pointer"
          style={{ left: `${endPosition}%` }}
          onMouseDown={(e) => e.preventDefault()}
          onMouseMove={(e) => e.buttons === 1 && handleDrag(e, "end")}
          onMouseEnter={() =>
            showTooltip(calculateTime(endPosition), endPosition)
          }
          onMouseLeave={hideTooltip}
        ></div>

        {/* Tooltip for start and end times */}
        {tooltip.visible && (
          <div
            style={{ left: `${tooltip.left}%`, transform: "translateX(-50%)" }}
            className="absolute bg-[#B1DFB9B2] text-[#4E4E4E] max-w-fit border border-gray-300 rounded-lg p-2 text-[12px]"
          >
            {/* Arrow for tooltip, pointing downwards */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#B1DFB9B2]"></div>

            {tooltip.time}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeBar;
