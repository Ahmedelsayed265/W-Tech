import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import i18next from "i18next";

export default function useGetServiceDetails() {
  const lang = i18next.language;
  const { id } = useParams();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["service-details", lang, id],

    queryFn: async () => {
      const res = await axiosInstance.get(`/service_details/${id}`);
      return res?.data?.data;
    },

    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, refetch };
}
