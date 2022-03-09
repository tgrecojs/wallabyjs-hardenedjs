// @ts-check
import "ses";

const hardenFactory = (objs) => objs.map(harden);

const makeUid = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + 97) +
  Math.random().toString(16).slice(2) +
  Date.now().toString(16).slice(4);

const makeNftMint = (initial = makeUid(), startIndex = 0) => ({
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
