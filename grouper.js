//Here is a more general grouping code, it will try to make the size of the groups closest to what you want
function groupRandomly(list, size) {
	var ppl = list.length;
	var extra = ppl%size
	var lim = (extra>size/2)?ppl:ppl-extra
	var gp1 = (ppl-extra)/size+1;
	var str="Group 1\n";
	for (var i = ppl, j = 1; i>0; --i, ++j) {
		if(i%size == 0 && i < lim) {
			str+=("Group "+(gp1-(i/size))+"\n");j=1
		}
		var n = Math.floor(Math.random()*i);
		str+=(j+". " + list[n]+"\n");
		list.splice(n,1);
	}
	return str;
}
//you can use it by opening inspect element in the browser, pasting the above function(press enter), 
//then if I want groups of 2, 

//groupRandomly(["A", "B", ...], 2)

//where A, B, ... are the names of all the people