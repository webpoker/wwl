exports.getDate = function(desc){
	var s = desc.split(' ');
	if(s.length<2) return null;
	var time = s[1].split(':'),
		d = new Date(s[0]);
	return d.setHours(time[0], time[1], time[2]);
};
exports.getDateDesc = function(d){
	if(!d)
		d = new Date;
	return d.getFullYear()+"-"+(d.getMonth() + 1)+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
};
exports.escapeSql = function(str){
	if(typeof str=="string")
		return "'"+str.replace('\'','\\\'')+"'";
	else if(str instanceof Array){
		for(var i=0;i<str.length;i++){
			str[i] = "'"+str[i].replace('\'','\\\'')+"'";
		}
		return str;
	}
};