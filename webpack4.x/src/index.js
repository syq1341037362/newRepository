import '../src/style/index.css'
import '../src/style/index.scss'

function main() {
    console.log('HelloWorld+1');
    console.log("12");
}
main();
if (module.hot) {
    module.hot.accept();
}