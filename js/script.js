
///------1--------///


class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(department) {
    this.departments.push(department);
  }

  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
    }
  }

  displayDepartments() {
    console.log(`Departments of ${this.name}:`);
    this.departments.forEach((department, index) => {
      console.log(`${index + 1}. ${department}`);
    });
  }
}


const myUniversity = new University("thiruvalluvar university");


myUniversity.addDepartment("Computer Science");
myUniversity.addDepartment("B.Com");
myUniversity.addDepartment("Mathematics");


myUniversity.displayDepartments();

myUniversity.removeDepartment("Mathematics");

myUniversity.displayDepartments();

/////------------------///////



///---------2-------//////


class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  calculateTotalPrice(quantity) {
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(id, name, price, warrantyPeriod) {
    super(id, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  calculateTotalPrice(quantity) {
   
    const basePrice = super.calculateTotalPrice(quantity);
    return basePrice + this.warrantyPeriod * quantity;
  }
}


const hairDryer = new PersonalCareProduct(1, 'Hair Dryer', 30, 1);


const totalPrice = hairDryer.calculateTotalPrice(5);

console.log(`Total price for 2 hair dryers with warranty: $${totalPrice}`);


/////---------------/////