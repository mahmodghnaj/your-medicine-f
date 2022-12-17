const standard: object = {
  base: {
    input: {
      bg: "placeholder-shown:bg-base-background ",
      px: "px-2",
      py: "py-1",
      fontFamily: "font-sans",
      fontWeight: "font-normal",
      fontSize: "text-md",
      outline: "outline outline-0 focus:outline-0",
      borderRadius: "rounded-sm",
      placeholder: "placeholder-grays-500",
      border: "border placeholder-shown:border-greys-200",
      hover: "hover:bg-grays-200 hover:border-greys-200 hover:text-grays-500",
      focus:
        "focus:bg-base-background focus:shadow-primary focus:text-grays-900",
      withValue: "bg-grays-100 border-grays-200 text-grays-900",
      disabled:
        "disabled:bg-grays-300  disabled:border-300 disabled:placeholder-grays-400",
      readonly:
        "read-only:bg-grays-300  read-only:border-300 read-only:placeholder-grays-500",
    },
    inputWithIcon: {
      px: "pl-[33px]",
    },
    inputWithRightIcon: {
      px: "pr-[33px]",
    },
    icon: {
      top: "top-2/4",
      right: "left-1.5",
      transform: "-translate-y-2/4",
      textColor: "text-grays-500",
    },
    rightIcon: {
      top: "top-2/4",
      right: "right-1.5",
      transform: "-translate-y-2/4",
      textColor: "text-grays-500",
    },
    withLabel: {
      border: "border-l-[0] rounded-l-[0]",
      focus: "focus:shadow-none",
    },
    withRightLabel: {
      border: "border-r-[0] rounded-r-[0]",
      focus: "focus:shadow-none",
    },
    label: {
      px: "px-1.5",
      py: "py-[7px]",
      fontFamily: "font-sans",
      fontWeight: "font-normal",
      fontSize: "text-sm",
      border: "border border-grays-200",
      background: "bg-grays-100",
      borderRadius: "rounded-l-sm ",
      color: "text-grays-500",
    },
    rightLabel: {
      px: "px-1.5",
      py: "py-[7px]",
      fontFamily: "font-sans",
      fontWeight: "font-normal",
      fontSize: "text-sm",
      border: "border border-grays-200",
      background: "bg-grays-100",
      borderRadius: "rounded-r-sm ",
      color: "text-grays-500",
    },
  },
};

export default standard;
