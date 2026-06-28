(function () {
  'use strict';

  var LANGS = ['zh-Hant', 'en', 'ja'];
  var STORAGE_KEY = 'ycl_lang';

  function langFromUrl() {
    var path = window.location.pathname.replace(/\\/g, '/');
    for (var i = 0; i < LANGS.length; i++) {
      if (path.indexOf('/' + LANGS[i] + '/') !== -1) return LANGS[i];
    }
    return null;
  }

  var currentLang = langFromUrl() || localStorage.getItem(STORAGE_KEY) || 'zh-Hant';

  window.switchLanguage = function (lang) {
    if (LANGS.indexOf(lang) === -1) return;
    localStorage.setItem(STORAGE_KEY, lang);
    var urls = window.YCL_LANG_URLS;
    if (urls && urls[lang]) {
      window.location.href = urls[lang];
    }
  };

  function initSelect() {
    var sel = document.getElementById('langSelect');
    if (sel) sel.value = currentLang;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSelect);
  } else {
    initSelect();
  }
})();
