import clsx from "clsx"
import * as React from "react"
import type { ReactNode } from "react"

interface BadgeProps {
  label: string
  className?: string
  size?: "md" | "sm"
  renderIconStart?: ({ className }: { className: string }) => ReactNode
  link?: URL
}

interface BadgeCoreProps {
  component: "a" | "label"
  className?: string
  link?: URL
  children: ReactNode
}

function BadgeCore({ component, className, link, children }: BadgeCoreProps) {
  return component === "a" ? (
    <a
      className={className}
      href={link as unknown as string}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <span className={className}>{children}</span>
  )
}

const sizeCss = {
  sm: {
    root: "text-sm px-2 py-1",
    icon: "w-3 mr-2",
  },
  md: {
    root: "px-4 py-1",
    icon: "w-5 mr-2",
  },
}

export default function Badge({
  label,
  className,
  size = "md",
  renderIconStart = () => null,
  link,
}: BadgeProps) {
  return (
    <BadgeCore
      component={link ? "a" : "label"}
      className={clsx(
        `items-center border border-gray-300 rounded-3xl font-medium inline-flex ${sizeCss[size]["root"]} ${className}`,
        link && "hover:bg-gray-100 hover:cursor-pointer"
      )}
    >
      {renderIconStart({ className: sizeCss[size]["icon"] })}
      <span>{label}</span>
    </BadgeCore>
  )
}
