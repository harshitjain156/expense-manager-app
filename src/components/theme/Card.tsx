import { VariantProps, createRestyleComponent, createVariant } from "@shopify/restyle";
import { Theme } from "../../utils/theme";
import { Box } from "./Box";

const variant=createVariant<Theme,'cardVariants'>({
    themeKey:'cardVariants'
  })
  export const Card = createRestyleComponent<
    VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>,
    Theme>(
    [
      createVariant({
        themeKey: 'cardVariants',
        defaults: {
        //  backgroundColor:'white'
        },
      }),
    ],
    Box,
  );