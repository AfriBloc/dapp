import { showToast } from "@/lib/toast";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const formatDateTime = (date: string) => {
  const newDate = new Date(date);
  return ` ${newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })} . ${newDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })}`;
};

export const formatDate = (date: string, time?: boolean) => {
  return date && time
    ? new Date(date).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : date
      ? new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "N/A";
};

export const handleSuccess = (
  message: string,
  push?: (href: string, options?: NavigateOptions) => void,
  path?: string,
) => {
  if (path && push) {
    showToast(message, "success");
    push(path);
  } else {
    showToast(message, "success");
  }
};

export const handleError = (message: string) => {
  showToast(message, "error");
};

export const maskEmailForDisplay = (email: string): string => {
  if (!email || typeof email !== "string") return "";
  const atIndex = email.indexOf("@");
  if (atIndex === -1) return "";

  const localPart = email.slice(0, atIndex);
  const domainPart = email.slice(atIndex); // includes the @

  if (localPart.length === 0) return domainPart; // edge case

  const visiblePrefixLength = Math.min(2, localPart.length);
  const visibleSuffixLength = Math.min(
    2,
    Math.max(0, localPart.length - visiblePrefixLength),
  );

  const prefix = localPart.slice(0, visiblePrefixLength);
  const suffix =
    visibleSuffixLength > 0 ? localPart.slice(-visibleSuffixLength) : "";

  return `${prefix}****${suffix}${domainPart}`;
};
