import { forwardRef, ConponentProps } from "react"
import { Input, styled, Text, XStack, useTheme, View } from "tamagui";
import { Star as Icon } from "@tamagui/lucide-icons";
import { UnframedInput } from "./UnframedInput";

type IconProps = ConponentProps<typeof Icon>

type IconedInputProps = ConponentProps<typeof Input> & {
    iconBefore: React.FC<IconProps>
    iconAfter: React.FC<IconProps>
};

export const IconedInput = forwardRef((props: IconedInputProps, ref): JSX.Element => {

    const { iconBefore, iconAfter } = props;

    if (!(iconBefore && iconAfter)) {
        console.warn("The iconBefore and the iconAfter props are empty, use tamagui Input component instead.")
    }

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
        focusVisibleStyle: {
            background: "blue"
        }
    })

    return (
        <IconedInputFrame justifyContent="center" alignItems="center">
            {iconBefore && <View background={"$borderColor"} borderTopLeftRadius={'$4'} borderBottomLeftRadius={'$4'} justifyContent="center" alignItems="center" height={"$4"} width={'$4'}>{props.iconBefore}</View>}
            <UnframedInput ref={ref} {...props}>
            </UnframedInput>
            {iconAfter && <View background={"$borderColor"} borderTopRightRadius={'$4'} borderBottomRightRadius={'$4'} justifyContent="center" alignItems="center" height={"$4"} width={'$4'}>{props.iconAfter}</View>}
        </IconedInputFrame>
    );
})