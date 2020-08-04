import React, { useState, useEffect } from 'react';
import { Map } from 'react-amap';

export default function FunTest() {
    const [age, setAge] = useState(0);
    const [count, setCount] = useState(0);
    const [names, setNames] = useState(["abc", "cba"]);
    const [info, setInfo] = useState({ name: "why", age: 18 });

    function addFriend(names) {
        names.push("nba");
        console.log(names);
        setNames(names);
    }

    useEffect(() => {
        document.title = `当前计数: ${count}`;
        setTimeout(() => {
            return document.title = `啦啦啦啦啦啦`;
        }, 1000);
    }, [count])

    useEffect(() => {
        document.title = `当前年龄: ${age}`;
        setTimeout(() => {
            return document.title = `哈哈哈哈哈`;
        }, 1000);
    }, [age])
    // useEffect(() => {

    //     var map = new FunTest.Map('container', {
    //         zoom: 10, // 设置地图的缩放级别
    //         center: [118.80, 32.05],
    //         mapStyle: 'amap://styles/463e64498c533bb5a0e9594b3f769eaa'
    //     });
    //     map.setMapStyle('amap://styles/463e64498c533bb5a0e9594b3f769eaa');
    //     var center = new FunTest.LngLat(118.80, 32.05);
    //     for (var j = 0; j < 16; j++) {
    //         var lnglat = new FunTest.LngLat(center.getLng() + Math.random() * 0.3 - 0.2, center.getLat() - Math.random() * 0.5 + 0.2);
    //         console.log(lnglat);
    //         var circleMarker = new FunTest.CircleMarker({
    //             // position: lnglat,
    //             // raiseOnDrag: true,
    //             // opacity: 1,
    //             // icon: 'http://webapi.amap.com/theme/v1.2/0.png',
    //             center: lnglat,
    //             radius: 10 + Math.random() * 10,
    //             strokeColor: '#fdde62',
    //             strokeWeight: 3,
    //             strokeOpacity: 0.5,
    //             fillColor: '#fdde62',
    //             fillOpacity: 0.5,
    //             zIndex: 10,
    //             bubble: true,
    //             cursor: 'pointer',
    //             clickable: true
    //         });
    //         circleMarker.setMap(map);
    //     }

    // }, [])
    return (
        <div>
            <h2>当前年龄: {age}</h2>
            <button onClick={e => setAge(age + 1)}>age+1</button>
            <h2>朋友列表</h2>
            <ul>
                {
                    names.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            <button onClick={e => setNames([...names, "nba"])}>添加好友</button>
            {/* 思考: 这样的方式是否可以实现   答案:不能*/}
            {/* <button onClick={addFriend}>添加好友</button> */}
            {/* <button onClick={e => addFriend([...names])}>添加好友</button> 这样可以 */}

            <h2>我的信息:</h2>
            <div>我的名字: {info.name}</div>
            <button onClick={e => setInfo({ ...info, name: "lilei" })}>修改名字</button>
        </div>
    )
}