export interface IOptionsObject {
    setFontSize?: boolean;
    globalVariableName?: string;
}
export interface IuseResponsiveFontSizeProps {
    ratio: number;
    optionsObject?: IOptionsObject;
}
declare const useResponsiveFontSize: (ratio: number, optionsObject?: IOptionsObject) => (node: any) => void;
export default useResponsiveFontSize;
