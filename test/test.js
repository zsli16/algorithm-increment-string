const incrementString = require('../index');

describe (
`
 ////  INCREMENT STRING  ////
 ////////////////////////////
 
 `, () => {

    test (`"foobar000"  -->  "foobar001"`, async (done) => {

      const result = incrementString('foobar000');
      expect(result).toEqual("foobar001");
      done();
    });

    test (`"foo"  -->  "foo1"`, async (done) => {

      const result = incrementString('foo');
      expect(result).toEqual("foo1");
      done();
    });

    test (`"codeworks099"  -->  "codeworks100"`, async (done) => {

      const result = incrementString('codeworks099');
      expect(result).toEqual("codeworks100");
      done();
    });

    test (` ""   -->   "1" `,async (done) => {

      const result = incrementString('');
      expect(result).toEqual("1");
      done();
    });
});