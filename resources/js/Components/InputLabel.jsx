export default function InputLabel({ forInput,value, className = '', children, ...props }) {
    return (
        <label htmlFor={forInput} {...props} className={`block mb-2 text-base ` + className}>
            {value ? value : children}
        </label>
    );
}
