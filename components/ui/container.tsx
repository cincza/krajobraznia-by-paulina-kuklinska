import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10",
        className,
      )}
      {...props}
    />
  );
}
