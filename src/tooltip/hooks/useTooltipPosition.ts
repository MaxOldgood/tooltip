import { useEffect, useState } from "react";
import { calculateTooltipPosition } from "../utils/calculateTooltipPosition";

interface TooltipPosition {
  left?: number | "auto";
  right?: number | "auto";
}

interface UseTooltipPositionProps {
  triggerRef: React.RefObject<HTMLDivElement>;
  tooltipRef: React.RefObject<HTMLDivElement>;
  showTooltip: boolean;
  scrollbarWidth: number;
}

export function useTooltipPosition(props: UseTooltipPositionProps) {
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({});
  const [isAbove, setIsAbove] = useState(true);

  const { triggerRef, tooltipRef, showTooltip, scrollbarWidth } = props;

  useEffect(() => {
    const handleViewportTooltipPosition = () => {
      if (showTooltip && tooltipRef.current && triggerRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        const { left, right } = calculateTooltipPosition(
          triggerRect,
          tooltipRect,
          scrollbarWidth,
          viewportWidth
        );

        setTooltipPosition({ left, right });
        setIsAbove(triggerRect.top >= tooltipRect.height + 5);
      }
    };

    handleViewportTooltipPosition();
    window.addEventListener("resize", handleViewportTooltipPosition);

    return () => {
      window.removeEventListener("resize", handleViewportTooltipPosition);
    };
  }, [showTooltip, scrollbarWidth, tooltipRef, triggerRef]);

  return { tooltipPosition, isAbove };
}
