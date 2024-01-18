import { addLocaleData, IntlProvider } from 'react-intl'
import flatten from 'flat'

import zhData from 'react-intl/locale-data/zh'
import enData from 'react-intl/locale-data/en'
import caData from 'react-intl/locale-data/ca'
import deData from 'react-intl/locale-data/de'

const en = require('../i18n/en.json')
const zh = require('../i18n/zh.json')
const ca = require('../i18n/ca.json')
const de = require('../i18n/de.json')

const enMessages = flatten(en)
const zhMessages = flatten(zh)
const caMessages = flatten(ca)
const deMessages = flatten(de)
addLocaleData([...enData, ...zhData, ...caData, ...deData])

const t = (id, locale, args) => {
  let messages
  if (locale === 'en') messages = enMessages
  if (locale === 'zh') messages = zhMessages
  if (locale === 'ca') messages = caMessages
  if (locale === 'de') messages = deMessages
  const { intl } = new IntlProvider({ locale, messages }, {}).getChildContext()
  return intl.formatMessage({ id }, locale, args)
}

export { t }
