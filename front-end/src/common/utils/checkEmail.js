const checkEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

export default checkEmail;
