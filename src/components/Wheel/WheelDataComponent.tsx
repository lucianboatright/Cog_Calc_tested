import React, { useContext } from 'react'

import { DashboardWidgetContext } from '../Context/WheellContext'

export const SomeDataComponent = () => {
  const { dataView } = useContext(DashboardWidgetContext)

  switch (dataView) {
    case 'table':
      return <Table />
    case 'line_chart':
      return <LineChart />
    case 'bar_chart':
      return <BarChart />
  }
}