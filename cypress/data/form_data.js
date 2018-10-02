import { emailGenerator, dataInsert, validationErrors } from "../helper";

export const formErrors = {
  tooShortString: "is too short (minimum is 3 characters)",
  invalidEmail: "is not a valid email",
  tooLongString70: "is too long (maximum is 70 characters)",
  tooLongString254: "is too long (maximum is 254 characters)",
  tooLongString500: "is too long (maximum is 500 characters)",
  isRequired: "is too short (minimum is 3 characters)",
  invalidURL: "is not a valid URL"
};

export const data = {
  validEmail: `${emailGenerator}`,
  invalidEmail: "atest.com",
  invalidEmailTooLong:
    "uvuJrcmA1zYlOK2sX2BZUIjuJ9O8R2frcOtqR4kc79qPhbSzR7ISMMROBFB2UEvKFF8nmRqdaVlEvgA5Yl99N03QeF7UwQ9iBnUtz4mabO8vJakj3N7BTlMl7PXxx1XwR0EsTSmmgxIxOKRrKdCPe4GjXQYKq3Cr3ieCKLFDaYCDpAZcAGLkW8VK6igE7w76kEP8D8L8BLZJqnNWzsBfy7N3nLuVHQIaZIYLsM0KitJmoTe8ERcwg6zhTiAMm4PIaGCg0b6GVAFaHtQXjdU85nlSSDrtoK7xoa0xWJV1rjR6evPjDySEqKYCL3N7YNfoUktzPaixq6M8lAJBcJFzh1s7hVOGW7jKOFsoSWOljtSFTlFLuadCGVYKP8oQeowpMSBr31GTRtCBhxPlJgCXhKF0xWdburWTmoL2KchgS5QzrS81OTxMS5TVeq3BNwylB0AIJ32lyrIMvuU8tUCOOBsbhQdBvqSaczrC7tox1b4R3aAwE4vfU@gmail.com",
  validString: "adsodiabnsodb",
  tooShortString: "a",
  tooLongString:
    "uvuJrcmA1zYlOK2sX2BZUIjuJ9O8R2frcOtqR4kc79qPhbSzR7ISMMROBFB2UEvKFF8nmRqdaVlEvgA5Yl99N03QeF7UwQ9iBnUtz4mabO8vJakj3N7BTlMl7PXxx1XwR0EsTSmmgxIxOKRrKdCPe4GjXQYKq3Cr3ieCKLFDaYCDpAZcAGLkW8VK6igE7w76kEP8D8L8BLZJqnNWzsBfy7N3nLuVHQIaZIYLsM0KitJmoTe8ERcwg6zhTiAMm4PIaGCg0b6GVAFaHtQXjdU85nlSSDrtoK7xoa0xWJV1rjR6evPjDySEqKYCL3N7YNfoUktzPaixq6M8lAJBcJFzh1s7hVOGW7jKOFsoSWOljtSFTlFLuadCGVYKP8oQeowpMSBr31GTRtCBhxPlJgCXhKF0xWdburWTmoL2KchgS5QzrS81OTxMS5TVeq3BNwylB0AIJ32lyrIMvuU8tUCOOBsbhQdBvqSaczrC7tox1b4R3aAwE4vfU",
  phoneNumber: "666666666",
  validURL: "https://www.google.com",
  invalidWebsite: "google.com",
  validNumber: 4323,
  invalidNumber: 999992049127491072409182741092847109284712094871039872124981724129471209487,
  data: 11111111
};

export const shortForm = [
  {
    form: "listingForm.name",
    validString: data.validString,
    tooShortString: data.tooShortString,
    tooShortStringError: formErrors.tooShortString,
    tooLongString: data.tooLongString,
    tooLongStringError: formErrors.tooLongString70,
    isRequired: formErrors.isRequired,
    errorSelector: "label:nth-child(3) > div > div > div"
  },
  {
    form: "listingForm.email",
    validEmail: data.validEmail,
    invalidEmail: data.invalidEmail,
    invalidEmailError: formErrors.invalidEmail,
    tooLongString: data.invalidEmailTooLong,
    tooLongStringError: formErrors.tooLongString254,
    isRequired: formErrors.isRequired,
    errorSelector:
      "form > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > label > div > div > div"
  },
  {
    form: "listingForm.company",
    validString: data.validString,
    tooShortString: data.tooShortString,
    tooShortStringError: formErrors.tooShortString,
    tooLongString: data.tooLongString,
    tooLongStringError: formErrors.tooLongString254,
    isRequired: formErrors.isRequired,
    errorSelector:
      "form > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > label > div > div > div"
  }
];

