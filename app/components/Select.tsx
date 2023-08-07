interface SelectProps {
    name: string
}

export function Select(props : SelectProps){
    return(
        <div className={`
            flex
        `}>
            <select 
                name={ props.name } 
                id={ props.name }
                className={`
                    form-select w-full
                `}
            >
                <option value="test">TEST</option>
            </select>
        </div>
    )
}