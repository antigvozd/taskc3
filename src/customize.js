export default function canonize(url) {
	const canon = new RegExp('@?(https?:)?(\/\/)?(www.)?(telegram.me|vk.com)?(\/)?(skillbranch)');
	const username = url.match(canon)[6];
	return '@' + username;
}