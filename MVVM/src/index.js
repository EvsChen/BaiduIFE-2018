import san from 'san';
import printMe from './print.js';
import './style.css';

const MyApp = san.defineComponent({
  template: `
        <div>
            <button>Click me</button>
            <input type="text" value="{=name=}">
            <p>Hello {{name}}!</p>
        </div>
    `
});

const myApp = new MyApp({
  data: {
    name: 'San'
  }
});
printMe();
myApp.attach(document.body);
if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated printMe module!');
    printMe();
  });
}
