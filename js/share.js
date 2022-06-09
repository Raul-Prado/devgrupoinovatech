function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'NF3 Pinturas | Serviços de Pintura | Residencial - Predial - Comercial',
			text: 'Vai reformar sua casa ou empresa? Estamos empenhados em fornecer um serviço de alta qualidade que supere suas expectativas!',
			url: 'https://nf3pinturas.com.br/',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}