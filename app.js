const lineGradientGraph = document.getElementById('line-chart').getContext("2d");

let gradientBg = lineGradientGraph.createLinearGradient(0,0,700,0);
gradientBg.addColorStop(0,'rgba(58,54,219,48%)');
gradientBg.addColorStop(1,'rgba(255,105,180,35%)');

  new Chart(lineGradientGraph, {
    type: 'line',
    data: {
      labels: ['10am', '11am', '12am', '01am', '02am', '04am','05am','06am'],
      datasets: [{
        data: [52,35, 58, 30, 48, 17, 32, 74, 57, 93],
        backgroundColor:[
          gradientBg,
        ],
        tension:0.3,
        fill:true,
        borderWidth: 0, 
        //point styling
        pointBackgroundColor:'#39394B',
        pointBorderColor:'#FF69B4',
        pointBorderWidth:3,
        pointRadius:7,
        pointHoverRadius:13,
      },]},
    options: {
      plugins:{
      legend:{
        display:false
      },
      tooltip:{
        backgroundColor:'rgba(171,173,191,255)',
      }},
      scales: {
        x:{
          grid:{
            drawOnChartArea:false
          }
        },
        y: {
          beginAtZero: true,
          grid:{
            color:'#454A56',
          },
          ticks:{
            maxTicksLimit: 10
          }
        }
      },
      responsive:true,
      maintainAspectRatio:false,
    },
  });