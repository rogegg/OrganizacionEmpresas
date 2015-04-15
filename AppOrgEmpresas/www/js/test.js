module('qunit-assert-html plugin tests');

QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test('Example unit test', function(assert) {
  assert.htmlEqual('<B TITLE=test>test</B>', '<b title="test">test</b>');
});
