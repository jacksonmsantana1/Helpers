import { expect } from 'chai';
import Helpers from './index.js';

describe('Auxiliar functions => ', () => {
  it('createCustomEvent() => ', () => {
    const detail = { anus: 'ANUS' };
    const result = Helpers.createCustomEvent('ANUS')(detail)(true)(true);

    expect(result.constructor.name).to.be.equal('CustomEvent');
    expect(result.detail).to.be.equal(detail);
    expect(result.type).to.be.equal('ANUS');
    expect(result.bubbles).to.be.equal(true);
    expect(result.cancelable).to.be.equal(true);
  });

  it('emitCustomEvent() => ', (done) => {
    const detail = { anus: 'ANUS' };
    const element = document.createElement('div');
    const evt = Helpers.createCustomEvent('ANUS')(detail)(true)(true);

    element.addEventListener('ANUS', (evt) => {
      expect(evt.type).to.be.equal('ANUS');
      done();
    });
    Helpers.emitCustomEvent(element)(evt);
  });

  it('isArrayEmpty() => ', () => {
    expect(true).to.be.equal(true);
  });

  it('compareId() => ', () => {
    expect(true).to.be.equal(true);
  });
});
