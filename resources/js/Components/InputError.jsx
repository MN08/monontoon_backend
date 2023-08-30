export default function InputError({ message, className = '', ...props }) {
    return message ? (
        // <p {...props} className={'ring ring-red-600' + className}>
        <p {...props} className={'p-1 text-sm text-red-300 dark:text-red-400' + className}>
            {message}
        </p>
    ) : null;
}
