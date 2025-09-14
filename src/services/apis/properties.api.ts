import { ApiResponse } from "@/types/auth";
import { Api } from "./api";
import { getAllPropertiesRsp, PropertyTypes } from "@/types/property";

export const getAllProperties = () => {
  return Api.get<getAllPropertiesRsp>("/properties", true);
};

export const getPropertyById = (id: string) => {
  return Api.get<ApiResponse & { data: PropertyTypes }>(
    `/properties/${id}`,
    true,
  );
};

export const getRates = (from: string, to: string) => {
  return Api.get<
    ApiResponse & {
      data: {
        from: string;
        to: string;
        rate: number;
      };
    }
  >(`/rates/${from}/${to}`);
};
