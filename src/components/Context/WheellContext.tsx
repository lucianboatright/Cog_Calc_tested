import React, { useState, createContext } from 'react'

export const DashboardWidgetContext = createContext()

export const DashboardWidgetProvider = ({ children }) => {
  const [dataView, setDataView] = useState('table')

  const handleChangeView = value => {
    setDataViewView(value)
  }

  const value = {
    dataView,
    handleChangeView,
  }

  return <DashboardWidgetContext.Provider value={value}>{children}</DashboardWidgetContext.Provider>
}


// import React, {
//     ChangeEventHandler,
//     createContext,
//     FC,
//     InputHTMLAttributes,
//     SelectHTMLAttributes,
//     useCallback,
//     useContext,
//     useState,
//   } from 'react'
  
//   // #region context
//   export interface FormContextType {
//     state: Record<string, string>
//     setState: (newState: Record<string, string>) => void
//   }
  
//   export const FormContext = createContext<FormContextType>(null!)
  
//   export const DebugForm: FC = () => {
//     const form = useContext(FormContext)
//     return <pre>{JSON.stringify(form.state, null, '  ')}</pre>
//   }
//   // #endregion
  
//   //
  
//   // #region form
//   export interface FormProps {
//     initialValues: Record<string, string>
//   }
  
//   export const Form: FC<FormProps> = ({ children, initialValues }) => {
//     const [state, setState] = useState(initialValues)
  
//     const context: FormContextType = {
//       state,
//       setState: useCallback(
//         (partial) => setState((current) => ({ ...current, ...partial })),
//         [],
//       ),
//     }
  
//     return (
//       <FormContext.Provider value={context}>
//         <form>{children}</form>
//       </FormContext.Provider>
//     )
//   }
//   // #endregion
//   // #endregion
  
//   //
  



// // import React, {
// //     ChangeEventHandler,
// //     createContext,
// //     FC,
// //     InputHTMLAttributes,
// //     SelectHTMLAttributes,
// //     useCallback,
// //     useContext,
// //     useState,
// //   } from 'react'
  
// //   // #region context
// //   export interface FormContextType {
// //     state: Record<string, string>
// //     setState: (newState: Record<string, string>) => void
// //   }
  
// //   export const FormContext = createContext<FormContextType>(null!)
  
// //   export const DebugForm: FC = () => {
// //     const form = useContext(FormContext)
// //     return <pre>{JSON.stringify(form.state, null, '  ')}</pre>
// //   }
// //   // #endregion
  
// //   //
  
// //   // #region form
// //   export interface FormProps {
// //     initialValues: Record<string, string>
// //   }
  
// //   export const Form: FC<FormProps> = ({ children, initialValues }) => {
// //     const [state, setState] = useState(initialValues)
  
// //     const context: FormContextType = {
// //       state,
// //       setState: useCallback(
// //         (partial) => setState((current) => ({ ...current, ...partial })),
// //         [],
// //       ),
// //     }
  
// //     return (
// //       <FormContext.Provider value={context}>
// //         <form>{children}</form>
// //       </FormContext.Provider>
// //     )
// //   }
// //   // #endregion
  
// //   //
  
// //   // #region custom hook
// //   export interface UseForm<Element extends { value: string }> {
// //     value: string
// //     onChange: ChangeEventHandler<Element>
// //   }
  
// //   export const useForm = <Element extends { value: string }>(
// //     name: string,
// //   ): UseForm<Element> => {
// //     const form = useContext(FormContext)
  
// //     const value = form.state[name]
// //     const onChange: ChangeEventHandler<Element> = useCallback(
// //       (event) => {
// //         form.setState({ [name]: event.target.value })
// //       },
// //       [form, name],
// //     )
  
// //     return { value, onChange }
// //   }
// //   // #endregion
  
// //   //
  
// //   // #region form items using custom hook
// //   export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
// //     name: string
// //   }
// //   export const Input: FC<InputProps> = ({ name, ...props }) => {
// //     return <input {...useForm(name)} {...props} />
// //   }
  
