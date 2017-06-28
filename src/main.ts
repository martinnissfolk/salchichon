import {Color} from "./Color"

export class Startup {

    public static main() {
        var element = document.createElement('div');
        element.style.fontSize = "37px";
        element.style.color = "white";
        element.appendChild(document.createTextNode('Remember - you can\'t beam through a force field. So, don\'t try it.'));
        document.body.appendChild(element);
        console.log('Hello World');
        let color = new Color(0, 255, 0);
        document.body.style.backgroundColor = color.toString();
    }
    
}

Startup.main();