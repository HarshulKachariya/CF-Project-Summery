import { useEffect, useState } from "react";
import axios from "axios";
import MapComponent from "./Map";
import { CFModal } from "./antdmodal";
import { Tooltip } from "antd";
import { base_url, curr_date, redirect_url, tz } from "~/helpers";

const Customer = ({
  data,
  isLoading,
  projectId,
  userId,
  compId,
  directoryId,
}: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [dirData, setDirData] = useState<any>({});

  const fetchData = async () => {
    try {
      const formData = new FormData();
      formData.append("op", "get_directory_detail");
      formData.append("directory_id", data?.customer_id.toString());
      formData.append("need_more_data", "0");
      formData.append("for_module_key", "");
      formData.append("version", "web");
      formData.append("from", "panel");
      formData.append("iframe_call", "0");
      formData.append("tz", tz);
      formData.append("tzid", "Asia/Calcutta");
      formData.append("curr_time", curr_date);
      formData.append("force_login", "0");
      formData.append("global_project", "");
      formData.append("user_id", userId.toString());
      formData.append("company_id", compId.toString());

      const response = await axios.post(
        `${base_url}/service.php?opp=get_directory_detail&c=${
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

  const address = [
    dirData?.address1,
    dirData?.address2,
    dirData?.city,
    dirData?.state,
  ]
    .filter(Boolean)
    .join(", ");

  const ModalData = [
    { name: "Company", value: dirData?.company_name },
    { name: "Name", value: dirData?.first_name },
    { name: "Phone", value: dirData?.phone },
    { name: "Cell", value: dirData?.cell },
    { name: "Email", value: dirData?.email },
    { name: "Address", value: address },
  ].filter((item) => item.value && item.value.trim() !== "");

  return (
    <>
      <>
        <div className="profile_info_icon">
          <i className="fa-solid fa-user-group"></i>
        </div>
        <div className="profile_info_content">
          <h6 onClick={handleModalOpen}>Customer</h6>
          <h5 className="d-flex justify-content-between align-items-center text-wrap">
            {!isLoading ? (
              <>
                <a
                  href={`${redirect_url}/manage-directory/${
                    Number(data?.customer_id) ?? 0
                  }`} //make dynamic
                  target="_blank"
                  className="link_custom"
                >
                  {data?.customer_name !== "" ? data?.customer_name : "-"}
                </a>
                <div className="d-flex align-items-center">
                  {data?.customer_name !== "" && (
                    <Tooltip title="Contact Details" placement="top">
                      <span className="icon_link" onClick={handleModalOpen}>
                        <i
                          className="fa-regular fa-address-card"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Tooltip>
                  )}
                  <Tooltip
                    title="Open the Contact Details in New Tab"
                    placement="top"
                  >
                    <a
                      href={`${redirect_url}/manage-directory/${
                        Number(data?.customer_id) ?? 0
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
              </>
            ) : (
              <div className="d-flex justify-content-between align-items-center mt-10">
                <div className="custom-shimmer cust_name"></div>
              </div>
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
        title={"Contact Details"}
        footer={
          <div className="text-right">
            <a
              className="label_ans_link"
              href={`${redirect_url}/manage-directory/${
                Number(data?.customer_id) ?? 0
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View full Details
            </a>
          </div>
        }
      >
        <div className="d-flex justify-content-between">
          {ModalData.length > 0 ? (
            <ul className="contact_details_list">
              {ModalData.map(({ name, value }, i) => (
                <li
                  className="capitalize flex justify-between items-center gap-x-1 w-full py-1"
                  key={i}
                >
                  <div className="d-flex align-items-start">
                    <span className="contact_label">{name}</span>
                    {name !== "Email" ? (
                      <span className="contact_ans">{value}</span>
                    ) : (
                      <span className="contact_ans">
                        <a className="label_ans_link mr-5" href="">
                          hiten.pipaliya@weenggs.in
                        </a>
                        <Tooltip
                          title="Open the Contact Details in New Tab"
                          placement="top"
                        >
                          <a href="" className="icon_link">
                            <i
                              className="fa-regular fa-envelope"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </Tooltip>
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}

          {address && (
            <MapComponent
              latitude={dirData?.latitude}
              longitude={dirData?.longitude}
              address={address}
            />
          )}
        </div>
      </CFModal>
    </>
  );
};

export default Customer;
