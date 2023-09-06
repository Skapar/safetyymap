let lang = [
  {
    key: 'ru',
    values: {
      "flag": "/static/modal-img/russia-flag.png",
      "theme": "Основы пожарной безопасности",
      "descriptiontheme" : "Описание",
      "description": "Основы пожарной безопасности это самая важная и нужна вещь...",
      // "share": "Share via :"
    },
  },
  {
    key: 'en',
    values: {
      "theme": "Fire Safety Basics",
      "descriptiontheme" : "Description",
      "description": "Fire safety basics is the most important and necessary thing...",
      "flag": "/static/modal-img/en-flag.png",
      // "share": "Share via :"
    },
  },
  {
    key: 'kz',
    values: {
      "theme": "Өрт қауіпсіздігі негіздері",
      "descriptiontheme" : "Сипаттама",
      "description": "Өрт қауіпсіздігінің негіздері ең маңызды және қажетті зат...",
      "flag": "/static/modal-img/kaz-flag.png",
      // "share": "Бөлісу арқылы :"
    },
  },
];

let currentLang = 'ru';

function getTranslation(langKey, translationKey) {
  let language = lang.find(language => language.key === langKey);
  return language ? language.values[translationKey] : null;
}

function updateLanguageList() {
  let languageList = $('.language-options');
  languageList.empty();

  lang.forEach(language => {
    if (language.key !== currentLang) {
      languageList.append(`<li class="language-item" data-lang="${language.key}"><img class="flag" src="${language.values.flag}" alt="${language.key}"> ${language.key.toUpperCase()}</li>`);
    }
  });
}

function updateSelectedFlag() {
  $('#selected-flag').attr('src', getTranslation(currentLang, 'flag') || "#");
}

// attach event handlers on body which will listen for all clicks, 
// and only run if the click was inside an element with a specific class
$(document).ready(function() {
  $('body').on('click', '.selected-language', function(e) {
    $('.language-options').toggle();
  });

  $('body').on('click', '.language-item', function(event) {
    event.preventDefault();
    let selectedLang = $(this).data('lang');

    currentLang = selectedLang;

    $("[data-translate]").each(function() {
      let key = $(this).data('translate');
      $(this).text(getTranslation(currentLang, key) || "No translation");
    });

    updateLanguageList();
    updateSelectedFlag();
    $('.language-options').hide();
  });
  
  // Call the function on initial load
  updateLanguageList();
  updateSelectedFlag();
});