// //   export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
// //     name: string
// //   }
// //   export const Select: FC<SelectProps> = ({ name, children, ...props }) => {
// //     return (
// //       <select {...useForm(name)} {...props}>
// //         {children}
// //       </select>
// //     )
// //   }
//   // #endregion
  
//   //
  
// //   export default (
// //     <Form initialValues={{ title: 'mr', first: 'Steve', last: 'Buscemi' }}>
// //       <label>
// //         title
// //         <Select name="title">
// //           <option value="mr">Mr</option>
// //           <option value="mrs">Mrs</option>
// //           <option value="ms">Ms</option>
// //           <option value="dr">Dr</option>
// //           <option value="lord">Lord</option>
// //           <option value="prof">Prof</option>
// //           <option value="esq">Esq</option>
// //           <option value="dame">Dame</option>
// //           <option value="na">N/A</option>
// //         </Select>
// //       </label>
// //       <br />
// //       <label>
// //         first name
// //         <Input name="first" />
// //       </label>
// //       <br />
// //       <label>
// //         last name
// //         <Input name="last" />
// //       </label>
// //     </Form>
// //   )

// // import React, { createContext, useEffect, useState, FC } from 'react';

// // interface DropDownProps {
// //   cities: string;
// //   showDropDown: boolean;
// //   toggleDropDown: () => void;
// //   citySelection: () => void;
// // };

// // const dropDownDefaultValues: DropDownProps = {
// //     cities: "Default",
// //     showDropDown: false,
// //     toggleDropDown: () => {},
// //     citySelection: () => {},
// // }

// // export const DropDownContext = createContext<DropDownProps>(dropDownDefaultValues)

// // const DropDown: FC = ({ children }) => {
// // //   cities,
// // //   citySelection,
// // // }: DropDownProps: JSX.Element => {
// //   const [showDropDown, setShowDropDown] = useState<boolean>(dropDownDefaultValues.showDropDown);
// //   const [cities, setCities] = useState<string>(dropDownDefaultValues.cities);

// //     const toggleDropDown = () => setShowDropDown(true)

// //     // const citySelection = () => setCities(city)


// //   /**
// //    * Handle passing the city name
// //    * back to the parent component
// //    *
// //    * @param city  The selected city
// //    */
// //   const onClickHandler = (city: string): void => {
// //     citySelection = () => setCities(city)
// //   };

// //   useEffect(() => {
// //     setShowDropDown(showDropDown);
// //   }, [showDropDown]);

// //   return (
// //       <DropDownContext.Provider
// //         value={{
// //             cities,
// //             showDropDown,
// //             toggleDropDown,
// //             citySelection,
// //         }}
// //       >
// //           {children}
// //       </DropDownContext.Provider>
// //     // <>
// //     //   <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
// //     //     {cities.map(
// //     //       (city: string, index: number): JSX.Element => {
// //     //         return (
// //     //           <p
// //     //             key={index}
// //     //             onClick={(): void => {
// //     //               onClickHandler(city);
// //     //             }}
// //     //           >
// //     //             {city}
// //     //           </p>
// //     //         );
// //     //       }
// //     //     )}
// //     //   </div>
// //     // </>
// //   );
// // };

// // export default DropDown;


// // import React from "react";

// // interface SelectContext {
// //   select: (name: string) => void;
// // }
// // const WheelContext = React.createContext<SelectContext>({ select: () => {} });

// // WheelContext.displayName = "SelectContext";

// // const useSelectState = () => {
// //   const context = React.useContext(WheelContext);
// //   if (!context) throw new Error("MUST BE WITHIN");

// //   return context;
// // };

// // const Select: React.FC<{ onChange: (value: string) => void }> = ({
// //   children,
// //   onChange
// // }) => {
// //   const [selected, setSelected] = React.useState<string>("");
// //   const [show, setShow] = React.useState<boolean>(false);

