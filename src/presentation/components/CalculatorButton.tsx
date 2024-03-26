import { Pressable, Text } from "react-native";
import { colors, globalStyles } from "../../config/theme/app-theme";

interface CalculatorButtonProps {
    label: string;
    color?: string;
    doubleSize?: boolean;
    blackText?: boolean;
    onPress: () => void;
}

export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    doubleSize = false,
    blackText = false,
    onPress
}: CalculatorButtonProps) => {
    return (
        <Pressable
            onPress={() => onPress()}
            style={({ pressed }) => ({
                ...globalStyles.button,
                backgroundColor: color,
                width: (doubleSize) ? 160 : 70,
                opacity: (pressed) ? 0.8 : 1,
                paddingHorizontal: doubleSize ? 20 : 0,
            })}>
            <Text style={{
                ...globalStyles.buttonText,
                textAlign: doubleSize ? 'left' : 'center',
                color: blackText ? 'black' : 'white',
            }}>{label}</Text>
        </Pressable>
    )
}