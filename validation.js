function emailq(str) {
    let format = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    if (format.test(str)) {
      return 1;
    } else {
      return 0;
    }
  }

  module.exports = emailq;
