"use client";

import snsWebSdk from "@sumsub/websdk";
import React, { useEffect } from "react";

declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage: (message: string) => void;
    };
  }
}

export default function Sumsub({ token }: { token: string }) {
  const getSumsumbToken = async (): Promise<string> => {
    const rsp = await fetch(`http://159.65.213.14:5055/v1/kyc/access-token`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    const result = await rsp?.json();

    return result?.data?.token;
  };

  useEffect(() => {
    getSumsumbToken().then((_token) => {
      const snsWebSdkInstance = snsWebSdk

        .init(
          _token,

          getSumsumbToken,
        )
        .withConf({
          lang: "en",
          theme: "dark",
        })
        .withOptions({ addViewportTag: false, adaptIframeHeight: true })

        .onMessage((type, payload) => {
          console.log("onMessage", type, payload);

          if (type === "idCheck.onApplicantStatusChanged") {
            window.ReactNativeWebView?.postMessage(
              JSON.stringify({ status: "DONE", payload }),
            );
          }
        })
        .build();

      snsWebSdkInstance.launch("#sumsub-websdk-container");
    });
  }, [token]);

  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center overflow-auto bg-[#1B1B1F]">
      <div id="sumsub-websdk-container"></div>
    </div>
  );
}
