import { Spin } from "antd";
const Spiner = ({ className = "w-full h-full" }: any) => {
  return (
    <div className={`flex justify-center items-center  ${className}`}>
      <Spin />
    </div>
  );
};
export default Spiner;
