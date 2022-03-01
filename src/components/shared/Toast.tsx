import React, { useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom';

interface Props {
    children: React.ReactNode
}

const Toast:React.FC<Props> = ({ children }) => {
    const toastRoot = document.getElementById('toast-root') as HTMLElement;

    const toastContainer:HTMLElement = useMemo(() => document.createElement('div') , []);

    useEffect(() => {
        toastRoot?.appendChild(toastContainer);

        return () => toastRoot?.remove();
    }, [])

    return createPortal(children, toastRoot);
}

export default Toast;