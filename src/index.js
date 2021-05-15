document.addEventListener("DOMContentLoaded", () => {
  'use strict';

	const menuLink = document.querySelectorAll('.menu__link');
	const goodsCardDescriptionText = document.querySelectorAll('.goods__card-description_text');
	const cardItemTitle = document.querySelectorAll('.card__item-title');
	const cardItemPriceCurrency = document.querySelectorAll('.card__item-price_currency');
	const cardItemPricePrice = document.querySelectorAll('.card__item-price_price');
	const cardItemParametreYear = document.querySelectorAll('.card__item-parametre_year');
	const cardItemParametreKm = document.querySelectorAll('.card__item-parametre_km');
	const cardItemParametreAxle = document.querySelectorAll('.card__item-parametre_axle');
	const cardItemParametrePayload = document.querySelectorAll('.card__item-parametre_payload');
	const cardItemParametreGross = document.querySelectorAll('.card__item-parametre_gross-weight');
	const cardItemLink = document.querySelectorAll('.card__item-link');
	const cardItemPic = document.querySelectorAll('.card__item-pic');
	const headerTitleMain = document.querySelector('.header__title-main');
	const headerTitle = document.querySelector('.header__title');
	


	// получение данных из json
	const getData = (url, callback) => {
		fetch(url)
				.then((response) => {
						if(response.ok){
								return response.json();
						}
						throw new Error(response.statusText) //создаем ошибку и возвращаем в cath
				})
				.then(callback)
				.catch((err) => {
						console.log(err);
				}) 
	};

	//распределение ссылок
	const getProduct = (goods) => {
		renderNav(goods);
		renderText(goods);
		renderGoods(goods);
		renderTitle(goods);
	};

	const renderTitle = (goods) => {
		for (const [key, value] of Object.entries(goods)) {
			if(key === 'page_meta'){
				headerTitleMain.textContent = value.h1;
				headerTitle.textContent = value.title;
			}
		}
	};


	const renderNav = (goods) => {
		goods.nav.forEach((item, i) => {
			menuLink.forEach((elem, index) => {
				if(i === index){
					elem.textContent = item.text;
					elem.href = item.href;
				}
			});
		});
	};

	const renderText = (goods) => {
		goods.page_text.forEach((item, i) => {
			goodsCardDescriptionText.forEach((elem, index) => {
				if(i === index){
					elem.textContent = item.content;
				}
			});
		});
	};

	const renderGoods = (goods) => {
		goods.stock.forEach((item, i) => {
			cardItemLink.forEach((elem, index) => {
				if(i === index) {
					elem.href = item.href;
				}
			});
			cardItemTitle.forEach((elem, index) => {
				if(i === index) {
					elem.textContent = item.title;
				}
			});
			cardItemPriceCurrency.forEach((elem, index) => {
				if(i === index) {
					elem.textContent = item.price_currency;
				}
			});
			cardItemPricePrice.forEach((elem, index) => {
				if(i === index) {
					elem.textContent = item.price;
				}
			});
			cardItemParametreYear.forEach((elem, index) => {
				if(i === index) {
					elem.textContent = item.year;
				}
			});
			cardItemParametreKm.forEach((elem, index) => {
				if(i === index) {
					elem.textContent = item.mileage_measure;
				}
			});
			cardItemParametreAxle.forEach((elem, index) => {
				if(i === index) {
					elem.textContent = item.axle_configuration;
				}
			});
			cardItemParametrePayload.forEach((elem, index) => {
				if(i === index) {
					elem.textContent = item.payload;
				}
			});
			cardItemParametreGross.forEach((elem, index) => {
				if(i === index) {
					elem.textContent = item.gross_weight;
				}
			});
			cardItemPic.forEach((elem, index) => {
				if(i === index) {
					elem.src = `../images/${item.image}`;
				}
			});
		});
	};

	getData('./data.json', getProduct);
	


});