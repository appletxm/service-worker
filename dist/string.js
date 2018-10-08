var a = 123;

var data = [{ first: 'Jane', last: 'Bond' }, { first: 'Lars', last: 'Croft' }];

var gridData = [{
  name: '123',
  score: [{
    title: 'chinese',
    score: 90
  }, {
    title: 'english',
    score: 70
  }]
}, {
  name: '789',
  score: [{
    title: 'chinese',
    score: 50
  }, {
    title: 'english',
    score: 20
  }]
}];

var template = '\n<ul>\n  <% for(let i=0; i < data.length; i++) { %>\n    <li><%= data[i].first %></li>\n  <% } %>\n</ul>\n';

var gridTemp = '\n  <table>\n    <% for(let i=0; i<data.length; i++) { %>\n      <tr>\n        <% let score = data[i][\'score\'] %>\n        <% for(let j=0; j < score.length; j++ ){ %>\n          <td>\n            <%= data[i][\'name\'] + \' get: \' %>\n            <%= score[j][\'title\'] + \':\' + score[j][\'score\'] %>\n          </td>\n        <% } %>\n      </tr>\n    <% } %>\n  </table>\n';

function fill() {
  console.info('i\'m templage string \'\n\' ' + a);
  document.querySelector('#test-template').innerHTML = '\n    <h1>' + a + '</h1>\n  ';
}

function createTable() {
  var gridData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : data;


  var html = '<ul>\n    ' + gridData.map(function (item) {
    return '<li>' + item.first + '<i>' + item.last + '</i></li>';
  }).join('') + '\n  </ul>';

  document.querySelector('#grid-data').innerHTML = html;
}

function compile(template, data) {
  var newTemp = void 0;
  var evalExpr = /<%=(.+?)%>/g;
  var expr = /<%([\s\S]+?)%>/g;
  var totalHtml = '';

  newTemp = template.replace(/\n/g, '').replace(evalExpr, '`) \n getHtml($1) \n getHtml(`').replace(expr, '`) \n $1 \n getHtml(`');

  newTemp = 'getHtml(`' + newTemp + '`)';

  function getHtml(html) {
    totalHtml += html;
  }

  function parse(data) {
    eval(newTemp);
  }

  parse(data);

  return totalHtml;
}

function testForTemplate() {
  var html = compile(template, data);

  document.querySelector('#user-defined-tmp').innerHTML = html;
}

function getComplexTemp() {
  var html = compile(gridTemp, gridData);
  // console.info('==1==', html)
  document.querySelector('#user-defined-tmp-c').innerHTML = html;
}

export default {
  fill: fill,
  createTable: createTable,
  testForTemplate: testForTemplate,
  getComplexTemp: getComplexTemp
};