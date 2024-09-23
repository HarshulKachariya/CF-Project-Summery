import { CFIconButton } from "./CFIconButton";

import { TooltipPlacement } from "antd/es/tooltip";
import { Tooltip } from "antd";
import CFTooltip from "./Tooltip";

interface CFCloseButton {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  iconClassName?: string;
  tooltipPlacement?: TooltipPlacement;
}

export const CFCloseButton = ({
  onClick,
  className = "",
  iconClassName = "",
  tooltipPlacement = "bottom",
}: CFCloseButton) => {
  return (
    <CFTooltip content={"Close"} placement={tooltipPlacement}>
      <CFIconButton
        htmlType="button"
        className={`${className}`}
        variant="text"
        onClick={onClick}
      >
        <i
          className={`fa-regular fa-xmark ${iconClassName}`}
          aria-hidden="true"
        ></i>
      </CFIconButton>
    </CFTooltip>
  );
};
