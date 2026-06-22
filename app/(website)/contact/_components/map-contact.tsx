"use client"

import { mapConfig } from "@/data/contact/map"

export function MapContact() {
  return (
    <div className="w-full h-[350px] rounded-[25px] overflow-hidden border border-muted/80 shadow-sm bg-muted/20">
      <iframe
        src={mapConfig.embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={mapConfig.title}
      />
    </div>
  )
}
