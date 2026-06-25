import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import './stats.css';

const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const API_BASE = isLocal ? 'http://localhost:3000' : 'https://srv-d8udg45aeets738tmvfg.onrender.com';

const fmt = (n) => {
  if (!n && n !== 0) return '0';
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return String(n);
};

export default function Stats() {
  const [timeRange, setTimeRange] = useState('month');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [stats, setStats] = useState({ totalRequests: 0, totalVisitors: 0, chartData: [] });

  useEffect(() => {
    fetch(`${API_BASE}/api/track`, { method: 'POST' })
      .then(() => loadStats())
      .catch(() => loadStats());
  }, []);

  useEffect(() => { loadStats(); }, [timeRange]);

  const loadStats = () => {
    setLoading(true);
    setError(false);
    fetch(`${API_BASE}/api/statistics?period=${timeRange}`)
      .then(r => r.json())
      .then(data => {
        setStats({
          totalRequests: data.totalRequests || 0,
          totalVisitors: data.totalVisitors || 0,
          chartData: data.chartData || [],
        });
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  };

  const formatTimeLabel = (iso) => {
    const d = new Date(iso);
    const hours = String(d.getHours()).padStart(2, '0');
    const mins = String(d.getMinutes()).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    if (timeRange === 'day') return `${hours}:${mins}`;
    if (timeRange === 'month') return `${day}.${month}`;
    return `${day}.${month}`;
  };

  const chartOptions = {
    chart: {
      type: 'area',
      background: 'transparent',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: { enabled: true, delay: 150 },
        dynamicAnimation: { enabled: true, speed: 350 },
      },
    },
    theme: { mode: 'dark' },
    stroke: { curve: 'smooth', width: 2 },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#FFD700'],
        inverseColors: true,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    colors: ['#FFD700'],
    dataLabels: { enabled: false },
    grid: { borderColor: 'rgba(255,215,0,0.08)', strokeDashArray: 3 },
    xaxis: {
      categories: stats.chartData.map(d => formatTimeLabel(d.time)),
      labels: { style: { colors: 'rgba(255,255,255,0.4)', fontSize: '11px' } },
      axisBorder: { color: 'rgba(255,215,0,0.15)' },
    },
    yaxis: {
      labels: { style: { colors: 'rgba(255,255,255,0.4)', fontSize: '11px' } },
    },
    tooltip: {
      theme: 'dark',
      intersect: false,
      shared: true,
    },
    markers: { size: 3, colors: '#FFD700', strokeColors: '#FFD700' },
    responsive: [
      {
        breakpoint: 768,
        options: {
          xaxis: { labels: { style: { fontSize: '9px' } } },
          yaxis: { labels: { style: { fontSize: '9px' } } },
        },
      },
      {
        breakpoint: 480,
        options: {
          xaxis: { labels: { show: false } },
          markers: { size: 2 },
          stroke: { width: 1.5 },
        },
      },
    ],
  };

  const series = [{ name: 'Requests', data: stats.chartData.map(d => d.count) }];

  const rangeLabel = timeRange === 'day' ? 'Today' : timeRange === 'month' ? 'Last 30 days' : 'All time';

  return (
    <div className="stats-dashboard">
      <div className="stats-header">
        <div className="time-range-selector">
          {['day', 'month', 'all'].map(r => (
            <button key={r} className={`time-btn${timeRange === r ? ' active' : ''}`} onClick={() => setTimeRange(r)}>
              {r === 'day' ? 'Today' : r === 'month' ? 'Month' : 'All time'}
            </button>
          ))}
        </div>
        <h1>Statistics</h1>
        <p className="stats-period">{rangeLabel}</p>
      </div>

      <div className="stats-cards">
        {[
          { label: 'Total Requests', val: fmt(stats.totalRequests) + '+' },
          { label: 'Unique Visitors', val: fmt(stats.totalVisitors) + '+' },
        ].map(c => (
          <div className="stat-card" key={c.label}>
            <p>{c.label}</p>
            <h2>{loading ? '...' : c.val}</h2>
          </div>
        ))}
      </div>

      <div className="stats-chart-container">
        {loading ? (
          <p className="no-data">Loading...</p>
        ) : error ? (
          <p className="no-data">Connection error. Try again later.</p>
        ) : stats.chartData.length === 0 ? (
          <p className="no-data">No data for this period</p>
        ) : (
          <Chart options={chartOptions} series={series} type="area" width="100%" />
        )}
      </div>
    </div>
  );
}