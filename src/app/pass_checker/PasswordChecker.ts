export class PasswordChecker {
  constructor() {}

  public check(password: string): boolean {
    if (!password) {
      return false;
    }
    if (password.length < 8) {
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      return false;
    }
    if (!/[a-z]/.test(password)) {
      return false;
    }
    return true;
  }
}
