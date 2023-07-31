/* eslint-disable prettier/prettier */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 100], // enforce a maximum header length of 100 characters
    'subject-empty': [2, 'never'], // enforce a non-empty subject
    'subject-full-stop': [2, 'never', '.'], // enforce no trailing period in subject
    'type-empty': [2, 'never'], // enforce a non-empty type
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'perf', 'refactor', 'test', 'chore'],
    ], // enforce a list of valid types
  },
};
