import PropTypes from "prop-types";

Button.propTypes = {
    type:PropTypes.oneOf(["button","submit","reset"]),
    className:PropTypes.string,
    variant:PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: PropTypes.bool,
    children:PropTypes.node,
}

export default function Button({
    className = '',
    variant = 'primary',
    disabled,
    processing,
    children,
    ...props }) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl w-full py-[13px] text-center ${processing && "opacity-30"} btn-${variant}` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}