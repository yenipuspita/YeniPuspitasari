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
var format_DATAJENISKELAMINPEREMPUAN_0 = new ol.format.GeoJSON();
var features_DATAJENISKELAMINPEREMPUAN_0 = format_DATAJENISKELAMINPEREMPUAN_0.readFeatures(json_DATAJENISKELAMINPEREMPUAN_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DATAJENISKELAMINPEREMPUAN_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DATAJENISKELAMINPEREMPUAN_0.addFeatures(features_DATAJENISKELAMINPEREMPUAN_0);var lyr_DATAJENISKELAMINPEREMPUAN_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DATAJENISKELAMINPEREMPUAN_0, 
                style: style_DATAJENISKELAMINPEREMPUAN_0,
    title: 'DATA JENIS KELAMIN PEREMPUAN<br />\
    <img src="styles/legend/DATAJENISKELAMINPEREMPUAN_0_0.png" />  (18885 - 30929) Rendah<br />\
    <img src="styles/legend/DATAJENISKELAMINPEREMPUAN_0_1.png" />  (30929 - 42973) Sedang<br />\
    <img src="styles/legend/DATAJENISKELAMINPEREMPUAN_0_2.png" />  (42973 - 55017) Banyak <br />'
        });

lyr_DATAJENISKELAMINPEREMPUAN_0.setVisible(true);
var layersList = [baseLayer,lyr_DATAJENISKELAMINPEREMPUAN_0];
lyr_DATAJENISKELAMINPEREMPUAN_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'Perempuan': 'Perempuan', });
lyr_DATAJENISKELAMINPEREMPUAN_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'Perempuan': 'TextEdit', });
lyr_DATAJENISKELAMINPEREMPUAN_0.set('fieldLabels', {'KECAMATAN': 'inline label', 'Perempuan': 'inline label', });
lyr_DATAJENISKELAMINPEREMPUAN_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});