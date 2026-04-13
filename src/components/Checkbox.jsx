export default function Checkbox(props) {
    const { children, id, ...rest } = props;

    return (
        <>
            <input type="checkbox" id={`chk-${id}`} className='todo__check' />
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