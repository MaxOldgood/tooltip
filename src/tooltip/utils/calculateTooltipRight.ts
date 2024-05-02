export const calculateTooltipRight = (
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  scrollbarWidth: number
) => {
  const viewportWidth = window.innerWidth;
  if (tooltipRect.width <= triggerRect.width) {
    return (triggerRect.width - tooltipRect.width) / 2;
  } else {
    return viewportWidth - triggerRect.right - scrollbarWidth >=
      (tooltipRect.width - triggerRect.width) / 2
      ? -(tooltipRect.width - triggerRect.width) / 2
      : 0;
  }
};
