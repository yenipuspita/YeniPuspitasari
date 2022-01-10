var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_DATASESUAIUMUR014_0 = new ol.format.GeoJSON();
var features_DATASESUAIUMUR014_0 = format_DATASESUAIUMUR014_0.readFeatures(json_DATASESUAIUMUR014_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DATASESUAIUMUR014_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DATASESUAIUMUR014_0.addFeatures(features_DATASESUAIUMUR014_0);var lyr_DATASESUAIUMUR014_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DATASESUAIUMUR014_0, 
                style: style_DATASESUAIUMUR014_0,
    title: 'DATA SESUAI UMUR 0-14<br />\
    <img src="styles/legend/DATASESUAIUMUR014_0_0.png" />  (6979 - 12134) Rendah <br />\
    <img src="styles/legend/DATASESUAIUMUR014_0_1.png" />  (12134 - 17290) Sedang <br />\
    <img src="styles/legend/DATASESUAIUMUR014_0_2.png" />  (17290 - 22445) Tinggi <br />'
        });

lyr_DATASESUAIUMUR014_0.setVisible(true);
var layersList = [baseLayer,lyr_DATASESUAIUMUR014_0];
lyr_DATASESUAIUMUR014_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', '0-14': '0-14', });
lyr_DATASESUAIUMUR014_0.set('fieldImages', {'KECAMATAN': 'TextEdit', '0-14': 'TextEdit', });
lyr_DATASESUAIUMUR014_0.set('fieldLabels', {'KECAMATAN': 'inline label', '0-14': 'inline label', });
lyr_DATASESUAIUMUR014_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});