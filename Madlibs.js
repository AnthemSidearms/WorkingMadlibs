//Mad Libs

// initialize Variables
var sentence = [];
var replacements = [];
var index = 0;
// initialize users
alert("filler go away");
alert("End with shift 6");
// fill sentence
populate(index,sentence,"word");
alert (sentence);
populate(index,replacements,"position");
alert (replacements);
// specify pasrts of speech
index=0;
replace(index,sentence,replacements,"part of speech");
alert (sentence) ;
//Switch People
//train filler
alert ("Enter words that match the part");
index=0;
replace (index,sentence,replacements,"new word") ;

function populate(sindex,sarray,label){
	
	do{
		sarray[sindex]=prompt("Next " + label + "?");
		sindex = sindex+1;
	}
	while(sarray[sindex-1] != "^");
	console.log(sarray);
	sarray.splice(-1,1);
	return sarray;
}


function replace (sindex, sarray, rarray,label) {
	for (words = 0; sindex < rarray.length;sindex++)
        if(label=="new word")		{
		sarray = [rarray[sindex]] = prompt("next "+label+"?");
	
	}
	return sarray;
	
	
}