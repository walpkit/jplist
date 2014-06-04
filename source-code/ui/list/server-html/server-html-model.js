/**
* jQuery jPList Plugin ##VERSION## 
* Copyright 2014 Miriam Zusin. All rights reserved.
* To use this file you must buy a licence at http://codecanyon.net/user/no81no/portfolio 
*/
(function(){
	'use strict';		
		
	/**
	* data item viewmodel - used in server html list view/controller
	* @constructor
	* @param {jQuery.fn.jplist.domain.serverHTML.models.DataItemModel|null} dataItem
	* @param {Array.<jQuery.fn.jplist.app.dto.StatusDTO>|null} statuses
	* @param {Object} scopeObserver - scope observer
	*/
	jQuery.fn.jplist.ui.list.models.DataItemModel = function(dataItem, statuses, scopeObserver){
		
		this.dataItem = dataItem;
		this.statuses = statuses;
		this.scopeObserver = scopeObserver;
	};
	
	/**
	* set data item
	* @param {jQuery.fn.jplist.domain.serverHTML.models.DataItemModel|null} dataItem
	* @param {Array.<jQuery.fn.jplist.app.dto.StatusDTO>|null} statuses
	*/
	jQuery.fn.jplist.ui.list.models.DataItemModel.prototype.set = function(dataItem, statuses){
		
		//update properties
		this.dataItem = dataItem;
		this.statuses = statuses;

		//trigger change events
		this.scopeObserver.trigger(this.scopeObserver.events.modelChanged, [dataItem, statuses]);
	};
})();

