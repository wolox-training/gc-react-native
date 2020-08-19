const passwordMinLength = 6;

export const validateEmail = (value: string) => {
  if (!value) {
    return 'Ingrese un email';
  }
  return /^[\w.=-]+@[\w.-]+\.[\w]{2,3}$/.test(value) ? '' : 'Email invalido';
};

export const validatePassword = (value: string) => {
  if (!value) {
    return 'Ingrese una contraseña';
  }
  return value.length < passwordMinLength ? 'Contraseña inválida' : '';
};
