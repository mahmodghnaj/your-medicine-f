import standard from "./type-input/standard";
import { variant, className, propTypesVariant } from "../type";
export interface InputSizeStylesType {
  container?: object;
  input?: object;
}
export interface InputVariantStylesType {
  base?: {
    input?: object;
    inputWithIcon?: object;
    inputWithRightIcon?: object;
    icon?: object;
    rightIcon?: object;
    withLabel?: object;
    label?: object;
    withRightLabel?: object;
    rightLabel?: object;
  };
}

export interface InputStyle {
  defaultProps?: {
    variant?: variant;
    className?: className;
  };
  valid?: {
    variants: string[];
  };
  styles?: {
    base?: {
      container?: object;
      input?: object;
      icon?: object;
    };
    variants?: {
      standard: InputVariantStylesType;
    };
  };
}
export const input: InputStyle = {
  defaultProps: {
    variant: "standard",
    className: "",
  },
  valid: {
    variants: propTypesVariant,
  },
  styles: {
    base: {
      container: {
        position: "relative rounded-sm flex items-center",
        width: "w-full",
        minWidth: "min-w-[250px]",
      },
      input: {
        peer: "peer",
        width: "w-full",
        height: "h-full",
      },
      icon: {
        display: "grid",
        placeItems: "place-items-center",
        position: "absolute",
      },
    },
    variants: {
      standard: standard,
    },
  },
};
export default input;
