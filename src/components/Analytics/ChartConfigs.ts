import { ChartData } from 'chart.js';
import { AnalyticsData } from '../../utils/analytics';

export function getVisitorChartData(dates: string[], visitors: number[]): ChartData<'line'> {
  return {
    labels: dates,
    datasets: [{
      label: 'Besucher',
      data: visitors,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }],
  };
}

export function getSalesChartData(dates: string[], sales: number[]): ChartData<'bar'> {
  return {
    labels: dates,
    datasets: [{
      label: 'Umsatz (€)',
      data: sales,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    }],
  };
}

export function getCategoryChartData(categories: Record<string, number>): ChartData<'pie'> {
  return {
    labels: Object.keys(categories),
    datasets: [{
      data: Object.values(categories),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
      ],
    }],
  };
}