import { Input, styled} from "tamagui";

export const UnframedInput = styled(Input, {
    background: "transparent",
    borderBottomColor: "$colorTransparent",
    borderTopColor: "$colorTransparent",
    borderLeftColor: "$colorTransparent",
    borderRightColor: "$colorTransparent",
    borderBottomRightRadius: "0",
    borderTopRightRadius: "0",
    borderBottomLeftRadius: "0",
    borderTopLeftRadius: "0",
    focusVisibleStyle: {
        outlineStyle: "none",
        shadowColor: "$colorTransparent",
        borderColor: "$colorTransparent"
    },
    hoverStyle: {
        borderColor: "$colorTransparent"
    }
})