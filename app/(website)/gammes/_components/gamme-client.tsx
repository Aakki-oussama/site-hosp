"use client"

import { useState } from "react"
import { GammeTabs } from "./gamme-tabs"
import { GammeGrid } from "./gamme-grid"

export function GammeClient() {
  const [selected, setSelected] = useState("tous")

  return (
    <>
      <GammeTabs selected={selected} onSelect={setSelected} />
      <GammeGrid selected={selected} />
    </>
  )
}