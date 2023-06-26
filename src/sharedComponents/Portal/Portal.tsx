import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    type: "dropdowns" | "modals";
    children: ReactNode;
}

export function Portal({type, children}: PortalProps) {
    const mountDoc = document.querySelector(`.${type}`);
    if (mountDoc === null) {return null}

    return createPortal(children, mountDoc);
}