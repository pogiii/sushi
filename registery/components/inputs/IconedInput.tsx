import { forwardRef, ConponentProps } from "react"
import { Input, Text, XStack } from "tamagui";
import { UnframedInput } from "./UnframedInput";

type IconedInputProps = ConponentProps<typeof Input>;

export const IconedInput = forwardRef((props: IconedInputProps, ref): JSX.Element => {

    return (
        <XStack>
            <UnframedInput {...props}>
            </UnframedInput>
        </XStack>
    );
})