import { NbJSThemeOptions, COSMIC_THEME as baseTheme } from '@nebular/theme';

const baseThemeVariables = baseTheme.variables;

export const COSMIC_THEME = {
  name: 'cosmic',
  base: 'cosmic',
  variables: {
    temperature: {
      arcFill: [ '#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59' ],
      arcEmpty: baseThemeVariables.bg2,
      thumbBg: '#ffffff',
      thumbBorder: '#ffffff',
    },

    solar: {
      gradientLeft: baseThemeVariables.primary,
      gradientRight: baseThemeVariables.primary,
      shadowColor: 'rgba(0, 0, 0, 0)',
      secondSeriesFill: baseThemeVariables.bg2,
      radius: ['70%', '90%'],
    },

    traffic: {
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',

      yAxisSplitLine: baseThemeVariables.separator,

      lineBg: baseThemeVariables.border2,
      lineShadowBlur: '14',
      itemColor: baseThemeVariables.border2,
      itemBorderColor: baseThemeVariables.border2,
      itemEmphasisBorderColor: baseThemeVariables.primary,
      shadowLineDarkBg: baseThemeVariables.border3,
      shadowLineShadow: baseThemeVariables.border3,
      gradFrom: baseThemeVariables.bg,
      gradTo: baseThemeVariables.bg2,
    },

    electricity: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: baseThemeVariables.fgText,
      tooltipLineWidth: '0',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',

      axisLineColor: baseThemeVariables.border3,
      xAxisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,

      itemBorderColor: baseThemeVariables.border2,
      lineStyle: 'dotted',
      lineWidth: '2',
      lineGradFrom: baseThemeVariables.success,
      lineGradTo: baseThemeVariables.warning,
      lineShadow: baseThemeVariables.bg4,

      areaGradFrom: baseThemeVariables.bg2,
      areaGradTo: baseThemeVariables.danger,
      shadowLineDarkBg: baseThemeVariables.danger,
    },

    bubbleMap: {
      titleColor: baseThemeVariables.fgText,
      areaColor: baseThemeVariables.bg4,
      areaHoverColor: baseThemeVariables.fgHighlight,
      areaBorderColor: baseThemeVariables.border5,
    },

    profitBarAnimationEchart: {
      textColor: baseThemeVariables.fgText,

      firstAnimationBarColor: baseThemeVariables.primary,
      secondAnimationBarColor: baseThemeVariables.success,

      splitLineStyleOpacity: '1',
      splitLineStyleWidth: '1',
      splitLineStyleColor: baseThemeVariables.border2,

      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '16',
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipBorderWidth: '1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
    },

    trafficBarEchart: {
      gradientFrom: baseThemeVariables.warningLight,
      gradientTo: baseThemeVariables.warning,
      shadow: baseThemeVariables.warningLight,
      shadowBlur: '5',

      axisTextColor: baseThemeVariables.fgText,
      axisFontSize: '12',

      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
    },

    countryOrders: {
      countryBorderColor: baseThemeVariables.border4,
      countryFillColor: baseThemeVariables.danger,
      countryBorderWidth: '1',
      hoveredCountryBorderColor: baseThemeVariables.primary,
      hoveredCountryFillColor: baseThemeVariables.primaryLight,
      hoveredCountryBorderWidth: '1',

      chartAxisLineColor: baseThemeVariables.border4,
      chartAxisTextColor: baseThemeVariables.fg,
      chartAxisFontSize: '16',
      chartGradientTo: baseThemeVariables.primary,
      chartGradientFrom: baseThemeVariables.primaryLight,
      chartAxisSplitLine: baseThemeVariables.separator,
      chartShadowLineColor: baseThemeVariables.primaryLight,

      chartLineBottomShadowColor: baseThemeVariables.primary,

      chartInnerLineColor: baseThemeVariables.bg2,
    },

    echarts: {
      bg: baseThemeVariables.bg,
      textColor: baseThemeVariables.fgText,
      axisLineColor: baseThemeVariables.fgText,
      splitLineColor: baseThemeVariables.separator,
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: baseThemeVariables.primary,
      areaOpacity: '1',
    },

    chartjs: {
      axisLineColor: baseThemeVariables.separator,
      textColor: baseThemeVariables.fgText,
    },

    orders: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '20',

      axisLineColor: baseThemeVariables.border4,
      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,

      itemBorderColor: baseThemeVariables.primary,
      lineStyle: 'solid',
      lineWidth: '2',

      // first line
      firstAreaGradFrom: baseThemeVariables.bg3,
      firstAreaGradTo: baseThemeVariables.bg3,
      firstShadowLineDarkBg: baseThemeVariables.bg3,

      // second line
      secondLineGradFrom: baseThemeVariables.primary,
      secondLineGradTo: baseThemeVariables.primary,

      secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
      secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
      secondShadowLineDarkBg: baseThemeVariables.primary,

      // third line
      thirdLineGradFrom: baseThemeVariables.success,
      thirdLineGradTo: baseThemeVariables.successLight,

      thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
      thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
      thirdShadowLineDarkBg: baseThemeVariables.success,

      // fourth line
      fourthLineGradFrom: baseThemeVariables.warning,
      fourthLineGradTo: baseThemeVariables.warningLight,

      fourthAreaGradFrom: 'rgba(0, 104, 243, 0.2)',
      fourthAreaGradTo: 'rgba(0, 104, 243, 0)',
      fourthShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
    },

    profit: {
      bg: baseThemeVariables.bg,
      textColor: baseThemeVariables.fgText,
      axisLineColor: baseThemeVariables.border4,
      splitLineColor: baseThemeVariables.separator,
      areaOpacity: '1',

      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,

      // first bar
      firstLineGradFrom: baseThemeVariables.bg3,
      firstLineGradTo: baseThemeVariables.bg3,
      firstLineShadow: 'rgba(0, 0, 0, 0)',

      // second bar
      secondLineGradFrom: baseThemeVariables.primary,
      secondLineGradTo: baseThemeVariables.primary,
      secondLineShadow: 'rgba(0, 0, 0, 0)',

      // third bar
      thirdLineGradFrom: baseThemeVariables.success,
      thirdLineGradTo: baseThemeVariables.successLight,
      thirdLineShadow: 'rgba(0, 0, 0, 0)',

      // fourth bar
      fourthLineGradFrom: baseThemeVariables.warning,
      fourthLineGradTo: baseThemeVariables.warningLight,
      fourthLineShadow: 'rgba(0, 0, 0, 0)',
    },

    orderProfitLegend: {
      firstItem: baseThemeVariables.success,
      secondItem: baseThemeVariables.primary,
      thirdItem: baseThemeVariables.bg3,
      fourthItem: baseThemeVariables.warning,
    },

    visitors: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '1',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '20',

      axisLineColor: baseThemeVariables.border4,
      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,

      itemBorderColor: baseThemeVariables.primary,
      lineStyle: 'dotted',
      lineWidth: '2',
      lineGradFrom: '#ffffff',
      lineGradTo: '#ffffff',
      lineShadow: 'rgba(0, 0, 0, 0)',

      areaGradFrom: baseThemeVariables.primary,
      areaGradTo: baseThemeVariables.primaryLight,

      innerLineStyle: 'solid',
      innerLineWidth: '1',

      innerAreaGradFrom: baseThemeVariables.success,
      innerAreaGradTo: baseThemeVariables.success,
    },

    visitorsLegend: {
      firstIcon: baseThemeVariables.success,
      secondIcon: baseThemeVariables.primary,
    },

    visitorsPie: {
      firstPieGradientLeft: baseThemeVariables.success,
      firstPieGradientRight: baseThemeVariables.successLight,
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',
      firstPieRadius: ['70%', '90%'],

      secondPieGradientLeft: baseThemeVariables.warning,
      secondPieGradientRight: baseThemeVariables.warningLight,
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',
      secondPieRadius: ['60%', '95%'],
      shadowOffsetX: '0',
      shadowOffsetY: '3',
    },

    visitorsPieLegend: {
      firstSection: baseThemeVariables.warning,
      secondSection: baseThemeVariables.success,
    },

    earningPie: {
      radius: ['65%', '100%'],
      center: ['50%', '50%'],

      fontSize: '22',

      firstPieGradientLeft: baseThemeVariables.success,
      firstPieGradientRight: baseThemeVariables.success,
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',

      secondPieGradientLeft: baseThemeVariables.primary,
      secondPieGradientRight: baseThemeVariables.primary,
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',

      thirdPieGradientLeft: baseThemeVariables.warning,
      thirdPieGradientRight: baseThemeVariables.warning,
      thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
    },

    earningLine: {
      gradFrom: baseThemeVariables.primary,
      gradTo: baseThemeVariables.primary,

      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '16',
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipBorderWidth: '1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
    },
  },
} as NbJSThemeOptions;
