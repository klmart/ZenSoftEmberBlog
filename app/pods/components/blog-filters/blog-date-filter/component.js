import Ember from 'ember';

import BaseFilter from '../base-filter/component';

export default BaseFilter.extend({

  filteredModel: Ember.computed('filterService.model',
    function () {
      return this.get('filterService.model');
    }
  ),

  endDate2: Ember.computed('endDate',
    function () {
      return this.get('endDate') ? this.get('endDate')
                                       .addMinutes(1439) : Infinity;
    }
  ),

  run() {
    Date.prototype.addMinutes = function (minutes) {
      this.setMinutes(this.getMinutes() + minutes);
      return this;
    };

    const startDate = this.get('startDate');

    if (startDate || this.get('endDate2')) {
      const startDate = (this.get('startDate')) ? this.get('startDate') : -Infinity;

      let endDate = this.get('endDate2');

      const filteredBlogs = this.get('filteredModel')
                                .filter((blog) => {
                                  const createdDate     = (blog.get('createdDate'));
                                  const findByStartDate = (startDate <= createdDate);
                                  const findByEndDate   = (createdDate <= endDate);
                                  return findByStartDate && findByEndDate;
                                });
      this.get('filterService')
          .setModel(filteredBlogs);
    } else {
      console.log('FilterDate false');
    }
  }
});
