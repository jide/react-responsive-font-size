import { VFC, ReactNode } from "react";
import useResponsiveFontSize, { IuseResponsiveFontSizeProps } from "./useResponsiveFontSize";

interface IProps extends IuseResponsiveFontSizeProps {
  children: ReactNode;
}

const ResponsiveFontSize: VFC<IProps> = ({ children, ratio, optionsObject }) => {
  const ref = useResponsiveFontSize(ratio, optionsObject);

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      {children}
    </div>
  );
};

export default ResponsiveFontSize;
