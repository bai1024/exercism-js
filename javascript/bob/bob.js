const isEmpty = str => str.match(/^\s*$/);

const isShout = str => str.match(/[A-Z]/) && !str.match(/[a-z]/);

const isQuestion = str => str.match(/\?\s*$/);

class Bob {
  hey(str) {
    if (isShout(str)) {
      if (isQuestion(str)) {
        return "Calm down, I know what I'm doing!";
      } else {
        return 'Whoa, chill out!';
      }
    } else if (isQuestion(str)) {
      return 'Sure.'
    } else if (isEmpty(str)) {
      return 'Fine. Be that way!'
    } else {
      return 'Whatever.';
    }
  }
}

module.exports = Bob;


