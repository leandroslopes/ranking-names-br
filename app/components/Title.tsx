interface TitleProps {
    title: string
}

export default function Title(props : TitleProps){
    return(
        <div className={`
            flex justify-center items-center p-2 text-4xl
        `}>
            <h1>{ props.title }</h1>
        </div>
    )
}