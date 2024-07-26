class EmailService {
  static sendPasswordRecoveryEmail(email) {
    console.log(`Sending password recovery email to ${email}`);
  }

  static sendProductRequirementEmail(email, productName) {
    console.log(`Sending product requirement email to ${email} for ${productName}`);
  }
}

export default EmailService;
