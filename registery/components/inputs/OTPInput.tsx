import { ComponentProps, useState } from "react";
import { Form, Input, styled, XStack, YStack } from "tamagui";

type OTPInputProps = ComponentProps<typeof Form> & { length: number };

export const OTPInput = (props: OTPInputProps) => {

    const OTPNumberInput = styled(Input, {
        name: "Input",
        width: "$4"
    })

    // Might improve states later.
    const [focusArray, setFocusArray] = useState<boolean[]>(new Array(props.length).fill(false));
    const [valueArray, setValueArray] = useState<number[]>(new Array(props.length));


    // For some reason using this approach to move the focus forces me to keep a values array.
    const focusOnNextInput = (e: number, i: number): void => {
        const _focusArray = [...focusArray];
        const _valueArray = [...valueArray];
        const next = i + 1;

        _valueArray[i] = e;

        setValueArray(_valueArray);

        if (String(e) === '') {
            _focusArray[i] = true;
            setFocusArray(_focusArray);
            return;
        }

        console.log(e, "no")

        if (_focusArray[next] === undefined) {
            setFocusArray(new Array(props.length).fill(false));
            return;
        }

        _focusArray[i] = false;
        _focusArray[next] = true;

        setFocusArray(_focusArray);

    }

    return (
        <Form {...props}>
            <YStack>
                <XStack gap={"$4"}>
                    {[...Array(props.length)].map((_, i) => (
                        <OTPNumberInput value={valueArray[i]} autoFocus={focusArray[i]} onChangeText={(e) => { focusOnNextInput(e, i) }} textAlign="center" maxLength={1} key={i} />
                    ))}
                </XStack>
            </YStack>
        </Form>
    );
}