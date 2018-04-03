#!/usr/bin/env node

if (module.parent) {
  console.error('Please execute this module.')
  process.exit(1)
}

let start
let end
let text = ''

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', (chunk) => {
  start = start || Date.now()
  text += chunk
  end = Date.now()
})

process.stdin.on('end', () => {
  const beats = text.split('').length
  const time = end - start
  const bpm = 60000 * beats / time
  console.log(bpm.toFixed(2))
})
