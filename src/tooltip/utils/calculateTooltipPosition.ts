import { calculateTooltipLeft } from "./calculateTooltipLeft";
import { calculateTooltipRight } from "./calculateTooltipRight";

export const calculateTooltipPosition = (
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  scrollbarWidth: number,
  viewportWidth: number
): { left: number | "auto"; right: number | "auto" } => {
  if (triggerRect.left <= tooltipRect.width) {
    return {
      left:
        triggerRect?.left <= viewportWidth - triggerRect?.right
          ? calculateTooltipLeft(triggerRect, tooltipRect)
          : triggerRect.left - triggerRect.left * 2,
      right:
        triggerRect.left <= viewportWidth - triggerRect?.right
          ? viewportWidth
          : viewportWidth,
    };
  } else if (triggerRect?.left <= viewportWidth - triggerRect?.right) {
    return {
      left: calculateTooltipLeft(triggerRect, tooltipRect),
      right: "auto",
    };
  } else {
    return {
      left: "auto",
      right: calculateTooltipRight(triggerRect, tooltipRect, scrollbarWidth),
    };
  }
};
