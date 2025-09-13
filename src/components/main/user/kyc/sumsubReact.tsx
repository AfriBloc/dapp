"use client";

import snsWebSdk from "@sumsub/websdk";
import React, { useEffect } from "react";
import SumsubWebSdk from "@sumsub/websdk-react";

declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage: (message: string) => void;
    };
  }
}

export default function SumsubReact({ token }: { token: string }) {
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

  return (
    <SumsubWebSdk
    // accessToken={accessToken}
    // expirationHandler={accessTokenExpirationHandler}
    // config={config}
    // options={options}
    // onMessage={messageHandler}
    // onError={errorHandler}
    />
  );
}
