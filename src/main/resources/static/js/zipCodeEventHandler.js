const zipCodeSubmitButton = document.querySelector('#zipCodeSubmitButton');
zipCodeSubmitButton.addEventListener('click', function (event) {
	event.preventDefault();
	handleZipCodeinput();
});

const handleZipCodeinput = () => {
	const passedZipCode = zipCodeSubmitButton.parentElement.parentElement.querySelector('input').value;
	console.log(passedZipCode)
	if(passedZipCode == null || passedZipCode == ""){
		 alert("You must first enter a zip code to create a plan!")
	}
	else{
	const plantListSection = document.querySelector('#plantListSection')
	plantListSection.style.display = 'grid'
	
	xhr.open('GET', '/plants/zipcode/' + passedZipCode, true);
	xhr.send();
	}
}