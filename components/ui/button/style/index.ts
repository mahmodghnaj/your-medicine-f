import Primary from "../style/types-btn/primary";
import Secondary from "../style/types-btn/secondary";
import Tertiary from "./types-btn/tertiary";
import Text from "./types-btn/text";
import Success from "./types-btn/success";
import Warning from "./types-btn/warning";
import Danger from "./types-btn/danger";
import {
  variant,
  size,
  loading,
  fullWidth,
  className,
  propTypesVariant,
  propTypesSize,
} from "../type";
export interface ButtonStyleTypes {
  defaultProps?: {
    variant?: variant;
    size?: size;
    loading?: loading;
    fullWidth?: fullWidth;
    className?: className;
  };
  valid?: {
    variant?: string[];
    sizes?: string[];
  };

  styles?: {
    base?: {
      initial?: object;
      fullWidth?: object;
      loading?: object;
    };
    sizes?: {
      sm?: object;
      md?: object;
      lg?: object;
    };
    variants?: {
      primary?: typeof Primary;
      secondary: typeof Secondary;
      tertiary: typeof Tertiary;
      text: typeof Text;
      success: typeof Success;
      warning: typeof Warning;
      danger: typeof Danger;
    };
  };
}
export const button: ButtonStyleTypes = {
  defaultProps: {
    variant: "primary",
    size: "md",
    loading: false,
    fullWidth: false,
    className: "",
  },
  valid: {
    variant: propTypesVariant,
    sizes: propTypesSize,
  },
  styles: {
    base: {
      initial: {
        verticalAlign: "middle",
        fontFamily: "font-sans",
        userSelect: "none",
        textAlign: "center",
        fontWeight: "font-semibold",
        textTransform: "capitalize",
        transition: "transition-all",
        display: "flex items-center justify-center",
      },
      fullWidth: {
        display: "block",
        width: "w-full",
      },
    },
    sizes: {
      sm: {
        borderRadius: "rounded-sm",
        fontSize: "text-sm",
        padding: "px-1.5 py-0.5",
        gap: "gap-md",
      },
      md: {
        borderRadius: "rounded-sm",
        padding: "px-2 py-0.5",
        fontSize: "text-sm",
        gap: "gap-md",
      },
      lg: {
        borderRadius: "rounded-sm",
        fontSize: "text-md",
        padding: "px-3 py-1.5",
        gap: "gap-md",
      },
    },
    variants: {
      primary: Primary,
      secondary: Secondary,
      tertiary: Tertiary,
      text: Text,
      success: Success,
      warning: Warning,
      danger: Danger,
    },
  },
};

export default button;
