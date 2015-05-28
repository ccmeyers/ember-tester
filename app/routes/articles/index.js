import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('friends/show').get('articles');
  },
  deactivate: function() {
    // We grab the model loaded in this route 
    //
    var model = this.modelFor('articles/new');
    // If we are leaving the Route we verify if the model is in 
    // 'isNew' state, which means it wasn't saved to the backend. 
    //
    if (model.get('isNew')) {
    // We call DS#destroyRecord() which removes it from the store 
    //
      model.destroyRecord();
    }
  },
  actions: {
    save: function(model) {
      model.save();
      return false;
    }
  }
});
