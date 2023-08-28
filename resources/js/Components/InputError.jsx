export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'ring ring-red-600' + className}>
            {message}
        </p>
    ) : null;
}
