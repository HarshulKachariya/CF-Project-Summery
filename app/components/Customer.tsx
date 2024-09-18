import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faUserGroup } from "@fortawesome/pro-solid-svg-icons";
import Skeleton from "./Skeletons/skeleton";

const Customer = ({ data, isLoading }: any) => {
  return (
    <div>
      <div className="flex justify-start items-center gap-3 w-full  ">
        <div className="bg-[#ffe8d2dd] w-12 h-10 rounded-full flex justify-center items-center text-[#FB8056] ">
          <FontAwesomeIcon icon={faUserGroup} className="text-base" />
        </div>
        <div className=" w-full">
          Customer
          <p className="flex justify-between items-center  font-semibold hover:text-[#FB8056] hover:cursor-pointer hover:transition-all hover:duration-700">
            {!isLoading ? (
              data?.customer_name
            ) : (
              <Skeleton className="h-2.5 rounded-xl w-2/3" />
            )}{" "}
            <span className="text-[#FB8056] font-semibold">
              <FontAwesomeIcon icon={faAddressCard} className="text-sm" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
