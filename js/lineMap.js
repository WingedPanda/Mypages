/**
 * Created by EvilAccountant on 2017/6/28.
 */
// 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});
// 使用
require(
    [
        'echarts',
        'echarts/chart/map', // 加载map模块
        'echarts/chart/bar', // 加载bar模块，按需加载
        'echarts/chart/scatter', // 加载scatter模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('main'));

        var option = {
            backgroundColor: '#1b1b1b',
            color: ['gold','aqua','lime'],
            title : {
                text: '模拟迁徙',
                subtext:'数据纯属虚构，如有雷同，不胜荣幸',
                x:'center',
                textStyle : {
                    color: '#fff'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: '{b}'
            },
            legend: {
                orient: 'vertical',
                x:'left',
                data:['南京市', '苏州市', '无锡市','南通市','常州市','徐州市',
                    '盐城市', '扬州市','泰州市','镇江市','淮安市','连云港市','宿迁市'],
                selectedMode: 'single',
                selected:{
                    '苏州市' : false,
                    '无锡市' : false,
                    '南通市' : false,
                    '常州市' : false,
                    '徐州市' : false,
                    '盐城市' : false,
                    '扬州市' : false,
                    '泰州市' : false,
                    '镇江市' : false,
                    '淮安市' : false,
                    '连云港市' : false,
                    '宿迁市' : false
                },
                textStyle : {
                    color: '#fff'
                }
            },
            toolbox: {
                show : true,
                orient : 'vertical',
                x: 'right',
                y: 'center',
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            dataRange: {
                min : 0,
                max : 100,
                calculable : true,
                color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
                textStyle:{
                    color:'#fff'
                }
            },
            animationDurationUpdate: 2000, // for update animation, like legend selected.
            series : [
                {
                    name: '南京市',
                    type: 'map',
                    roam: true,
                    hoverable: false,
                    mapType: '江苏',
                    itemStyle:{
                        normal:{
                            borderColor:'rgba(100,149,237,1)',
                            borderWidth:0.5,
                            areaStyle:{
                                color: '#1b1b1b'
                            }
                        }
                    },
                    data:[],
                    geoCoord: {
                        '苏州市': [120.619585,31.299379],
                        '南京市': [118.767413,32.041544],
                        '无锡市': [120.301663,31.574729],
                        '南通市': [120.864608,32.016212],
                        '常州市': [119.946973,31.772752],
                        '徐州市': [117.184811,34.261792],
                        '盐城市': [120.139998,33.377631],
                        '扬州市': [119.421003,32.393159],
                        '泰州市': [119.915176,32.484882],
                        '镇江市': [119.452753,32.204402],
                        '淮安市': [119.021265,33.597506],
                        '连云港市': [119.178821,34.600018],
                        '宿迁市': [118.275162,33.963008]
                    },
                    //线
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'南京市', smoothness:0.1}, {name:'苏州市',value:100}],
                            [{name:'南京市', smoothness:0.1}, {name:'无锡市',value:95}],
                            [{name:'南京市', smoothness:0.1}, {name:'南通市',value:90}],
                            [{name:'南京市', smoothness:0.1}, {name:'常州市',value:85}],
                            [{name:'南京市', smoothness:0.1}, {name:'徐州市',value:80}],
                            [{name:'南京市', smoothness:0.1}, {name:'盐城市',value:70}],
                            [{name:'南京市', smoothness:0.1}, {name:'扬州市',value:60}],
                            [{name:'南京市', smoothness:0.1}, {name:'泰州市',value:50}],
                            [{name:'南京市', smoothness:0.1}, {name:'镇江市',value:40}],
                            [{name:'南京市', smoothness:0.1}, {name:'淮安市',value:30}],
                            [{name:'南京市', smoothness:0.1}, {name:'连云港市',value:20}],
                            [{name:'南京市', smoothness:0.1}, {name:'宿迁市',value:10}]
                        ]
                    },
                    //点
                    markPoint : {
                    symbol:'circle',
                    symbolSize : 5,
                    effect : {
                        show: true,
                        shadowBlur : 0
                    },
                    itemStyle:{
                        normal:{
                            label:{show:false}
                        },
                        emphasis: {
                            label:{position:'top'}
                        }
                    },
                    data : [
                        {name:'苏州市',value:95},
                        {name:'南京市',value:95},
                        {name:'无锡市',value:90},
                        {name:'南通市',value:80},
                        {name:'常州市',value:70},
                        {name:'徐州市',value:60},
                        {name:'盐城市',value:50},
                        {name:'扬州市',value:40},
                        {name:'泰州市',value:30},
                        {name:'镇江市',value:20},
                        {name:'淮安市',value:10},
                        {name:'连云港市',value:10},
                        {name:'宿迁市',value:10},
                    ]
                }
            },
                {
                    name: '苏州市',
                    type: 'map',
                    mapType: '江苏',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'苏州市', smoothness:0.1}, {name:'南京市',value:100}],
                            [{name:'苏州市', smoothness:0.1}, {name:'无锡市',value:95}],
                            [{name:'苏州市', smoothness:0.1}, {name:'南通市',value:90}],
                            [{name:'苏州市', smoothness:0.1}, {name:'常州市',value:85}],
                            [{name:'苏州市', smoothness:0.1}, {name:'徐州市',value:80}],
                            [{name:'苏州市', smoothness:0.1}, {name:'盐城市',value:70}],
                            [{name:'苏州市', smoothness:0.1}, {name:'扬州市',value:60}],
                            [{name:'苏州市', smoothness:0.1}, {name:'泰州市',value:50}],
                            [{name:'苏州市', smoothness:0.1}, {name:'镇江市',value:40}],
                            [{name:'苏州市', smoothness:0.1}, {name:'淮安市',value:30}],
                            [{name:'苏州市', smoothness:0.1}, {name:'连云港市',value:20}],
                            [{name:'苏州市', smoothness:0.1}, {name:'宿迁市',value:10}]
                        ]
                    }
                },
                {
                    name: '无锡市',
                    type: 'map',
                    mapType: '江苏',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'无锡市', smoothness:0.2}, {name:'南通市',value:95}],
                        ]
                    }
                },
                {
                    name: '南通市',
                    type: 'map',
                    mapType: '江苏',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'南通市', smoothness:0.2}, {name:'无锡市',value:95}],
                        ]
                    }
                },
                {
                    name: '常州市',
                    type: 'map',
                    mapType: '江苏',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'常州市', smoothness:0.2}, {name:'无锡市',value:95}],
                        ]
                    }
                },
                {
                    name: '徐州市',
                    type: 'map',
                    mapType: '江苏',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'徐州市', smoothness:0.2}, {name:'无锡市',value:95}],
                        ]
                    }
                },
                {
                    name: '盐城市',
                    type: 'map',
                    mapType: '江苏',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'盐城市', smoothness:0.2}, {name:'无锡市',value:95}],
                        ]
                    }
                },
                {
                    name: '扬州市',
                    type: 'map',
                    mapType: '江苏',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'扬州市', smoothness:0.2}, {name:'无锡市',value:95}],
                        ]
                    }
                },
                {
                    name: '泰州市',
                    type: 'map',
                    mapType: '江苏',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'泰州市', smoothness:0.2}, {name:'无锡市',value:95}],
                        ]
                    }
                },
                {
                    name: '镇江市',
                    type: 'map',
                    mapType: '江苏',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'镇江市', smoothness:0.2}, {name:'无锡市',value:95}],
                        ]
                    }
                },
                {
                    name: '淮安市',
                    type: 'map',
                    mapType: '江苏',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'淮安市', smoothness:0.2}, {name:'无锡市',value:95}],
                        ]
                    }
                },
                {
                    name: '连云港市',
                    type: 'map',
                    mapType: '江苏',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'连云港市', smoothness:0.2}, {name:'无锡市',value:95}],
                        ]
                    }
                },
                {
                    name: '宿迁市',
                    type: 'map',
                    mapType: '江苏',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'宿迁市', smoothness:0.2}, {name:'无锡市',value:95}],
                        ]
                    }
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
    }
);