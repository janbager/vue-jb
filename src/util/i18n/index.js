/**
 * Created on 02.08.17.
 *
 * @author Maximilian Beck <maximilian.beck@webteam-leipzig.de>
 */

import de from './de';

export const languages = [
  de,
];

class Translator {

  constructor(locale = this.getLocale()) {
    this.currentLanguage = languages[0];
    this.browserLang = navigator.language || navigator.userLanguage;
    this.languages = languages.map((language) => {
      if (language.locale === locale) {
        this.currentLanguage = language;
        return language;
      }
      return language;
    });
  }

  /**
   * Translates the identifier into the requested language
   * @param identifier
   * @param values
   * @return {*}
   */
  t(identifier, values = {}) {
    return this.currentLanguage && this.currentLanguage.translations[identifier]
      ? Translator.replaceStringTemplate(this.currentLanguage.translations[identifier], values)
      : identifier;
  }

  /**
   * Returns the current locale if it is supported
   * @return {string}
   */
  getLocale() {
    let ret = 'de-DE';
    languages.forEach((language) => {
      if (language.locale.toString().includes(this.browserLang)) {
        ret = language.locale;
      }
    });
    return ret;
  }

  /**
   * Replaces ttemplate markers in string with values in values
   * @param template
   * @param values
   */
  static replaceStringTemplate(template, values) {
    let formatted = template;
    Object.keys(values).forEach((value) => {
      formatted = formatted.toString().replace(`{${value}}`, values[value].toString());
    });
    return formatted;
  }
}

export default new Translator();
