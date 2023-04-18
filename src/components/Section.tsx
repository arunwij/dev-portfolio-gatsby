import type { ReactNode } from "react"
import * as React from "react"

export default function Section({ children }: { children: ReactNode }) {
  return <div className="mt-10">{children}</div>
}
