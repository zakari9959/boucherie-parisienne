"use client";
import React from "react";
import "./NewsFb.css";

type NewsFbProps = {
  width: string;
  height: string;
};

export default function NewsFb(props: NewsFbProps) {
  const { width, height } = props;
  return (
    <div className="newsfb">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/boucherieparisiennedouai/"
        data-tabs="timeline"
        data-width={width}
        data-height={height}
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="true"
        data-show-facepile="false"
      >
        <blockquote
          cite="https://www.facebook.com/boucherieparisiennedouai/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/boucherieparisiennedouai/">
            Boucherie parisienne Douai
          </a>
        </blockquote>
      </div>
    </div>
  );
}
