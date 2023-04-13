const lineGradientGraph = document.getElementById('line-chart').getContext("2d");
const donutChart = document.getElementById('donut-chart').getContext('2d');

let gradientBg = lineGradientGraph.createLinearGradient(0,0,700,0);
gradientBg.addColorStop(0,'rgba(58,54,219,48%)');
gradientBg.addColorStop(1,'rgba(255,105,180,35%)');

 /*Gradient chart(the first one)*/
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
        displayColors:false,
        padding:10,
        titleColor:'black',
        titleFont: {
          size: 12,
          weight:400
        },
        bodyAlign:'center',
        bodyFont: {
          size: 16,
          weight:500
        },
        bodyColor:'black',
        callbacks:{
          title:() => {
            return 'Sales'
          }
        }
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

  let sale = 40;
  let distribute = 10;
  let returnValue = 20;

  
  const sliceThickness = {
    id: 'sliceThickness',
    beforeDraw(chart,plugins){

      let sliceThicknessPixel = [400,370,340,300];
      sliceThicknessPixel.forEach((thickness,index) =>{
      chart.getDatasetMeta(0).data[index].innerRadius = (chart.chartArea.width / thickness)*100;
      })
    }
  };

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: ['Sale', 'Distribute', 'Return'],
      datasets: [{
        label: '# of Votes',
        data: [sale, distribute, returnValue, 100-(sale+distribute+returnValue)],
        backgroundColor:['#605CFF','#2FE5A7','#FF69B4','#ABADBF'],
        borderWidth: 0,
      }]
    },
    options: {
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{
          position:'bottom',
          labels:{
            usePointStyle:true,
            pointStyle:'rectRounded',
            padding:40,
            color:'#ABADBF'
          }
        }
      }
    },
    plugins:[sliceThickness]
  });
