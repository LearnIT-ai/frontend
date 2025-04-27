export interface SignUpUserDataTypes {
  lastName: string;
  firstName: string;
  fatherName: string;
  city: string;
  profileType: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpErrors {
  firstName?: string;
  lastName?: string;
  fatherName?: string;
  city?: string;
  profileType?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
  additionalError?: string;
}
