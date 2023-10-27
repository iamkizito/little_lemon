import '../assets/styles/main.css'

const Main = ({children, className, id, ...props}) => {
    return (
        <main 
        id = {id?id:''}
        className={`${className?className:''}`}
        {...props}
        >
            {children}
        </main>
    )
}

export default Main;