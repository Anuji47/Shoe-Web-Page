$(function() {
	$("#spinner").spinner({
		min: 4,
		max: 12,
		spin: function(event, ui) {
			$(this).change();
		}
	});
});


$(function() {
	  $("#gender").selectmenu();
});

$(function() {
	  $("#style").selectmenu();
});

$(function() {
	  $("#colour").selectmenu();
});


$(function() {
	$("#slider-range").slider({
		range:true,
		min: 0,
		max: 100,
		values: [ 40, 60 ],
		slide: function( event, ui ){
			$("#amount").val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
		}
	});
	
	$("#amount").val(" £" + $(" #slider-range").slider( "values", 0 ) + " - £" + $("#slider-range").slider( "values", 1 ) );
});



$(function() {
	$( "#Search" ).on("click", function(){
		
		var gender = $("#gender").val();
	    var shoeSize =  $("#spinner").val();
		var shoeStyle =  $("#style").val();
        var shoeColor =  $("#colour").val();
		var minPrice = $("#slider-range").slider("option", "values")[0];
		var maxPrice = $("#slider-range").slider("option", "values")[1];
		
		var output="<div>";
		   for (var i in data.shoes) {
			   if (( gender == data.shoes[i].gender) || (gender=="universal"))
               if (( shoeColor == data.shoes[i].colour))
			   if (( shoeStyle == data.shoes[i].style))
			   if (( data.shoes[i].price >= minPrice && data.shoes[i].price <= maxPrice ))
               for(var j in data.shoes[i].size){
                   if (shoeSize == data.shoes[i].size[j]){
			   {
				   {
					   {
						   {
							   output +="<div class='type'>" + data.shoes[i].name + "<h2 class='hi'><p>" + "£" + data.shoes[i].price +"</p></h2>" + "<img src=" + data.shoes[i].picture + ">" + "<p>" + data.shoes[i].description + "<button class='visit'><a href='" + data.shoes[i].url + "'>Visit Page</a></button></div>";
						   } } } } } } }
                           
				output+="</div>";
				document.getElementById( "Placeholder" ).innerHTML = output;
		   });
});

$( function() {
    $( "#tabs" ).tabs();
});

function shoe_img(side_img){
    var zoom = document.getElementById("shoe");
    zoom.src = side_img.src;
    var large_img = document.getElementById("zoom");
    large_img.href = side_img.src;
}


$(function() {
	$( "#but" ).on("click", function(){
		
		try {
			$(this).attr('disabled', true);
			
			var propIdToAdd = $(this).closest("p").attr("id");
			
			var myFavouriteProp=JSON.parse(localStorage.getItem("favProp"));
			
			if(myFavouriteProp == null) {
				myFavouriteProp = [];
			}
			
			if(myFavouriteProp != null) {
				for ( var j = 0; j < myFavouriteProp.length; j++) {
					
					if ( propIdToAdd == myFavouriteProp[j]) {
						
						alert("This shoe is already in your favourites!"); 
						myFavouriteProp = [];
					}
				}
			}
			
			myFavouriteProp.push(propIdToAdd);
			
			localStorage.setItem("favProp", JSON.stringify(myFavouriteProp));
			
		}
		
		catch (e) {
			if (e==QUOTA_EXCEEDED_ERR) {
				console.log("Error: Local storage limit exceeds");
			}
			
			else {
				console.log("ERROR: Saving to local storge.");
			}
		}
	});
});




$(function() {
	$( "#rem" ).on("click", function(){
		
			$(this).attr('disabled', true);
			
			var propIdToRemove = $(this).closest("p").attr("id");
			
			 myFavouriteProp=JSON.parse(localStorage.getItem("favProp"));
			
			
			if(myFavouriteProp != null) {
				for ( var j = 0; j < myFavouriteProp.length; j++) {
					
					if ( propIdToRemove == myFavouriteProp[j]) {
						
						alert("This shoe has been removed!");
						
						delete myFavouriteProp[j];
						
						localStorage.setItem("favProp", JSON.stringify(myFavouriteProp));
						
						myFavouriteProp[j] = [];
					}
				}
			}
			
			if(myFavouriteProp == null) {
				alert("You have no favourite shoes");
			}
		});
	});
	
	
$(function() {
	$( "#viewFavourites" ).on("click", function(){
		
		console.log("Restoring array data from local storage");
		
		myFavouriteProp=JSON.parse(localStorage.getItem("favProp"));
		
		var output = "<ul>";
		
		if (myFavouriteProp != null) {
			
			for (var i = 0; i < data.properties.length; i++) {
				for (j = 0; j < myFavouriteProp.length; j++) {
					
					if (data.properties[i].id == myFavouriteProp[j]) {
						
						output +="<div class='type'>" + data.shoes[i].name + "<h2 class='hi'><p>" + "£" + data.shoes[i].price +"</p></h2>" + "<img src=" + data.shoes[i].picture + ">" + "<p>" + data.shoes[i].description + "<button class='visit'><a href='" + data.shoes[i].url + "'>Visit Page</a></button></div>";
					}
				}
			}
		}
		output+="</ul>";
		
		document.getElementById( "Placeholder2" ).innerHTML = output;
	
	});
});


$(function() {
	$( "#clearFavourites" ).on("click", function(){
		
		$("Placeholder2").remove();
		
		myFavouriteProp=JSON.parse(localStorage.getItem("favProp"));
		
		localStorage.clear();
		
	});
	
});