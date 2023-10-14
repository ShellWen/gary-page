export interface AnimatedRibbonProps {
  className?: string
  width: number
  height: number
}

export default function RibbonBgSvg({ className, width, height }: AnimatedRibbonProps) {
  const ribbonWidth = 50

  function RibbonPath({ index, className }: { index: number; className?: string }) {
    const indexOffsetX = ribbonWidth * index
    const degree = Math.PI / 6 // 30°
    const topOffsetX = Math.sin(degree) * height
    const p1 = [topOffsetX, 0]
    const p2 = [0, height]
    const p3 = [ribbonWidth, height]
    const p4 = [topOffsetX + ribbonWidth, 0]

    Array.from([p1, p2, p3, p4]).forEach((p) => {
      p[0] += indexOffsetX
    })

    // 为了防止因舍入误差导致出现白线，这里将 X 轴坐标向左移动 ${index}px
    Array.from([p1, p2, p3, p4]).forEach((p) => {
      p[0] -= Math.max(0, index)
    })

    return (
      <path
        d={`M${p1[0]} ${p1[1]} L${p2[0]} ${p2[1]} L${p3[0]} ${p3[1]} L${p4[0]} ${p4[1]} Z`}
        className={className}
      />
    )
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} className={className}>
      <RibbonPath index={0} className="fill-primary-500" />
      <RibbonPath index={1} className="fill-secondary-500" />
      <RibbonPath index={2} className="fill-tertiary-500" />
    </svg>
  )
}
