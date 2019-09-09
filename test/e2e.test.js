const { openBrowser, write, goto, inputField, into, textBox, toLeftOf, click, button, image, clear } = require('taiko');

describe('Beer App works', () => {

  beforeAll(async () => {
    await openBrowser({ headless: false });
    await goto('localhost:3000');
  });

  describe('Search for beers', () => {

    test('Search for a specific beer', async () => {
      await write("two birds", into(textBox(toLeftOf("Submit"))))

      await click(button())

      await image({id:"Two Birds Double Sunset"}).exists()

      var count = (await image().get()).length

      expect(count).toEqual(1)

    }, 30000);

    test('Check common search term returns multiple items', async () => {
      await clear(inputField(toLeftOf('Submit')))
      
      await write("dog", into(textBox(toLeftOf("Submit"))))

      await image().exists()

      var count = (await image().get()).length

      expect(count).toBeGreaterThan(1)
      expect(count).toBeLessThan(10)
      
    }, 30000);

    test('Check show all on empty search', async () => {
      await clear(inputField(toLeftOf('Submit')))

      await write(" ", into(textBox(toLeftOf("Submit"))))

      await click(button())

      var count = (await image().get()).length

      expect(count).toBeGreaterThan(10)
      
    }, 30000);
  });

  afterAll(async () => {
    // await closeBrowser();
  });

});