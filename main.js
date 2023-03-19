//Obtenemos los elementos que utilizamos para las interacciones
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideCardProduct = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

//Obtiene todo lo relacionado con la informacion de la imagen de la derecha
const productDetailInfo = document.querySelector('.product-detail-info');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const product_detail_img = document.querySelector('.product-detail-info-img');
const product_detail_name = document.querySelector('.product-detail-name');
const product_detail_price = document.querySelector('.product-detail-price');


//Agregamos las funciones al html
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailInfo);

//Abre y cierra el DesktopMenu(Cierra todo lo demas)
function toggleDesktopMenu() {
  //Cierra todos los menus(Menos el seleccionado)
  mobileMenu.classList.add("inactive");
  asideCardProduct.classList.add("inactive");
  productDetailInfo.classList.add("inactive");
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  //Cierra todos los menus(Menos el seleccionado)
  desktopMenu.classList.add("inactive");
  asideCardProduct.classList.add("inactive");
  productDetailInfo.classList.add("inactive");
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  //Cierra todos los menus(Menos el seleccionado)
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetailInfo.classList.add("inactive");
  asideCardProduct.classList.toggle('inactive');
}

//Funcion para mostrar la informacion del elemento seleccionado
function openProductDetailInfo(){
  //Cierra todos los menus(Menos el seleccionado)
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  asideCardProduct.classList.add("inactive");
  productDetailInfo.classList.add("inactive");

  product_detail_img.setAttribute('src',this.src);//el path de la imagen es el mas sencillo de definir ya que this apunta a la img, solo debo llamar su src
//por otro lado el name y price son hijos de elementos anidados dentro un elemento hermano de img
//parece enredado pero solo es seguir el path asi como cuando queremos modificar el DOM

    product_detail_name.innerText = this.nextSibling.firstChild.children[1].innerText;

    product_detail_price.innerText = this.nextSibling.firstChild.children[0].innerText;

    productDetailInfo.classList.remove('inactive');//El remove inactive de todo el curso
}
function closeProductDetailInfo(){
  productDetailInfo.classList.add('inactive')
}



const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    //Funcion para abrir la informacion de algun producto
    productImg.addEventListener('click', openProductDetailInfo)


    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    //append -> Inserta varios elementos
    productInfoDiv.append(productPrice,productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    //appendChild -> Inserta un solo elemento
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.append(productInfoDiv, productInfoFigure);
  
    productCard.append(productImg, productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
