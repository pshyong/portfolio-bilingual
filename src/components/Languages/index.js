import React from 'react'
import { Link } from 'gatsby'
import styles from './index.module.scss'
import allUrls from '../../urls/allUrls.js'
import PropTypes from 'prop-types'
import { t } from '../../i18n'

const Languages = ({ location, lang }) => {
  const currentLocation = location.pathname
  const currentUrl = allUrls.find(
    elem => elem[`url_${lang}`] === currentLocation
  )

  return (
    <div className={styles.languages}>
      <p>
        <Link
          aria-label={t('accessibility.en', lang)}
          to={currentUrl && currentUrl.url_en}
          className={`${styles.language_item} ${
            lang === 'en' ? styles.language_active : ''
          }`}
        >
          en
        </Link>
        <span> / </span>
        <Link
          aria-label={t('accessibility.zh', lang)}
          to={currentUrl && currentUrl.url_zh}
          className={`${styles.language_item} ${
            lang === 'zh' ? styles.language_active : ''
          }`}
        >
          中文
        </Link>
        
      </p>
    </div>
  )
}

Languages.propTypes = {
  lang: PropTypes.string.isRequired,
  location: PropTypes.object
}

export default Languages
