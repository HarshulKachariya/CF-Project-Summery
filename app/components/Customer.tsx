import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faArrowUpRightFromSquare,
  faUserGroup,
} from "@fortawesome/pro-solid-svg-icons";

import axios from "axios";
import MapComponent from "./Map";
import { CFModal } from "../ant-design/antdmodal";
import { Tooltip } from "antd";
import Spiner from "./Skeletons/spin";

const Customer = ({
  data,
  isLoading,
  projectId,
  userId,
  compId,
  directoryId,
}: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [dirData, setDirData] = useState<any>([]);

  const fetchData = async () => {
    try {
      const formData = new FormData();
      formData.append("op", "get_directory_detail");
      formData.append("directory_id", directoryId.toString());
      formData.append("need_more_data", "0");
      formData.append("for_module_key", "");
      formData.append("version", "web");
      formData.append("from", "panel");
      formData.append("iframe_call", "0");
      formData.append("tz", "+5:30");
      formData.append("tzid", "Asia/Calcutta");
      formData.append("curr_time", "2024-08-31 15:50:38");
      formData.append("force_login", "0");
      formData.append("global_project", "");
      formData.append("user_id", userId.toString());
      formData.append("company_id", compId.toString());

      const response = await axios.post(
        `https://api-cfdev.contractorforeman.net/service.php?opp=get_directory_detail&c=${
          Number(compId) ?? 0
        }&u=${Number(userId) ?? 0}&p=manage_projects`,
        formData
      );
      console.log(response?.data?.data);
      setDirData(response?.data?.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleModalOpen = () => {
    fetchData();
    setIsModalVisible(true);
  };

  const address =
    dirData?.address1 +
    `,` +
    dirData?.address2 +
    `,` +
    dirData?.city +
    `,` +
    dirData?.state;

  const ModalData = [
    {
      name: "company",
      value: dirData?.company_name,
    },
    {
      name: "name",
      value: dirData?.first_name,
    },
    {
      name: "phone",
      value: dirData?.phone,
    },
    {
      name: "cell",
      value: dirData?.cell,
    },
    {
      name: "email",
      value: dirData?.email,
    },
    {
      name: "Address",
      value:
        dirData?.address1 +
        "<br/>" +
        dirData?.address2 +
        "<br/>" +
        dirData?.city +
        "," +
        dirData?.state,
    },
  ];

  const CommonTransition =
    "hover:text-[#FB8056] hover:cursor-pointer hover:transition-colors hover:duration-700";

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div className="flex justify-start items-center gap-3 w-full ">
          <div className="bg-[#ffe8d2dd] w-12 h-10 rounded-full flex justify-center items-center text-[#FB8056] ">
            <FontAwesomeIcon icon={faUserGroup} className="text-base" />
          </div>
          <div className=" w-full">
            Customer
            <p className="flex justify-between items-center  font-semibold hover:text-[#FB8056] hover:cursor-pointer hover:transition-all hover:duration-700">
              <div className="flex justify-between items-center font-semibold w-full">
                <a
                  href={`https://app-cfdev.contractorforeman.net/manage-directory/${
                    Number(directoryId) ?? 0
                  }`} //make dynamic
                  target="_blank"
                  className={`font-semibold ${CommonTransition}`}
                >
                  {data?.customer_name}
                </a>
                <span className="text-[#FB8056] flex justify-center items-center space-x-1 font-semibold hover:cursor-pointer ">
                  <Tooltip title="Contact Details" placement="top">
                    <span
                      className={`text-sm hover:bg-[#f3ddd7] p-1 px-2 rounded-sm ${CommonTransition}`}
                    >
                      <FontAwesomeIcon
                        icon={faAddressCard}
                        onClick={handleModalOpen}
                        className="text-sm"
                      />
                    </span>
                  </Tooltip>
                  <Tooltip
                    title="Open the Contact Details in New Tab"
                    placement="top"
                  >
                    <a
                      href={`https://app-cfdev.contractorforeman.net/manage-directory/${
                        Number(directoryId) ?? 0
                      }?type=customer`} //make dynamic
                      target="_blank"
                      className="text-sm"
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-sm text-[#223558]"
                      />
                    </a>
                  </Tooltip>
                </span>
              </div>
            </p>
          </div>
        </div>
      )}

      <CFModal
        open={isModalVisible}
        size="800px"
        className="p-0 m-0 "
        closeModalHandler={() => setIsModalVisible(false)}
        icon={<FontAwesomeIcon className="w-3.5 h-3.5" icon={faAddressCard} />}
        title={"Conatct Details"}
        footer={
          <>
            <hr />
            <a
              className={`flex justify-end items-end w-full  underline hover:underline text-primary-900  ${CommonTransition}`}
              href="https://app-cfdev.contractorforeman.net"
              target="_blank"
            >
              View full Details
            </a>
          </>
        }
      >
        <div className="flex justify-between items-center gap-3 w-full">
          <div className="w-1/2">
            {ModalData &&
              ModalData.map(({ name, value }: any, i) => (
                <div
                  className="capitalize flex justify-between items-center gap-x-1 w-full py-1"
                  key={i}
                >
                  <p className="font-bold w-1/4 text-start">{name}</p>

                  <span
                    dangerouslySetInnerHTML={{ __html: value }}
                    className="w-3/4 text-left"
                  ></span>
                </div>
              ))}
          </div>

          <MapComponent
            latitude={dirData?.latitude}
            longitude={dirData?.longitude}
            address={address}
          />
        </div>
      </CFModal>
    </>
  );
};

export default Customer;
