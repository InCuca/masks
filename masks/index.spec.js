import glob from 'glob';
import masks from '.';

const maskFiles = glob.sync('masks/!(*.spec).js');
describe('masks module', () => {
  it('should export a mask for every mask files', () => {
    const expected = maskFiles
      .map((mask) => {
        const fMask = mask.replace(/masks\/(.+)\.js/, '$1');
        return { [fMask]: masks[fMask] };
      })
      .reduce((p, n) => ({ ...p, ...n }), {});
    delete expected.index;
    expect(masks).toMatchObject(expected);
  });
});
