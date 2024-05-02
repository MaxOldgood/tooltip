import { useMemo, useRef, useState } from "react";
import { getScrollbarWidth } from "../utils/getScrollBarWidth";
import { useTooltipPosition } from "./useTooltipPosition";

interface UseCustomTooltipProps {
  delay?: number;
}

export function useCustomTooltip(props: UseCustomTooltipProps) {
  const { delay = 200 } = props;
  const [showTooltip, setShowTooltip] = useState(false);

  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number>();

  const scrollbarWidth = useMemo(() => {
    return getScrollbarWidth();
  }, []);

  const { tooltipPosition, isAbove } = useTooltipPosition({
    triggerRef,
    tooltipRef,
    showTooltip,
    scrollbarWidth,
  });

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setShowTooltip(false);
  };

  return {
    tooltipProps: {
      ref: triggerRef,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    tooltipVisible: showTooltip,
    tooltipRef,
    isAbove,
    tooltipPosition,
  };
}
