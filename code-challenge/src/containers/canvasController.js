import { redCircle } from '../../src/components/circle';

export default function canvasController(context, event) {

    const { clientX, clientY } = event;

    return redCircle(context, clientX, clientY, 11);    
}