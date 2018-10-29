angular.module('starter.services', [])

.factory('Menus', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var menus = [{
    id: 0,
    name: 'Nevado de arequipe',
    price: '$3.75',
    lastText: 'Te encantará probar el sabor de este nevado cubierto con salsa de dulce de leche.?',
    face: 'img/arre.jpg'
  }, {
    id: 1,
    name: 'Nevado Moccachips',
    price: '$3.50',
    lastText: 'Deléitate con una increíble fiesta de chips y salsa de chocolate en tu nevado favorito.',
    face: 'img/chips.jpg'
  }, {
    id: 2,
    name: 'Nevado Light',
    price: '$4.25',
    lastText: 'Tentador y libre de calorías. Disfruta su delicioso sabor sin preocupaciones',
    face: 'img/lig.jpg'
  }, {
    id: 3,
    name: 'Nevado de Chocolate',
    price: '$3.99',
    lastText: 'Vas a querer probar muchas veces esta maravillosa fusión de café y chocolate con crema chantilly.',
    face: 'img/choco.jpg'
  }, {
    id: 4,
    name: 'Cappuccino',
    price: '$3.75',
    lastText: 'Una de las bebidas más tradicionales con las perfectas notas de aroma y sabor en tu paladar.',
    face: 'img/cap.jpg'
  }, {
    id: 5,
    name: 'Macchiato',
    price: '$3.99',
    lastText: 'Una versión concentrada de un cappuccino, con un espresso y leche vaporizada. Ideal para los que les gustan los shots.',
    face: 'img/mac.jpg'
  }, {
    id: 6,
    name: 'Americano',
    price: '$3.25',
    lastText: 'Prolonga el sabor del espresso.',
    face: 'img/amer.jpg'
  }, {
    id: 7,
    name: 'Latte',
    price: '$3.50',
    lastText: 'Una Combinación de nuestro mejor espresso y leche, cubierto de una capa cremosa de leche vaporizada.',
    face: 'img/latte.jpg'
  }];

  return {
    all: function() {
      return menus;
    },
    remove: function(menu) {
      menus.splice(menus.indexOf(menu), 1);
    },
    get: function(menuId) {
      for (var i = 0; i < menus.length; i++) {
        if (menus[i].id === parseInt(menuId)) {
          return menus[i];
        }
      }
      return null;
    }
  };
})


.factory('Comandas', function() {

  var menus = [{
    id: 0,
    name: 'Orden #1',
    prod: 'Latte',
    price: '$3.75',
    lastText: 'Te encantará probar el sabor de este nevado cubierto con salsa de dulce de leche.?',
    number: '2',
    date: '21-10-2018 16:44:05',
    face: 'img/ionic.png'
  }, {
    id: 1,
    name: 'Orden #2',
    prod: 'Nevado de arequipe',
    price: '$3.50',
    lastText: 'Deléitate con una increíble fiesta de chips y salsa de chocolate en tu nevado favorito.',
    number: '1',
    date: '01-10-2018 17:44:05',
    face: 'img/ionic.png'
  }, {
    id: 2,
    name: 'Orden #3',
    prod: 'Cappuccino',
    price: '$4.25',
    lastText: 'Tentador y libre de calorías. Disfruta su delicioso sabor sin preocupaciones',
    number: '6',
    date: '12-10-2018 13:01:43',
    face: 'img/ionic.png'
  }, {
    id: 3,
    name: 'Orden #4',
    prod: 'Nevado de Chocolate',
    price: '$3.99',
    lastText: 'Vas a querer probar muchas veces esta maravillosa fusión de café y chocolate con crema chantilly.',
    number: '2',
    date: '15-10-2018 22:39:20',
    face: 'img/ionic.png'
  }, {
    id: 4,
    name: 'Orden #5',
    prod: 'Nevado de Chocolate',
    price: '$3.75',
    lastText: 'Una de las bebidas más tradicionales con las perfectas notas de aroma y sabor en tu paladar.',
    number: '4',
    date: '15-10-2018 15:32:37',
    face: 'img/ionic.png'
  }, {
    id: 5,
    name: 'Orden #6',
    prod: 'Nevado Moccachips',
    price: '$3.99',
    lastText: 'Una versión concentrada de un cappuccino, con un espresso y leche vaporizada. Ideal para los que les gustan los shots.',
    number: '3',
    date: '13-10-2019 12:11:42',
    face: 'img/ionic.png'
  }, {
    id: 6,
    name: 'Orden #7',
    prod: 'Macchiato',
    price: '$3.25',
    lastText: 'Prolonga el sabor del espresso.',
    number: '1',
    date: '10-10-2018 13:06:13',
    face: 'img/ionic.png'
  }, {
    id: 7,
    name: 'Orden #8',
    prod: 'Nevado Light',
    price: '$3.50',
    lastText: 'Una Combinación de nuestro mejor espresso y leche, cubierto de una capa cremosa de leche vaporizada.',
    number: '2',
    date: '16-10-2018 11:51:21',
    face: 'img/ionic.png'
  }];

  return {
    all: function() {
      return menus;
    },
    remove: function(menu) {
      menus.splice(menus.indexOf(menu), 1);
    },
    get: function(menuId) {
      for (var i = 0; i < menus.length; i++) {
        if (menus[i].id === parseInt(menuId)) {
          return menus[i];
        }
      }
      return null;
    }
  };
});
