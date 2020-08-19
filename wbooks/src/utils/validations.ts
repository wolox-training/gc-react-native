const passwordMinLength = 6;

export const validateEmail = (value: string) =>
  /^[\w.=-]+@[\w.-]+\.[\w]{2,3}$/.test(value) ? '' : 'Email invalido';

export const validatePassword = (value: string) =>
  value.length < passwordMinLength ? 'Contraseña inválida' : '';
