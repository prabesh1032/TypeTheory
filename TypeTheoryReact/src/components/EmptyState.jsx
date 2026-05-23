import React from 'react'

export default function EmptyState({ icon: Icon, title = 'No items', description = '', className = '' }) {
  return (
    <div className={`col-span-3 flex flex-col items-center justify-center py-20 text-center text-gray-500 ${className}`}>
      {Icon ? <Icon className="w-14 h-14 mb-4 text-gray-400" /> : null}

      <span className="text-lg font-semibold text-gray-600">{title}</span>

      {description ? (
        <span className="mt-2 text-sm text-gray-500 max-w-xs">{description}</span>
      ) : null}
    </div>
  )
}
