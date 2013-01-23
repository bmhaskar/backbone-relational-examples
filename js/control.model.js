(function ($){
  Drupal.m2serveStudio.control.controlModel = Backbone.RelationalModel.extend({
    subModelTypes: {
        'label': 'Drupal.m2serveStudio.control.controlLabel',
    },
    relations: [{
      type: Backbone.HasMany,
      key: 'control',
      relatedModel: 'Drupal.m2serveStudio.control.controlModel',
      collectionType: 'Drupal.m2serveStudio.control.controlCollection',
      reverseRelation: {
        key: 'controlAttachedTo',
        includeInJSON: false
      }
    }]
  });
  Drupal.m2serveStudio.control.controlCollection = Backbone.Collection.extend();
})(jQuery);
