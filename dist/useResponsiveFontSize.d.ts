export interface OptionsObject {
    setFontSize?: boolean;
    globalVariableName?: string;
    lockFontSize?: boolean;
    minSize?: number;
    maxSize?: number;
}
type UseResponsiveFontSizeReturn = (node: HTMLElement) => HTMLElement;
type UseResponsiveFontSize = (ratio: number, optionsObject?: OptionsObject) => UseResponsiveFontSizeReturn;
declare const useResponsiveFontSize: UseResponsiveFontSize;
export default useResponsiveFontSize;
