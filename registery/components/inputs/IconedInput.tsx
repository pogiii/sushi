import { forwardRef, ComponentProps, useState, useEffect } from "react"
import { Input, styled, Text, XStack, useTheme, View } from "tamagui";
import {TextInput} from "react-native"
import { Star as Icon } from "@tamagui/lucide-icons";
import { UnframedInput } from "./UnframedInput";

type IconProps = ComponentProps<typeof Icon>

type IconedInputProps = ComponentProps<typeof Input> & {
    iconBefore: React.FC<IconProps>
    iconAfter: React.FC<IconProps>
};

export const IconedInput = forwardRef<TextInput>((props: IconedInputProps, ref): JSX.Element => {

    // TODO: find a way to pass the focus from child to parent. using onFocus & onBlur makes input reset?

    const { iconBefore, iconAfter } = props;

    const IconedInputFrame = styled(XStack, {
        name: "Input",
        backgroundColor: "$background",
        borderBottomColor: "$borderColor",
        borderTopColor: "$borderColor",
        borderLeftColor: "$borderColor",
        borderRightColor: "$borderColor",
        borderWidth: "$0.25",
        borderRadius: "$4",
        focusable: true,
        overflow: "hidden",
    })

    return (
        <IconedInputFrame justifyContent="center" alignItems="center">
            {iconBefore && <View background={"$borderColor"} justifyContent="center" alignItems="center" height={"$4"} width={'$4'}>{props.iconBefore}</View>}
            <UnframedInput ref={ref} {...props}>
            </UnframedInput>
            {iconAfter && <View background={"$borderColor"} justifyContent="center" alignItems="center" height={"$4"} width={'$4'}>{props.iconAfter}</View>}
        </IconedInputFrame>
    );
})