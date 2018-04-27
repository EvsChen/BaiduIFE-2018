import san, { DataTypes } from 'san';
// import html files instead of directly write in JS
import template from './databinding.temp.html';

const MyApp = san.defineComponent({
  // used for dataType checking
  dataTypes: {
    name: DataTypes.string,
    age: DataTypes.number,
    intro: DataTypes.string
  },
  template: template,
  clearData: function () {
    console.log(this.data);
    this.data.set('name', '');
    this.data.set('age', '');
    this.data.set('intro', '');
  }
});

const myApp = new MyApp({
  data: {
  }
});

myApp.attach(document.body);
