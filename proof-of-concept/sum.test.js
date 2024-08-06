//  import `test` and `expect` functions from Vitest
import { expect, test } from "vitest";


//  import the `sum` function from sum.js
import { sum } from "/sum.js";

//  create a bare bones test
test('bare bones test 2', () => {
    expect(sum(5,7)).toBe(12)
})

//  run Vitest to check that it detects and passes the new test
//  inside the test:
//      call the sum function with arguments: 5 and 7
//      assert that the value returned is 12
