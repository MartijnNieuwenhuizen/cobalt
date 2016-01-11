// 
//	Comel.js is a JS framework i make myself
//	Thair isn't a good definition of what is it, but this is the start
//

// 	The selector function of that jQuery uses
function $(expr, container) {
	return typeof expr === "string"? (container || document).querySelector(expr) : expr || null;
}