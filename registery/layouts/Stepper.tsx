import { ComponentProps, createContext, forwardRef, use, useContext, useRef } from "react";
import { Button, ScrollView, styled, View } from "tamagui";

type StepperProps = {
    width: string,
    height: string,
    children: React.ReactNode,
};

const StepperContext = createContext(null);

const Stepper = (props: StepperProps): JSX.Element => {

    const { width, height, children } = props;
    const ref = useRef();
    return (
        <ScrollView
            ref={ref}
            scrollEnabled={false}
            alwaysBounceVertical
            horizontal
            minWidth={width}
            minHeight={height}
            maxHeight={height}
            maxWidth={width}
            flexWrap="wrap"
            flexGrow={0}
            flexShrink={0}
            flexBasis={"100%"}
            flexDirection="column"
            alignItems="stretch"
        >
            <StepperContext.Provider value={ref}>
                {children}
            </StepperContext.Provider>
        </ScrollView>
    );
}

type StepperViewProps = ComponentProps<typeof View>

Stepper.View = (props: StepperViewProps) => {

    const { children } = props;

    return (
        <View width={"100%"} {...props}>
            {children}
        </View>
    )
}

type StepperButtonProps = ComponentProps<typeof Button> & {
    targetPage: number
};

Stepper.ScrollButton = (props: StepperButtonProps): JSX.Element => {

    const stepperContext = useContext(StepperContext);
    const scrollToTarget = () => {
        if (!stepperContext.current) {
            return;
        }

        const width = stepperContext.current?.offsetWidth;
        
        stepperContext.current.scrollTo({
            y: 0,
            x: props.targetPage * width,
            animated: true
        })
    }

    return (
        <Button onPress={() => {scrollToTarget()}} {...props}></Button>
    )
}

export { Stepper }