export enum PasswordError {
  TOO_SHORT = 'Password is too short',
  NO_UPPERCASE = 'Password must contain at least one uppercase letter',
  NO_LOWERCASE = 'Password must contain at least one lowercase letter',
  NULL_OR_UNDEFINED = 'Password cannot be null or undefined',
}

export interface CheckResult {
  valid: boolean;
  reasons: PasswordError[];
}

export class PasswordChecker {
  constructor() {}

  public check(password: string): CheckResult {
    const reasons: PasswordError[] = [];
    if (password === null || password === undefined) {
      return {
        valid: false,
        reasons: [PasswordError.NULL_OR_UNDEFINED],
      };
    }
    if (password.length < 8) {
      reasons.push(PasswordError.TOO_SHORT);
    }
    if (!/[A-Z]/.test(password)) {
      reasons.push(PasswordError.NO_UPPERCASE);
    }
    if (!/[a-z]/.test(password)) {
      reasons.push(PasswordError.NO_LOWERCASE);
    }
    return {
      valid: reasons.length === 0,
      reasons,
    };
  }
}
