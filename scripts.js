
//var codestring = 'function f(obj){console.log("codestring "+ obj.firstname + obj.lastname);} ; f(obj);'

const codestring = document.getElementById('codeEditor'); 
const codebutton = document.getElementById('codebutton');
document.addEventListener("DOMContentLoaded", onload);

function onload()
{
	codebutton.onclick = run;
}

//console.log(codebutton);


function run()
{

//Load this from MongoDB	
var Testcaseop = ["arun prakash","","NA"];
var Testcaseip = [{firstname:"arun ",lastname:"prakash"},{firstname:"",lastname:""},{lastname:""}];//Load this from MongoDB

var code = codestring.value;
const codeboundfun = new Function(code);
codebounded = codeboundfun.bind(null);

	for(var r=0 ; r < Testcaseip.length;r++)
	{
		cat_obj = Testcaseip[r];
		var a = codebounded();

		console.log(result);
		if(result ===Testcaseop[r])
		{
			alert("Test passed");	
		}
		else
		{
			alert("Test failed");			
		}
	}

}


