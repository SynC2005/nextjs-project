"use client"

import * as React from "react"

type Particle = {
  top: string
  left: string
  delay: string
  duration: string
  size: "is-sm" | "is-md" | "is-lg"
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function BackgroundParticles({ count = 14 }: { count?: number }) {
  const [particles, setParticles] = React.useState<Particle[]>([])

  React.useEffect(() => {
    const next = Array.from({ length: count }).map(() => {
      const r = Math.random()
      const size: Particle["size"] = r < 0.6 ? "is-sm" : r < 0.9 ? "is-md" : "is-lg"

      return {
        top: `${rand(0, 100).toFixed(2)}%`,
        left: `${rand(0, 100).toFixed(2)}%`,
        delay: `${rand(0, 12).toFixed(2)}s`,
        duration: `${rand(10, 18).toFixed(2)}s`,
        size,
      }
    })

    setParticles(next)
  }, [count])

  if (particles.length === 0) return null

  return (
    <div className="bg-particles" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className={`bg-particle ${p.size}`}
          style={{
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  )
}
