import '../assets/styles/section_container.css'

const SectionContainer = ({children, className, ...props}) => {
    return (
        <div 
        className={`section_container ${className?className:''}`}
        {...props}
        >
            {children}
        </div>
    )
}

export default SectionContainer;