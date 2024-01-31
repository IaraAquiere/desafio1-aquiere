class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0;

  existe(id) {
    return;
  }

  addProduct = (title, description, price, thumbnail, code, stock) => {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        console.log(`El codigo ${code} esta repetido`);
        break;
      }
    }

    const productNew = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if (!Object.values(productNew).includes(undefined)) {
      ProductManager.id++;
      this.products.push({
        ...productNew,
        id: ProductManager.id,
      });
    } else {
      console.log("todos los campos son requeridos");
    }
  };

  getProduct() {
    return this.products;
  }

  exists(id) {
    return this.products.find((product) => product.id === id);
  }

  getProductById(id) {
    !this.exists(id) ? console.log("Not found") : console.log(this.exists(id));
  }
}

const NewProducts = new ProductManager();

console.log(NewProducts.getProduct());

NewProducts.addProduct(
  "campera catania vintage",
  "Campera de denim azul. Lavado vintage, mangas largas, calce regular, largo a la cadera.",
  82500,
  "https://www.kosiuko.com/media/catalog/product/1/5/15106411420b4_1.jpg?optimize=low&fit=bounds&height=2760&width=1845",
  "abc123"
);

NewProducts.addProduct(
  "sandalia bliss",
  "Sandalia en punta con capellada de denim con detalle de tachas. Taco de 10 cm.",
  106899,
  "https://www.kosiuko.com/media/catalog/product/3/8/3895451102az1.jpg?optimize=low&fit=bounds&height=2760&width=1845",
  "abc143",
  2
);

console.log(NewProducts.getProduct());

NewProducts.addProduct(
  "vestido st tropez",
  "Vestido corto hecho en un género con brillos y efecto metálico. Manga japonesa. ",
  93100,
  "https://www.kosiuko.com/media/catalog/product/3/8/3892991212r1.jpg?optimize=low&fit=bounds&height=2760&width=1845",
  "abc123",
  2
);

NewProducts.getProductById(2);

NewProducts.getProductById(3);


