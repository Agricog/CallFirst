export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string>
  sanitized: string
}

/**
 * Validates and sanitises user input.
 * All user-facing inputs MUST pass through this before use.
 */
export function validateInput(
  input: string,
  type: 'email' | 'number' | 'text' | 'currency' | 'phone',
  maxLength: number = 255
): ValidationResult {
  const errors: Record<string, string> = {}
  let sanitized = input.trim()

  // Length check
  if (sanitized.length > maxLength) {
    errors['length'] = `Maximum ${maxLength} characters allowed`
  }

  // Empty check
  if (sanitized.length === 0) {
    errors['required'] = 'This field is required'
    return { isValid: false, errors, sanitized }
  }

  // Type-specific validation
  switch (type) {
    case 'email': {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(sanitized)) {
        errors['email'] = 'Invalid email format'
      }
      break
    }
    case 'number': {
      if (isNaN(Number(sanitized))) {
        errors['number'] = 'Must be a valid number'
      }
      break
    }
    case 'currency': {
      const currencyRegex = /^\d+(\.\d{1,2})?$/
      if (!currencyRegex.test(sanitized)) {
        errors['currency'] = 'Invalid currency format (e.g., 123.45)'
      }
      break
    }
    case 'phone': {
      const phoneRegex = /^[+]?[\d\s()-]{7,20}$/
      if (!phoneRegex.test(sanitized)) {
        errors['phone'] = 'Invalid phone number'
      }
      break
    }
    case 'text':
    default:
      break
  }

  // XSS protection — escape dangerous characters
  sanitized = escapeHtml(sanitized)

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized,
  }
}

/** Escape HTML entities to prevent XSS */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}
