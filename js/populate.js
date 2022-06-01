const badgeMap = new Map([
	["bs", '<span class="badge bs-badge">Bootstrap</span>'],
	["html", '<span class="badge html-badge">HTML</span>'],
	["css", '<span class="badge css-badge">CSS</span>'],
	["js", '<span class="badge js-badge">JavaScript</span>'],
	["java", '<span class="badge java-badge">Java</span>'],
	["csharp", '<span class="badge csharp-badge">C#</span>'],
	["cplus", '<span class="badge cplus-badge">C++</span>'],
	["python", '<span class="badge python-badge">Python</span>'],
	["react", '<span class="badge react-badge">React</span>'],
	["reactn", '<span class="badge reactn-badge">React Native</span>'],
	["ml", '<span class="badge ml-badge">Machine Learning</span>'],
	["aws", '<span class="badge aws-badge">AWS</span>'],
	["db", '<span class="badge db-badge">'],
	["cloud",'<span class="badge cloud-badge">Cloud</span>'],
	["jupyter", '<span class="badge jupyter-badge">Jupyter</span>'],
	["c", '<span class="badge c-badge">C</span>']
]);

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

			let imgSrc = element["img-src"];
			let cardTitle = element["card-title"];
			let cardText = element["card-text"];
			let githubLink = element["github-link"];

			let cardString = ``; 
			cardString +=
			`
			<!-- Card -->
			<div data-aos="fade-right" data-aos-duration="500" class="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-1 mb-4">
			  <div class="col">
				<div class="card software-card shadow-md">
				  <div class="card-body">
					<div class="sw-img-container">
					  <img class="sw-img" src="${imgSrc}" height="150px"></img>
					</div>
						<div>
							<h4>`;
			
			if(element["highlight"] == "true") {
				cardString +=
				`
				<!-- Highlight with fa-star -->
				<i class="fa-solid fa-star"></i>
				&nbsp;`;
			}
			cardString += `${cardTitle}&nbsp;`;

			cardString += '<!-- Badges -->';
			element["badges"].forEach(badge => {
				// If the badge array contains the database badge,
				// access the current card's "db-tech" element and append
				// that to the mapped db badge value
				if (badge == "db") {
					let db = element["db-tech"];
					cardString += '\n';
					cardString += badgeMap.get(badge);
					cardString += `${db}</span>`;
					cardString += '\n';
					return;
				}
				
				// Else just get the mapped badge value
				cardString += '\n';
				cardString += badgeMap.get(badge);
				cardString += '\n';
			});
			cardString += '<!-- Badges -->';

			cardString +=
							`</h4>
						</div>
					<p>
					${cardText}
					</p>
					<div class="button-row d-flex justify-content-between align-items-center">
					  <div class="btn-group">
						<a type="button" class="btn btn-sm btn-success" href = "${githubLink}" target="_blank">
						  GitHub
						</a>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
			<!-- End Card -->
			`;
			console.log(cardString);
			document.getElementById("software-portfolio-container").innerHTML += cardString;
		});

		// Get mech-section HTML element and append card HTML
		// elements with paramaterized components
		jsondata["mech-section"].forEach(element => {
			// console.log(element);
		});
	});