import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Round extends Component {
    state = {}


    getOption = () => {
        const option = {
            tooltip: {
                show: false,//防止鼠标移到不需要的数据上弹出label
                trigger: 'item',
                formatter: "{a} : {c} ({d}%)"
            },
            color: ['#dc1439', '#e6b600', '#053afe'],
            legend: {
                orient: 'vertical',
                x: '30%',
                top: '19%',
                itemHeight: 10,//图例的高度
                itemGap: 5,//图例之间的间距 
                data: ['未开工' + 40 + '%', '竣工' + 15 + '%', '在建' + 35 + '%']//图例的名字需要和饼图的name一致，才会显示图例
            },
            series: [
                {
                    name: '在建' + 35 + '%',
                    type: 'pie',
                    radius: ['35%', '30%'],//环的位置

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: 35, //需要显示的数据
                            itemStyle: {
                                normal: {
                                    color: '#dc1439'
                                }
                            }
                        },
                        {
                            value: 100 - 35, //不需要显示的数据，颜色设置成和背景一样
                            itemStyle: {
                                normal: {
                                    color: 'transparent'
                                }
                            }
                        }
                    ]
                },
                {
                    name: '竣工' + 15 + '%',
                    type: 'pie',
                    radius: ['40%', '45%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: 15,
                            itemStyle: {
                                normal: {
                                    color: '#e6b600'
                                }
                            }
                        },
                        {
                            value: 100 - 15,
                            itemStyle: {
                                normal: {
                                    color: 'transparent'
                                }
                            },
                        }
                    ]
                },
                {
                    name: '未开工' + 40 + '%',
                    type: 'pie',
                    radius: ['55%', '50%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: 40,
                            itemStyle: {
                                normal: {
                                    color: '#053afe'
                                }
                            }
                        },
                        {
                            value: 100 - 40,
                            itemStyle: {
                                normal: {
                                    color: 'transparent'
                                }
                            }
                        }
                    ]
                },
            ]
        };
        return option
    }

    render() {
        return (
            <ReactEcharts style={{ height: "100%" }} option={this.getOption()}></ReactEcharts>

        );
    }
}

export default Round;