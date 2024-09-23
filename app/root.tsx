import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// import "./tailwind.css";
import type { LinksFunction } from "@remix-run/node";
// import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import "/app/styles/bootstrap.min.css";

// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: bootstrapStyles },
// ];

import "./styles/commonStyle.css";
import "./styles/light-gallery.css";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-free/css/all.css";
export function meta() {
  return [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
    },
  ];
}
import { useEffect } from "react";
// config.autoAddCss = false;

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#ECEDED] text-[#293573] selection:bg-indigo-100">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  useEffect(() => {
    import("bootstrap");
  }, []);
  return <Outlet />;
}
