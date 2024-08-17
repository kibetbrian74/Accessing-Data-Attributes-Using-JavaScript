// lvb_catchment_areas is a shapefile containing the Lake Victorian Basins. It was downloaded and locally stored in the Google Earth Engine Environmnet.
var table = ee.FeatureCollection('projects/ee-bkibetcheuiyot/assets/lvb_catchment_areas');
// print('Feature names:', table.aggregate_array('NAME'));
// =====================================================
//              Saving to excel
// =====================================================
// Aggregate names
var featureNames = table.aggregate_array('NAME');

// Print feature names
print('Feature names:', featureNames);

// Convert feature names to a FeatureCollection
var featureCollection = ee.FeatureCollection(
  featureNames.map(function(name) {
    return ee.Feature(null, {'Name': name});
  })
);

// Export feature collection to CSV
Export.table.toDrive({
  collection: featureCollection,
  description: 'Lake_Victorian_Basins_to_excel',
  fileFormat: 'CSV'
});
