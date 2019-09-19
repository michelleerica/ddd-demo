const { openBrowser, write, goto, into, textBox, image, clear } = require('taiko');

describe('Beer App works', () => {
  beforeAll(async () => {
    await openBrowser({ headless: false });
    await goto('localhost:3000');
  });

  describe('See beers', () => { 
    test('Beers should appear on screen', async() => {
      await image().exists()

      var count = (await image().get()).length

      expect(count).toBeGreaterThan(1)
    });
  });

  describe('Search for beers', () => {
    
    test('Search for a specific beer', async () => {

      await write("Two Birds ", into(textBox({ placeholder: "Search..." })))

      await image({id:"Two Birds Double Sunset"}).exists()

      var count = (await image().get()).length

      expect(count).toEqual(1)

    }, 30000);

    test('Check common search term returns multiple items', async () => {
      await clear(textBox({ placeholder: "Search..." }))
      
      await write("Dog", into(textBox({ placeholder: "Search..." })))

      await image().exists()

      var count = (await image().get()).length

      expect(count).toBeGreaterThan(1)
      expect(count).toBeLessThan(10)
      
    }, 30000);

    test('Check show all on empty search', async () => {
      await clear(textBox({ placeholder: "Search..." }))

      var count = (await image().get()).length

      expect(count).toBeGreaterThan(10)
      
    }, 30000);
  });

  afterAll(async () => {
    // await closeBrowser();
  });

});