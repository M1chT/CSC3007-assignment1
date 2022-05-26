// api url
const api_url = "https://api.data.gov.sg/v1/environment/psi";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Metric</th>
		<th>National</th>
		<th>Central</th>
		<th>West</th>
		<th>East</th>
		<th>North</th>
		<th>South</th>
		</tr>`;
	
	// // Loop to access all rows
	console.log(data.items)

	var timestamp = data.items[0].update_timestamp;
	var timezone = new Date(timestamp);
	var date = timezone.getDate()
	var month = timezone.getMonth()
	var year = timezone.getFullYear()
	const hour = timezone.getHours()
    const min = String(timezone.getMinutes()).padStart(2, '0')

	document.getElementById("timestamp").innerHTML = "Last Updated " + date + "/" + month + "/" + year + ", " + hour + ":" + min;

	var readings = data.items[0].readings

	for (const [key, value] of Object.entries(readings)) {
		console.log(key)

		tab += `<tr>
		<td>${key} </td>
		<td>${value.national} </td>
		<td>${value.central} </td>
		<td>${value.west} </td>
		<td>${value.east} </td>
		<td>${value.north} </td>
		<td>${value.south} </td>
		</tr>`;	
		
	}

	// Setting innerHTML as tab variable
	document.getElementById("psi").innerHTML = tab;
	
}

