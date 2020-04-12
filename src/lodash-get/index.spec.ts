import { expect } from 'chai';
import { get } from '.';

describe('get', () => {
  const obj = {
    ab: {
      cd: 'val:ab.cd',
      ef: 'ab.ef:val',
    },
    cd: {
      ef: {
        gh: 'val:cd.ef.gh:val',
      },
    },
  };

  it('should return value when path is string', () => {
    const value = get(obj, 'ab.ef');
    expect(value).equals('ab.ef:val');
  });

  it('should return value when path is array', () => {
    const value = get(obj, ['ab', 'ef']);
    expect(value).equals('ab.ef:val');
  });

  it('should return value for internal key', () => {
    const value = get(obj, 'cd.ef');
    expect(value).to.be.deep.equal({
      gh: 'val:cd.ef.gh:val',
    });
  });

  it('should return null data is absent', () => {
    const value = get(obj, ['cd', 'ehg']);
    expect(value).equals(null);
  });
});
