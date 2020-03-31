
 function selectMeat(id) {
    
	
	var el=document.getElementById(id);
	   
           if(el.style.visibility=="visible" ){
               
				el.style.visibility="hidden";
				
				
	      }
		  else{
			  el.style.visibility="visible";
		  }
		 



 }
 
 var exoda=parseFloat(0);
var kostos_apostolhs=parseFloat(0); 
var subtotal_all=parseFloat(0);


var subtotal=parseFloat(0);
 
function calculateTotal(control){


		if(control.checked==true){
			subtotal+=parseFloat(control.value);
			subtotal_all=parseFloat(subtotal+5);
			document.getElementById("subtotal").innerHTML= +(subtotal_all).toFixed(3);
		  
		    
			
		}
		else{
			subtotal-=parseFloat(control.value);
		    subtotal_all=parseFloat(subtotal+5);
		    document.getElementById("subtotal").innerHTML= + (subtotal_all).toFixed(3);
			
		
	}

 

    
	 
	
	
     
    
	 
	 
	
	
}

function randomSelect(){
	var array=document.getElementsByName("selected");
	document.getElementById("random_button").disabled = true; 
	for(var i=0;i<=1;i++){
	    var randomNumber=Math.floor(Math.random()*7);
	    array[randomNumber].checked=true;
	    selectMeat(randomNumber);
	    calculateTotal(array[randomNumber]);
	}
}
function disableButton(){

	
	
	   document.getElementById("pizza_icon").disabled=true;
	    document.getElementById("fieldset2").disabled=false;
	    
	
	
		
	
}
function disableButton3(){
	document.getElementById("fieldset2").disabled=false;
	document.getElementById("fieldset1").disabled=true;
	
	
	
}

function disableButton1(){
	document.getElementById("pizza_icon").disabled=false;
	document.getElementById("random_button").disabled = false; 
	 document.getElementById("fieldset2").disabled=true;
}

function disableButton2(){
	document.getElementById("fieldset2").disabled=true;
	document.getElementById("fieldset1").disabled=false;
	
	
}



function nums(){
	var e=document.getElementById("filling");
	 var value1= e.options[e.selectedIndex].value;
	
	 if( value1==2){
		 subtotal_all=2*subtotal_all;
		 
		document.getElementById("subtotal").innerHTML= + (subtotal_all).toFixed(3);
	 }
	 else if( value1==3){
		 subtotal_all=3*subtotal_all;
		
		document.getElementById("subtotal").innerHTML= + (subtotal_all).toFixed(3);
	 }
	 else if( value1==4){
		subtotal_all=4*subtotal_all;
		 document.getElementById("subtotal").innerHTML= + (subtotal_all).toFixed(3);
	 }
	
}



 function expressDelivery(){
	 
	 var express=document.getElementById("delivery_money");
	 if(express.checked==true){
		 kostos_apostolhs=parseFloat(5);
	 }
	 else{
		 kostos_apostolhs=parseFloat(0);
	 }
	 
	  if(subtotal_all>=10){
		  exoda=2+kostos_apostolhs;
		  document.getElementById("subtotal2").innerHTML=  + (exoda).toFixed(2);
	  }
	  else if( subtotal_all<10){
		  exoda=3+kostos_apostolhs;
		  document.getElementById("subtotal2").innerHTML=  (exoda).toFixed(2);
	  }
	 
 }


var subtotal_total=parseFloat(0);

function offer(id){
			
	
	var el1=document.getElementById(id);

	var randomNumber4=Math.floor(Math.random()*5);
	var subtotal_total=(subtotal_all+exoda-randomNumber4);
	

		
	
		document.getElementById("subtotal1").innerHTML =  + randomNumber4.toFixed(3);
	
        document.getElementById("subtotal3").innerHTML =  + subtotal_total.toFixed(3)  ;
		
	    disablePics();
		
	
			
}
	function disablePics(){
		var earn = document.getElementsByName("image");
		for(var i=0;i<=8;i++){
		   earn[i].onclick=false;
		   earn[i].style.opacity=0.4;
		}
	}
	
function result(){
	alert("Your order has finished.Thank you for your preference!!!Good appetite!!")
	window.location.href="Pizzaria.html"
}

	
	
