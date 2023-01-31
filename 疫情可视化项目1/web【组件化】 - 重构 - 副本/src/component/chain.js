var ec_center = echarts.init(document.getElementById('c2'), "dark");

var ec_center_option = {
    title: {
        text: '全国现有确诊',
        subtext: '',
        x: 'left'
    },
    //工具栏--什么东西？
    tooltip: {
        trigger: 'item'
    },
    //左侧小导航图标
    visualMap: {
        show: true,
        x: 'left',
        y: 'bottom',
        textStyle: {
            fontSize: 8,
        },
        splitList: [{ start: 1,end: 9 },
            {start: 10, end: 99 }, 
         { start: 100, end: 999 },
            {  start: 1000, end: 9999 },
            { start: 10000 }],
        color: ['#8A3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1']
    },
    //配置属性
    series: [{
        name: '现有确诊人数',  //鼠标焦点提示的名字
        type: 'map',
        mapType: 'china',
        roam: false, //拖动和缩放
        itemStyle: {
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#62d3ff', //区域边框颜色
                areaColor: "#b7ffe6", //区域颜色
            },
            emphasis: { //鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#fff',
                areaColor: "#fff",
            }
        },
        label: {
            normal: {
                show: true, //省份名称
                fontSize: 8,
            },
            emphasis: {
                show: true,
                fontSize: 8,
            }
        },
        data:[]
    }]
};



ec_center.setOption(ec_center_option)
//点击
ec_center.on('click', function (param) {

    // alert(param.name);

    $.ajax({
        url: "/r2",
        data: {
          "name": param.name
        },
        success: function (data) {
          ec_right2_option.series[0].data=data.data;
          ec_right2.setOption(ec_right2_option);
        }

    })
});



