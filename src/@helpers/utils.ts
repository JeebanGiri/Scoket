export const generateOtp = (n: number) => {
  let OTP = '';
  const possible = '1234567890';
  for (let i = 0; i < n; i++) {
    OTP += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return OTP;
};
