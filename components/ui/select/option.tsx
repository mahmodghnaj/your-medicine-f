import classNames from "classnames";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "utils/helpers";
import { useSelect } from "./context";
import { className } from "./type";

export interface OptionProps extends ComponentProps<"li"> {
  className?: className;
  index: number;
  item?: any;
  value?: any;
  label?: any;
  disabled?: boolean;
}

const Option = (props: OptionProps) => {
  // init
  const { value, index, label, item, disabled, className, ...rest } = props;
  const { styles }: any = useSelect();
  const { base } = styles;
  //  set @floating-ui
  const {
    selectedIndex,
    setSelectedIndex,
    setOpen,
    onChange,
    activeIndex,
    setActiveIndex,
    getItemProps,
    dataRef,
    emitValue,
    listRef,
  } = useSelect();

  //  set styles
  const optionBaseClasses = objectsToString(base.option.initial);
  const optionActiveClasses = objectsToString(base.option.active);
  const optionDisabledClasses = objectsToString(base.option.disabled);
  const classes = twMerge(
    classNames(optionBaseClasses, {
      [optionActiveClasses]: selectedIndex === index,
      [optionDisabledClasses]: disabled,
    }),
    className ?? ""
  );
  function handleSelect() {
    setSelectedIndex(index);
    onChange(emitValue ? value : item);
    setOpen(false);
    setActiveIndex(null);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (
      event.key === "Enter" ||
      (event.key === " " && !dataRef.current.typing)
    ) {
      event.preventDefault();
      handleSelect();
    }
  }
  return (
    <li
      {...rest}
      role="option"
      ref={(node) => (listRef.current[index] = node)}
      className={classes}
      disabled={disabled}
      tabIndex={activeIndex === index ? 0 : 1}
      aria-selected={activeIndex === index && selectedIndex === index}
      data-selected={selectedIndex === index}
      {...getItemProps({
        onClick: () => {
          handleSelect();
        },
        onKeyDown: (e: any) => {
          handleKeyDown(e);
        },
      })}
    >
      {label}
    </li>
  );
};
Option.defaultProps = {
  value: "",
  label: "",
  index: 0,
  className: "",
  disabled: false,
};
export default Option;
