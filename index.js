var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};

//Create a section for the contents
const section = document.createElement("section");
section.id = "product";

//Create a left colemn for the contents the Image
const leftColumn = document.createElement("div");
leftColumn.className = "left-column";

//Create Image element
const productImage = document.createElement("img");
productImage.id = "productImg";
productImage.src = productData.preview;
leftColumn.appendChild(productImage);

//Create a right colummn for the product description
const rightColumn = document.createElement("div");
rightColumn.className = "right-column";
const productDescription = document.createElement("div");
productDescription.className = "product-description";

//create heading 1 for the name of the product
const header1 = document.createElement("h1");
header1.id = "name";
header1.innerText = productData.name;

//create heading 4 for the brand of the product
const header4 = document.createElement("h4");
header4.id = "brand";
header4.innerText = productData.brand;

//create heading 3 for the price of the product
const header3 = document.createElement("h3");
header3.innerHTML = `Price: Rs <span>${productData.price}<span>`;

//create elements for the description of the product
const desc = document.createElement("div");
desc.className = "product-description";

const descHeader3 = document.createElement("h3");
descHeader3.innerText = "Description";
const descPara = document.createElement("p");
descPara.innerText = productData.description;
desc.appendChild(descHeader3);
desc.appendChild(descPara);

productDescription.appendChild(header1);
productDescription.appendChild(header4);
productDescription.appendChild(header3);
productDescription.appendChild(desc);

const productPreview = document.createElement("div");
productPreview.className = "product-preview";

const previewHeader3 = document.createElement("h3");
previewHeader3.innerText = "Product Preview";
productPreview.appendChild(previewHeader3);

const previewImage = document.createElement("div");
previewImage.className = "previewImg";

const photos = productData.photos;
let count = 0;
for (el of photos) {
  const image = document.createElement("img");
  image.src = el;
  image.id = `img${count}`;
  if (count === 0) {
    image.className = "active";
  }
  image.addEventListener("click", function (el) {
    productImage.src = image.src;
    mj();
    image.setAttribute("class", "active");
  });
  count++;
  previewImage.appendChild(image);
}

//remove class name "active" from Image
function mj() {
  const restImages = document.querySelectorAll(".previewImg img");
  debugger;
  restImages.forEach((x) => x.classList.remove("active"));
}

//Button Element
const cartDiv = document.createElement("div");
cartDiv.className = "btn";
productPreview.appendChild(previewImage);
productDescription.appendChild(productPreview);
const cartButton = document.createElement("button");
cartButton.id = "add-to-cart";
cartButton.innerText = "Add to Cart";
cartDiv.appendChild(cartButton);

cartButton.addEventListener("click", function () {
  window.location.href =
    "https://shoplane.netlify.app/product.html?product_id=1";
});

cartButton.addEventListener("mouseenter", function () {
  // Create and append message element
  const message = document.createElement("span");
  message.innerText = "Click here to move shoplane";
  cartButton.appendChild(message);
});
cartButton.addEventListener("mouseleave", function () {
  // Remove the message element
  const message = cartButton.querySelector("span");
  if (message) {
    cartButton.removeChild(message);
    messageAppended = false;
  }
});

//Append left and right column to the section and section to the body
leftColumn.appendChild(productImage);
rightColumn.appendChild(productDescription);
rightColumn.appendChild(cartDiv);
section.appendChild(leftColumn);
section.appendChild(rightColumn);
document.body.appendChild(section);
