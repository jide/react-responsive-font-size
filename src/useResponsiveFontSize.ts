import { MutableRefObject, useRef } from "react";

export interface OptionsObject {
  setFontSize?: boolean;
  globalVariableName?: string;
  lockFontSize?: boolean;
}

const action = (node: HTMLElement, ratio: number, optionsObject?: OptionsObject, overrideLock?: true) => {
  const { lockFontSize = false, setFontSize = true, globalVariableName } = optionsObject;

  if (!node) return;
  if (lockFontSize && !overrideLock) return;

  const fontSize = node.clientHeight * ratio;
  const fontSizePx = fontSize + "px";

  if (setFontSize) node.style.fontSize = fontSizePx;
  if (globalVariableName) document.documentElement.style.setProperty(globalVariableName, fontSizePx);
};

type UseResponsiveFontSizeReturn = (node: HTMLElement) => MutableRefObject<HTMLElement>;

type UseResponsiveFontSize = (ratio: number, optionsObject?: OptionsObject) => UseResponsiveFontSizeReturn;

const useResponsiveFontSize: UseResponsiveFontSize = (ratio, optionsObject = {}) => {
  const ref = useRef<HTMLElement>();
  const resizeObserver = new ResizeObserver(() => action(ref.current, ratio, optionsObject));

  return (node: HTMLElement) => {
    if (node) action(ref.current, ratio, optionsObject, true);
    if (ref.current) resizeObserver.unobserve(ref.current);
    if (node) resizeObserver.observe(node);
    ref.current = node;
    return ref;
  };
};

export default useResponsiveFontSize;
