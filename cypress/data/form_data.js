import { emailGenerator, dataInsert, validationErrors } from "../helper";

export const formErrors = {
  tooShortString: "is too short (minimum is 3 characters)",
  invalidEmail: "is not a valid email",
  tooLongString: "is too long (maximum is 70 characters)",
  isRequired: "is too short (minimum is 3 characters)"
};

export const formData = {
  validEmail: `${emailGenerator}`,
  invalidEmail: "atest.com",
  validString: "adsodiabnsodb",
  tooShortString: "a",
  tooLongString:
    "uvuJrcmA1zYlOK2sX2BZUIjuJ9O8R2frcOtqR4kc79qPhbSzR7ISMMROBFB2UEvKFF8nmRqdaVlEvgA5Yl99N03QeF7UwQ9iBnUtz4mabO8vJakj3N7BTlMl7PXxx1XwR0EsTSmmgxIxOKRrKdCPe4GjXQYKq3Cr3ieCKLFDaYCDpAZcAGLkW8VK6igE7w76kEP8D8L8BLZJqnNWzsBfy7N3nLuVHQIaZIYLsM0KitJmoTe8ERcwg6zhTiAMm4PIaGCg0b6GVAFaHtQXjdU85nlSSDrtoK7xoa0xWJV1rjR6evPjDySEqKYCL3N7YNfoUktzPaixq6M8lAJBcJFzh1s7hVOGW7jKOFsoSWOljtSFTlFLuadCGVYKP8oQeowpMSBr31GTRtCBhxPlJgCXhKF0xWdburWTmoL2KchgS5QzrS81OTxMS5TVeq3BNwylB0AIJ32lyrIMvuU8tUCOOBsbhQdBvqSaczrC7tox1b4R3aAwE4vfU",
  phoneNumber: "666666666",
  validURL: "https://www.google.com",
  invalidWebsite: "google.com",
  validNumber: 4323,
  invaldNumberOfEmplyees: 99999,
  data: 11111111
};

export const firstStep = [
  {
    form: "listingForm.name",
    validString: formData.validString,
    invalidString: formData.invalidString,
    tooLongError: formErrors.tooLongString,
    tooShortError: formErrors.tooShortString
  },
  {
    form: "listingForm.email",
    formData: formData.validEmail,
    validEmail: formData.validEmail,
    invalidEmail: formErrors.invalidEmail
  },
  {
    form: "listingForm.company",
    validString: formData.validString,
    invalidString: formErrors.invalidEmail
  },
  {
    form: "listingForm.position",
    validString: formData.validString,
    invalidShortString: formErrors.tooLongString,
    invalidLongString: formErrors.tooShortString,
    invalidEmpty: formErrors.isRequired
  }
];

export const stepTwo = [
  {
    form: "listingForm.name"
  }
];
