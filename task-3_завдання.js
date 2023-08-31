const Storage = function (itemsArr) {
  this.items = itemsArr;

  this.getItems = function (items) {
    return this.items;
  };

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (arrItem) {
    this.items.reduce((item, items) => {
      if (items === arrItem) {
        return item;
      }
    }, []);
  };
};

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);
const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
storage.addItem("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
