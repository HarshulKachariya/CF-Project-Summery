import { ParagraphProps } from "antd/es/typography/Paragraph";
import { TextProps } from "antd/es/typography/Text";
import { TitleProps } from "antd/es/typography/Title";
import React from "react";
import { Typography } from "./Typography";
import { ClientOnly } from "remix-utils/client-only";

export const CFTypography = React.forwardRef<
  HTMLElement,
  TitleProps | TextProps | ParagraphProps
>(({ children, title, className = "", ...props }, ref) => {
  return (
    <ClientOnly>
      {() =>
        title === "h1" ? (
          <Typography.Title
            ref={ref}
            level={1}
            className={`${className}`}
            {...props}
          >
            {children}
          </Typography.Title>
        ) : title === "h2" ? (
          <Typography.Title
            ref={ref}
            level={2}
            className={`${className}`}
            {...props}
          >
            {children}
          </Typography.Title>
        ) : title === "h3" ? (
          <Typography.Title
            ref={ref}
            level={3}
            className={`${className}`}
            {...props}
          >
            {children}
          </Typography.Title>
        ) : title === "h4" ? (
          <Typography.Title
            ref={ref}
            level={4}
            className={`${className}`}
            {...props}
          >
            {children}
          </Typography.Title>
        ) : title === "h5" ? (
          <Typography.Title
            ref={ref}
            level={5}
            className={`${className}`}
            {...props}
          >
            {children}
          </Typography.Title>
        ) : title === "small" ? (
          <Typography.Text ref={ref} className={`${className}`} {...props}>
            {children}
          </Typography.Text>
        ) : (
          <Typography.Paragraph ref={ref} className={`${className}`} {...props}>
            {children}
          </Typography.Paragraph>
        )
      }
    </ClientOnly>
  );
});
