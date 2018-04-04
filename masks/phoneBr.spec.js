import {format, mask} from './phoneBr'

describe('phoneBr mask', () => {
  it('should mask correctly', () => {
    expect(
      format('4899483212', mask)
    ).toEqual('(48) 9948-3212')
    expect(
      format('48994832123', mask)
    ).toEqual('(48) 99483-2123')
  })
})
