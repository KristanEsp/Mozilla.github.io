// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
let myImage = document.querySelector("img");



myImage.onclick = () =>
{
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/firefox-icon.png")
	{
		myImage.setAttribute("src", "images/Rayman.jpg");
	}
	else
	{
		myImage.setAttribute("src", "images/firefox-icon.png");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName()
{
	const myName = prompt("Please enter your name.");
	if (!myName)
	{
		setUserName();
	}
	else
	{
		localStorage.setItem("name", myName);
		myHeading.textContent = `Mozilla is cool, ${myName}`;
	}
}


myButton.onclick = () =>
{
	setUserName();
};



if (!localStorage.getItem("name"))
{
	setUserName();
}
else
{
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Mozilla is cool, ${storedName}`;
}




