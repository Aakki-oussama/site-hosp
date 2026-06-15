"use client"

import * as React from "react"

type TimeLeft = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

const LAUNCH_DATE = new Date("2026-06-25T00:00:00").getTime()

export function Countdown() {
  const [tl, setTl] = React.useState<TimeLeft>({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  })

  React.useEffect(() => {
    function tick() {
      const d = Math.max(0, LAUNCH_DATE - Date.now())
      setTl({
        days: String(Math.floor(d / 86400000)).padStart(2, "0"),
        hours: String(Math.floor((d / 3600000) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((d / 60000) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((d / 1000) % 60)).padStart(2, "0"),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: "Jours", value: tl.days },
    { label: "Heures", value: tl.hours },
    { label: "Minutes", value: tl.minutes },
    { label: "Secondes", value: tl.seconds },
  ]

  return (
    <div className="flex gap-4 sm:gap-8 justify-center flex-wrap">
      {units.map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-2">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white shadow-card border border-stone-100 flex items-center justify-center">
            <span className="font-heading text-3xl sm:text-4xl font-extrabold text-primary tabular-nums leading-none">
              {item.value}
            </span>
          </div>
          <span className="text-xs text-text-muted uppercase tracking-widest font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}