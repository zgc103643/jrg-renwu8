//11.写一个 ucFirst函数，返回第一个字母为大写的字符 （***）
ucFirst("hunger") == "Hunger"

function ucFirst(str){
	return str.replace(str[0],str[0].toUpperCase());
}