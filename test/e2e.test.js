const { openBrowser, write, goto, inputField, into, textBox, toLeftOf, click, button, image, clear } = require('taiko');

describe('Beer App works', () => {

  beforeAll(async () => {
    await openBrowser({ headless: false });
    await goto('localhost:3000');
  });

  describe('Search for beers', () => {

    test('Search for "Taiko"', async () => {
      await write("two birds", into(textBox(toLeftOf("Submit"))))

      await click(button())

      await image({id:"Two Birds Double Sunset"}).exists()

      var count = (await image().get()).length

      expect(count).toEqual(1)

    }, 15000);

    test('Check show all on empty search', async () => {
      await clear(inputField(above('Submit')))
      
      await write("dog", into(textBox(toLeftOf("Submit"))))

      await click(button())

      await image().exists()

      var count = (await image().get()).length

      expect(count).toBeGreaterThan(1)
      expect(count).toBeLessThan(10)
      
    }, 10000);

    test('Check common search term returns multiple items', async () => {
      await clear(inputField(toLeftOf('Submit')))

      await click(button({id: "button"}))

      var count = (await image().get()).length

      expect(count).toBeGreaterThan(1)
      
    }, 10000);
  });

  afterAll(async () => {
    // await closeBrowser();
  });

});