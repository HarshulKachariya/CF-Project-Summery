import * as Comlink from "comlink";
import React from "react";
import ReactDOMServer from "react-dom/server";
import Index from "../routes/_index";

const renderComponent = ({
  projectId,
  userId,
  compId,
  directoryId,
}: {
  projectId: string;
  userId: string;
  compId: string;
  directoryId: string;
}) => {
  const html = ReactDOMServer.renderToString(
    <Index
      projectId={projectId}
      userId={userId}
      compId={compId}
      directoryId={directoryId}
    />
  );
  return html;
};

Comlink.expose({ renderComponent });
