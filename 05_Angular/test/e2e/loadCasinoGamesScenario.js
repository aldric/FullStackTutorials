/**
 * Created by a.gaudinot on 22/01/14.
 */
describe('Casino Homepage View', function() {

  beforeEach(function() {
    browser().navigateTo('/casino');
  });


  it('should display nexus-s page', function() {
    console.log('e2e testing');
    sleep(3);
    expect(repeater('ul li', 'Games list').count()).toBe(32);
  });
});