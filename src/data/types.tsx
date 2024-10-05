export interface EducationInfo {
  info1: string;
  info2: string;
  info3: string;
  firstimage: { src: string };
  secondimage: { src: string };
  joke: string;
  video: string;
}

export interface InformationByLevel {
  Primary: EducationInfo;
  LowerSecondary: EducationInfo;
  UpperSecondary: EducationInfo;
}
