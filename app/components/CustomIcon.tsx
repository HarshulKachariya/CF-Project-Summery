// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CustomIconProps {
  icon?: any;
  className?: string;
  bgColor?: string;
  color?: string;
  iconClassName?: string;
  label?: string;
  children?: any;
}

const CustomIcon = ({
  icon,
  className,
  bgColor,
  color,
  label,
  children,
}: CustomIconProps) => {
  return (
    <div className="summary_details_block_head">
      <div className="d-flex align-items-center">
        <div
          style={{ backgroundColor: bgColor }}
          className={`header_icon ${className}`}
        >
          {/* <FontAwesomeIcon
            icon={icon}
            style={{ color: color }}
            className={iconClassName}
            
          /> */}
          <i
            className={`${icon}`} // Using the icon prop directly in className
            style={{ color: color }}
          ></i>
        </div>
        <span className="d-block ml-9">{label}</span>
        {children}
      </div>
    </div>
  );
};

export default CustomIcon;
