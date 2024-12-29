import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { generateMockData, calculateMetrics, getDates } from '../utils/analytics';
import { getVisitorChartData, getSalesChartData, getCategoryChartData } from '../components/Analytics/ChartConfigs';
import { MetricsGrid } from '../components/Analytics/MetricsGrid';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const days = selectedPeriod === '7d' ? 7 : 30;
  const data = generateMockData(days);
  const dates = getDates(days);
  const metrics = calculateMetrics(data);

  const visitorData = getVisitorChartData(dates, data.visitors);
  const salesData = getSalesChartData(dates, data.sales);
  const categoryData = getCategoryChartData(data.categories);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold matrix-text">Analytics Dashboard</h2>
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="matrix-input"
        >
          <option value="7d">Letzte 7 Tage</option>
          <option value="30d">Letzte 30 Tage</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="matrix-card p-4">
          <h3 className="text-lg font-semibold mb-4 matrix-text">Besucher Übersicht</h3>
          <Line data={visitorData} options={{ responsive: true }} />
        </div>

        <div className="matrix-card p-4">
          <h3 className="text-lg font-semibold mb-4 matrix-text">Umsatz Übersicht</h3>
          <Bar data={salesData} options={{ responsive: true }} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="matrix-card p-4 md:col-span-2">
          <h3 className="text-lg font-semibold mb-4 matrix-text">Wichtige Kennzahlen</h3>
          <MetricsGrid {...metrics} />
        </div>

        <div className="matrix-card p-4">
          <h3 className="text-lg font-semibold mb-4 matrix-text">Kategorie Verteilung</h3>
          <Pie data={categoryData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
}

export default Analytics;