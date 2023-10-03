export const EMAIL_SENT = 'EMAIL_SENT';

export const emailSent = (email: string) => ({
  type: EMAIL_SENT,
  payload: email,
});
