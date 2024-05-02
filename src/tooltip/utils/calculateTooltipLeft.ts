export const calculateTooltipLeft = (
  triggerRect: DOMRect,
  tooltipRect: DOMRect
) => {
  if (tooltipRect.width <= triggerRect.width) {
    return (triggerRect.width - tooltipRect.width) / 2;
  } else {
    return triggerRect.left >= (tooltipRect.width - triggerRect.width) / 2
      ? -(tooltipRect.width - triggerRect.width) / 2
      : 0;
  }
};
