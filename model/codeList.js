const AV = require('../utils/av-live-query-weapp-min');

class codeList extends AV.Object {
  get code() {
    return this.get('code');
  }

  set code(value) {
    return this.set('code', value);
  }

  get uploader() {
    return this.get('uploader');
  }

  set uploader(value) {
    return this.set('uploader', value);
  }
}

AV.Object.register(codeList);
module.exports = codeList;