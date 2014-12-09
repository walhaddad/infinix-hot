$(document).ready(function(){

		/**
		 * This part causes smooth scrolling using scrollto.js
		 * We target all a tags inside the nav, and apply the scrollto.js to it.
		 */
		$(".scroller a").click(function(evn){
				evn.preventDefault();
				$('html,body').scrollTo(this.hash, this.hash); 
		});
		
		
		
		/**
		 * This part handles the highlighting functionality.
		 * We use the scroll functionality again, some array creation and 
		 * manipulation, class adding and class removing, and conditional testing
		 */
		var aChildren = $(".scroller li").children(); // find the a children of the list items
		var aArray = []; // create the empty aArray
		for (var i=0; i < aChildren.length; i++) {    
				var aChild = aChildren[i];
				var ahref = $(aChild).attr('href');
				aArray.push(ahref);
		} // this for loop fills the aArray with attribute href values
		
		$(window).scroll(function(){
				var windowPos = $(window).scrollTop() + 96; // get the offset of the window from the top of page
				var windowHeight = $(window).height(); // get the height of the window
				var docHeight = $(document).height();
				
				for (var i=0; i < aArray.length; i++) {
						var theID = aArray[i];
						var divPos = $(theID).offset().top - 96; // get the offset of the div from the top of page
						var divHeight = $(theID).height(); // get the height of the div in question
						if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
								$("a[href='" + theID + "']").addClass("active");
						} else {
								$("a[href='" + theID + "']").removeClass("active");
						}
				}
				
				if((windowPos - 96) + windowHeight == docHeight) {
						if (!$(".scroller li:last-child a").hasClass("active")) {
								var navActiveCurrent = $(".scroller .active").attr("href");
								$("a[href='" + navActiveCurrent + "']").removeClass("active");
								$(".scroller li:last-child a").addClass("active");
						}
				}
		});
});