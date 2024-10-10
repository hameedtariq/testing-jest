import { PasswordChecker } from '@app/pass_checker/PasswordChecker';

describe('PasswordChecker', () => {
  let sut: PasswordChecker;

  beforeAll(() => {
    sut = new PasswordChecker();
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });
});
