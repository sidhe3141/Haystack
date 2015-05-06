/**
 * @author James
 */

//Begins a new Haystack session, using the default address in the list.
function start(){
	//Access the input containing the default address.
	var address=document.getElementById("address").value;
	//Run start, passing the address as the parameter.
	start(address);
}

//Begins a new Haystack session.
function start(address)
{
	//Access the ul in the "app" div.
	var framelist=document.getElementById("app_list");
	//Open a frame in "app". The frame should look like this:
	// <li>
	//  <frame class="app"></frame> <span class="title"></span><span class="url"></span><span class="default"></span>
	// </li>
	framelist.innerHTML+=
	"<li>"+
	"<iframe class=\"app\">"+
	"</iframe>"+
	"<span class=\"title\">"+
	"</span>"+
	"<span class=\"url\">"+
	"</span>"+
	"<span class=\"default\">"+
	"</span>"+
	"</li>";
	
	var li=framelist.childNodes[framelist.childNodes.length-1];
	//Set the frame's address to the address.
	li.childNodes[0].src=address;
	li.childNodes[1].innerHTML=address;
	//Set the default address.
	li.childNodes[2].innerHTML=address;
	//Run stepFrame, passing as parameters the li and default address.
	stepFrame(li,address);
}

//Accesses the string and list, and adds them to the blacklist.
function addBlacklist(){
	//Access regex.
	var regex=document.getElementById("regex").value;
	//Access list.
	var list=document.getElementById("list").value;
	//Run addBlacklist, passing regex and list.
	addBlacklist(regex,list);
}

//Blacklists a regex, so that a frame visiting a site including it will close instead of progressing.
function addBlacklist(regex, list){
	addLocalBlacklist(regex);
	//Add the string to the saved blacklist.
	localstorage.setItem(list,localstorage.getItem(list)+"\",\"");
}

//Calculates an expiration date for blacklist cookies.
function getExpirationDate(){
	//Get today's date.
	//Return a date one year from now.
	//Set all non-expired cookies to that date.
}

//Puts a regex on the local blacklist, without adding it to the saved blacklist.
function addLocalBlacklist(regex){
	//Access the "blacklist" div.
	var blacklist=document.getElementById("blacklist_list");
	//Add a new div to "blacklist" containing the new item.
	blacklist.innerHTML+="<li>"+regex+"</li>";
}

//Loads the saved blacklist.
function loadBlacklist(list){
	//Access local storage.
	//Look up the list.
	var list=localstorage.getItem(list);
	//Break the list down into distinct items.
	var items=list.split("\",\"");
	//Run addLocalBlacklist on each item.
	for(var i=0; i<list.Length;i++){
		addLocalBlacklist(items[i]);
	}
}

//Tests to see if an address is on the blacklist associated with a string. True if it is not, false if it is.
function checkBlacklist(address){
	//Get the blacklist.
	var blacklist=document.getElementById("blacklist_list");
	//For each regex on the blacklist:
	for(var i=0;i<blacklist.childNodes.Length;i++){
		// If the address matches the regex, return true.
		var regex=new RegExp(blacklist[i].innerHTML);
		if(regex.test(address)){
			return true;
		}
	}
	//Return false.
	return false;
}

//Clicks a link in a frame.
function stepFrame(li, address){
	//Separate out the frame, title span, and url span.
	var frame=li.childNodes[0];
	var title=li.childNodes[1];
	var default_url=li.childNodes[2];
	//Have a random chance (1/100) of automatically returning to the default page.
	// If the random chance does not come up, check the frame for blacklisting.
	//  If the frame's address is blacklisted, return to the default page.
	//  If the frame's address is clear, pick an element at random. If this is an error, return to the default page.
	//   If the random element is not a link, simulate a click.
	//   If the random element is a link, check its href for blacklisting. If this is an error, click it.
	//    If the link's href is blacklisted, do nothing.
	//    If the link's href is not blacklisted, click it.
	
	
	//If no change in src has occurred, have a random chance (1/100) of highlighting random text and searching it.
	
	//If a return to the default page is indicated, set the frame's src to the default address.
	//If a simulated click is indicated, fire a click event on the random element, and if necessary change the page address to its href.
	//If doing nothing is indicated, do nothing.
	
	//Update the li title and url.
	
	//Run this last, and always run it: on a random delay (500 ms to 1 hour), run stepFrame(li, address) again once.
	setTimeout(stepFrame(li, address),Math.random()*3599500+500);
}
