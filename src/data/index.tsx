import alien from "@/images/alien.gif";
import alien2 from "@/images/alien2.gif";
import { InformationByLevel } from "@/data/types";

export const informationByLevel: InformationByLevel = {
  Primary: {
    info1: "Information for the primary students",
    info2: "Information 2 for the primary students",
    info3: "Information 3 for the primary students",
    firstimage: alien2,
    secondimage: alien,
    joke: "This is a joke for primary",
    video: "some video for primary",
  },
  LowerSecondary: {
    info1: "Information for the lower secondary students",
    info2: "Information 2 for the lower secondary students",
    info3: "Information 3 for the lower secondary students",
    firstimage: alien,
    secondimage: alien2,
    joke: "This is a joke for lower secondary",
    video: "some video for lower secondary",
  },
  UpperSecondary: {
    info1: "Information for the upper secondary students",
    info2: "Information 2 for the upper secondary students",
    info3: "Information 3 for the upper secondary students",
    firstimage: alien,
    secondimage: alien2,
    joke: "This is a joke for upper secondary",
    video: "some video for upper secondary",
  },
};
