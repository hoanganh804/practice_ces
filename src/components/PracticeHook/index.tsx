import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

type item = { name: string; key: string };

const LIST_ITEM: item[] = [
  { name: "item1", key: "1" },
  { name: "item2", key: "2" },
  { name: "item3", key: "3" },
];

const PracticeHook: React.FC = () => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [itemClicked, setItemClicked] = useState<item>({ name: "", key: "" });
  const { isVisible, setIsVisible } = useClickOutside(dropDownRef);
  return (
    <div style={{ marginTop: "60px", marginBottom: "60px" }}>
      <button onClick={() => setIsVisible(true)}>
        {itemClicked.name ? itemClicked.name : "Show Dropdown"}
      </button>
      {isVisible && (
        <div
          className="drop_down"
          ref={dropDownRef}
          style={{ backgroundColor: "white" }}
        >
          {LIST_ITEM.map((item) => (
            <div
              className="drop_down_item"
              key={item.key}
              style={{
                fontSize: "20px",
                cursor: "pointer",
                borderBottom: "1px solid black",
                marginBottom: "8px",
              }}
              onClick={() => setItemClicked({ name: item.name, key: item.key })}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PracticeHook;
