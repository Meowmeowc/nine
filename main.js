// let btn = document.querySelector('.btn')

// let b = [1, 2, 3, 4, 5, 67, 78, 21, 423, 1213, 1245, 125125, 375, 5986]
// let out = ' ';
// btn.onclick = () => {
// 	for (let i = 0; i < b[0]; i++)
// 		out += b[5] + '<br>'
// 	document.querySelector('.out').innerHTML = out
// }
// let b = [1, 2, 3, 4, 5, 67, 78, 21, 423, 1213, 1245, 125125, 375, 5986]
// let out = ' ';
// let btn = document.querySelector('.btn2')

// btn.onclick = () => {
// 	for (let i = 0; i < b.length; i++)
// 		if (b[i] % 2 == 0)
// 			out += b[i] + ' '

// 	document.querySelector('.out').innerHTML = out

// }

// let b = [1, 2, 3, 4, 5, 67, 78, 21, 423, 1213, 1245, 125125, 375, 5986]
// let out = ' ';
// let btn = document.querySelector('.btn2')

// btn.onclick = () => {
// 	for (let i = 0; i < b.length; i++)
// 		if (b[i] % 2 != 0)
// 			out += b[i] + ' '

// 	document.querySelector('.out').innerHTML = out

// }

let btn = document.querySelector('.btn2')
let b = [
	[9, 8, 7],
	[6, 5, 4],
	[3, 2, 1]
]
let out = ' ';
btn.onclick = () => {
	for (let i = 0; b.length > i; i++) {
		let c = b[i]
		for (let j = c.length - 1; j >= 0; j--) {
			out += (c[j]) + ' '
			document.querySelector('.out').innerHTML = out
		}
	}
}




