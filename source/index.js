// @ts-check
import "ses";
import cuid from "cuid";
const hardenFactory = (objs) => objs.map(harden);

const makeNftMint = (initial = cuid(), startIndex = 0) => ({
  id: initial,
  position: startIndex,
  uidSet: new Map().set("ids", []),
  getUid() {
    return this.uidSet.get("ids");
  },
  mint() {
    return this.uidSet.set("ids", [...this.getUid(), makeNftMint()]);
  },
});
// const testMint = makeNftMint();
// testMint.mint(); //?
// testMint.mint(); //?
// testMint.mint(); //?
// testMint.mint(); //?
// testMint.getUid(); //?
const obj = {
  makeNftMint,
  sayHi: () => "hi",
};
const os = hardenFactory([obj]); //?
export { obj };
