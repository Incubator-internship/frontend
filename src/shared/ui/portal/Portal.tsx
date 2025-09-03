import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: React.ReactNode
  containerId: string
}

export function Portal({ children, containerId }: PortalProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let element = document.getElementById(containerId)

    if (!element) {
      element = document.createElement('div')
      element.id = containerId
      document.body.appendChild(element)
    }
    setContainer(element)

    return () => {
      if (element && element.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [containerId])

  if (!container) {
    return null
  }

  return createPortal(children, container)
}

export default Portal
