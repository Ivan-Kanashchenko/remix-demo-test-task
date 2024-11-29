import {languagesDefault, languagesSupported} from './resource';

//
//

const i18n = {
  supportedLngs: languagesSupported,
  fallbackLng: languagesDefault,
  defaultNS: 'common',
  react: {useSuspense: false},
  saveMissing: true,
};

export default i18n;
