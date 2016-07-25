var dom = document.getElementById("ratePic");var myChart = echarts.init(dom);var app = {};option = null;option = {
    title : {
        text: '价格及中标率',
        subtext: '每月更新'
    },
    tooltip : {
        trigger: 'axis'
    },

    toolbox: {
         show : true,
         feature : {
             saveAsImage: {}
         }
    },
    xAxis : [
        {
            name:'月份',
            type : 'category',
            boundaryGap : false,
            data : ['201509','201510','201511','201512','201601','201602','201603','201604','201605','201606','201607',]
        }
    ],
    yAxis : [
        {
            name:'价格',
            type : 'value',
            min:75000,
            max:90000,
            interval:5000
        }
    ],
     series : [
       
        {
            name:'成交价',
            type:'line',
            data:[ 82100, 85300, 84600, 84500,82200,83200,83100,85100,85000, 84400, 87200],
            markPoint : {
                symbol :'pin',
                symbolSize : 65,
                data : [
                    {name : '中标率%', value : 70, xAxis: 1, yAxis: 85300},
                    {name : '中标率%', value : 30, xAxis: 2, yAxis: 84600},
                    {name : '中标率%', value : 45, xAxis: 3, yAxis: 84500},
					{name : '中标率%', value : 50, xAxis: 4, yAxis: 82200},
					{name : '中标率%', value : 50, xAxis: 5, yAxis: 83200},
					{name : '中标率%', value : 40, xAxis: 6, yAxis: 83100},
					{name : '中标率%', value : 30, xAxis: 7, yAxis: 85100},
					{name : '中标率%', value : 40, xAxis: 8, yAxis: 85000},
                    {name : '中标率%', value : 35, xAxis: 9, yAxis: 84400},
                    {name : '中标率%', value : 65, xAxis: 10, yAxis: 87200}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '均价'}
                ]
            }
        }
    ]
};
;if (option && typeof option === "object") {var startTime = +new Date();myChart.setOption(option, true);var endTime = +new Date();var updateTime = endTime - startTime;console.log("Time used:", updateTime);}
