import { Province, sampleProvinceData } from './main'
describe('no producers', function () {
  let noProducers;
  beforeEach(function () {
    const data = {
        name:'no Producer',
        producers:[],
        demand:30,
        price:20
    }
    noProducers = new Province(data);
  })

  it('shortfall', function () {
    expect(noProducers.shortfall).toBe(30);
  });

  it('profit', function () {
    expect(noProducers.profit).toBe(0);
  });

 

 
});