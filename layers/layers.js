var wms_layers = [];


        var lyr_EsriWorldStreetMap_0 = new ol.layer.Tile({
            'title': 'Esri World Street Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Patrimnioarqueolgico_1 = new ol.format.GeoJSON();
var features_Patrimnioarqueolgico_1 = format_Patrimnioarqueolgico_1.readFeatures(json_Patrimnioarqueolgico_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Patrimnioarqueolgico_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Patrimnioarqueolgico_1.addFeatures(features_Patrimnioarqueolgico_1);
var lyr_Patrimnioarqueolgico_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Patrimnioarqueolgico_1, 
                style: style_Patrimnioarqueolgico_1,
                popuplayertitle: 'Património arqueológico',
                interactive: true,
    title: 'Património arqueológico<br />\
    <img src="styles/legend/Patrimnioarqueolgico_1_0.png" /> Indeterminada<br />\
    <img src="styles/legend/Patrimnioarqueolgico_1_1.png" /> Medieval<br />\
    <img src="styles/legend/Patrimnioarqueolgico_1_2.png" /> Pré-história<br />\
    <img src="styles/legend/Patrimnioarqueolgico_1_3.png" /> Proto-história<br />\
    <img src="styles/legend/Patrimnioarqueolgico_1_4.png" /> Romano<br />\
    <img src="styles/legend/Patrimnioarqueolgico_1_5.png" /> Várias épocas<br />\
    <img src="styles/legend/Patrimnioarqueolgico_1_6.png" /> <br />' });

lyr_EsriWorldStreetMap_0.setVisible(true);lyr_Patrimnioarqueolgico_1.setVisible(true);
var layersList = [lyr_EsriWorldStreetMap_0,lyr_Patrimnioarqueolgico_1];
lyr_Patrimnioarqueolgico_1.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Freguesia': 'Freguesia', 'Cronologia': 'Cronologia', 'Época': 'Época', 'Descrição': 'Descrição', 'Fonte': 'Fonte', 'Link': 'Link', 'epoca': 'epoca', 'rotulo': 'rotulo', });
lyr_Patrimnioarqueolgico_1.set('fieldImages', {'id': '', 'Nome': '', 'Freguesia': '', 'Cronologia': '', 'Época': '', 'Descrição': '', 'Fonte': '', 'Link': '', 'epoca': '', 'rotulo': '', });
lyr_Patrimnioarqueolgico_1.set('fieldLabels', {'id': 'hidden field', 'Nome': 'header label - always visible', 'Freguesia': 'inline label - always visible', 'Cronologia': 'inline label - always visible', 'Época': 'inline label - always visible', 'Descrição': 'no label', 'Fonte': 'inline label - always visible', 'Link': 'no label', 'epoca': 'hidden field', 'rotulo': 'hidden field', });
lyr_Patrimnioarqueolgico_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});