export interface OptionsObject {
  setFontSize?: boolean;
  globalVariableName?: string;
  lockFontSize?: boolean;
  minSize?: number;
  maxSize?: number;
}

const action = (node: HTMLElement, ratio: number, optionsObject?: OptionsObject, overrideLock?: true) => {
  const { lockFontSize = false, setFontSize = true, globalVariableName } = optionsObject;

  if (!node) return;
  if (lockFontSize && !overrideLock) return;

  const fontSize = Math.max(optionsObject.minSize, Math.min(optionsObject.maxSize, node.clientHeight * ratio));
  const fontSizePx = fontSize + "px";

  if (setFontSize) node.style.fontSize = fontSizePx;
  if (globalVariableName) document.documentElement.style.setProperty(globalVariableName, fontSizePx);
};

type UseResponsiveFontSizeReturn = (node: HTMLElement) => HTMLElement;

type UseResponsiveFontSize = (ratio: number, optionsObject?: OptionsObject) => UseResponsiveFontSizeReturn;

const useResponsiveFontSize: UseResponsiveFontSize =
  (ratio, optionsObject = {}) =>
  (node: HTMLElement) => {
    if (!node) return;
    action(node, ratio, optionsObject, true);
    new ResizeObserver(() => action(node, ratio, optionsObject)).observe(node);
    return node;
  };

export default useResponsiveFontSize;
