import React from "react";

export interface DarkButtonProps {
    label: string,
}

const DarkButton = (props: DarkButtonProps) => {

    return <button>{props.label}</button>

}

export default DarkButton;