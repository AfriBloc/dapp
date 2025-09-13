import { ResponseType, OptionsType } from "@/types/api";
import { getUserToken } from "../auth";

// Base URL from environment variables
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

const getHeaders = async (
  auth: boolean,
  customHeader: string = "application/json",
  accessToken?: string
): Promise<Record<string, string>> => {
  const headers: Record<string, string> = {};

  if (customHeader !== "multipart/form-data") {
    headers["Content-Type"] = customHeader;
  }
  headers["Accept"] = "application/json";

  if (auth) {
    let tokenToUse = accessToken;
    if (!tokenToUse) {
      const token = await getUserToken();
      tokenToUse = token?.userData?.accessToken;
    }
    if (tokenToUse) {
      headers["Authorization"] = `Bearer ${tokenToUse}`;
    }
  }

  return headers;
};

const getRequestBody = <T>(
  options: OptionsType<T>,
  headers: Record<string, string>
) => {
  if (["POST", "PUT", "PATCH", "DELETE"].includes(options.method)) {
    if ("body" in options && options.body) {
      if (options.body instanceof FormData) {
        // Don't stringify the body, just return it
        delete headers["Content-Type"]; // Let the browser set the correct Content-Type
        return options.body;
      } else if (
        headers["Content-Type"] === "application/x-www-form-urlencoded"
      ) {
        return new URLSearchParams(
          options.body as Record<string, string>
        ).toString();
      } else {
        return JSON.stringify(options.body);
      }
    }
    return null;
  }
  return null;
};

const handleResponse = async <R>(
  response: Response
): Promise<ResponseType<R>> => {
  if (response.ok) {
    return {
      ok: true,
      status: response.status,
      body: (await response.json()) as R,
    };
  } else {
    let errorMessage =
      response.status === 502 ? "Bad Gateway" : "An error occurred";
    let errorDescription = "";

    try {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const errorBody = await response.json();
        errorMessage = errorBody.message || errorMessage;
        errorDescription = errorBody.description || errorDescription;
      } else {
        errorDescription = await response.text();
      }
    } catch (e) {
      console.error("Error processing the response:", e);
      errorDescription =
        "An unexpected error occurred while processing the response.";
    }

    return {
      ok: false,
      status: response.status,
      body: {
        statusCode: response.status,
        message: errorMessage,
        error: errorDescription,
      },
    };
  }
};

const handleError = <R>(error: unknown): ResponseType<R> => ({
  ok: false,
  status: 500,
  body: {
    statusCode: 500,
    message: "Server is unresponsive. Please check internet connection.",
    error: error instanceof Error ? error.toString() : "Failed to fetch",
  },
});

const request = async <T, R>({
  base_url = BASE_URL,
  options,
  auth = false,
  customHeader = "application/json",
  accessToken,
}: {
  base_url?: string;
  options: OptionsType<T>;
  auth?: boolean;
  customHeader?: string;
  accessToken?: string;
}): Promise<ResponseType<R>> => {
  const headers = await getHeaders(auth, customHeader, accessToken);
  const body = getRequestBody(options, headers);

  try {
    const response = await fetch(base_url + options.url, {
      method: options.method,
      headers,
      body,
    });

    return handleResponse<R>(response);
  } catch (error) {
    return handleError<R>(error);
  }
};

export const get = async <R>(url: string, auth: boolean = false) => {
  return request<void, R>({
    options: { method: "GET", url },
    auth,
  });
};

export const post = async <T, R>(
  url: string,
  body: T | undefined,
  auth: boolean = false,
  customHeader: string = "application/json",
  accessToken?: string
) => {
  return request<T, R>({
    options: { method: "POST", url, body },
    auth,
    customHeader,
    accessToken,
  });
};

export const del = async <T, R>(
  url: string,
  body: T | undefined,
  auth: boolean = false
) => {
  return request<T, R>({
    options: { method: "DELETE", url, body },
    auth,
  });
};

export const patch = async <T, R>(
  url: string,
  body: T,
  auth: boolean = false,
  customHeader: string = "application/json",
  accessToken?: string
) => {
  return request<T, R>({
    options: { method: "PATCH", url, body },
    auth,
    customHeader,
    accessToken,
  });
};

export const fetchImageAsArrayBuffer = async (
  url: string,
  auth: boolean = true
) => {
  const headers = await getHeaders(auth);

  const response = await fetch(url, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    return {
      error: response.statusText || "Failed to fetch image",
      status: response.status,
    };
  }

  const contentType = response.headers.get("content-type");
  const buffer = await response.arrayBuffer();

  return {
    buffer,
    contentType,
  };
};