export const stepOne = [
  {
    form: "listingForm.name",
    validString: data.validString,
    tooShortString: data.tooShortString,
    tooShortStringError: formErrors.tooShortString,
    tooLongString: data.tooLongString,
    tooLongStringError: formErrors.tooLongString70,
    isRequired: formErrors.isRequired,
    errorSelector:
      "form > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > label > div > div > div"
  },
  {
    form: "listingForm.email",
    validEmail: data.validEmail,
    invalidEmail: data.invalidEmail,
    invalidEmailError: formErrors.invalidEmail,
    tooLongString: data.invalidEmailTooLong,
    tooLongStringError: formErrors.tooLongString254,
    isRequired: formErrors.isRequired,
    errorSelector:
      "form > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > label > div > div > div"
  },
  {
    form: "listingForm.company",
    validString: data.validString,
    tooShortString: data.tooShortString,
    tooShortStringError: formErrors.tooShortString,
    tooLongString: data.tooLongString,
    tooLongStringError: formErrors.tooLongString254,
    isRequired: formErrors.isRequired,
    errorSelector:
      "form > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > label > div > div > div"
  },
  {
    form: "listingForm.position",
    validString: data.validString,
    tooShortString: data.tooShortString,
    tooShortStringError: formErrors.tooShortString,
    tooLongString: data.tooLongString,
    tooLongStringError: formErrors.tooLongString254,
    isRequired: formErrors.isRequired,
    errorSelector:
      "form > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > label > div > div > div"
  }
];

export const stepTwo = [
  {
    form: "summaryForm.tokenName",
    validString: data.validString,
    tooShortString: data.tooShortString,
    tooShortStringError: formErrors.tooShortString,
    tooLongString: data.tooLongString,
    tooLongStringError: formErrors.tooLongString70,
    isRequired: formErrors.isRequired,
    errorSelector: "div:nth-child(1) > label > div > div > div"
  },
  {
    form: "summaryForm.tokenSymbol",
    validString: data.validString,
    tooShortString: data.tooShortString,
    tooShortStringError: formErrors.tooShortString,
    tooLongString: data.tooLongString,
    tooLongStringError: formErrors.tooLongString70,
    isRequired: formErrors.isRequired,
    errorSelector: "div:nth-child(2) > label > div > div > div"
  },
  {
    form: "summaryForm.website",
    validURL: data.validURL,
    invalidURL: data.invalidURL,
    invalidURL: formErrors.invalidURL,
    tooLongString: data.tooLongString,
    tooLongStringError: formErrors.tooLongString254,
    isRequired: formErrors.isRequired,
    errorSelector: "div:nth-child(3) > label > div > div"
  },
  {
    form: "summaryForm.whitepaper",
    validURL: data.validURL,
    invalidURL: data.invalidURL,
    invalidURL: formErrors.invalidURL,
    tooLongString: data.tooLongString,
    tooLongStringError: formErrors.tooLongString254,
    isRequired: formErrors.isRequired,
    errorSelector: "div:nth-child(4) > label > div > div > div"
  }
];

export const stepFour = [
  {
    form: "productForm.developmentProgress",
    validString: data.validString,
    tooShortString: data.tooShortString,
    tooShortStringError: formErrors.tooShortString,
    tooLongString: data.tooLongString,
    tooLongStringError: formErrors.tooLongString500,
    isRequired: formErrors.isRequired,
    errorSelector:
      "form > div:nth-child(1) > label:nth-child(1) > div > div > div"
  }
];

export const stepNine = [
  {
    form: "promotionsForm.feeProposal",
    validString: data.validString,
    tooShortString: data.tooShortString,
    tooShortStringError: formErrors.tooShortString,
    tooLongString: data.tooLongString,
    tooLongStringError: formErrors.tooLongString500,
    isRequired: formErrors.isRequired,
    errorSelector:
      "form > div:nth-child(1) > div:nth-child(1) > div> label > div > div > div"
  },
  {
    form: "promotionsForm.proposalPrice",
    validNumber: data.validNumber,
    tooLongString: data.invalidNumber,
    tooLongStringError: formErrors.tooLongString70,
    isRequired: formErrors.isRequired,
    errorSelector:
      "form > div:nth-child(1) > div:nth-child(1) > div > label > div > div > div"
  }
];
