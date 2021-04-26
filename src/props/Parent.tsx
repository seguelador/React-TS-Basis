import { ChildAsFC } from './Child';

const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log('clicked!')}>
        <p> Hola mundo! </p>
    </ChildAsFC>
};

export default Parent;
