/**
* jQuery jPList Plugin ##VERSION## 
* Copyright 2014 Miriam Zusin. All rights reserved.
* To use this file you must buy a licence at http://codecanyon.net/user/no81no/portfolio 
*/
(function(){//+
	'use strict';		
	
	/**
	* Render control html
	* @param {Object} context
	*/
	var render = function(context){
		
		if(!context.history.statusesQueue || context.history.statusesQueue.length <= 0){
			context.$control.addClass('jplist-disabled');
		}
		else{
			context.$control.removeClass('jplist-disabled');
		}
	};
	
	/**
	* Init control events
	* @param {Object} context
	*/
	var initEvents = function(context){	
		
		//event from controller to panel after html rebuild
		context.observer.on(context.observer.events.setStatusesEvent, function(event, statusesArray, collection){
			
			//refresh button class
			render(context);
		});
		
		context.$control.on('click', function(){
		
			var status
				,cStatus
				,statusesList;
			
			//pop the current status and statuses list
			status = context.history.popStatus();
			statusesList = context.history.popList();
			
			//get the prev status and statuses list
			status = context.history.getLastStatus();
			statusesList = context.history.getLastList() || [];
			
			if(statusesList && status){
		
				for(var i=0; i<statusesList.length; i++){
				
					//get current status
					cStatus = statusesList[i];
					
					if(cStatus.name === status.name && cStatus.action === status.action){
					 
						//merge current status with the given one
						jQuery.extend(true, statusesList[i], status);
					}
				}
				
				context.observer.trigger(context.observer.events.renderStatusesEvent, [statusesList]);
			}
			else{
				//force build statuses event			
				context.observer.trigger(context.observer.events.forceRenderStatusesEvent, [true]);
			}
			
			//refresh button class
			render(context);
		});
	};

	/** 
	* Back Button Control
	* @constructor
	* @param {Object} context
	*/
	var Init = function(context){
				
		//render control's html
		render(context);
		
		//init events
		initEvents(context);
		
		return jQuery.extend(this, context);
	};

	/** 
	* back button
	* @constructor
	* @param {Object} context
	*/
	jQuery.fn.jplist.ui.controls.BackButton = function(context){
		return new Init(context);
	};	
		
})();

