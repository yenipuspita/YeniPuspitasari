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
var format_datasesuaikkktp_0 = new ol.format.GeoJSON();
var features_datasesuaikkktp_0 = format_datasesuaikkktp_0.readFeatures(json_datasesuaikkktp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_datasesuaikkktp_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_datasesuaikkktp_0.addFeatures(features_datasesuaikkktp_0);var lyr_datasesuaikkktp_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_datasesuaikkktp_0, 
                style: style_datasesuaikkktp_0,
    title: 'data sesuaikk/ktp<br />\
    <img src="styles/legend/datasesuaikkktp_0_0.png" />  (37591 - 59176 ) Rendah<br />\
    <img src="styles/legend/datasesuaikkktp_0_1.png" />  (59176 - 80760 ) Sedang<br />\
    <img src="styles/legend/datasesuaikkktp_0_2.png" />  (80760 - 102345) Tinggi<br />'
        });

lyr_datasesuaikkktp_0.setVisible(true);
var layersList = [baseLayer,lyr_datasesuaikkktp_0];
lyr_datasesuaikkktp_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'sesKK/KTP': 'sesKK/KTP', });
lyr_datasesuaikkktp_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'sesKK/KTP': 'TextEdit', });
lyr_datasesuaikkktp_0.set('fieldLabels', {'KECAMATAN': 'inline label', 'sesKK/KTP': 'inline label', });
lyr_datasesuaikkktp_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});