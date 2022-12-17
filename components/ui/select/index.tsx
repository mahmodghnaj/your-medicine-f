import {
  ComponentProps,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import { SelectContextProvider, usePrevious } from "./context";
import Option from "./option";
import {
  variant,
  offset,
  value,
  onChange,
  arrow,
  options,
  propTypesMenuProps,
  menuProps,
  propTypeOptions,
  propTypesArrow,
  propTypesOffset,
  propTypesOnChange,
  propTypesValue,
  propTypesVariant,
  label,
  propTypesLabel,
  className,
  propTypesClassName,
  optionLabel,
  optionValue,
  propTypesOptionLabel,
  propTypesOptionValue,
  emitValue,
  propTypesEmitValue,
  clearable,
  propTypesClearable,
} from "./type";
import { select } from "./style";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { findMatch, objectsToString } from "utils/helpers";
import {
  flip,
  useFloating,
  size as fuiSize,
  offset as fuiOffset,
  useInteractions,
  useClick,
  useRole,
  useDismiss,
  useListNavigation,
  useTypeahead,
  autoUpdate,
  FloatingFocusManager,
} from "@floating-ui/react-dom-interactions";
export interface SelectProps
  extends Omit<ComponentProps<"div">, "value" | "onChange"> {
  variant?: variant;
  offset?: offset;
  value?: value;
  onChange?: onChange;
  arrow?: arrow;
  options?: options;
  label?: label;
  className?: className;
  menuProps?: menuProps;
  optionLabel?: optionLabel;
  optionValue?: optionValue;
  emitValue?: emitValue;
  clearable?: clearable;
}
const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      variant,
      offset,
      value,
      onChange,
      arrow,
      options,
      label,
      className,
      menuProps,
      optionLabel,
      optionValue,
      emitValue,
      clearable,
      ...rest
    },
    ref
  ) => {
    const [state, setState] = useState<string>("close");
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [controlledScrolling, setControlledScrolling] = useState(false);
    const prevActiveIndex = usePrevious<number | null>(activeIndex);

    // 1. init
    const { defaultProps, styles, valid }: any = select;
    const { base, variants } = styles;

    const getValueOption = useCallback(
      (item: any) => {
        if (optionValue) return optionValue(item);
        else if (item?.value) return item.value;
        else if (item instanceof Object && item !== null) return item;
        else if (item === null) return "Null";
        else return item;
      },
      [optionValue]
    );
    const getLabelOption = useCallback(
      (item: any) => {
        if (optionLabel) return optionLabel(item);
        else if (item?.value) return item.value;
        else if (item instanceof Object && item !== null)
          return "Object Object";
        else if (item === null) return "Null";
        else return item;
      },
      [optionLabel]
    );

    // set default props
    variant = variant ?? defaultProps.variant;
    label = label ?? defaultProps.label;
    arrow = arrow ?? defaultProps.arrow;
    value = value ?? defaultProps.value;
    onChange = onChange ?? defaultProps.onChange;
    offset = offset ?? defaultProps.offset;
    className = className ?? defaultProps.className;
    menuProps = menuProps ?? defaultProps.menuProps;
    emitValue = emitValue ?? defaultProps.emitValue;
    clearable = clearable ?? defaultProps.clearable;

    // set styles
    const selectVariant =
      variants[findMatch(valid.variants, variant, "standard")];
    const selectSize = selectVariant.size;

    const stateClasses = selectVariant.states[state];
    const containerClasses = classNames(
      objectsToString(base.container),
      objectsToString(selectSize.container)
    );
    const selectClasses = twMerge(
      classNames(
        objectsToString(base.select),
        objectsToString(selectVariant.base.select),
        objectsToString(stateClasses.select),
        objectsToString(selectSize.select)
      ),
      className
    );
    const labelClasses = twMerge(
      classNames(
        objectsToString(base.label),
        objectsToString(selectVariant.base.label),
        objectsToString(stateClasses.label),
        objectsToString(selectSize.label.initial),
        objectsToString(selectSize.label.states[state])
      )
    );
    const arrowClasses = classNames(objectsToString(base.arrow.initial), {
      [objectsToString(base.arrow.active)]: open,
    });
    const clearableClasses = classNames(objectsToString(base.clearable));
    const menuClasses = twMerge(
      classNames(objectsToString(base.menu)),
      menuProps?.className ?? ""
    );

    // 3. @floating-ui
    const listItemsRef: any = useRef([]);
    const listContentRef = useRef([
      ...(options?.map((item: any) => getValueOption(item)) ?? []),
    ]);
    const {
      x,
      y,
      reference,
      floating,
      strategy,
      context,
      refs,
      middlewareData,
      update,
    } = useFloating({
      open,
      onOpenChange: setOpen,
      middleware: [
        fuiOffset(offset),
        flip({ padding: 8 }),
        fuiSize({
          apply({ rects, elements }: any) {
            Object.assign(elements?.floating?.style, {
              width: `${rects?.reference?.width}px`,
              zIndex: 99,
            });
          },
          padding: 20,
        }),
      ],
    });
    const floatingRef = refs.floating;
    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([
        useClick(context),
        useRole(context, { role: "listbox" }),
        useDismiss(context, {}),
        useListNavigation(context, {
          listRef: listItemsRef,
          activeIndex,
          selectedIndex,
          onNavigate: setActiveIndex,
        }),
        useTypeahead(context, {
          listRef: listContentRef,
          onMatch: open ? setActiveIndex : setSelectedIndex,
          activeIndex,
          selectedIndex,
        }),
      ]);
    useEffect(() => {
      if (open) {
        setState("open");
      } else if (!open && selectedIndex) {
        setState("withValue");
      } else {
        setState("close");
      }
    }, [open, selectedIndex]);
    useEffect(() => {
      setSelectedIndex(Math.max(0, listContentRef.current.indexOf(value) + 1));
    }, [value]);

    ///
    useEffect(() => {
      if (refs.reference.current && refs.floating.current && open) {
        return autoUpdate(
          refs.reference.current,
          refs.floating.current,
          update
        );
      }
    }, [refs.reference, refs.floating, open, update]);

    useEffect(() => {
      const floating = floatingRef.current;
      if (open && controlledScrolling && floating) {
        const item: any =
          activeIndex != null
            ? listItemsRef.current[activeIndex]
            : selectedIndex != null
            ? listItemsRef.current[selectedIndex]
            : null;

        if (item && prevActiveIndex != null) {
          const itemHeight: any =
            listItemsRef.current[prevActiveIndex]?.offsetHeight ?? 0;
          const floatingHeight = floating.offsetHeight;
          const top = item.offsetTop;
          const bottom = top + itemHeight;

          if (top < floating.scrollTop) {
            floating.scrollTop -= floating.scrollTop - top + 5;
          } else if (bottom > floatingHeight + floating.scrollTop) {
            floating.scrollTop +=
              bottom - floatingHeight - floating.scrollTop + 5;
          }
        }
      }
    }, [open, controlledScrolling, activeIndex]);

    useEffect(() => {
      const floating = refs.floating.current;
      if (open && floating && floating.offsetHeight < floating.scrollHeight) {
        const item = listItemsRef.current[selectedIndex];
        if (item) {
          floating.scrollTop =
            item.offsetTop - floating.offsetHeight / 2 + item.offsetHeight / 2;
        }
      }
    }, [open, selectedIndex, refs.floating, refs.reference, middlewareData]);

    // context value
    const contextValue = useMemo(
      () => ({
        styles,
        selectedIndex,
        setSelectedIndex,
        setOpen,
        onChange: onChange || (() => {}),
        activeIndex,
        setActiveIndex,
        getItemProps,
        emitValue,
        listRef: listItemsRef,
        dataRef: context.dataRef,
      }),
      [
        selectedIndex,
        onChange,
        activeIndex,
        getItemProps,
        context.dataRef,
        styles,
        emitValue,
      ]
    );

    const buttonContentClasses = classNames(
      "absolute top-2/4 -translate-y-2/4",
      variant === "standard" ? "left-2 pt-0.5" : "left-0 pt-3"
    );
    //  select menu
    const selectMenu = (
      <FloatingFocusManager context={context}>
        <ul
          {...getFloatingProps({
            ...menuProps,
            ref: floating,
            role: "listbox",
            className: menuClasses,
            style: {
              position: strategy,
              top: y ?? "",
              left: x ?? "",
              overflow: "auto",
            },
            onPointerEnter(e) {
              setControlledScrolling(false);
            },
            onPointerMove(e) {
              setControlledScrolling(false);
            },
            onKeyDown(e) {
              setControlledScrolling(true);
            },
          })}
        >
          {options?.map((item: any, index: number) => (
            <Option
              label={getLabelOption(item)}
              value={getValueOption(item)}
              index={index + 1}
              item={item}
              key={index + 1}
            />
          ))}
        </ul>
      </FloatingFocusManager>
    );
    return (
      <SelectContextProvider value={contextValue}>
        <div ref={ref} className={containerClasses}>
          <button
            {...getReferenceProps({
              ...rest,
              ref: reference,
              className: selectClasses,
            })}
            type="button"
            className={selectClasses}
          >
            <span className={buttonContentClasses}>
              {getLabelOption(options?.[selectedIndex - 1])}
            </span>
            <div className={arrowClasses}>
              {arrow ?? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>
          {clearable && state == "withValue" && (
            <div
              onClick={() => setSelectedIndex(0)}
              className={clearableClasses}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
              </svg>
            </div>
          )}
          <label className={labelClasses}>{label}</label>
          {open && selectMenu}
        </div>
      </SelectContextProvider>
    );
  }
);

Select.displayName = "Select";
Select.propTypes = {
  offset: propTypesOffset,
  variant: PropTypes.oneOf(propTypesVariant),
  value: propTypesValue,
  onChange: propTypesOnChange,
  arrow: propTypesArrow,
  options: propTypeOptions,
  label: propTypesLabel,
  className: propTypesClassName,
  menuProps: propTypesMenuProps,
  optionLabel: propTypesOptionLabel,
  optionValue: propTypesOptionValue,
  emitValue: propTypesEmitValue,
};

export default Select;
