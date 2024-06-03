//your code here
let main=document.querySelector(".container")
let imgClassName=["img1","img2","img3","img4","img5"]
let randomimg= imgClassName[parseInt(Math.random()*imgClassName.length]
imgClassName.push(randomimg);

for(let t of imgClassName){
	let imgtag=document.createElement("img");
	imgtag.className=t;
	main.append(imgtag);
	
}