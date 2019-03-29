	
	function name(){
	
	 userName = prompt("Enter in your name", "");
		if(userName!="" && userName==null)
			document.write("Please enter name. F5 refresh");
	else
		document.write("<span class='welcome'  style='font-size:3vw;'> <img src='image/navbar.png'> <br> <br> Hello "  + userName +"!  Welcome </span>");


	var userAge = prompt("Enter in your Age", "");
		if(userAge<19)
			document.write("<a href='teens.html'>  <h1> Click here to continue </h1> </a> <span> <img src='image/people.png' style='width:60%; height:60%; float:right; margin-right:10%;'>  </span>" );
			
			
	else
		document.write("<a href='adults.html'> <h1> Click here to continue </h1>  </a>  <span> <img src='image/people.png' style='width:1000px; height:60%; float:right; margin-right:10%;'>  </span>");
	}
	
	function homework() {
  document.getElementById("homework").innerHTML = "Homework: The basic of Futures is quite simple. It is a contract that ensures the price and delivery of a product between two partys. A producer is held accountable by the contract to deliver the product just as the buyer is required to pay. Futures contracts help keep buisness happening and prevents one side from not completing the deal. Beyond this a futures contract locks in a price so that as prices fluctuate a producer won't have to sell for lower or a buyer won't have to buy for more. There are not just buyers and sellers there are also whats called investors. These investors buy stock so that if the price of something increases they can make money by selling their stock. These investors can buy contracts without ensuring that more parties follow through. This is why special organizations handle these contracts as they are obligated to follow through. Now lets look at whats in one of these contracts: A Unit of Measurement, How trade will be delievered, how much of the product and how much it will cost, the currency being used and the quality of the products.";
}

function research() {
  document.getElementById("research").innerHTML = "Research: The basic of Futures is quite simple. It is a contract that ensures the price and delivery of a product between two partys. A producer is held accountable by the contract to deliver the product just as the buyer is required to pay. Futures contracts help keep buisness happening and prevents one side from not completing the deal. Beyond this a futures contract locks in a price so that as prices fluctuate a producer won't have to sell for lower or a buyer won't have to buy for more. There are not just buyers and sellers there are also whats called investors. These investors buy stock so that if the price of something increases they can make money by selling their stock. These investors can buy contracts without ensuring that more parties follow through. This is why special organizations handle these contracts as they are obligated to follow through. Now lets look at whats in one of these contracts: A Unit of Measurement, How trade will be delievered, how much of the product and how much it will cost, the currency being used and the quality of the products.";
}

function curiosity() {
  document.getElementById("curiosity").innerHTML = "Curiosity: Welcome! We are glad you have come to learn more. The basic of Futures is quite simple. It is a contract that ensures the price and delivery of a product between two partys. A producer is held accountable by the contract to deliver the product just as the buyer is required to pay. Futures contracts help keep buisness happening and prevents one side from not completing the deal. Beyond this a futures contract locks in a price so that as prices fluctuate a producer won't have to sell for lower or a buyer won't have to buy for more. There are not just buyers and sellers there are also whats called investors. These investors buy stock so that if the price of something increases they can make money by selling their stock. These investors can buy contracts without ensuring that more parties follow through. This is why special organizations handle these contracts as they are obligated to follow through. Now lets look at whats in one of these contracts: A Unit of Measurement, How trade will be delievered, how much of the product and how much it will cost, the currency being used and the quality of the products. ";
}

function prep() {
  document.getElementById("prep").innerHTML = "Preparing: Hello Worldddd";
}



	function job() {
  document.getElementById("job").innerHTML = "Job Search: There are a ton of job opportunities in the futures market for you to choose from. Risk Analyst, Quantitative Researcher, Futures Trader, Trading Operations Associate, Sales Lead Reaseracher, Trading assistant/ intern, etc... " ;
}

function work() {
  document.getElementById("work").innerHTML = "Work: Are you here for work? Perphaps you are trying to learn more about the futures market to give you more opportunities. Here's what you need to know. Futures controls prices. If a person wants to sell their products for a set price, futures trading will help with this. Futures traders ensures that a producer will deliver the product to the seller and the seller will pay. Sometimes these traders focus on making money and not the delivery of the money and product which can lead to problems. Its important to always know the details of a contract including who is handeling it. ";
}


function retire() {
  document.getElementById("retire").innerHTML = "Retirement: Hello there adult are you trying to figure out what to do for the future. Does the sound of be 60 and chilling on a beach in the Bahamas sound like a great idea to your. Or maybe you just want some more money in the future for your children. Whatever the reason is I have something that might interest you in preparation for your future. The key to your future in investing in something called the futures market. What a futures market is it allows you to buy and sell commodity and futures contract for delivery in a specific date in the future. What commodities and futures contracts are things such as oil, wheat, corn, etc. You buy the commodities or futures contract at a locked in price in the future. For example you can buy 1000 barrels of oil at $80 dollars per barrel and in the future if the price of per barrel increases you’ll still be locked in to buy the oil at 80 per barrel. Futures is a better way to invest than stocks.";
}