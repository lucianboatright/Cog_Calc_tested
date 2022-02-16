import React, { useContext } from 'react'

import { DashboardWidgetContext } from '../Context/WheellContext'

export const DashboardWidgetControls = ({ label }) => {
  const { dataView, handleChangeView } = useContext(DashboardWidgetContext)

  return (
    <div>
      <select value={dataView} onChange={handleChangeView}>
        <option value="bar_graph">Bar Graph</option>
        <option value="line_chart">Line Chart</option>
        <option value="table">Table</option>
      </select>
    </div>
  )
}