import {useState} from "react";

function useDelayUnmountChild(): [boolean, boolean, () => void, () => void, () => void] {
    const [show, setShow] = useState(false);
    const [unmounting, setUnmounting] = useState(false);

    const onEndUnmount = () => setShow(false);

    const onStartUnmount = () => setUnmounting(true);

    const onToggle = () => {
        if (show) {
            setUnmounting(true);

            return;
        }

        setShow(true);
        setUnmounting(false);
    }

    return [show, unmounting, onStartUnmount, onEndUnmount, onToggle];
}

export default useDelayUnmountChild;