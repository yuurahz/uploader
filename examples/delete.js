import axios from "axios";

const { data } = await axios.delete("https://cdn.yoshida.my.id/:fileID");

console.log(data);