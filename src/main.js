import L from 'leaflet'
import 'leaflet.chinatmsproviders'
import '../node_modules/leaflet/dist/leaflet.css'
import './style/index.css'
// import './lib/osmbuilding-leaflet.js'
//初始化地图
let map = L.map('map', {
  center: [31.59, 120.29],
  zoom: 8
})
// 加载高德地图
let Gaode = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
  maxZoom: 20,
  minZoom: 1
})
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

// 3d底图测试