import { VFC, ReactNode } from "react";
import { IuseResponsiveFontSizeProps } from "./useResponsiveFontSize";
interface IProps extends IuseResponsiveFontSizeProps {
    children: ReactNode;
}
declare const ResponsiveFontSize: VFC<IProps>;
export default ResponsiveFontSize;
