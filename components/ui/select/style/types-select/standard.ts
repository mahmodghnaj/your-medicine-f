export const standard = {
  base: {
    select: {
      border: "border border-grays-200",
      hover: "hover:bg-grays-200",
    },
    label: {
      textColor: "text-grays-500",
      hover: "peer-hover:text-grays-500",
      focus: "peer-focus:text-grays-900",
      before: {
        content: "before:content[' ']",
        display: "before:block",
        boxSizing: "before:box-border",
        width: "before:w-2.5",
        height: "before:h-1.5",
        mt: "before:mt-[10px]",
        mr: "before:mr-[2px]",
        borderRadius: "before:rounded-tl-sm",
        pointerEvents: "before:pointer-events-none",
        transition: "before:transition-all",
        disabled: "peer-disabled:before:border-transparent",
      },
      after: {
        content: "after:content[' ']",
        display: "after:block",
        flexGrow: "after:flex-grow",
        boxSizing: "after:box-border",
        width: "after:w-2.5",
        height: "after:h-1.5",
        mt: "after:mt-[10px]",
        ml: "after:ml-[2px]",
        borderRadius: "after:rounded-tr-sm",
        pointerEvents: "after:pointer-events-none",
        transition: "after:transition-all",
        disabled: "peer-disabled:after:border-transparent",
      },
    },
  },
  size: {
    container: {
      height: "h-[40px]",
    },
    select: {
      fontSize: "text-md",
      px: "px-2",
      py: "py-1",
      borderRadius: "rounded-sm",
    },
    label: {
      initial: {},
      states: {
        close: {
          position: "-top-[11px]",
          lineHeight: "leading-[3.75]",
        },
        open: {
          position: "-top-[10px]",
          lineHeight: "leading-tight",
        },
        withValue: {
          position: "-top-[10px]",
          lineHeight: "leading-tight",
        },
      },
    },
  },
  states: {
    close: {
      select: {},
      label: {
        before: {
          bt: "before:border-t-transparent",
          bl: "before:border-l-transparent",
        },
        after: {
          bt: "after:border-t-transparent",
          br: "after:border-r-transparent",
        },
      },
    },
    open: {
      select: {
        borderColor: "border-2 border-primary-500 border-t-transparent ",
      },
      label: {
        before: {
          bt: "before:border-t-2 before:border-t-primary-500",
          bl: "before:border-l-2 before:border-l-primary-500",
        },
        after: {
          bt: "after:border-t-2 after:border-t-primary-500",
          br: "after:border-r-2 after:border-r-primary-500",
        },
      },
    },
    withValue: {
      select: {
        bg: "bg-grays-100",
        borderColor: "border border-grays-300 border-t-transparent",
        color: "text-grays-900",
      },
      label: {
        before: {
          bt: "before:border-t before:border-t-grays-300",
          bl: "before:border-l before:border-l-grays-300",
        },
        after: {
          bt: "after:border-t after:border-t-grays-300",
          br: "after:border-r after:border-r-grays-300",
        },
      },
    },
  },
};
export default standard;
