import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import InputError from './InputError';

forwardRef.propTypes ={
    type: PropTypes.oneOf(['text','email','password','number','file']),
    name: PropTypes.string,
    value:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    defaultValue:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    className:PropTypes.string,
    variant: PropTypes.oneOf(['primary','error','primary-outline']),
    autoComplete:PropTypes.string,
    required:PropTypes.bool,
    isFocused:PropTypes.bool,
    handleChange:PropTypes.func,
    placeholder:PropTypes.string,
    isError:PropTypes.bool,

}

export default forwardRef(function TextInput({
    type = 'text',
    name,
    value,
    defaultValue,
    variant = "primary",
    autoComplete,
    required,
    isFocused = false,
    handleChange,
    placeholder,
    className = '',
    isError,
    ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            name={name}
            value={value}
            defaultValue={defaultValue}
            className={`rounded-2xl py-[13px] px-7 w-full input-${variant} ${isError && InputError}` + className}
            ref={input}
            autoComplete={autoComplete}
            required={required}
            onChange={(e)=>handleChange(e)}
            placeholder={placeholder}
        />
    );
});
