import { forwardRef, ConponentProps } from "react"
import { Input, Label, YStack } from "tamagui";


type LabeledInputProps = ConponentProps<typeof Input> & { label: string };

export const LabeledInput = forwardRef((props: LabeledInputProps, ref): JSX.Element => {

    return (
        <YStack gap={4}>
            {props.label && <Label lineHeight={"auto"} htmlFor={props.id} >{props.label}</Label>}
            <Input ref={ref} {...props}></Input>
        </YStack>
    );
})