import Standard from "./types-select/standard";
import {
  variant,
  arrow,
  label,
  offset,
  onChange,
  options,
  value,
  className,
  propTypesVariant,
  menuProps,
  emitValue,
  clearable,
} from "../type";

export interface SelectStatusStyleType {
  close?: {
    select?: object;
    label?: object;
  };
  open?: {
    select?: object;
    label?: object;
  };
  withValue?: {
    select?: object;
    label?: object;
  };
}
export interface SelectVariantStylesType {
  base?: {};
  status?: SelectStatusStyleType;
}

export interface SelectStylesType {
  defaultProps?: {
    variant?: variant;
    arrow?: arrow;
    label?: label;
    value?: value;
    offset?: offset;
    onChange?: onChange;
    options?: options;
    className?: className;
    menuProps?: menuProps;
    emitValue: emitValue;
    clearable: clearable;
  };
  valid?: {
    variants?: string[];
  };
  styles?: {
    base?: {
      container?: object;
      select?: object;
      arrow?: {
        initial?: object;
        active?: object;
      };
      label?: object;
      menu?: object;
      option?: {
        initial?: object;
        active?: object;
        disabled?: object;
      };
      clearable?: object;
    };
    variants?: {
      standard: SelectVariantStylesType;
    };
  };
}

export const select: SelectStylesType = {
  defaultProps: {
    variant: "standard",
    arrow: undefined,
    label: "",
    offset: 5,
    onChange: undefined,
    options: undefined,
    className: "",
    value: "select",
    menuProps: {},
    emitValue: false,
    clearable: false,
  },
  valid: {
    variants: propTypesVariant,
  },
  styles: {
    base: {
      container: {
        position: "relative",
        width: "w-full",
      },
      select: {
        peer: "peer",
        width: "w-full",
        height: "h-full",
        fontFamily: "font-sans",
        fontWeight: "font-normal",
        textAlign: "text-left",
        outline: "outline outline-0 focus:outline-0",
        //disabled: "disabled:bg-blue-gray-50 disabled:border-0",
        transition: "transition-all",
      },
      clearable: {
        cursor: "cursor-pointer",
        display: "grid",
        placeItems: "place-items-center",
        position: "absolute",
        top: "top-2/4",
        right: "right-5",
        pt: "pt-px",
        width: "w-[20px]",
        height: "h-[20px]",
        color: "text-blue-gray-400",
        transform: "rotate-0 -translate-y-2/4",
        transition: "transition-all",
      },
      arrow: {
        initial: {
          display: "grid",
          placeItems: "place-items-center",
          position: "absolute",
          top: "top-2/4",
          right: "right-2",
          pt: "pt-px",
          width: "w-[20px]",
          height: "h-[20px]",
          color: "text-blue-gray-400",
          transform: "rotate-0 -translate-y-2/4",
          transition: "transition-all",
        },
        active: {
          transform: "rotate-180",
          mt: "mt-px",
        },
      },
      label: {
        display: "flex",
        width: "w-full",
        height: "h-full",
        userSelect: "select-none",
        pointerEvents: "pointer-events-none",
        position: "absolute",
        left: "left-0",
        fontWeight: "font-normal",
        transition: "transition-all",
      },
      menu: {
        width: "w-full",
        maxHeight: "max-h-96",
        color: "text-grays-500",
        bg: "bg-base-background",
        border: "border border-grays-200",
        borderRadius: "rounded-sm",
        boxShadow: "shadow-sm",
        fontFamily: "font-sans",
        fontSize: "text-sm",
        fontWeight: "font-normal",
        overflow: "overflow-auto",
        outline: "focus:outline-none",
      },
      option: {
        initial: {
          py: "py-1.5",
          px: "px-2",
          gap: "gap-3",
          lightHeight: "leading-tight",
          cursor: "cursor-pointer",
          userSelect: "select-none",
          background: "hover:bg-grays-200 focus:bg-grays-200",
          color: "hover:text-grays-900 focus:text-grays-900",
          outline: "outline outline-0",
          transition: "transition-all",
        },
        active: {
          bg: "bg-grays-200",
          color: "text-grays-900",
        },
        disabled: {
          opacity: "opacity-50",
          cursor: "cursor-not-allowed",
          userSelect: "select-none",
          pointerEvents: "pointer-events-none",
        },
      },
    },
    variants: {
      standard: Standard,
    },
  },
};
