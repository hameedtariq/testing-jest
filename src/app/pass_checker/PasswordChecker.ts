export enum PasswordError {
  TOO_SHORT = 'Password is too short',
  NO_UPPERCASE = 'Password must contain at least one uppercase letter',
  NO_LOWERCASE = 'Password must contain at least one lowercase letter',
  NULL_OR_UNDEFINED = 'Password cannot be null or undefined',
  NO_SPECIAL_CHARACTER = 'Password must contain at least one special character',
}

export interface CheckResult {
  valid: boolean;
  reasons: PasswordError[];
}

export class PasswordChecker {
  constructor() {}

  public check(password: string): CheckResult {
    const reasons: PasswordError[] = [];
    if (this.checkForNullOrUndefined(password)) {
      return {
        valid: false,
        reasons: [PasswordError.NULL_OR_UNDEFINED],
      };
    }
    if (!this.checkForLength(password)) {
      reasons.push(PasswordError.TOO_SHORT);
    }
    if (!this.checkForUppercase(password)) {
      reasons.push(PasswordError.NO_UPPERCASE);
    }
    if (!this.checkForLowercase(password)) {
      reasons.push(PasswordError.NO_LOWERCASE);
    }
    if (!this.checkForSpecialCharacter(password)) {
      reasons.push(PasswordError.NO_SPECIAL_CHARACTER);
    }
    return {
      valid: reasons.length === 0,
      reasons,
    };
  }

  private checkForLength(password: string): boolean {
    return password.length >= 8;
  }

  private checkForUppercase(password: string): boolean {
    return /[A-Z]/.test(password);
  }

  private checkForLowercase(password: string): boolean {
    return /[a-z]/.test(password);
  }

  private checkForSpecialCharacter(password: string): boolean {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  }

  private checkForNullOrUndefined(password: string): boolean {
    return password === null || password === undefined;
  }
}
