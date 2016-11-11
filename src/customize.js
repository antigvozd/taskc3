export default function canonize(url) {
	const canon = new RegExp(/([0-9]+|_|\/)/);
	var result = '';
	/*const username1 = url.match(canon)[2];
	console.log(username1);
	const username2 = url.match(canon)[4];
	const username3 = url.match(canon)[5];
	console.log(username2);
	console.log(username3);
	if (username1 == undefined) {
		result = username3[0].toUpperCase() + username3.substring(1);
	}
	if (username2 == undefined) {
		result = username3[0].toUpperCase() + username3.substring(1) + " " + username1[0].toUpperCase() + ". ";
	}
	else {
		result = username3[0].toUpperCase() + username3.substring(1) + " " + username1[0].toUpperCase() + ". " + username2[0].toUpperCase() + ".";
	}*/		
	if (url.length == 0) {
		result = 'Invalid fullname';
	} else if (url.search(canon) >= 0) {
		result = 'Invalid fullname';
	} else {
		var arr = url.toLowerCase().split(' ');
		console.log(arr);
		arr = arr.filter( function(a, index) {
				console.log(arr + index);
				return a !== '';
			});
		if (arr.length == 3) {
			result = arr[2][0].toUpperCase() + arr[2].substring(1) + " " + arr[0][0].toUpperCase() + ". " + arr[1][0].toUpperCase() + ".";
		} else if (arr.length == 2) {
			result = arr[1][0].toUpperCase() + arr[1].substring(1) + " " + arr[0][0].toUpperCase() + "." ;
		} else if (arr.length == 1) {
			result = arr[0][0].toUpperCase() + arr[0].substring(1);
		} else if (arr.length > 3) {
			result = 'Invalid fullname'
		} else if (arr.length == 0) {
			result = 'Invalid fullname';
		}
	}
	return result;
}

//(\'|/\?/|\//) !== undefined ? url.match(canon)[2] : '' (([a-zA-ZА-Яа-я]+)?\s)?([a-zA-ZА-Яа-я]+)?

/* var arr1 = [];
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] !== '') {
					arr1.push
				}
			} */