"use client"

import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import SelectCustom from "@/component/Element/SelectCustom";

export default function ApexChart({ seriesData }) { // Você pode passar as séries e dados como props
  const options = [
    { value: 'Últimos 6 meses', label: '6 meses' },
    { value: 'Último ano', label: '1 ano' },
    { value: 'Últimos 10 anos', label: '5 anos' },
    { value: 'Últimos 10 anos', label: '10 anos' },
    { value: 'Mês', label: 'Mês' },
    { value: 'Ano', label: 'Ano' },
  ];

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
    <div className={"w-full flex flex-wrap fex-column justify-end items-end gap-8 "}>
      <SelectCustom defaultValue={options[0].value} placeholder={"Periodo"} options={options} className={"max-w-44 z-50"}/>
      <div id="chart" className={"w-full"}>
        <ReactApexChart options={chartOptions} series={series} type="area" height={300} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

