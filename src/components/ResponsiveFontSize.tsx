import { FC } from "react";
import useResponsiveFontSize, { IuseResponsiveFontSizeProps } from "./useResponsiveFontSize";


const ResponsiveFontSize: FC<IuseResponsiveFontSizeProps> = ({ children, ratio, optionsObject }) => {
  const ref = useResponsiveFontSize(ratio, optionsObject);

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      {children}
    </div>
  );
};

export default ResponsiveFontSize;
