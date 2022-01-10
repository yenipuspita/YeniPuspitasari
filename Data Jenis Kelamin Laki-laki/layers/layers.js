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
var format_batas_kec_jateng_diy_bako_june2004_plgon_0 = new ol.format.GeoJSON();
var features_batas_kec_jateng_diy_bako_june2004_plgon_0 = format_batas_kec_jateng_diy_bako_june2004_plgon_0.readFeatures(json_batas_kec_jateng_diy_bako_june2004_plgon_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_kec_jateng_diy_bako_june2004_plgon_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_batas_kec_jateng_diy_bako_june2004_plgon_0.addFeatures(features_batas_kec_jateng_diy_bako_june2004_plgon_0);var lyr_batas_kec_jateng_diy_bako_june2004_plgon_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_kec_jateng_diy_bako_june2004_plgon_0, 
                style: style_batas_kec_jateng_diy_bako_june2004_plgon_0,
    title: 'batas_kec_jateng_diy_bako_june2004_plgon<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_0.png" />  (19013 - 30469) Sedikit <br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_1.png" />  (30469 - 41925) Sedang<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_2.png" />  (41925 - 53381) Banyak<br />'
        });

lyr_batas_kec_jateng_diy_bako_june2004_plgon_0.setVisible(true);
var layersList = [baseLayer,lyr_batas_kec_jateng_diy_bako_june2004_plgon_0];
lyr_batas_kec_jateng_diy_bako_june2004_plgon_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'Laki-laki': 'Laki-laki', });
lyr_batas_kec_jateng_diy_bako_june2004_plgon_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'Laki-laki': 'TextEdit', });
lyr_batas_kec_jateng_diy_bako_june2004_plgon_0.set('fieldLabels', {'KECAMATAN': 'inline label', 'Laki-laki': 'inline label', });
lyr_batas_kec_jateng_diy_bako_june2004_plgon_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});