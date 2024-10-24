const template = document.querySelector("[data-product-container]");
const container = document.querySelector("#product_container");

const loadItems = async() => {
    container.innerHTML = "";
    fetch('/bedding')
        .then(response => response.json())
        .then(beddings => {
            beddings.forEach(item => {
                let bedId = item.id;
                let bedName = item.name;
                let bedSize = item.size;
                let bedColor = item.color;
                let bedCategory = item.category;
                let bedPrice = item.price;
                let bedOrigP = item.oprice;
                let bedImage = item.img;
                addToContainer(bedId, bedName, bedSize, bedColor, bedCategory, bedPrice, bedOrigP, bedImage);
            });
        });
};

const addToContainer = (bedId, bedName, bedSize, bedColor, bedCategory, bedPrice, bedOrigP, bedImage) => {
    const temp = template.content.cloneNode(true);
    const id = temp.querySelector("[data-product-id]");
    const name = temp.querySelector("[data-product-name]");
    const size = temp.querySelector("[data-product-size]");
    const color = temp.querySelector("[data-product-color]");
    const category = temp.querySelector("[data-product-category]");
    const price = temp.querySelector("[data-product-price]");
    const oprice = temp.querySelector("[data-product-oprice]");
    const img = temp.querySelector("[data-product-image]");

    id.setAttribute('data-product-id', bedId);
    img.src = "./src/"+bedImage;
    name.textContent = bedName;
    name.title = bedName;
    size.setAttribute('data-product-size', bedSize);
    color.setAttribute('data-product-color', bedColor);
    category.setAttribute('data-product-category', bedCategory);
    price.textContent = bedPrice;
    oprice.textContent = bedOrigP;

    container.append(temp);
};
