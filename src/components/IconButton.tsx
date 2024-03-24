import Image from "next/image";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  icon: any;
  height?: number;
  width?: number;
  onClick?: MouseEventHandler;
}

const IconButton = ({
  icon,
  height = 24,
  width = 24,
  onClick,
}: IconButtonProps) => {
  return (
    <button onClick={onClick}>
      <Image
        src={icon}
        alt="Icon"
        width={width}
        height={height}
        className="mr-2"
        // Add any additional styles here
      />
    </button>
  );
};

export default IconButton;
