import 'jest-expect-message'

//makes it easier to fill in missing
var formatted=false;
var masterLangName = 'en';

var LANGUAGES = []
var masterLang = null
describe('Compare i18n Files', () => {
  it('Json Compare', () => {
    let msg = ''
    return loadFiles().then(() => {
      SetMasterLanguage()

      LANGUAGES.forEach(lang => {
          var result = JsonCompare(lang.lang)
          if (result.found > 0) { msg += errorMessage(result, lang.name) }
      })
      expect(msg === msg, msg).toBeTruthy()
    })
  })
})

function errorMessage (result, otherName) {
  let text = ''
  if (result.notFound.length > 0) {
    text += ['Keys that were not found in ', otherName + '.js', '\n', '*'.repeat(36), '\n'].join('')
    text += formatMessage(result.notFound)
  }
  if (result.notInMain.length > 0) {
    text += ['\nUnkown Keys that were found in ', otherName + '.js', '\n', '*'.repeat(36), '\n'].join(' ')
    text += formatMessage(result.notInMain)
  }
  if (result.noPlural.length > 0) {
    text += ['\nMissing Plural in', otherName + '.js', '\n', '*'.repeat(36), '\n'].join(' ')
    text += formatMessage(result.noPlural)
  }
  text += ['\nFailed to validate [', otherName + '.js', ']', '\n'].join('')
  return text
}

function formatMessage(error){
  if(!formatted)
    return error.join('\n')

  var text ='';
  var currentHead=''
  var data;
  error.forEach(line=>{
    data = line.split('.')
    var value=data[data.length-1]
    data.pop();
    var head = data.join('.')
    if(currentHead!==head){
      currentHead = head;
      text+=['-->',head,'\n'].join(' ')
    }
    text+=[value,':\'\'','\n'].join('')
  })

  return text
}

function flattenJSON (data) {
  var result = {}
  function recurse (cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur
    } else if (Array.isArray(cur)) {
      for (var i = 0, l = cur.length; i < l; i++) { recurse(cur[i], prop + '[' + i + ']') }
      if (l === 0) { result[prop] = [] }
    } else {
      var isEmpty = true
      for (var p in cur) {
        isEmpty = false
        recurse(cur[p], prop ? prop + '.' + p : p)
      }
      if (isEmpty && prop) { result[prop] = {} }
    }
  }
  recurse(data, '')
  return result
}

function JsonCompare (otherJson) {
  var other = flattenJSON(otherJson)

  var notFound = []
  var noPlural = []

  Object.keys(masterLang).forEach(element => {
    if (other[element] === undefined) {
      notFound.push(element.slice(8))
    } else if (element.includes('common.') && String(masterLang[element]).includes('|') && !String(other[element]).includes('|')) {
      noPlural.push(element.slice(8))
    }
  })
  var notInMain = []
  Object.keys(other).forEach(element => {
    if (masterLang[element] === undefined) {
      notInMain.push(element.slice(8))
    }
  })
  return {
    found: notFound.length + notInMain.length + noPlural.length,
    notFound: notFound,
    notInMain: notInMain,
    noPlural: noPlural
  }
}

const fs = require('fs')

async function loadFiles () {
  var files = fs.readdirSync('./src/assets/i18n/', { withFileTypes: true })
    .filter(item => !item.isDirectory())
    .map(item => item.name)

  for (const file of files) {
    await import('@/assets/i18n/' + file.slice(0, 2))
      .then(module => { LANGUAGES.push({ lang: module, name: file.slice(0, 2) }) })
  }
  return LANGUAGES
}

function SetMasterLanguage () {
  LANGUAGES.forEach(lang => {
    if (lang.name === masterLangName) {
      masterLang = flattenJSON(lang.lang)
    }
  })
}
