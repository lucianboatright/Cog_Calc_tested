import React, { useContext } from 'react'

import { DashboardWidgetContext } from '../Context/WheellContext'

export const SomeDataComponent = () => {
  const { dataView } = useContext(DashboardWidgetContext)

  switch (dataView) {
    case 'table':
      console.log("hello 1")
    case 'line_chart':
      return <div>hello 2</div>
    case 'bar_chart':
      return <div>hello 3</div>
  }
}