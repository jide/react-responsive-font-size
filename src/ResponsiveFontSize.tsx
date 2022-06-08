import React, { CSSProperties, ReactNode, FC } from "react";
import useResponsiveFontSize, { OptionsObject } from "./useResponsiveFontSize";

interface UseResponsiveFontSizeProps {
  children: ReactNode;
  ratio: number;
  className?: string;
  style?: CSSProperties;
  optionsObject?: OptionsObject;
}

const ResponsiveFontSize: FC<UseResponsiveFontSizeProps> = ({ children, ratio, className, style, optionsObject }) => {
  const ref = useResponsiveFontSize(ratio, optionsObject);

  return (
    <div
      ref={ref}
      className={className ?? ""}
      style={{ ...style, width: "100%", height: "100%", boxSizing: "border-box" }}
    >
      {children}
    </div>
  );
};

export default ResponsiveFontSize;
