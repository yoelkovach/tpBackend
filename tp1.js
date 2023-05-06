
//  #verificationCode(code) {
//        return this.products.find((value) => value.code === code);
//     }
    // #verificationCode(code) {
    //   return this.products.size
    //   function codeDuplicato(value) {
    //     new set(this.products).size < code.length
    //   }
    // }

class ProductManager {
    constructor() {
      this.products = [];
    }    
    getProducts() {
      console.log(this.products);
      return this.products;
    }
    #generateId() {
      let newID = 0
          newID = this.products.length;
          return (newID)
    }
    #verificationProducts(newProduct) {
      return Object.values(newProduct).some((value) => value === null || value === undefined || value === '' );
    }
    #verificationCode(code) {
      return this.products.find((value) => value.code === code);
    }
    getProductById(id) {
      const searchProduct = this.products.find((value) => value.id === id);
      if (searchProduct === undefined) {
        console.log("Producto no encontrado");
      } else {
        console.log(searchProduct);
        return searchProduct;
      }
    }
    addProduct(title, description, price, thumbnail, code, stock) {
      let newProduct = {
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock
      }
      
      if (this.#verificationProducts(newProduct)) {
        console.log("Falta ingresar datos en algunos campos");
        return "Falta ingresar datos en algunos campos";
      }  else {
        if (!this.#verificationCode(newProduct.code)) {
          newProduct = { ...newProduct, id: this.#generateId()};
          this.products.push(newProduct);
          console.log('Registro exitoso');
          return 'Registro exitoso';
        } else {
          console.log("El producto ya está registrado");
          return "El producto ya está registrado";
        }
      }
    }
}


// PRUEBA
const b = new ProductManager();
const a = new ProductManager();
const c = new ProductManager();
const d = new ProductManager();
const e = new ProductManager();
const f = new ProductManager();



b.addProduct('rtx 4090','tarjeta grafica 4090',1200,'rtx.jpg',123,'25');
a.addProduct('rtx 4090','tarjeta grafica 4090',1200,'rtx.jpg',123,'25');
c.addProduct('rtx 4090','tarjeta grafica 4090',1200,'rtx.jpg','123','25');
d.addProduct('rtx 4090','tarjeta grafica 4090',1200,'rtx.jpg','123');
e.addProduct('rtx 40902','tarjeta grafica 40902',12020,'rt2x.jpg',124,'235');
f.addProduct('rtx 40902','tarjeta grafica 40902',12020,'rt2x.jpg',12,'235');


