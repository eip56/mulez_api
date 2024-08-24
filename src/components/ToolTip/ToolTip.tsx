'use client'

export default function Tooltip({ label }) {
  return (
    <div className="Tooltip invisible absolute left-full top-1/2 z-10 -translate-y-1/2 rounded-lg bg-[#535AFF] px-3 py-2 text-xs text-white opacity-0 shadow-md transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
      {label}
    </div>
  )
}
