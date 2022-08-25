import { Province, sampleProvinceData } from './main'
describe('province', function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  })

  it('shortfall', function () {
    expect(asia.shortfall).toBe(5);
  });

  it('profit', function () {
    expect(asia.profit).toBe(230);
  });

  it('province',function(){
    asia.producers[0].production = 20;
    expect(asia.shortfall).toBe(-6);
    expect(asia.profit).toBe(292);
  })

  it('zero demand',function(){
    asia.demand = 0;
    expect(asia.shortfall).toBe(-25);
    expect(asia.profit).toBe(0);
  })

  it('negative demand',function(){
    asia.demand = -1;
    expect(asia.shortfall).toBe(-26);
    expect(asia.profit).toBe(-10);
  })

  it('empty string demand',function(){
    expect(asia.shortfall).NaN
    expect(asia.profit).NaN
  })

  it('',function(){
    const data = {
      name:'String',
      producers:"",
      demand:30,
      price:20
    }
    const prov = new Province(data);
    expect(prov.shortfall).toBe(0)
  })
});