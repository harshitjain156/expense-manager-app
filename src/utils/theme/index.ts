
import { BoxProps, VariantProps, createBox, createRestyleComponent, createText, createTheme, createVariant } from "@shopify/restyle"
import { colors } from "./colors"
import { textVariants,cardVariants } from "./text-variants"

const theme = createTheme({
  colors: colors,
  spacing: {
    "-2":-20,
    "0":0,
    "1": 4,
    "2": 8,
    "3": 12,
    "3.5": 14,
    "4": 16,
    "5": 20,
    "5.5": 22,
    "6": 24,
    "10": 40,
    "11": 44,
    "12": 48,
    "13": 56,
  },
  borderRadii: {
    none: 0,
    rounded: 4,
    "rounded-xl": 8,
    "rounded-2xl": 10,
    "rounded-3xl": 12,
    "rounded-4xl": 16,
    "rounded-5xl": 20,
    "rounded-7xl": 28,
    "rounded-9xl": 50,
  },
  textVariants,
  cardVariants
  
})

export type Theme = typeof theme

export const Box = createBox<Theme>()
export const Text = createText<Theme>()
const variant=createVariant<Theme,'cardVariants'>({
  themeKey:'cardVariants'
})
// export const Card = createRestyleComponent<
//   VariantProps<Theme, 'cardVariants'> & BoxProps<Theme>,
//   Theme
// >([variant], Box)
export const Card = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>,
  Theme>(
  [
    createVariant({
      themeKey: 'cardVariants',
      defaults: {
        backgroundColor: 'blu500',
      },
    }),
  ],
  Box,
);
export default theme


