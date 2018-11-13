import L from 'leaflet'
import 'leaflet.chinatmsproviders'
import './lib/animatedMarker.js'
import '../node_modules/leaflet/dist/leaflet.css'
import './style/index.css'
//初始化地图
let map = L.map('map', {
  center: [31.59, 120.29],
  zoom: 5
})
// 加载高德地图
let Gaode = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
  maxZoom: 20,
  minZoom: 1
}).addTo(map)
let Gaodimgem = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
  maxZoom: 20,
  minZoom: 1
})
let Gaodimga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
  maxZoom: 20,
  minZoom: 1
})
var Gaodimage = L.layerGroup([Gaodimgem, Gaodimga]);

const baseLayers = {
  "高德地图": Gaode,
  "高德卫星图": Gaodimage
}

// 2d底图切换
L.control.layers(baseLayers, null).addTo(map)
// 自定义无人机图标
var myIcon = L.icon({
  iconUrl: './src/images/marker.png',
  iconSize: [48, 65],
});
// 画圆
var circle = L.circle([31.508, 118.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500000
}).addTo(map);

//多边形
var polygon = L.polygon([
  [32, 119],
  [32.503, 116.06],
  [35, 113.047]
]).addTo(map);


//标牌
// addClick(marker)
addClick(circle)
addClick(polygon)
function addClick (target) {
  target.on('click', function () {
    onMapClick(this)
  }) 
}
function onMapClick(obj) {
  console.log(obj._zIndex)
  for(var i in obj){
    if(obj.hasOwnProperty(i)){
      console.log(i)
    }
  }
  obj.bindPopup('hello world').openPopup()
}

 // 画线
 var latlngs = [
  [45.51, 122.68],
  [37.77, 122.43],
  [34.04, 118.2]
];
var polyline = L.polyline(latlngs)
var animatedMarker = L.animatedMarker(polyline.getLatLngs(), {icon: myIcon, autoStart: false, onEnd: function(){
  alert(1)
}})
map.addLayer(animatedMarker)
setTimeout(function () {
  console.log('start')
  animatedMarker.start();
}, 3000)