import { ComponentProps, FormEvent, forwardRef, useState } from "react";
import PropTypes from "prop-types";
import {
  variant,
  propTypesVariant,
  className,
  icon,
  propTypesIcon,
  propTypesClassName,
  rightIcon,
  propTypesRightIcon,
  propTypesLabel,
  label,
} from "./type";

import InputStyle from "./style";
import { findMatch, objectsToString } from "utils/helpers";
import classNames from "classnames";

export interface InputProps extends Omit<ComponentProps<"input">, "size"> {
  variant?: variant;
  className?: className;
  icon?: icon;
  rightIcon?: rightIcon;
  label?: label;
  rightLabel?: label;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { variant, className, icon, rightIcon, label, rightLabel, ...rest },
    ref
  ) => {
    const [value, setValue] = useState<string>();
    //ini
    const { defaultProps, valid, styles } = InputStyle;
    const { base, variants }: any = styles;
    //set default props
    variant = variant ?? defaultProps?.variant;
    className = className ?? defaultProps?.className;
    //set styles
    const inputVariant =
      variants[findMatch(valid?.variants, variant, "standard")];
    const containerClasses = classNames(objectsToString(base.container), {
      "focus-within:shadow-primary": label || rightLabel,
    });
    const inputClasses = classNames(
      objectsToString(base.input),
      objectsToString(inputVariant.base.input),
      { [objectsToString(inputVariant.base.inputWithIcon)]: icon },
      { [objectsToString(inputVariant.base.inputWithRightIcon)]: rightIcon },
      { [objectsToString(inputVariant.base.withLabel)]: label },
      { [objectsToString(inputVariant.base.withRightLabel)]: rightLabel },
      className
    );
    const iconClasses = classNames(
      objectsToString(base.icon),
      objectsToString(inputVariant.base.icon)
    );
    const rightIconClasses = classNames(
      objectsToString(base.icon),
      objectsToString(inputVariant.base.rightIcon)
    );
    const labelClasses = classNames(objectsToString(inputVariant.base.label));
    const rightLabelClasses = classNames(
      objectsToString(inputVariant.base.rightLabel)
    );
    return (
      <>
        <div className={containerClasses}>
          {label && <div className={labelClasses}>{label}</div>}
          <div className="relative">
            {icon && <div className={iconClasses}>{icon}</div>}
            {rightIcon && <div className={rightIconClasses}>{rightIcon}</div>}
            <input
              ref={ref}
              {...rest}
              className={inputClasses}
              placeholder={rest?.placeholder || " "}
              onInput={(e: FormEvent<HTMLInputElement>) => {
                setValue(e.currentTarget.value);
                const onChange = rest?.onChange;
                return typeof onChange == "function" && onChange;
              }}
            />
          </div>
          {rightLabel && <div className={rightLabelClasses}>{rightLabel}</div>}
        </div>
      </>
    );
  }
);

Input.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  className: propTypesClassName,
  icon: propTypesIcon,
  rightIcon: propTypesRightIcon,
  label: propTypesLabel,
  rightLabel: propTypesLabel,
};
Input.displayName = "Input";
export default Input;
