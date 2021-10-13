import Title from "./title";
import Category from "./category";
import Position from "./position";

class Menu {
  constructor() {
    this.titles = [
      new Title("Кухня", [
        new Category("Первая категория", [
          new Position("Первое блюдо", "Абракадабра, пися единорога", "3000"),
          new Position("Второе блюдо", "Куримаса, арбуз, Эрнест", "100"),
          new Position("Третье блюдо", "", "0"),
          new Position("Четвёртое блюдо", "Интерес", "1"),
        ]),
        new Category("Вторая категория", [
          new Position("Первое блюдо", "Абракадабра, пися единорога", "3000"),
          new Position("Второе блюдо", "Куримаса, арбуз, Эрнест, B,hfubv< Fkmahtl< fyfnjkbq< bvfyebk< buuuuuujhm", "100"),
          new Position("Третье блюдо", "", "0"),
          new Position("Четвёртое блюдо", "Интерес", "1"),
        ]),
      ]),
      new Title("Бар", [
        new Category("Бухло", [
          new Position("Первое бухло", "Абракадабра, пися единорога", "999999999"),
          new Position("Второе бухло", "Куримаса, арбуз, Эрнест", "10000000"),
          new Position("Третье бухло", "", "00000"),
          new Position("Четвёртое бухло", "Интерес", "1111111"),
        ]),
        new Category("Ещё бухло", [
          new Position("Первое бухло", "Абракадабра, пися единорога", "1231"),
          new Position("Второе бухло", "Куримаса, арбуз, Эрнест", "666"),
          new Position("Третье бухло", "", "1488"),
          new Position("Четвёртое бухло", "Интерес", "777"),
        ]),
      ]),
    ];
  }
}

export default Menu;
