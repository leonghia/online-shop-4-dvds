import React from "react";
import { useCheckbox, Chip, VisuallyHidden, tv, CheckboxProps, cn } from "@nextui-org/react";

const checkbox = tv({
    slots: {
        base: "border-default hover:bg-default-200",
        content: "px-2 text-small text-default-400"
    },
    variants: {
        isSelected: {
            true: {
                base: "border-primary bg-green-700 hover:bg-green-700",
                content: "text-foreground"
            }
        },
        isFocusVisible: {
            true: {
                base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
            }
        }
    }
})

export default function GenreCheckbox(props: CheckboxProps) {
    const {
        children,
        isSelected,
        isFocusVisible,
        getBaseProps,
        getLabelProps,
        getInputProps,
    } = useCheckbox({
        ...props
    })

    const styles = checkbox({ isSelected, isFocusVisible })

    return (
        <label {...getBaseProps()}>
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            <Chip
                classNames={{
                    base: styles.base(),
                    content: styles.content(),
                }}
                
                radius="sm"
                variant="flat"
                {...getLabelProps()}
            >
                {children ? children : isSelected ? "Enabled" : "Disabled"}
            </Chip>
        </label>
    );
}
