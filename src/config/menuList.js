const menuList = [
    {
        title : '开始吧',
        key : '/admin/start',
        icon : 'home',
    },
    {
        title : '商品',
        key : '/products',
        icon : 'appstore',
        children : [
            {
                title : '品类管理',
                key : '/products/category',
                icon : 'home',
            },
            {
                title : '商品管理',
                key : '/products/product',
                icon : 'home',
            },
        ]
    },
    {
        title : '图表',
        icon : 'home',
        key : '/myecharts',
        children : [
            {
                title : '柱状图',
                key : '/myecharts/line',
                icon : 'line',
            },
            {
                title : '饼状图',
                key : '/myecharts/bar',
                icon : 'bar',
            },
            {
                title : '折线图',
                key : '/myecharts/pie',
                icon : 'pie',
            },
        ]
    },
    {
        title : '随便',
        key : '/admin/whatever',
        icon : 'home',
    },
]

export default menuList