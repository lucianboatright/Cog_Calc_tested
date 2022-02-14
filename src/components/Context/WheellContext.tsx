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



// import React from "react";

// interface SelectContext {
//   select: (name: string) => void;
// }
// const WheelContext = React.createContext<SelectContext>({ select: () => {} });

// WheelContext.displayName = "SelectContext";

// const useSelectState = () => {
//   const context = React.useContext(WheelContext);
//   if (!context) throw new Error("MUST BE WITHIN");

//   return context;
// };

// const Select: React.FC<{ onChange: (value: string) => void }> = ({
//   children,
//   onChange
// }) => {
//   const [selected, setSelected] = React.useState<string>("");
//   const [show, setShow] = React.useState<boolean>(false);

//   const select = (value: string) => {
//     setSelected(value);
//     setShow(false);
//   };

//   const toggle = () => {
//     setShow(!show);
//   };

//   React.useEffect(() => {
//     onChange(selected);
//   }, [selected, onChange]);

//   return (
//     <div className="wrapper-select">
//       <div className="input-div">
//         {<div onClick={toggle}>{selected || "Select"} </div>}
//       </div>

//       <WheelContext.Provider value={{ select }}>
//         {show && (
//           <ul className="list-wrapper">
//             {React.Children.map(children, (child) => {
//               return <li className="list-item">{child}</li>;
//             })}
//           </ul>
//         )}
//       </WheelContext.Provider>
//     </div>
//   );
// };

// const Option: React.FC<{ value: string }> = ({ children, value }) => {
//   const { select } = useSelectState();
//   return <span onClick={() => select(value)}>{children}</span>;
// };

// const runAll = (functionList: (Function | undefined)[]) => {
//   return (props: any) => {
//     functionList.forEach((fn) => {
//       if (fn) {
//         fn(props);
//       }
//     });
//   };
// };

// interface PropsUseSelect {
//   onChange?: (value: string) => any;
// }

// const useSelect = () => {
//   const [value, setValue] = React.useState("");

//   const handleChange = (value: string) => {
//     setValue(value);
//   };

//   const getSelectProps = ({ onChange, ...props }: PropsUseSelect) => {
//     return {
//       onChange: runAll([handleChange, props && onChange]),
//       value,
//       ...props
//     };
//   };

//   // selectProps == prop getter
//   return {
//     value,
//     handleChange,
//     getSelectProps
//   };
// };

// export default Select;









// type DropDownProps = {
//     wheelSizes: string[];
//     wheelDropDown: boolean;
//     toggleDropDown: Function;
//     wheelSelection: Function;
// };

// const DropDown: React.FC<DropDownProps> = ({
//     wheelSizes,
//     wheelSelection,
// }: DropDownProps) : JSX.Element => {
//     const [wheelDropDown, setWheelDropDown] = useState<boolean>(false)

//     const onClickHandeler = (city: string): void => {
//         wheelSelection(wheelSizes);
//     };

//     useEffect(() => {
//         setWheelDropDown(wheelDropDown);
//     }, [wheelDropDown]);

//     return (
//         <>
//         <div>
//             <div>Wheel Selector</div>
//             <div className={wheelDropDown ? 'dropdown' : 'dropdown active'} >
//                 {wheelSizes.map(
//                     (wheel: string, index: number): JSX.Element => {
//                         return (
//                             <p
//                                 key={index}
//                                 onClick={(): void => {
//                                     onClickHandeler(wheel);
//                                 }}
//                             >

//                             </p>
//                         )
//                     }
//                 )}
//             </div>
//         </div>
//         </>
//     )
// }

// export default DropDown;

// import React, { useState, FC, createContext } from 'react'

// interface WheelContextState {
//     wheel: number;
//     changeWheel: () => void;
// }

// const WheelContextDefaultValues: WheelContextState = {
//     wheel: 622,
//     changeWheel: () => {},
// }

// export const WheelContext = createContext<WheelContextState>(WheelContextDefaultValues)

// const WheelProvider: FC = ({ children }) => {
//     const [wheel, setWheel] = useState<number>(WheelContextDefaultValues.wheel)

//     const changeWheel = () => setWheel()

//     return (
//         <WheelContext.Provider
//             value={{
//                 wheel,
//                 changeWheel,
//             }}
//         >
//             {children}
//         </WheelContext.Provider>
//     )
// }

// export default WheelProvider;