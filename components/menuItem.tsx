import React from 'react'
import Link from 'next/link'

interface menuItemProps {
  firstName: string
  color: string
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const MenuItem = (card: menuItemProps) => {
  return (
    <li
      style={{ '--after-bg-color': card.color } as React.CSSProperties}
      className={`relative after:absolute after:w-0 after:left-1/2 after:h-0.5 after:-bottom-1  after:transition-all`}
    >
      <Link href={`/${card.firstName.toLowerCase()}`}>
        {capitalize(card.firstName)}
      </Link>

      <style jsx>{`
        li::after {
          content: '';
          background-color: var(--after-bg-color);
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 50%;
          transition: all 0.3s ease;
        }

        li:hover::after {
          width: 100%;
          left: 0;
        }
      `}</style>
    </li>
  )
}
