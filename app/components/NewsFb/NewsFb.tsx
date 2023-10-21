"use client";
import React from "react";
import { FacebookProvider, Page } from "react-facebook";
import "./NewsFb.css";

export default function NewsFb(): JSX.Element {
  return (
    <div className="newsfb">
      <FacebookProvider appId="580882767589845">
        <Page
          href="https://www.facebook.com/boucherieparisiennedouai/"
          tabs="timeline"
          width="300"
          height="500"
          smallHeader={false}
          adaptContainerWidth={true}
          hideCover={false}
          hideCTA={true}
          showFacepile={false}
        />
      </FacebookProvider>
    </div>
  );
}
