import { useEffect, useState } from "react";
import {
  faAddressCard,
  faArrowUpRightFromSquare,
  faUserGroup,
} from "@fortawesome/pro-solid-svg-icons";
import Skeleton from "./Skeletons/spin";

import axios from "axios";
import MapComponent from "./Map";
import { CFModal } from "./antdmodal";
import { Tooltip } from "antd";

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

  console.log("datdadada", dirData);

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
      name: "Company",
      value: dirData?.company_name,
    },
    {
      name: "Name",
      value: dirData?.first_name,
    },
    {
      name: "Phone",
      value: dirData?.phone,
    },
    {
      name: "Cell",
      value: dirData?.cell,
    },
    {
      name: "Email",
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

  return (
    <>
      <>
        <div className="profile_info_icon">
          <i className="fa-solid fa-user-group"></i>
        </div>
        <div className="profile_info_content">
          <h6>Customer</h6>
          <h5 className="d-flex justify-content-between align-items-center text-wrap">
            {!isLoading ? (
              <>
                <a
                  href={`https://app-cfdev.contractorforeman.net/manage-directory/${
                    Number(directoryId) ?? 0
                  }`} //make dynamic
                  target="_blank"
                  className="link_custom"
                >
                  {data?.customer_name}
                </a>
                <div className="d-flex align-items-center">
                  <Tooltip title="Contact Details" placement="top">
                    <span
                      className="icon_link customer-contact-detail"
                      onClick={handleModalOpen}
                    >
                      <i
                        className="fa-regular fa-address-card"
                        aria-hidden="true"
                      ></i>
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
                      className="jump-directory"
                    >
                      <i
                        className="fa-regular fa-arrow-up-right-from-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </Tooltip>
                </div>
                {/* <span className="text-[#FB8056] flex justify-center items-center space-x-1 font-semibold hover:cursor-pointer">
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
                        (Number(directoryId)) ?? 0
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
                </span> */}
              </>
            ) : (
              <Skeleton className="h-2.5 rounded-xl w-2/3" />
            )}{" "}
          </h5>
        </div>
      </>
      <CFModal
        open={isModalVisible}
        size="800px"
        className="p-0 m-0 remix_customer_contact_modal"
        rootClassName="new_modal_ui"
        closeModalHandler={() => setIsModalVisible(false)}
        icon={<i className="fa-regular fa-address-card" aria-hidden="true"></i>}
        title={"Conatct Details"}
        footer={
          <div className="text-right">
            <a
              className="label_ans_link"
              href="https://app-cfdev.contractorforeman.net"
              target="_blank"
            >
              View full Details
            </a>
          </div>
        }
      >
        <div className="d-flex justify-content-between">
          <ul className="contact_details_list">
            {ModalData &&
              ModalData.map(({ name, value }: any, i) => (
                <li
                  className="capitalize flex justify-between items-center gap-x-1 w-full py-1"
                  key={i}
                >
                  <div className="d-flex align-items-start">
                    <span className="contact_label">{name}</span>

                    <span
                      dangerouslySetInnerHTML={{ __html: value }}
                      className="contact_ans"
                    ></span>
                  </div>
                </li>
              ))}
          </ul>

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
