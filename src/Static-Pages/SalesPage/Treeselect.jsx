import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const TreeNode = ({ label, children, onSelect }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNode = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = () => {
    onSelect(label);
  };
  return (
    <li>
      <div className="flex items-center text-[18px] text-black p-2 hover:text-blue-500 cursor-pointer">
        {children && (
          <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronRight}
            className="mr-2"
            onClick={toggleNode}
          />
        )}
        <div onClick={handleSelect}> {label}</div>
      </div>
      {isOpen && children && (
        <ul>
          {children.map((node) => (
            <TreeNode
              key={node.id}
              label={node.label}
              children={node.children}
              onSelect={onSelect}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const TreeSelects = () => {
  const treeData = [
    {
      id: 1,
      label: "Quà Tặng",
      children: [
        {
          id: 2,
          label: "Quà Cho Bé",
        },
      ],
    },
    {
      id: 6,
      label: "Làm Đẹp",
      children: [
        {
          id: 7,
          label: "Hộp Làm Đẹp",
        },
        {
          id: 8,
          label: "Phụ Kiện",
        },
        {
          id: 9,
          label: "Chăm Sóc Da",
        },
        {
          id: 10,
          label: "Trang Điểm",
        },
      ],
    },
  ];

  const handleSelect = (label) => {
    console.log("Đã chọn:", label);
  };

  return (
    <div>
      <ul>
        {treeData.map((node) => (
          <TreeNode
            key={node.id}
            label={node.label}
            children={node.children}
            onSelect={handleSelect}
          />
        ))}
      </ul>
    </div>
  );
};

export default TreeSelects;
