import {
  PasswordChecker,
  PasswordError,
} from '@app/pass_checker/PasswordChecker';

describe('PasswordChecker', () => {
  let sut: PasswordChecker;

  beforeAll(() => {
    sut = new PasswordChecker();
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should not return too short reason if password is longer than 8 characters', () => {
    const result = sut.check('12345678');
    expect(result.reasons).not.toContain(PasswordError.TOO_SHORT);
  });

  it('should return invalid with too short reason if password is shorter than 8 characters', () => {
    const result = sut.check('1234567');
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordError.TOO_SHORT);
  });

  it('should return invalid if password is empty', () => {
    const result = sut.check('');
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordError.TOO_SHORT);
  });

  it('should return invalid with null error message if password is null', () => {
    const result = sut.check(null);
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordError.NULL_OR_UNDEFINED);
  });

  it('should not return uppercase error if pass contains at least one uppercase letter', () => {
    const result = sut.check('1234567aA');
    expect(result.reasons).not.toContain(PasswordError.NO_UPPERCASE);
  });

  it('should return invalid with no uppercase error if pass does not contain at least one uppercase letter', () => {
    const result = sut.check('12345678');
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordError.NO_UPPERCASE);
  });

  it('should not return lowercase error if pass contains atleast one lowercase letter', () => {
    const result = sut.check('1234567aA');
    expect(result.reasons).not.toContain(PasswordError.NO_LOWERCASE);
  });

  it('should return invalid with no lowercase error if pass does not contain at least one lowercase letter', () => {
    const result = sut.check('12345678A');
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordError.NO_LOWERCASE);
  });

  it('should return valid if pass contains at least one uppercase and lowercase letter, one special character and is longer than 8 characters', () => {
    const result = sut.check('1234567aA!');
    expect(result.valid).toBe(true);
    expect(result.reasons).toHaveLength(0);
  });

  it('should return invalid with no special character error if pass does not contain at least one special character', () => {
    const result = sut.check('12345678Aa');
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordError.NO_SPECIAL_CHARACTER);
  });
});
