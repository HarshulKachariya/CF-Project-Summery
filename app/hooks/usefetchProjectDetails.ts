import { useState, useEffect } from "react";
import axios from "axios";
import { IndexProps } from "~/routes/_index";
import { curr_date, tz } from "~/helpers";

interface ProjectData {
  project_summary: any;
  wip_widget: any;
  customer_additional_contacts: any;
  billing_vs_actual: any;
}

export function useFetchProjectDetails(
  projectId: string,
  userId: string,
  compId: string
) {
  const [data, setData] = useState<ProjectData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError("");

        console.log("Fetching data...");

        const formData = new FormData();
        formData.append("op", "get_project_detail");
        formData.append("project_id", projectId.toString());
        formData.append("is_refresh", "0");
        formData.append("record_type", "project");
        formData.append("version", "web");
        formData.append("from", "panel");
        formData.append("for", "remix");
        formData.append("iframe_call", "0");
        formData.append("tz", tz);
        formData.append("tzid", "Asia/Calcutta");
        formData.append("curr_time", curr_date);
        formData.append("force_login", "0");
        formData.append("global_project", "");
        formData.append("user_id", userId.toString());
        formData.append("company_id", compId.toString());

        const response = await axios.post(
          `https://api-cfdev.contractorforeman.net/service.php?opp=get_project_detail&c=${
            Number(compId) ?? 0
          }&u=${Number(userId) ?? 0}&p=manage_projects`,
          formData
        );

        console.log("Data fetched successfully", response?.data);
        const newData = response?.data?.data;
        setData(newData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data. Please try again.");
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }

    const timeOut = setTimeout(() => {
      fetchData();
    }, 100);

    return () => {
      clearTimeout(timeOut);
    };
  }, [projectId, userId, compId]);

  return { data, isLoading, error };
}
