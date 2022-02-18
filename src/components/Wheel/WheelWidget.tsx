import React from 'react'

import { DashboardWidgetProvider } from '../Context/WheellContext'
import { DashboardWidgetControls } from './WheelSize'

export const DashboardWidget = ({ title, children }) => {
  return (
    <DashboardWidgetProvider>
      <section>
        <h2>{title}</h2>
        <DashboardWidgetControls />
        {children}
      </section>
    </DashboardWidgetProvider>
  )
}