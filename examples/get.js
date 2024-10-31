import axios from 'axios';

const { data } = await axios.get('https://cdn.yoshida.my.id/:fileID', {
	params: {
		json: '',
	},
});

console.log(data);