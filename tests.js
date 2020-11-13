// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe("sayHello", function (){
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
})
describe("isFive", function (){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value when function is run', function () {
        expect(typeof isFive ()).toBe('boolean');
    });
    it('should return true if is parsed through', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false if 4 is parsed through', function () {
        expect(isFive(4)).toBe(false);
    });
})
describe("isEven", function (){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean value when function is run', function () {
        expect(typeof isEven ()).toBe('boolean');
    });
    it('should return false if 3 is parsed through', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return true if 4 is parsed through', function () {
        expect(isEven(4)).toBe(true);
    });
    it('should return false if Infinity is parsed through', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false if "Banana" is parsed through', function () {
        expect(isEven("Banana")).toBe(false);
    });
})
describe("isVowel", function (){
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean value when function is run', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return false if "b" is parsed through', function () {
        expect(isVowel("b")).toBe(false);
    });
    it('should return true if "a" is parsed through', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true if "A" is parsed through', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false if "4" is parsed through', function () {
        expect(isVowel("4")).toBe(false);
    });
})
describe("add", function (){
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return a number value when function is run', function () {
        expect(typeof add()).toBe('number');
    })
    it('should return 5 when 2, 3 are parsed', function () {
        expect(add(2,3)).toBe(5);
    })
    it('should return 11 when "5", 6 are parsed', function () {
        expect(add("5",6)).toBe(11);
    })
    it('should return NaN when "banana" and "split" are parsed', function () {
        expect(add("banana","split")).toBe(NaN);
    })
})