function Button({label, type= "button", disabled = false }) {
    return(
        <button type={type}
        disabled={disabled}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disable:opacity-50"
        >
            {label}
        </button>
    )
}

export default Button;