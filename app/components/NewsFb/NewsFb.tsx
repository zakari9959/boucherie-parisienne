"use client";
import React from "react";
import { FacebookProvider, Page } from "react-facebook";
import "./NewsFb.css";

type NewsFbProps = {
  width: string;
  height: string;
};

export default function NewsFb(props: NewsFbProps) {
  const { width, height } = props;
  return (
    <div className="newsfb">
      <FacebookProvider appId="580882767589845">
        <Page
          href="https://www.facebook.com/boucherieparisiennedouai/"
          tabs="timeline"
          width={width}
          height={height}
          smallHeader={true}
          adaptContainerWidth={true}
          hideCover={true}
          showFacepile={false}
        />
      </FacebookProvider>
    </div>
  );
}
