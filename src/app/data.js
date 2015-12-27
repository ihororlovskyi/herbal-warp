const data = [
  // {
  //   name: 'about',
  //   description: 'Home description',
  //   items: [
  //     {  },
  //   ]
  // },
  {
    name: 'releases',
    description: 'Releases description',
    items: [
      { name: 'tentura-beyond-illusion', bandcamp: 'https://sentimony.bandcamp.com/album/tentura-beyond-illusion' },
      { name: 'psyfactor-retro-scientific', bandcamp: 'https://sentimony.bandcamp.com/album/psyfactor-retro-scientific' },
      { name: 'cifroteca-roof-raiser-wild-storm', bandcamp: 'https://aquadeep.bandcamp.com/album/cifroteca-roof-raiser-wild-storm' },
      { name: 'tentura-aurora', bandcamp: 'https://sentimony.bandcamp.com/album/tentura-aurora' },
    ]
  },
  {
    name: 'artists',
    description: 'Artists description',
    items: [
      { name: 'irukanji', price: 8 },
      { name: 'tentura', price: 8 },
      { name: 'psyfactor', price: 6 }
    ]
  },
  {
    name: 'events',
    description: 'Events description',
    items: [
      { name: 'five-years', price: 3 },
      { name: 'home-space', price: 4 },
      { name: 'water-marks', price: 5 }
    ]
  }
]

const dataMap = data.reduce(function (map, category) {
  category.itemsMap = category.items.reduce(function (itemsMap, item) {
    itemsMap[item.name] = item
    return itemsMap
  }, {})
  map[category.name] = category
  return map
}, {})

exports.getAll = function () {
  return data
}

exports.lookupCategory = function (name) {
  return dataMap[name]
}

exports.lookupItem = function (category, item) {
  return dataMap[category].itemsMap[item]
}
