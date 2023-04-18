import * as React from "react"

export default function IconMongoDB({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
      className={className}
    >
      <defs>
        <style></style>
      </defs>
      <path
        d="M447 73.14v45.72C447 159.14 346.67 192 223 192S-1 159.14-1 118.86V73.14C-1 32.86 99.33 0 223 0s224 32.86 224 73.14z"
        className="fa-secondary"
      ></path>
      <path
        d="M-1 336v102.86C-1 479.14 99.33 512 223 512s224-32.86 224-73.14V336c-48.13 33.14-136.21 48.57-224 48.57S47.12 369.14-1 336zm224-111.43c-87.79 0-175.88-15.43-224-48.57v102.86C-1 319.14 99.33 352 223 352s224-32.86 224-73.14V176c-48.13 33.14-136.21 48.57-224 48.57z"
        className="fa-primary"
      ></path>
    </svg>
  )
}
