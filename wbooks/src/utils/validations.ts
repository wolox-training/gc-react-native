const passwordMinLength = 6;

export const validateEmail = (value: string) =>
  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value) ? '' : 'Email invalido';

export const validatePassword = (value: string) =>
  value.length < passwordMinLength ? 'Contraseña inválida' : '';
