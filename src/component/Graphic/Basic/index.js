"use client"

import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function ApexChart({ seriesData }) { // Você pode passar as séries e dados como props
  const [chartOptions] = useState({
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: true, // Habilita o zoom
        type: 'x', // Tipo de zoom em eixo x
      },
      selection: {
        enabled: true, // Habilita a seleção
        type: 'x', // Tipo de seleção em eixo x
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Fundamental Analysis of Stocks',
      align: 'left'
    },
    subtitle: {
      text: 'Price Movements',
      align: 'left'
    },
    labels: seriesData.monthDataSeries1.dates,
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: true // Habilita tooltip
      }
    },
    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    }
  });

  const [series] = useState([
    {
      name: "STOCK ABC",
      data: seriesData.monthDataSeries1.prices
    },
    {
      name: "STOCK XYZ",
      data: seriesData.monthDataSeries2.prices
    }
  ]);

  return (
    <div className={"w-full"}>
      <div id="chart">
        <ReactApexChart options={chartOptions} series={series} type="area" height={300} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

