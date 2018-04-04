import {format, mask} from './cnpj.js'
describe('cnpj mask', () => {
  it('should mask correctly', () => {
    expect(
      format('11111111111111', mask)
    ).toEqual('11.111.111/1111-11')
  })
})
