/**
* jQuery jPList Plugin ##VERSION## 
* Copyright 2014 Miriam Zusin. All rights reserved.
* To use this file you must buy a licence at http://codecanyon.net/user/no81no/portfolio 
*/
(function(){
	'use strict';	
	
	/**
	* date filter - filter dataview by date in the given jquery path
	* @param {number} year
	* @param {number} month
	* @param {number} day
	* @param {jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel} path - path object
	* @param {Array.<jQuery.fn.jplist.domain.dom.models.DataItemModel>} dataview - collection dataview
	* @param {string} format - datetime format
	* @return {Array.<jQuery.fn.jplist.domain.dom.models.DataItemModel>}
	*/
	jQuery.fn.jplist.domain.dom.services.FiltersService.dateFilter = function(year, month, day, path, dataview, format){
	
		var dataitem
			,pathitem
			,resultDataview = []
			,pathitemDate;
		
		for(var i=0; i<dataview.length; i++){
		
			//get dataitem
			dataitem = dataview[i];
			
			//find value by path
			pathitem = dataitem.findPathitem(path);
			
			//if path is found
			if(pathitem){
				
				if(!year || !month || !day){
				
					resultDataview.push(dataitem);	
				}
				else{
				
					//get date from pathitem (by its text value)
					pathitemDate = jQuery.fn.jplist.domain.dom.services.SortService.jQuery.fn.jplist.domain.dom.services.HelperService.formatDateTime(pathitem.text, format);
					
					if(pathitemDate && typeof pathitemDate.getFullYear === 'function'){
						
						if((pathitemDate.getFullYear() === year) && (pathitemDate.getMonth() - 1 === month) && (pathitemDate.getDate() === day)){							
							resultDataview.push(dataitem);	
						}
					}
				}
			}
			
		}
		
		return resultDataview;
	};
	
})();	