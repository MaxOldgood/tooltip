import { ReactNode } from "react";
import { useCustomTooltip } from "./hooks/useCustomTooltip";

interface CustomTooltipProps {
  content: string;
  title?: string;
  children?: ReactNode;
  delay?: number;
  color?: "dark" | "light";
}

export function CustomTooltip(props: CustomTooltipProps) {
  const { title, content, children, delay, color = "dark" } = props;
  const { tooltipProps, tooltipVisible, tooltipRef, isAbove, tooltipPosition } =
    useCustomTooltip({ delay });

  return (
    <div className="relative inline-block w-fit">
      <div className="group inline-block cursor-pointer" {...tooltipProps}>
        {children}
      </div>

      {tooltipVisible && (
        <div
          ref={tooltipRef}
          className={`absolute z-10 my-1 p-2 rounded-md shadow-md ${
            isAbove ? "bottom-full" : "top-full"
          } whitespace-pre	`}
          style={{
            left: tooltipPosition.left,
            right: tooltipPosition.right,
            backgroundColor: `${color === "dark" ? "#1F2937" : "#F3F4F6"}`,
            color: `${color === "dark" ? "#F3F4F6" : "#1F2937"}`,
          }}
        >
          {title && <p className="text-base">{title}</p>}
          <p className="text-sm ">{content}</p>
        </div>
      )}
    </div>
  );
}

export default CustomTooltip;
