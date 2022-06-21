export const versions = {
  dart: '1.52.3',
  lib: '3.6.5',
};

export const tags = {
  dart: 'https://github.com/sass/dart-sass/releases/tag/' + versions.dart,
  lib: 'https://github.com/sass/libsass/releases/tag/' + versions.lib,
};

export const releases = [
  {
    code: 'dartSass',
    name: 'Dart Sass',
    link: './dart-sass',
    external: {
      en: 'https://sass-lang.com/dart-sass',
      ru: 'https://sass-lang.su/dart-sass',
    },
    version: versions.dart,
    tag: tags.dart,
    icon: '',
    status: true,
  },
  {
    code: 'LibSass',
    name: 'LibSass',
    link: './libsass',
    external: {
      en: 'https://sass-lang.com/libsass',
      ru: 'https://sass-lang.su/libsass',
    },
    version: versions.lib,
    tag: tags.lib,
    icon: '',
    status: true,
  },
  {
    code: 'rubySass',
    name: 'Ruby Sass',
    link: './ruby-sass',
    external: {
      en: 'https://sass-lang.com/ruby-sass',
      ru: 'https://sass-lang.su/ruby-sass',
    },
    version: '',
    tag: '',
    icon: '⚰',
    status: false,
  },
];
