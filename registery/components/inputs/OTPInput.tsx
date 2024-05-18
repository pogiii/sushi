import { ComponentProps, useEffect, useRef, useState } from "react";
import { TextInput } from "react-native";
import { Button, Form, Input, styled, XStack, YStack } from "tamagui";

type OTPInputProps = ComponentProps<typeof Form> & { length: number };

export const OTPInput = (props: OTPInputProps) => {

    const OTPNumberInput = styled(Input, {
        name: "Input",
        width: "$4"
    })

    const ref = useRef<TextInput[]>(new Array(props.length));

    const pushRef = (el: TextInput) => ref.current.push(el);
    
    return (
        <Form {...props}>
            <YStack>
                <XStack gap={"$4"}>
                    {[...Array(props.length)].map((_, i) => (
                        <OTPNumberInput ref={pushRef} textAlign="center" maxLength={1} key={i} />
                    ))}
                </XStack>
            </YStack>
        </Form>
    );
}