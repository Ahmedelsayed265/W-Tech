import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import i18next from "i18next";
import { useParams } from "react-router-dom";

export default function useGetProjectDetails() {
  const lang = i18next.language;
  const { id } = useParams();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["project-details", lang, id],

    queryFn: async () => {
      const res = await axiosInstance.get(`/project_details/${id}`);
      return res?.data?.data;
    },

    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, refetch };
}
