
//alert(1);
//document.addEventListener("submit", myFunction);
document.addEventListener("submit", function(e){
	//console.log('It finally works');
	var sitename = document.getElementById('sitename').value;
	var siteurl = document.getElementById('siteurl').value;
	//console.log(sitename);
	//console.log(siteurl);

	var bookmark = {
		"name": sitename,
		"url": siteurl
	}
 
	//console.log(bookmark);

   //Local Storage Test

   if(localStorage.getItem('bookmarks') === null){
   		var bookmarks = new [];
   		bookmarks.push(bookmark); 

   	    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
   	  }else {
   	  	//get bookmarks
   	  	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to the array
        bookmarks.push(bookmark);
        // resetting back to local storage
        localStorage.setItem('bookmark',JSON.stringify(bookmarks));	 
   	  }

    e.preventDefault();
});

function myFunction() {
	//console.log('here we are');
    //document.getElementById("myForm").innerHTML = "Hello World";
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // console.log(bookmarks);
    // r.preventDefault();
    var bookmarkResults = document.getElementById('Here_are_the_Bookmarks');
    bookmarkResults.innerHTML='';
    for(var i= 0;i<=bookmarks.length;i++){
    	var name = bookmarks[i].name;
    	var url = bookmarks[i].url;

    	bookmarkResults.innerHTML += name;
    }    
}





