function Button(props) {        // 부모 컴포넌트에서 넘겨주는 속성들(className, type, children)
    // console.log(props);      // children은 텍스트영역에 빼고, 나머지는 그대로 속성을 넣자

    // type, classname 이 rest임
    const {children, ...rest} = props;

    return(
        <button {...rest}>{children}</button>
    )
}
export default Button;