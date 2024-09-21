import React from 'react'

type TProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>

const Squircle: React.FC<TProps> = ({ children }) => {
  return (
    <div
      style={{
        maskSize: 'contain',
        maskPosition: 'center',
        maskRepeat: 'no-repeat',
        maskImage:
          'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAwWicvPjwvc3ZnPg==)',
      }}
    >
      {children}
    </div>
  )
}

export default Squircle
