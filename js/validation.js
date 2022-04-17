function checkinfo(){
	
	if (document.getElementById('fname').value == ""){
		alert('Please fill in your Name!');
		return false;
		}
		
	else if(document.getElementById('Surname').value == ""){
		alert('Please fill the field!');
		return false;
		}
		
	else if (document.getElementById('Contact').value == ("")){
		alert('Please enter Contact Details!');
		return false;
		}
	else if (document.getElementById('Email').value == ""){
		alert('Please enter valid email address!');
		return false;
		}
		
	else if (document.getElementById('select').value == ("0.00")){
		alert('Please select a destination!');
		return false;
		}
			
	else if (document.getElementById('qty').value == ""){
		alert('Please select number of travellers!');
		return false;
	}
}

function calculateTotal(){

	if(document.getElementById('select').value ==("0.00")){
		alert('Please select a destination you would like to visit');
		}
		
	var county1=document.getElementById('select').value;
	var pax2=document.getElementById('qty').value;
	var total= parseFloat(county1)*parseFloat(pax2);

	if (!isNaN(total)){document.getElementById('price').value = parseFloat(total).toFixed(2);
		}
			}

