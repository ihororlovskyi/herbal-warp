const data = [
  {
    name: 'releases',
    description: 'Releases description',
    items: [
      { name: 'tentura-beyond-illusion', bandcamp: 'https://sentimony.bandcamp.com/album/tentura-beyond-illusion' },
      { name: 'psyfactor-retro-scientific', bandcamp: 'https://sentimony.bandcamp.com/album/psyfactor-retro-scientific' },
      { name: 'cifroteca-roof-raiser-wild-storm', bandcamp: 'https://aquadeep.bandcamp.com/album/cifroteca-roof-raiser-wild-storm' },
      { name: 'tentura-aurora', bandcamp: 'https://sentimony.bandcamp.com/album/tentura-aurora' },
      { name: 'specialmind-the-missing-particle', bandcamp: 'https://sentimony.bandcamp.com/album/specialmind-the-missing-particle' },
      { name: 'hypnotriod-seven-heavenly-edges', bandcamp: 'https://sentimony.bandcamp.com/album/hypnotriod-seven-heavenly-edges' },
      { name: 'va-special-places', bandcamp: 'https://sentimony.bandcamp.com/album/va-special-places' },
      { name: 'va-absence-of-gravity', bandcamp: 'https://sentimony.bandcamp.com/album/va-absence-of-gravity' },
      { name: 'va-tempo-syndicate', bandcamp: 'https://sentimony.bandcamp.com/album/va-tempo-syndicate' },
      { name: 'va-time-loop-beyond-borders', bandcamp: 'https://sentimony.bandcamp.com/album/va-time-loop-beyond-borders' },
      { name: 'va-ocean-scenes-higher-titans', bandcamp: 'https://aquadeep.bandcamp.com/album/va-ocean-scenes-higher-titans' },
      { name: 'irukanji-z-lisu', bandcamp: 'https://sentimony.bandcamp.com/album/irukanji-z-lisu' },
      { name: 'spectrum-vision-lost-space-device', bandcamp: 'https://sentimony.bandcamp.com/album/spectrum-vision-lost-space-device' },
      { name: 'va-true-story', bandcamp: 'https://sentimony.bandcamp.com/album/va-true-story' },
      { name: 'sphingida-origin', bandcamp: 'https://sentimony.bandcamp.com/album/sphingida-origin' },
      { name: 'va-emptinesses', bandcamp: 'https://sentimony.bandcamp.com/album/va-emptinesses' },
      { name: 'va-fantazma', bandcamp: 'https://sentimony.bandcamp.com/album/va-fantazma' },
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
