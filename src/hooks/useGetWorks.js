import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import i18next from "i18next";

export default function useGetWorks() {
  const lang = i18next.language;

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["works", lang],

    queryFn: async () => {
      const res = await axiosInstance.get("/get_projects");
      return res?.data?.data;
    },

    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, refetch };
}