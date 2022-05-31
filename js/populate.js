// Fetch json file
fetch("./js/data.json")
	.then(response => {
		// Convert to json
		return response.json();
	})
	.then(jsondata => {
		// Loop through each element of software section set all of the parameters
		jsondata["software-section"].forEach(element => {
			// Create variables for string formatting
			let imgSrc = element["img-src"];
			let bgPosition = element["bg-position"];
			let imgTitle = element["img-title"];
			let cardText = element["card-text"];
			let dataTarget = element["data-target"];
			let modalId = element["modal-id"];
			let modalTitle = element["modal-title"];
			let modalBody = element["modal-body"];

			// Get software-section-container HTML element and append card HTML
			// elements with paramaterized components
			document.getElementById("software-section-container").innerHTML += 
			`<!-- Software Card -->
			\n<div data-aos=\"fade-left\" data-aos-duration=\"500\" class=\"col\">
			\n  <div class=\"card dark-card shadow-sm\">
			\n\t<img src=\"${imgSrc}\" class=\"tech-image card-img-top\" height=\"225\" role=\"img\" aria-label=\"Placeholder: Thumbnail\" focusable=\"false\" style=\"background-position: ${bgPosition}\"><title>${imgTitle}</title><rect width=\"100%\" height=\"100%\" fill=\"#55595c\"/></img>
			\n\n\t<div class=\"card-body\">
			\n\t  <p class=\"card-text\">${cardText}</p>
			\n\t  <div class=\"d-flex justify-content-between align-items-center\">
			\n\t\t<div class=\"btn-group\">
			\n\t\t  <button type=\"button\" class=\"btn btn-sm btn-success\" data-bs-toggle=\"modal\" data-bs-target=\"${dataTarget}\">More Info</button>
			\n\t\t</div>
			\n\t  </div>
			\n\t</div>\n  
			</div>
			\n</div>
			\n\n<!-- Modal -->
			\n<div class=\"modal fade\" id=\"${modalId}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">
			\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">
			\n\t<div class=\"modal-content\">
			\n\t  <div class=\"modal-header\">
			\n\t\t<h5 class=\"modal-title\" id=\"exampleModalLongTitle\">${modalTitle}</h5>
			\n\t  </div>
			\n\t  <div class=\"modal-body\">
			\n\t\t${modalBody}
			\n\t  </div>
			\n\t  <div class=\"modal-footer\">
			\n\t\t<button type=\"button\" class=\"btn btn-success\" data-bs-dismiss=\"modal\">Close</button>
			\n\t  </div>
			\n\t</div>
			\n  </div>
			\n</div>`;
		});

		// Get portfolio-section HTML element and append card HTML
		// elements with paramaterized components
		jsondata["portfolio-section"].forEach(element => {
			console.log(element);
		});

		// Get mech-section HTML element and append card HTML
		// elements with paramaterized components
		jsondata["mech-section"].forEach(element => {
			console.log(element);
		});
	});