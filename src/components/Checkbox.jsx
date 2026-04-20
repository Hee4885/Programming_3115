export default function Checkbox(props) {
    const { children, id, ...rest } = props;

    // {...rest} s는 props에서 children과 id를 제외한 나머지 props를 의미함
    /*
        {
            children: "할일 텍스트",  // → children 변수로
            id: 1234,                 // → id 변수로
            checked: true,            // → rest 에 담김
            onChange: () => {...}     // → rest 에 담김
        }
    */
    return (
        <>
            <input type="checkbox" id={`chk-${id}`} className='todo__check' {...rest} />
            <label htmlFor={`chk-${id}`} className='todo__label'>{children}</label>
        </>
    )
}


// export default function Checkbox() {
//     return (
//         <input type="checkbox" id="chk-1" className='todo__check' />,
//         <label htmlFor="chk-1" className='todo__label'>놀기</label>
//     )
// }