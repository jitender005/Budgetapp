//budgetcontroller

var buget_controller=(function(){

var Income=function(id,description,value){
this.id=id;
this.description=description;
this.value=value;
};

var Expense=function(id,description,value){
this.id=id;
this.description=description;
this.value=value;
};


var data={
	allItems:{
		exp:[],
		inc:[]
	},
	totals:{
		exp:0,
		inc:0
	}
};


return {
	 additems:function(type,des,val){
		var newitem,ID;
		
		if(data.allItems[type].length>0){
		ID=data.allItems[type][data.allItems[type].length-1].id + 1;	
		}
		else{
			ID=0;
		}
		// create new item based on inc or exp
              if (type==='exp') {
               newitem = new Expense(ID,des,val);
              }
              else if(type==='inc'){
              	
                   newitem = new Income(ID,des,val); 
              }
              // push data into new element 
              data.allItems[type].push(newitem);
              return newitem;
	},
	testing:function(){
		console.log(data);
	}
}
})();

//uicontroller

var UI_controller=(function(){
    
var Dom={
 	
		typee:"#type",
		descript:"#des_input",
		val:"#des_amount",
		enter:'#select'
     }
return{
	// get data from input fields
	 getInput:function() {
		return{
	    type:document.querySelector(Dom.typee).value,
	    des:document.querySelector(Dom.descript).value,
	    values:document.querySelector(Dom.val).value
};
},
getDom:function(){
	return Dom;
}
};
})();

//controller

var controller=(function(bdgtcontrol,uicontrol){

// function is created for all event listeners
var setupEventListeners=function(){
	var Domc=uicontrol.getDom();
	document.querySelector(Domc.enter).addEventListener('click',addcontrol);
document.addEventListener('keypress',function(event){
	
	if (event.keyCode===13) {
		addcontrol();
	}
});
};
var addcontrol=function() {
	var datas,newitem;
	datas=uicontrol.getInput();
    newitem=bdgtcontrol.additems(datas.type , datas.des ,datas.values);
};

//initialization function for app events 		}
 return{
 	
		init:function(){
		
			console.log("app started");
				setupEventListeners();
	}
};




})(buget_controller,UI_controller);


controller.init();
















/*function display() {
	var type=document.getElementById("type").selectedIndex;
    var counter=0;
	//var b=document.getElementById("sign");
	//console.log(a);
	
	if (type=="0") {
		if(counter>0){

		}
	    description=document.getElementById("des_input").value;
		value=document.getElementById("des_amount").value;
		console.log(description);
		console.log(value);
			document.getElementById("incom").innerHTML=description;
			document.getElementById("incom_amount").innerHTML=value;  // problem arises cannot set 
            document.getElementById("income_amount").innerHTML=value;
             document.getElementById("budgetshow_div").innerHTML=value;
         counter++;
		
	}
	else{
		description=document.getElementById("des_input").value;
		value=document.getElementById("des_amount").value;
		console.log(description);
		console.log(value);
			document.getElementById("expen").innerHTML=description;
			document.getElementById("expen_amount").innerHTML=value;  // problem arises cannot set 
            document.getElementById("expense_amount").innerHTML=value;
             document.getElementById("budgetshow_div").innerHTML=value;
			
		}
	}
*/