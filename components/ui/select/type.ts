import { ReactNode } from "react";
import PropTypes from "prop-types";
import { ContextData } from "@floating-ui/react-dom-interactions";

export type variant = "standard";
export type arrow = ReactNode;
export type value = string;
export type onChange = (value: any) => void;
export type options =
  | { label: string; value: any }[]
  | string[]
  | number[]
  | any;
export type offset = number;
export type label = string;
export type className = string;
export type menuProps = {
  [key: string]: any;
};
export type index = number;
export type children = ReactNode;
export type contextValue = {
  styles?: object;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  activeIndex?: number | null;
  setActiveIndex: (index: number | null) => void;
  setOpen: (open: boolean) => void;
  onChange: (value: string) => void;
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
  dataRef: ContextData;
  emitValue?: boolean;
  listRef: React.MutableRefObject<Array<HTMLLIElement | null>>;
};
export type optionValue = (item: any) => void;
export type optionLabel = (item: any) => void;
export type emitValue = boolean;
export type clearable = boolean;
///Prop Types

export const propTypesVariant: any = ["standard"];
export const propTypesArrow: any = PropTypes.node;
export const propTypesValue: any = PropTypes.any;
export const propTypesOnChange: any = PropTypes.func;
export const propTypeOptions: any = PropTypes.array;
export const propTypesOffset: any = PropTypes.number;
export const propTypesLabel: any = PropTypes.string;
export const propTypesClassName: any = PropTypes.string;
export const propTypesMenuProps: any = PropTypes.instanceOf(Object);
export const propTypesOptionValue: any = PropTypes.func;
export const propTypesOptionLabel: any = PropTypes.func;
export const propTypesEmitValue: any = PropTypes.bool;
export const propTypesClearable: any = PropTypes.bool;
