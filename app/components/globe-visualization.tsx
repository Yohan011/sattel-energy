"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface Point {
  x: number
  y: number
  size: number
  opacity: number
}

interface Connection {
  start: { x: number; y: number }
  end: { x: number; y: number }
  progress: number
  color: string
  active: boolean
}

const locations = [
  { name: "Kinshasa", x: 0.48, y: 0.57 },
  { name: "Luozi", x: 0.47, y: 0.56 },
  { name: "Boende", x: 0.49, y: 0.55 },
  { name: "Gombe", x: 0.48, y: 0.57 },
  { name: "Brazzaville", x: 0.48, y: 0.58 },
  { name: "Kintambo", x: 0.47, y: 0.57 },
  { name: "Mont-Fleury", x: 0.49, y: 0.57 },
  { name: "Binza", x: 0.48, y: 0.56 },
]

export default function GlobeVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [points, setPoints] = useState<Point[]>([])
  const [connections, setConnections] = useState<Connection[]>([])
  const animationRef = useRef<number>(0)
  const [isVisible, setIsVisible] = useState(false)

  // Initialize canvas and points
  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const { width, height } = canvasRef.current.parentElement.getBoundingClientRect()
        setDimensions({ width, height })
        canvasRef.current.width = width
        canvasRef.current.height = height

        // Generate points for the globe
        const newPoints: Point[] = []
        const centerX = width / 2
        const centerY = height / 2
        const radius = Math.min(width, height) * 0.4

        // Create a spherical distribution of points
        for (let i = 0; i < 500; i++) {
          // Parametric equations for a sphere
          const phi = Math.acos(-1 + (2 * i) / 500)
          const theta = Math.sqrt(500 * Math.PI) * phi

          // Convert to cartesian coordinates
          let x = radius * Math.sin(phi) * Math.cos(theta)
          let y = radius * Math.sin(phi) * Math.sin(theta)

          // Only show points on the front half of the sphere
          if (x > -radius * 0.2) {
            // Add some randomness
            x += (Math.random() - 0.5) * 10
            y += (Math.random() - 0.5) * 10

            newPoints.push({
              x: centerX + x,
              y: centerY + y,
              size: Math.random() * 1.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.2,
            })
          }
        }

        setPoints(newPoints)

        // Initialize connections
        const newConnections: Connection[] = []

        // Create connections between key locations
        locations.forEach((location, i) => {
          const startX = centerX + (location.x - 0.5) * width * 0.8
          const startY = centerY + (location.y - 0.5) * height * 0.8

          // Connect to 1-3 random other locations
          const numConnections = Math.floor(Math.random() * 3) + 1
          for (let j = 0; j < numConnections; j++) {
            const targetIndex = (i + j + 1) % locations.length
            const endX = centerX + (locations[targetIndex].x - 0.5) * width * 0.8
            const endY = centerY + (locations[targetIndex].y - 0.5) * height * 0.8

            const colors = ["#FF5E99", "#00D4FF", "#FFD166", "#06D6A0"]

            newConnections.push({
              start: { x: startX, y: startY },
              end: { x: endX, y: endY },
              progress: 0,
              color: colors[Math.floor(Math.random() * colors.length)],
              active: false,
            })
          }
        })

        setConnections(newConnections)
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  // Animation loop
  useEffect(() => {
    if (!isVisible) return

    const animate = () => {
      if (!canvasRef.current) return

      const ctx = canvasRef.current.getContext("2d")
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Draw points
      points.forEach((point) => {
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${point.opacity})`
        ctx.fill()
      })

      // Update and draw connections
      setConnections((prev) => {
        const updated = [...prev]

        // Randomly activate connections
        if (Math.random() < 0.02) {
          const inactiveConnections = updated.filter((c) => !c.active)
          if (inactiveConnections.length > 0) {
            const randomIndex = Math.floor(Math.random() * inactiveConnections.length)
            const connectionIndex = updated.indexOf(inactiveConnections[randomIndex])
            updated[connectionIndex].active = true
            updated[connectionIndex].progress = 0
          }
        }

        // Update active connections
        updated.forEach((connection, i) => {
          if (connection.active) {
            // Draw connection line
            ctx.beginPath()
            ctx.moveTo(connection.start.x, connection.start.y)

            // Calculate current point along the path
            const currentX = connection.start.x + (connection.end.x - connection.start.x) * connection.progress
            const currentY = connection.start.y + (connection.end.y - connection.start.y) * connection.progress

            // Add a slight curve to the line
            const midX = (connection.start.x + connection.end.x) / 2
            const midY = (connection.start.y + connection.end.y) / 2 - 20

            // Draw curved line
            ctx.beginPath()
            ctx.moveTo(connection.start.x, connection.start.y)
            ctx.quadraticCurveTo(midX, midY, currentX, currentY)

            // Create gradient
            const gradient = ctx.createLinearGradient(connection.start.x, connection.start.y, currentX, currentY)
            gradient.addColorStop(0, `${connection.color}00`)
            gradient.addColorStop(0.5, `${connection.color}FF`)
            gradient.addColorStop(1, `${connection.color}00`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = 2
            ctx.stroke()

            // Draw glow effect at the current point
            ctx.beginPath()
            ctx.arc(currentX, currentY, 3, 0, Math.PI * 2)
            ctx.fillStyle = connection.color
            ctx.fill()

            // Update progress
            updated[i].progress += 0.01
            if (updated[i].progress >= 1) {
              updated[i].active = false
            }
          }
        })

        return updated
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dimensions, points, isVisible])

  // Intersection observer to only animate when visible
  useEffect(() => {
    if (!canvasRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    observer.observe(canvasRef.current)

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(to bottom, #001233, #023E8A)" }}
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-2">Présence Internationale</h3>
          <p className="text-lg opacity-80">Connecter l'Afrique à l'énergie solaire</p>
        </motion.div>
      </div>
    </div>
  )
}
