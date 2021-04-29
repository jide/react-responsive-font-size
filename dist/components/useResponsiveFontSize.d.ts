export interface IOptionsObject {
    setFontSize?: boolean;
    globalVariableName?: string;
    lockFontSize?: boolean;
}
export interface IuseResponsiveFontSizeProps {
    ratio: number;
    optionsObject?: IOptionsObject;
}
declare const useResponsiveFontSize: (ratio: number, optionsObject?: IOptionsObject) => (node: HTMLElement | null) => void;
export default useResponsiveFontSize;
