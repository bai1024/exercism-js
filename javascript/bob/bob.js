const isEmpty = input => Boolean(input.match(/^\s*$/));

const isShout = input => Boolean(input.match(/[A-Z]/) && !input.match(/[a-z]/));

const isQuestion = input => Boolean(input.match(/\?\s*$/));

class Bob {
  hey(input) {
    if (isShout(input)) {
      if (isQuestion(input)) {
        return "Calm down, I know what I'm doing!";
      } else {
        return 'Whoa, chill out!';
      }
    }
    if (isQuestion(input)) return 'Sure.';
    if (isEmpty(input)) return 'Fine. Be that way!';
    return 'Whatever.';
  }
}

module.exports = Bob;


