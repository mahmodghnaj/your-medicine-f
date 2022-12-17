const primary: object = {
  base: {
    // shadow: "shadow-sm",
    backGround: "bg-gradient-to-r from-primary-500 to-primary-550",
    textColor: "text-base-white",
    border: "border border-primary-600",
    hover: "hover:to-primary-600 hover:from-primary-600",
    focus:
      "focus:to-primary-400 focus:from-primary-400 focus:shadow-primary  focus:border-primary-400",
    active:
      "active:to-primary-900 active:text-base-background  active:from-primary-900 active:border-primary-900 active:shadow-none",
    disable:
      "disabled:to-grays-300 disabled:from-grays-300 disabled:border-grays-300 disabled:text-grays-400 disabled:shadow-none",
  },
  loading: {
    enable:
      "disabled:to-primary-550 disabled:from-primary-500 disabled:text-base-white",
  },
};
export default primary;
