function createFooter(){
	var footerHtml=''; //declare string
	footerHtml+='<p>Copyright © 2021 Johnny Au Yeung. All rights reserved.</p>'; // assign string
	document.write(footerHtml); // writes HTML expressions or JavaScript code to a document
};

$( document ).ready(function bannerImg() { // run once the page DOM is ready for JavaScript code to execute
	let bgImg = []; // declare an array
	let countBgImg = $('div.bannerImg').length; // count how many div with class "bannerImg"
	for (let i = 1; i <= countBgImg; i++){ // for loop
		bgImg.push(`../images/bg_${i}.jpg`); // store image paths to array
		$(".bannerImg").eq(`${i-1}`).css("background-image", `url("${bgImg[i-1]}")`) // returns background-image path for the selected elements.
	}
});

$( document ).ready(function() { // run once the page DOM is ready for JavaScript code to execute
	let countCard = $('div.card').length; // count how many div with class "card"
	for (let i = 1; i <= countCard; i++){ // for loop
		$(`.card-body${i}`).hover(function() { //apply behavior to an element during the time the mouse is within the element
			$(`.phototitle${i}`).addClass("animate__animated animate__flipInX"); // addClass to call animate.css effects when mouseenter
		},
		function() {
			$(`.phototitle${i}`).removeClass("animate__animated animate__flipInX"); // removeClass to remove animate.css effects when mouseleave 
		});
	}
});