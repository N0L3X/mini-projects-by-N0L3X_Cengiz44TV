import React from 'react';

interface MetricsGridProps {
  avgVisitors: number;
  avgSales: number;
  maxSales: number;
  conversionRate: string;
}

export function MetricsGrid({ avgVisitors, avgSales, maxSales, conversionRate }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="matrix-card p-4">
        <p className="text-gray-400">Durchschn. Besucher/Tag</p>
        <p className="text-2xl font-bold">{avgVisitors}</p>
      </div>
      <div className="matrix-card p-4">
        <p className="text-gray-400">Durchschn. Umsatz/Tag</p>
        <p className="text-2xl font-bold">{avgSales}€</p>
      </div>
      <div className="matrix-card p-4">
        <p className="text-gray-400">Höchster Tagesumsatz</p>
        <p className="text-2xl font-bold">{maxSales}€</p>
      </div>
      <div className="matrix-card p-4">
        <p className="text-gray-400">Conversion Rate</p>
        <p className="text-2xl font-bold">{conversionRate}%</p>
      </div>
    </div>
  );
}