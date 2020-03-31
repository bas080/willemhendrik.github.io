#!/usr/bin/env node

const mustache = require('mustache')
const fs = require('fs')

const content = fs.readFileSync(process.argv[2]).toString()

const partials = {
  main: fs.readFileSync('./src/partials/main.mustache').toString(),
  navigaton_item: fs.readFileSync('./src/partials/navigation.mustache').toString(),
  product_card: fs.readFileSync('./src/partials/product_card.mustache').toString(),
  content
}

const data = JSON.parse(fs.readFileSync('./src/data.json'))

var output = mustache.render(partials.main, data, partials);

console.log(output)
