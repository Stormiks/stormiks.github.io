let allA = document.getElementsByTagName("a");

let outA = document.createElement("div");
outA.id = "outAll_A";
outA.style.backgroundColor = "#fff";
outA.style.border = "1px solid red";
outA.style.padding = "10px";
outA.style.zIndex = "999";
document.body.appendChild(outA);

for (let i = 0; i < allA.length; i++) {
	document.getElementById("outAll_A").innerHTML = "HREF_VALUE: "+allA[i].attributes.href.value + "<br>TITLE_VALUE: "+allA[i].attributes.title.value + "<br>TEXT_VALUE: "+allA[i].text;
	console.log(allA);
	console.log(allA[i]);
	console.log("HREF_VALUE: "+allA[i].attributes.href.value);
	console.log("TITLE_VALUE: "+allA[i].attributes.title.value);
	console.log("TEXT_VALUE: "+allA[i].text);
}