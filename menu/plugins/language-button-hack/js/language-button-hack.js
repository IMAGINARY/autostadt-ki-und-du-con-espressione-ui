const oldSetLang = IMAGINARY.AppLauncher.setLang.bind(IMAGINARY.AppLauncher);
IMAGINARY.AppLauncher.setLang = function (lang) {
  oldSetLang(lang);
  document.body.dataset.lang = lang;
};

function onLangButtonClick() {
  const langs = IMAGINARY.AppLauncher.config.langMenuItems;
  const lang = IMAGINARY.AppLauncher.lang;
  const index = langs.findIndex((l) => l === lang);
  const nextIndex = (index + 1) % langs.length;
  const nextLang = langs[nextIndex];
  IMAGINARY.AppLauncher.setLang(nextLang);
}

const langButton = $(
  "<a class='util-button util-button-lang' href='#'><span class='fa fa-language'></span></a>",
).on("click", onLangButtonClick);
$(document.body).append(langButton);
document.body.dataset.lang = IMAGINARY.AppLauncher.lang;
