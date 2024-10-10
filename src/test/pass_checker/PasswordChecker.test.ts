import { PasswordChecker } from '@app/pass_checker/PasswordChecker';

describe('PasswordChecker', () => {
  let sut: PasswordChecker;

  beforeAll(() => {
    sut = new PasswordChecker();
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should return true if password is longer than 8 characters', () => {
    const result = sut.check('12345678aA');
    expect(result).toBe(true);
  });

  it('should return false if password is shorter than 8 characters', () => {
    const result = sut.check('1234567');
    expect(result).toBe(false);
  });

  it('should return false if password is empty', () => {
    const result = sut.check('');
    expect(result).toBe(false);
  });

  it('should return false if password is null', () => {
    const result = sut.check(null);
    expect(result).toBe(false);
  });

  it('should return true if it contains at least one uppercase letter', () => {
    const result = sut.check('1234567aA');
    expect(result).toBe(true);
  });

  it('should return false if it does not contain at least one uppercase letter', () => {
    const result = sut.check('12345678');
    expect(result).toBe(false);
  });

  it('should return true if it contains at least one lowercase letter', () => {
    const result = sut.check('123456A8a');
    expect(result).toBe(true);
  });

  it('should return false if it does not contain at least one lowercase letter', () => {
    const result = sut.check('123456A8');
    expect(result).toBe(false);
  });
});
