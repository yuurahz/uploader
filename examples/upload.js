import axios from 'axios';
import fs from 'fs';
const form = new FormData();

form.append('file', new Blob([fs.readFileSync('./wife.jpg')], { type: 'image/jpeg' }), 'wife.jpg');

const { data } = await axios.post('https://cdn.yoshida.my.id/upload', form, {
	headers: {
		'Content-Type': 'multipart/form-data',
	},
});

console.log(data);