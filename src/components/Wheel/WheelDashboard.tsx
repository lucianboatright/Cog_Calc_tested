

import React from 'react'

import { DashboardWidgetProvider } from '../Context/WheellContext'
import { DashboardWidgetControls } from './WheelSize'

export const DashboardWidget = ({ title, children }) => {
  return (
    <WidgetProvider>
      <section>
        <h2>{title}</h2>
        <WidgetControls />
        {children}
      </section>
    </WidgetProvider>
  )
}