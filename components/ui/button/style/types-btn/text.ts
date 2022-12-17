const Text: object = {
  base: {
    backGround: "bg-base-white",
    textColor: "text-grays-600",
    border: "border border-base-white",

    hover: "hover:bg-grays-100 hover:border-grays-100 hover:text-grays-700",

    focus:
      "focus:bg-grays-100   focus:shadow-grey  focus:border-grays-100 focus:text-grays-500",

    active:
      "active:bg-grays-900 active:text-base-background  active:border-primary-900 active:shadow-none",

    disable:
      "disabled:bg-grays-300 disabled:border-grays-300 disabled:text-grays-400 disabled:shadow-none",
  },
  loading: {
    enable:
      "disabled:bg-base-white disabled:text-primary-600 disabled:border-base-white",
  },
};

export default Text;
