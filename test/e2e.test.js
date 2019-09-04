const { openBrowser, write, goto, inputField, into, textBox, above, click, button, image, clear } = require('taiko');

describe('Beer App works', () => {

  beforeAll(async () => {
    await openBrowser({ headless: false });
    await goto('localhost:3000');

  });

  describe('Search for beers', () => {

    test('Search for "Taiko"', async () => {
      await write("two birds", into(textBox(above("Submit"))))

      await click(button())

      await image({id:"Two Birds Double Sunset"}).exists()

      var count = (await image().get()).length

      expect(count).toEqual(1)

    });

    test('Check show all on empty search', async () => {
      await clear(inputField(above('Submit')))
      
      await write("dog", into(textBox(above("Submit"))))

      await click(button())

      await image().exists()

      var count = (await image().get()).length

      expect(count).toBeGreaterThan(1)
      expect(count).toBeLessThan(10)
      
    });

    test('Check common search term returns multiple items', async () => {
      await clear(inputField(above('Submit')))

      await click(button({id: "button"}))

      var count = (await image().get()).length

      expect(count).toBeGreaterThan(1)
      
    });
  });

  afterAll(async () => {
    // await closeBrowser();
  });

});