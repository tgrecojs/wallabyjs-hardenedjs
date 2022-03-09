import test from "ava";
import { obj as adminFacet } from "./index.js";

test("adminFacet.sayHi() should return the correct string", (t) => {
  t.is(adminFacet.sayHi(), "hi");
  console.log(adminFacet.sayHi());
});

test("adminFacet.makeNftMint should be defined", (t) => {
  t.is(!adminFacet.makeNftMint, false, "makeNftMint property exists"); //?
});

test("adding a new property should throw", (t) => {
  t.throws(() => (adminFacet.newProp = "thom")); //?
  console.log(adminFacet.sayHi());
});
