const assert = require('chai').assert;
const Ogre = require('../exercises/ogre');
const Human = require('../exercises/human');

describe('Ogre', () => {
  // Oh no! It looks like there's no text in the `it` blocks! I guess you'll have to read the tests SUPER carefully to know what the test is expecting!

  it('should have a name', function() {
    const ogre = new Ogre({name:'Brak'});
    assert.equal(ogre.name, 'Brak');
  });

  it('should live in the swamp by default', function() {
    const ogre = new Ogre({name: 'Brak'});
    assert.equal(ogre.home, 'Swamp');
  });

  it('should be able to live somewhere else', function() {
    const ogre = new Ogre({name: 'Brak', abode: 'The Ritz'});
    assert.equal(ogre.home, 'The Ritz');
  });

  it('should count how many ogres it\'s encountered', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    assert.equal(human.name, 'Jane');
    assert.equal(human.encounterCounter, 0)

    ogre.encounter(human);
    assert.equal(human.encounterCounter, 1);
  });

  it('it should notice an ogre after encountering it 3 times', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    ogre.encounter(human);
    ogre.encounter(human);
    assert.equal(human.noticesOgre(), false);

    ogre.encounter(human);
    assert.equal(human.noticesOgre(), true);
  });

  it('should notice an ogre after encountering it every 3 times', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    assert.equal(human.noticesOgre(), false);

    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    assert.equal(human.noticesOgre(), true);

    ogre.encounter(human);
    ogre.encounter(human);
    assert.equal(human.noticesOgre(), false);

    ogre.encounter(human);
    assert.equal(human.noticesOgre(), true);
  });

  it('should swing at human', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    assert.equal(ogre.swings, 0)
    ogre.swingAt(human);

    assert.equal(ogre.swings, 1);
  });

  it('should swing when it is noticed', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    ogre.encounter(human);
    assert.equal(ogre.swings, 0);

    ogre.encounter(human);
    ogre.encounter(human);

    assert.equal(human.noticesOgre(), true);
    assert.equal(ogre.swings, 1);
  });

  it('should knock out human after 2 swings', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    assert.equal(human.knockedOut, false)
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);

    assert.equal(human.encounterCounter, 6);
    assert.equal(ogre.swings, 2);
    assert.equal(human.knockedOut, true);
  });

  it('human should not be knocked out after ogre apologizes', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    assert.equal(human.knockedOut, true);

    ogre.apologize(human);
    assert.equal(human.knockedOut, false);
  });
});
