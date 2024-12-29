import { format, subDays } from 'date-fns';

export interface AnalyticsData {
  visitors: number[];
  sales: number[];
  categories: Record<string, number>;
}

export function generateMockData(days: number): AnalyticsData {
  return {
    visitors: Array.from({ length: days }, () => Math.floor(Math.random() * 1000) + 500),
    sales: Array.from({ length: days }, () => Math.floor(Math.random() * 5000) + 1000),
    categories: {
      'Elektronik': Math.floor(Math.random() * 1000) + 500,
      'Kleidung': Math.floor(Math.random() * 1000) + 500,
      'Bücher': Math.floor(Math.random() * 1000) + 500,
      'Sport': Math.floor(Math.random() * 1000) + 500,
      'Haushalt': Math.floor(Math.random() * 1000) + 500,
    }
  };
}

export function calculateMetrics(data: AnalyticsData) {
  const avgVisitors = data.visitors.length > 0 
    ? Math.round(data.visitors.reduce((a, b) => a + b, 0) / data.visitors.length)
    : 0;

  const avgSales = data.sales.length > 0
    ? Math.round(data.sales.reduce((a, b) => a + b, 0) / data.sales.length)
    : 0;

  const maxSales = Math.max(...data.sales);

  const totalVisitors = data.visitors.reduce((a, b) => a + b, 0);
  const totalSales = data.sales.reduce((a, b) => a + b, 0);
  const conversionRate = totalVisitors > 0
    ? ((totalSales / totalVisitors) * 100).toFixed(1)
    : '0.0';

  return {
    avgVisitors,
    avgSales,
    maxSales,
    conversionRate
  };
}

export function getDates(days: number): string[] {
  return Array.from({ length: days }, (_, i) => 
    format(subDays(new Date(), i), 'dd.MM')
  ).reverse();
}