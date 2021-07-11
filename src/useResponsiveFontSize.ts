import { useRef } from "react";
import { ResizeObserver as Polyfill } from "@juggle/resize-observer";

const ResizeObserver = window.ResizeObserver || Polyfill;

export interface IOptionsObject {
  setFontSize?: boolean;
  globalVariableName?: string;
  lockFontSize?: boolean;
}

export interface IuseResponsiveFontSizeProps {
  ratio: number;
  optionsObject?: IOptionsObject;
}

const useResponsiveFontSize = (ratio: number, optionsObject: IOptionsObject = {}) => {
  const { setFontSize = true, globalVariableName, lockFontSize = false } = optionsObject;
  const ref = useRef<HTMLElement | null>(null);
  const locked = useRef<boolean>();

  locked.current = lockFontSize;

  const set = () => {
    if (!ref.current || locked.current) return;

    const fontSize = ref.current.clientHeight * ratio;
    const fontSizePx = fontSize + "px";

    if (setFontSize) ref.current.style.fontSize = fontSizePx;
    if (globalVariableName) document.documentElement.style.setProperty(globalVariableName, fontSizePx);
  };

  const resizeObserver = new ResizeObserver(set);

  const onRefChange = (node: HTMLElement | null) => {
    if (!node) return;
    ref.current = node;
    resizeObserver.observe(node);
  };

  return onRefChange;
};

export default useResponsiveFontSize;
