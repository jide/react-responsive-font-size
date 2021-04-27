import { useCallback, useState, useMemo } from "react";
import { ResizeObserver as Polyfill } from "@juggle/resize-observer";

const ResizeObserver = window.ResizeObserver || Polyfill;

export interface IOptionsObject {
  setFontSize?: boolean;
  globalVariableName?: string;
}

export interface IuseResponsiveFontSizeProps {
  ratio: number;
  optionsObject?: IOptionsObject;
}

const useResponsiveFontSize = (ratio: number, optionsObject: IOptionsObject = {}) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);

  const { setFontSize = true, globalVariableName } = optionsObject;

  const set = useCallback(() => {
    if (!ref) return;

    const fontSize = ref.clientHeight * ratio;
    const fontSizePx = fontSize + "px";

    if (setFontSize) ref.style.fontSize = fontSizePx;
    if (globalVariableName) document.documentElement.style.setProperty(globalVariableName, fontSizePx);
  }, [ref, setFontSize, globalVariableName, ratio]);

  const resizeObserver = useMemo(() => new ResizeObserver(set), [set]);

  const onRefChange = useCallback(
    (node) => {
      if (!node) return;
      setRef(node);
      resizeObserver.observe(node);
    },
    [resizeObserver]
  );

  return useMemo(() => onRefChange, [onRefChange]);
};

export default useResponsiveFontSize;
