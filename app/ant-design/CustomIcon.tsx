import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CustomIconProps {
  icon?: any;
  className?: string;
  bgColor?: string;
  color?: string;
  iconClassName?: string;
  label?: string;
}

const CustomIcon = ({
  icon,
  className,
  bgColor,
  color,
  iconClassName,
  label,
}: CustomIconProps) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        style={{ backgroundColor: bgColor }}
        className={`bg-blue-100 w-8 h-8 rounded-full flex justify-center items-center ${className}`}
      >
        <FontAwesomeIcon
          icon={icon}
          style={{ color: color }}
          className={iconClassName}
        />
      </div>
      <span className="font-semibold text-base">{label}</span>
    </div>
  );
};

export default CustomIcon;