// //   const select = (value: string) => {
// //     setSelected(value);
// //     setShow(false);
// //   };

// //   const toggle = () => {
// //     setShow(!show);
// //   };

// //   React.useEffect(() => {
// //     onChange(selected);
// //   }, [selected, onChange]);

// //   return (
// //     <div className="wrapper-select">
// //       <div className="input-div">
// //         {<div onClick={toggle}>{selected || "Select"} </div>}
// //       </div>

// //       <WheelContext.Provider value={{ select }}>
// //         {show && (
// //           <ul className="list-wrapper">
// //             {React.Children.map(children, (child) => {
// //               return <li className="list-item">{child}</li>;
// //             })}
// //           </ul>
// //         )}
// //       </WheelContext.Provider>
// //     </div>
// //   );
// // };

// // const Option: React.FC<{ value: string }> = ({ children, value }) => {
// //   const { select } = useSelectState();
// //   return <span onClick={() => select(value)}>{children}</span>;
// // };

// // const runAll = (functionList: (Function | undefined)[]) => {
// //   return (props: any) => {
// //     functionList.forEach((fn) => {
// //       if (fn) {
// //         fn(props);
// //       }
// //     });
// //   };
// // };

// // interface PropsUseSelect {
// //   onChange?: (value: string) => any;
// // }

// // const useSelect = () => {
// //   const [value, setValue] = React.useState("");

// //   const handleChange = (value: string) => {
// //     setValue(value);
// //   };

// //   const getSelectProps = ({ onChange, ...props }: PropsUseSelect) => {
// //     return {
// //       onChange: runAll([handleChange, props && onChange]),
// //       value,
// //       ...props
// //     };
// //   };

// //   // selectProps == prop getter
// //   return {
// //     value,
// //     handleChange,
// //     getSelectProps
// //   };
// // };

// // export default Select;









// // type DropDownProps = {
// //     wheelSizes: string[];
// //     wheelDropDown: boolean;
// //     toggleDropDown: Function;
// //     wheelSelection: Function;
// // };

// // const DropDown: React.FC<DropDownProps> = ({
// //     wheelSizes,
// //     wheelSelection,
// // }: DropDownProps) : JSX.Element => {
// //     const [wheelDropDown, setWheelDropDown] = useState<boolean>(false)

// //     const onClickHandeler = (city: string): void => {
// //         wheelSelection(wheelSizes);
// //     };

// //     useEffect(() => {
// //         setWheelDropDown(wheelDropDown);
// //     }, [wheelDropDown]);

// //     return (
// //         <>
// //         <div>
// //             <div>Wheel Selector</div>
// //             <div className={wheelDropDown ? 'dropdown' : 'dropdown active'} >
// //                 {wheelSizes.map(
// //                     (wheel: string, index: number): JSX.Element => {
// //                         return (
// //                             <p
// //                                 key={index}
// //                                 onClick={(): void => {
// //                                     onClickHandeler(wheel);
// //                                 }}
// //                             >

// //                             </p>
// //                         )
// //                     }
// //                 )}
// //             </div>
// //         </div>
// //         </>
// //     )
// // }

// // export default DropDown;

// // import React, { useState, FC, createContext } from 'react'

// // interface WheelContextState {
// //     wheel: number;
// //     changeWheel: () => void;
// // }

// // const WheelContextDefaultValues: WheelContextState = {
// //     wheel: 622,
// //     changeWheel: () => {},
// // }

// // export const WheelContext = createContext<WheelContextState>(WheelContextDefaultValues)

// // const WheelProvider: FC = ({ children }) => {
// //     const [wheel, setWheel] = useState<number>(WheelContextDefaultValues.wheel)

// //     const changeWheel = () => setWheel()

// //     return (
// //         <WheelContext.Provider
// //             value={{
// //                 wheel,
// //                 changeWheel,
// //             }}
// //         >
// //             {children}
// //         </WheelContext.Provider>
// //     )
// // }

// // export default WheelProvider;