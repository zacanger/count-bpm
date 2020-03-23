#!/usr/bin/env node

if (module.parent) {
  console.error('Please execute this module.')
  process.exit(1)
}

/* eslint-disable fp/no-let */
let start
let end
let text = ''
/* eslint-enable fp/no-let */

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
  const bpm = (60000 * beats) / time
  console.log(bpm.toFixed(2))
})
