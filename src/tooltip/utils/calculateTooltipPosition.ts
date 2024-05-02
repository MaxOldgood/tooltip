import { calculateTooltipLeft } from "./calculateTooltipLeft";
import { calculateTooltipRight } from "./calculateTooltipRight";

export const calculateTooltipPosition = (
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  scrollbarWidth: number,
  viewportWidth: number
): { left: number | "auto"; right: number | "auto" } => {
  if (triggerRect?.left <= viewportWidth - triggerRect?.right) {
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
